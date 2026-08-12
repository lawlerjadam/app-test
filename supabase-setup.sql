-- ─── FELT STUDIO — SUPABASE SETUP ───────────────────────────────────────────
-- Run this entire script once in the Supabase SQL Editor (Database → SQL Editor → New query)

-- 1. PROFILES TABLE
-- Stores name + role for each FELT team member
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  name text,
  role text not null default 'member' check (role in ('admin', 'member', 'viewer')),
  created_at timestamptz default now()
);

-- 2. ORG DATA TABLE
-- Single shared row holding the entire app store as JSON
create table if not exists public.org_data (
  id integer primary key default 1,
  data jsonb not null default '{}',
  updated_at timestamptz default now(),
  constraint single_row check (id = 1)
);

-- Seed the row (safe to run multiple times)
insert into public.org_data (id, data)
values (1, '{}')
on conflict (id) do nothing;

-- 3. ROW LEVEL SECURITY
alter table public.profiles enable row level security;
alter table public.org_data enable row level security;

-- Profiles: each user can read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Profiles: admins can read all profiles
create policy "Admins can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );

-- Profiles: admins can update any profile (e.g. change someone's role)
create policy "Admins can update all profiles"
  on public.profiles for update
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );

-- Org data: any authenticated user can read
create policy "Authenticated users can read org data"
  on public.org_data for select
  using (auth.role() = 'authenticated');

-- Security definer function for write check (avoids RLS recursion on profiles)
create or replace function public.can_write_org_data()
returns boolean as $$
  select exists(
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'member')
  );
$$ language sql security definer stable;

-- Org data: admins and members can write; viewers cannot
create policy "Members and admins can write org data"
  on public.org_data for all
  using (public.can_write_org_data())
  with check (public.can_write_org_data());

-- 4. AUTO-CREATE PROFILE ON SIGNUP
-- First user to sign up automatically becomes admin
-- All subsequent users become members (admin can change this)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    case when (select count(*) from public.profiles) = 0 then 'admin' else 'member' end
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Done. You can verify with:
-- select * from public.profiles;
-- select id, updated_at from public.org_data;
