-- ─── FELT STUDIO — FIX ORG DATA WRITE POLICY ────────────────────────────────
-- The original write policy for org_data referenced the profiles table,
-- which triggered RLS recursion and silently blocked all writes.
-- This replaces it with a security definer function that bypasses RLS.
--
-- Run this in: Supabase → Database → SQL Editor → New query

-- 1. Drop the broken policy
drop policy if exists "Members and admins can write org data" on public.org_data;

-- 2. Create a security definer function to check write permission
--    (security definer runs as the DB owner, bypassing RLS on profiles)
create or replace function public.can_write_org_data()
returns boolean as $$
  select exists(
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'member')
  );
$$ language sql security definer stable;

-- 3. Recreate the policy using the function
create policy "Members and admins can write org data"
  on public.org_data for all
  using (public.can_write_org_data())
  with check (public.can_write_org_data());

-- ✓ Done. Test by trying to save something in the app.
-- You should no longer see "Save failed" toasts.
