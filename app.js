// ─── PROJECT COLOURS ─────────────────────────────────────────────────────────
const PROJECT_COLORS = ['#E8C832','#D4A010','#C8881E','#B86030','#A04828','#8A3820','#F0D458','#D49820','#C87038','#9A5030','#7A3018','#F5E080'];

// ─── FEELING OF THE DAY ───────────────────────────────────────────────────────
const FEELINGS = [
  { word: 'Sonder', origin: 'The Dictionary of Obscure Sorrows', description: 'The realisation that each passerby has a life as vivid and complex as your own.' },
  { word: 'Hiraeth', origin: 'Welsh', description: 'A homesickness for somewhere you can\'t return to, or perhaps never was.' },
  { word: 'Forelsket', origin: 'Norwegian', description: 'The euphoria felt when falling in love for the first time.' },
  { word: 'Fernweh', origin: 'German', description: 'An ache for distant places; the craving to travel somewhere far away.' },
  { word: 'Sehnsucht', origin: 'German', description: 'A deep, bittersweet longing for something beautiful just out of reach.' },
  { word: 'Toska', origin: 'Russian', description: 'A dull ache of the soul — a longing with nothing to long for.' },
  { word: 'Meraki', origin: 'Greek', description: 'To put a piece of your soul into what you\'re doing; to do something with love.' },
  { word: 'Mudita', origin: 'Sanskrit', description: 'Pure joy at the happiness and good fortune of others.' },
  { word: 'Vorfreude', origin: 'German', description: 'The joyful, shivery anticipation of something wonderful yet to come.' },
  { word: 'Ikigai', origin: 'Japanese', description: 'A reason for being — the thing that makes you leap out of bed in the morning.' },
  { word: 'Mono no aware', origin: 'Japanese', description: 'A gentle sadness at the passing of things, and the beauty in impermanence.' },
  { word: 'Schadenfreude', origin: 'German', description: 'A small, guilty pleasure found in the misfortunes of others.' },
  { word: 'Querencia', origin: 'Spanish', description: 'A place from which one\'s strength is drawn — where you feel most yourself.' },
  { word: 'Hygge', origin: 'Danish', description: 'A quality of warmth and cosiness; the art of creating connection and comfort.' },
  { word: 'Mamihlapinatapai', origin: 'Yaghan', description: 'A look shared between two people, each wishing the other would start.' },
  { word: 'Dépaysement', origin: 'French', description: 'The disorientating thrill of being a stranger — somewhere you don\'t belong.' },
  { word: 'Chrysalism', origin: 'The Dictionary of Obscure Sorrows', description: 'The tranquil, amniotic calm of being indoors during a thunderstorm.' },
  { word: 'Vellichor', origin: 'The Dictionary of Obscure Sorrows', description: 'The strange wistfulness of used bookshops, as if they contain whole other lives.' },
  { word: 'Jouska', origin: 'The Dictionary of Obscure Sorrows', description: 'A hypothetical conversation you compulsively play out in your head.' },
  { word: 'Liberosis', origin: 'The Dictionary of Obscure Sorrows', description: 'The desire to care less about things — to loosen your grip on life.' },
  { word: 'Mauerbauertraurigkeit', origin: 'German', description: 'The inexplicable urge to push people away, even those you love.' },
  { word: 'Occhiolism', origin: 'The Dictionary of Obscure Sorrows', description: 'The awareness of how small your perspective is — and finding peace in it.' },
  { word: 'Ambedo', origin: 'The Dictionary of Obscure Sorrows', description: 'A trance where you become lost in a single sensory detail — rain on a window, a flickering light.' },
  { word: 'Frisson', origin: 'French', description: 'A sudden shiver of excitement or emotion — goosebumps from beauty.' },
  { word: 'Weltschmerz', origin: 'German', description: 'A weariness about the world — the pain of comparing reality with what it could be.' },
  { word: 'Resfeber', origin: 'Swedish', description: 'The restless mix of fear and excitement before a journey begins.' },
  { word: 'Cafuné', origin: 'Brazilian Portuguese', description: 'Tenderly running your fingers through someone\'s hair.' },
  { word: 'Wabi-Sabi', origin: 'Japanese', description: 'The bittersweet beauty found in imperfection, impermanence, and incompleteness.' },
  { word: 'Torschlusspanik', origin: 'German', description: 'The panic of doors closing — the fear that time is running out.' },
  { word: 'Pålegg', origin: 'Norwegian', description: 'Anything and everything you might put on a piece of bread — and the contentment in simplicity.' },
];

function openFeelingOfDay(random) {
  let feeling;
  if (random) {
    feeling = FEELINGS[Math.floor(Math.random() * FEELINGS.length)];
  } else {
    const day = new Date().toDateString();
    let hash = 0;
    for (let c of day) hash = (hash * 31 + c.charCodeAt(0)) % FEELINGS.length;
    feeling = FEELINGS[Math.abs(hash)];
  }
  document.getElementById('feeling-word').textContent = feeling.word;
  document.getElementById('feeling-origin').textContent = feeling.origin;
  document.getElementById('feeling-desc').textContent = feeling.description;
  document.getElementById('feeling-overlay').style.display = 'flex';
}

function closeFeelingOverlay() {
  document.getElementById('feeling-overlay').style.display = 'none';
}

// ─── FUTURE FEELS ─────────────────────────────────────────────────────────────
const FUTURE_FEELS = [
  {type:'lead',label:'Cold Lead',company:'Roots Canada',detail:'Their seasonal campaigns lean heavily on nostalgia and Canadian identity. A brand activation in-store or at a cultural event would feel completely natural.',action:'Look up their marketing director on LinkedIn'},
  {type:'lead',label:'Cold Lead',company:'Cirque du Soleil',detail:'They commission original experience design from independent studios. FELT\'s mix of AV, spatial storytelling and original IP is exactly their language.',action:'Research their creative partnerships team'},
  {type:'lead',label:'Cold Lead',company:'Air Canada',detail:'Their Maple Leaf Lounge rebrand is a multi-year project. Premium experiential moments and spatial identity are where FELT could add real value.',action:'Reach out to their brand team'},
  {type:'lead',label:'Cold Lead',company:'National Ballet of Canada',detail:'Arts and brand partnership is growing fast. Think immersive pre-show experiences or bespoke donor events — produced with a creative lens.',action:'Find their development director'},
  {type:'lead',label:'Cold Lead',company:'Ace Hotel Toronto',detail:'They program creative residencies and cultural events in their spaces. FELT could pitch a recurring event series or an in-lobby installation.',action:'Reach out to their GM or programming lead'},
  {type:'idea',label:'Creative Project',title:'Winter Light Walk',detail:'A self-guided outdoor light installation tour across a Canadian city — FELT-curated, partnered with local artists. Ticketed or free-to-attend.',action:'Draft a one-pager and rough budget'},
  {type:'idea',label:'Creative Project',title:'The Last Shift',detail:'A short documentary following workers in a single Canadian industry. Gritty, cinematic original IP — made for film festivals and digital release.',action:'Sketch a one-page treatment'},
  {type:'idea',label:'Creative Project',title:'Saison',detail:'A seasonal supper series — different chef, different city, same FELT concept. We handle everything from set design to the moment the last guest leaves.',action:'Concept the first edition'},
  {type:'idea',label:'Creative Project',title:'Open Studio',detail:'One day a year, FELT opens its process to the public — mood boards, half-built prototypes, works in progress. Build mystique by being briefly transparent.',action:'Pick a date and draft the format'},
  {type:'outreach',label:'Reach Out',company:'Aldo Group',detail:'Their younger sub-brands are investing in experiential retail. A pop-up concept or sensory store moment would be a strong first pitch.',action:'Draft a short cold intro email'},
  {type:'outreach',label:'Reach Out',company:'Hotel Arts Group',detail:'Independent Canadian luxury hotels are investing in cultural programming. FELT could pitch a residency or a recurring seasonal event series.',action:'Email their general manager'},
  {type:'outreach',label:'Reach Out',company:'Cossette',detail:'One of Canada\'s biggest independent agencies — but they regularly sub out specialist production. Position FELT as their boutique execution partner.',action:'Look up their head of production'},
];

const LADYBIRD_SVG_SM = '<svg width="18" height="20" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round" style="display:block"><line x1="21" y1="9" x2="18" y2="4" stroke-width="2.5"/><line x1="27" y1="9" x2="30" y2="4" stroke-width="2.5"/><ellipse cx="24" cy="28" rx="14" ry="16" stroke-width="2.5"/><line x1="24" y1="12" x2="24" y2="44" stroke-width="2.5"/><ellipse cx="24" cy="16" rx="8" ry="5" stroke-width="2.5"/><circle cx="17.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="34" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="34" r="2.5" fill="currentColor" stroke="none"/></svg>';
const LADYBIRD_SVG_MD = '<svg width="24" height="27" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round" style="display:block"><line x1="21" y1="9" x2="18" y2="4" stroke-width="2"/><line x1="27" y1="9" x2="30" y2="4" stroke-width="2"/><ellipse cx="24" cy="28" rx="14" ry="16" stroke-width="2"/><line x1="24" y1="12" x2="24" y2="44" stroke-width="2"/><ellipse cx="24" cy="16" rx="8" ry="5" stroke-width="2"/><circle cx="17.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="34" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="34" r="2.5" fill="currentColor" stroke="none"/></svg>';
const LADYBIRD_SVG_LG = '<svg width="40" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round" style="display:block"><line x1="21" y1="9" x2="18" y2="4" stroke-width="1.5"/><line x1="27" y1="9" x2="30" y2="4" stroke-width="1.5"/><ellipse cx="24" cy="28" rx="14" ry="16" stroke-width="1.5"/><line x1="24" y1="12" x2="24" y2="44" stroke-width="1.5"/><ellipse cx="24" cy="16" rx="8" ry="5" stroke-width="1.5"/><circle cx="17.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="34" r="2.5" fill="currentColor" stroke="none"/><circle cx="30.5" cy="34" r="2.5" fill="currentColor" stroke="none"/></svg>';

let ffHistory = [], ffHistoryIdx = -1;

function openFutureFeels() {
  // Pick random, avoiding the one currently showing
  const current = ffHistory[ffHistoryIdx];
  const pool = FUTURE_FEELS.filter(f => f !== current);
  const f = pool[Math.floor(Math.random() * pool.length)];
  // Truncate any forward history then push
  ffHistory = ffHistory.slice(0, ffHistoryIdx + 1);
  ffHistory.push(f);
  ffHistoryIdx = ffHistory.length - 1;
  showFeel(f);
}

function goBackFutureFeels() {
  if (ffHistoryIdx > 0) { ffHistoryIdx--; showFeel(ffHistory[ffHistoryIdx]); }
}

function showFeel(f) {
  const palette = {
    lead:    {bg:'var(--blue-light)',  color:'var(--blue)'},
    idea:    {bg:'var(--purple-light)',color:'var(--purple)'},
    outreach:{bg:'var(--green-light)', color:'var(--green)'}
  };
  const p = palette[f.type];
  const badge = document.getElementById('ff-badge');
  badge.textContent = f.label;
  badge.style.background = p.bg;
  badge.style.color = p.color;
  document.getElementById('ff-title').textContent = f.company || f.title;
  document.getElementById('ff-detail').textContent = f.detail;
  document.getElementById('ff-action').textContent = f.action;
  const back = document.getElementById('ff-back');
  if (back) back.style.display = ffHistoryIdx > 0 ? '' : 'none';
  document.getElementById('ff-overlay').style.display = 'flex';
}

function closeFutureFeels() {
  document.getElementById('ff-overlay').style.display = 'none';
}

// ─── SIGN-OFF STEPS ───────────────────────────────────────────────────────────
const SIGNOFF_STEPS = [
  { id: 'brief',        label: 'Brief signed off' },
  { id: 'budget',       label: 'Budget approved' },
  { id: 'timeline',     label: 'Timeline confirmed' },
  { id: 'team',         label: 'Internal team confirmed' },
  { id: 'fabricators',  label: 'Fabricators confirmed' },
  { id: 'contracts',    label: 'Contracts sent' },
  { id: 'fab-timeline', label: 'Fabricator timeline confirmed' },
  { id: 'creative',     label: 'Creative sign off' },
  { id: 'pre-prod',     label: 'Pre-Production' },
  { id: 'prod-ready',   label: 'Production ready' },
  { id: 'delivered',    label: 'Live / delivered' },
  { id: 'invoice',      label: 'Invoice sent' },
  { id: 'closed',       label: 'Closed' },
];

function emptySignoff() {
  const s = {};
  SIGNOFF_STEPS.forEach(step => { s[step.id] = { completed: false, completedBy: '', completedAt: '' }; });
  return s;
}

function emptyProduction() {
  return { shootDays: [], suppliers: [], equipment: [], keyContacts: [], callSheetNotes: '' };
}

// ─── DEFAULT DATA (X-prefixed example data — safe to delete) ──────────────────
const defaultData = {
  projects:[
    {id:1,name:'XWinterfest Activation',client:'XNorthern Spirits Co.',clientId:1,status:'active',type:'Brand Activation',color:'#E8C832',startDate:'2026-11-01',endDate:'2026-12-20',budget:0,spent:0,
      brief:{overview:'Example project — edit or delete to get started. A multi-sensory winter brand activation at Harbourfront Centre.',objectives:'Drive brand warmth and community connection. Target 18,000 visitors over a 7-week run.',deliverables:'Custom installation, branded warming stations, LED content wall, staff uniforms, printed signage.',timeline:'Build: Nov 1–14. Soft open: Nov 15. Public opening: Nov 22. Run through Dec 20.'},
      teamIds:[1,2],contactIds:[1],teamAllocation:{1:15,2:10},expenses:[],
      budgetLines:[
        {id:1,category:'Fabrication',forecast:28000,actuals:0},
        {id:2,category:'Furniture & Décor',forecast:8500,actuals:0},
        {id:3,category:'AV + Content Tech',forecast:15000,actuals:0},
        {id:4,category:'Team',forecast:18000,actuals:0},
        {id:5,category:'Uniforms & Materials',forecast:3200,actuals:0},
        {id:6,category:'Print Collateral',forecast:2800,actuals:0},
        {id:7,category:'Production Misc.',forecast:4500,actuals:0},
        {id:8,category:'Other',forecast:2000,actuals:0}
      ],
      invoices:[
        {id:1,supplier:'XNorthern Build Co.',description:'Ice structure & scenic fabrication',category:'Fabrication',amount:26400,date:'2026-11-05',status:'paid',notes:''},
        {id:2,supplier:'XSignal AV',description:'LED wall & sound system install',category:'AV + Content Tech',amount:12500,date:'2026-12-01',status:'pending',notes:''}
      ],
      signoff:emptySignoff(),
      production:{
        shootDays:[],
        suppliers:[
          {id:1,globalSupplierId:1,company:'XNorthern Build Co.',contact:'XDan Clarke',category:'Fabrication',status:'confirmed',notes:'Lead fabricator.'},
          {id:2,globalSupplierId:2,company:'XSignal AV',contact:'XKeiko Tanaka',category:'AV + Content Tech',status:'confirmed',notes:'LED wall + spatial audio.'}
        ],
        equipment:[],keyContacts:[],callSheetNotes:''
      },
      tasks:[
        {id:1,name:'Kickoff',category:'Production',startDate:'',dueDate:'',status:'not-started',assignedTo:''},
        {id:2,name:'Concept',category:'Creative',startDate:'',dueDate:'',status:'not-started',assignedTo:''},
        {id:3,name:'Client Approval',category:'Client',startDate:'',dueDate:'',status:'not-started',assignedTo:''},
        {id:4,name:'Production',category:'Production',startDate:'2026-11-01',dueDate:'2026-11-14',status:'not-started',assignedTo:''},
        {id:5,name:'Install',category:'Production',startDate:'',dueDate:'2026-11-22',status:'not-started',assignedTo:''},
        {id:6,name:'Wrap',category:'Production',startDate:'',dueDate:'2026-12-20',status:'not-started',assignedTo:''}
      ],
      assets:{driveFolder:'',files:[]}
    }
  ],
  leads:[
    {id:1,company:'XCanada Goose',contactName:'XSasha Reeves',contactEmail:'xsasha@example.com',projectType:'Brand Activation',estimatedValue:42000,status:'proposal-sent',notes:'Example lead — edit or delete to get started.',contactRole:'Brand Partnerships',contactPhone:'',convertedProjectId:null}
  ],
  team:[
    {id:1,name:'XMaya Chen',role:'Executive Producer',email:'xmaya@example.com',rate:800,skills:['Executive Production','Budget Management','Client Relations'],availability:'available',availableFrom:'',contractStatus:'signed',ir35:'outside',paymentTerms:'30',notes:'Example team member — edit or delete to get started.',payments:[],driveFolder:'',contracts:[]},
    {id:2,name:'XJordan Park',role:'Creative Director',email:'xjordan@example.com',rate:750,skills:['Art Direction','Spatial Design','Concepting'],availability:'available',availableFrom:'',contractStatus:'signed',ir35:'outside',paymentTerms:'30',notes:'Example team member — edit or delete to get started.',payments:[],driveFolder:'',contracts:[]}
  ],
  companies:[
    {id:1,name:'XNorthern Spirits Co.',industry:'Spirits',notes:'Example client — edit or delete to get started.',payments:[
      {id:1,description:'XProject Deposit — 50%',projectId:1,amount:41000,date:'2026-10-01',status:'paid'}
    ]}
  ],
  contacts:[
    {id:1,companyId:1,name:'XSarah Vance',email:'xsarah@example.com',phone:'(416) 555-0100',role:'Brand Marketing Lead'}
  ],
  ideas:[
    {id:1,title:'XThe Quiet Hour',category:'Event',description:'Example idea — a monthly city-wide moment of intentional sound. Edit or delete to get started.',submittedBy:'XMaya Chen',date:'2026-10-15'}
  ],
  contractTemplates:[
    {id:1,name:'Standard Freelancer Agreement',url:'',description:'Day-rate freelancers, independent contractor'}
  ],
  globalSuppliers:[
    {id:1,company:'XNorthern Build Co.',category:'Fabrication',contactName:'XDan Clarke',contactEmail:'xdan@example.ca',contactPhone:'(416) 555-0401',website:'',notes:'Example vendor — edit or delete to get started.'},
    {id:2,company:'XSignal AV',category:'AV + Content Tech',contactName:'XKeiko Tanaka',contactEmail:'xkeiko@example.ca',contactPhone:'(416) 555-0402',website:'',notes:'Example vendor — edit or delete to get started.'}
  ],
  feedback:[],
  nextId:{projects:2,team:3,companies:2,contacts:2,leads:2,expenses:1,ideas:2,shootDays:1,suppliers:3,equipment:1,payments:2,keyContacts:1,contracts:1,templates:2,tasks:7,assets:1,globalSuppliers:3,invoices:3,clientPayments:2,feedback:1}
};

// ─── SUPABASE ─────────────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://qyxbjtbipdpevzecbhkd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uH-o_KQ6Cv0jeut76bgXRA_bvePXaEM';
const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let currentUserRole = 'member';
let currentUserName = '';

let store = {};

async function loadFromSupabase() {
  const { data, error } = await _sb.rpc('load_org_data');
  if (error) {
    console.error('Load failed:', error);
    return JSON.parse(JSON.stringify(defaultData));
  }
  if (!data || Object.keys(data).length === 0) {
    console.log('No data in Supabase yet, using defaults');
    return JSON.parse(JSON.stringify(defaultData));
  }
  console.log('Loaded from Supabase OK');
  return data;
}

async function save() {
  if (!currentUser) return;
  const { error } = await _sb.rpc('save_org_data', { p_data: store });
  if (error) {
    console.error('Save failed:', error);
    toast('⚠ Save failed — check your connection');
  }
}

// ─── MIGRATIONS ───────────────────────────────────────────────────────────────
function runMigrations() {
// Ensure nextId has all keys
if (!store.nextId.keyContacts) store.nextId.keyContacts = 10;
if (!store.nextId.contracts) store.nextId.contracts = 10;
if (!store.nextId.templates) store.nextId.templates = 5;
if (!store.nextId.tasks) store.nextId.tasks = 20;
if (!store.nextId.assets) store.nextId.assets = 5;
if (!store.nextId.globalSuppliers) store.nextId.globalSuppliers = 10;
if (!store.nextId.clientPayments) store.nextId.clientPayments = 1;
if (!store.nextId.companies) store.nextId.companies = 1;
if (!store.contractTemplates) store.contractTemplates = [{id:1,name:'Standard Freelancer Agreement',url:'',description:'Day-rate freelancers, outside IR35'}];
if (!store.globalSuppliers) store.globalSuppliers = [];
if (!store.feedback) store.feedback = [];
if (!store.nextId.feedback) store.nextId.feedback = 1;

// ─── MIGRATION: Companies model ───────────────────────────────────────────────
if (!store.companies) {
  store.companies = [];
  const nameToCompId = {};
  store.contacts.forEach(c => {
    const key = (c.company||'').trim().toLowerCase();
    const displayName = c.company || c.name;
    if (key && !nameToCompId[key]) {
      const cid = store.nextId.companies++;
      nameToCompId[key] = cid;
      store.companies.push({id:cid, name:displayName, industry:'', notes:'', payments: c.payments||[]});
    } else if (key && nameToCompId[key]) {
      const comp = store.companies.find(co=>co.id===nameToCompId[key]);
      if (comp) comp.payments = [...(comp.payments||[]), ...(c.payments||[])];
    } else {
      const cid = store.nextId.companies++;
      nameToCompId['_person_'+c.id] = cid;
      store.companies.push({id:cid, name:c.name, industry:'', notes:'', payments: c.payments||[]});
    }
    c.companyId = key ? nameToCompId[key] : nameToCompId['_person_'+c.id];
  });
  store.projects.forEach(p => {
    if (p.clientId === undefined) {
      if (p.client) {
        const key = p.client.trim().toLowerCase();
        if (nameToCompId[key]) { p.clientId = nameToCompId[key]; }
        else { const cid=store.nextId.companies++; store.companies.push({id:cid,name:p.client,industry:'',notes:'',payments:[]}); nameToCompId[key]=cid; p.clientId=cid; }
      } else { p.clientId = null; }
    }
  });
}
store.contacts.forEach(c => { if (c.companyId === undefined) c.companyId = null; if (c.payments) delete c.payments; });
store.companies.forEach(co => { if (!co.payments) co.payments = []; });
store.leads.forEach(l => { if (!l.contactRole) l.contactRole = ''; if (!l.contactPhone) l.contactPhone = ''; if (l.convertedProjectId === undefined) l.convertedProjectId = null; });
store.projects.forEach(p => { if (p.budgetTarget === undefined) p.budgetTarget = null; if (p.leadId === undefined) p.leadId = null; });

// Migration: ensure all projects have signoff + production + color
store.projects.forEach((p,i) => {
  if (!p.signoff) p.signoff = emptySignoff();
  if (!p.production) p.production = emptyProduction();
  if (!p.production.keyContacts) p.production.keyContacts = [];
  if (!p.tasks) p.tasks = [];
  if (!p.assets) p.assets = {driveFolder:'', files:[]};
  if (!p.color) p.color = PROJECT_COLORS[i % PROJECT_COLORS.length];
  if (!p.invoices) p.invoices = [];
});
// Migration: ensure all team members have CRM fields
store.team.forEach(m => {
  if (!m.availability) m.availability = 'available';
  if (m.availableFrom === undefined) m.availableFrom = '';
  if (!m.availabilityPeriods) m.availabilityPeriods = [];
  if (!m.contractStatus) m.contractStatus = 'not-sent';
  if (!m.ir35) m.ir35 = 'not-assessed';
  if (!m.paymentTerms) m.paymentTerms = '30';
  if (!m.payments) m.payments = [];
  if (!m.notes) m.notes = '';
  if (!m.driveFolder) m.driveFolder = '';
  if (!m.contracts) m.contracts = [];
});
} // end runMigrations()

// ─── ROUTING ──────────────────────────────────────────────────────────────────
let currentView='dashboard', currentProject=null, currentTab='brief', currentProjectsFilter='active', currentDashFilter='active', currentFinanceFilter='all';
let currentMember=null, currentMemberTab='overview';
let currentContact=null, currentContactTab='overview';
let currentCompany=null;
let convertingLeadId=null;
let highlightLeadId=null;
let calYear=new Date().getFullYear(), calMonth=new Date().getMonth();
let calMobileWeekOffset=0;

let mobileNavTray=null;
const MOBILE_TRAY_SECTIONS={
  studio:[
    {icon:'▦',label:'Projects',view:'projects'},
    {icon:'◫',label:'Calendar',view:'calendar'},
    {icon:'◱',label:'Finance',view:'finance'},
    {icon:'◧',label:'Snapshot',view:'snapshot'}
  ],
  resources:[
    {icon:'◎',label:'Team',view:'team'},
    {icon:'◇',label:'Clients',view:'contacts'},
    {icon:'◧',label:'Vendors',view:'global-suppliers'}
  ],
  future:[
    {icon:'◉',label:'Leads',view:'leads'},
    {icon:'✦',label:'Ideas',view:'ideas'},
    {icon:'◌',label:'Feedback',view:'feedback'},
    {icon:'ladybird',label:'',special:'future-feels'}
  ]
};
function toggleMobileTray(section) {
  if(mobileNavTray===section){closeMobileTray();return;}
  mobileNavTray=section;
  const tray=document.getElementById('mobile-tray');
  const backdrop=document.getElementById('mobile-tray-backdrop');
  const items=MOBILE_TRAY_SECTIONS[section];
  tray.innerHTML=items.map(i=>{
    if(i.special==='future-feels') return `<div class="tray-item" onclick="closeMobileTray();openFutureFeels()" style="opacity:0.6" title="Future Feels"><div class="ti" style="display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7)">${LADYBIRD_SVG_MD}</div></div>`;
    return `<div class="tray-item ${currentView===i.view?'active':''}" onclick="closeMobileTray();navigate('${i.view}')"><div class="ti">${i.icon}</div>${i.label}</div>`;
  }).join('');
  tray.classList.add('open');
  backdrop.classList.add('open');
}
function closeMobileTray() {
  mobileNavTray=null;
  document.getElementById('mobile-tray')?.classList.remove('open');
  document.getElementById('mobile-tray-backdrop')?.classList.remove('open');
}

function goToFinanceSource(type, id) {
  if (type === 'invoice') {
    currentProject = store.projects.find(p => p.id === id);
    currentTab = 'invoices';
    currentView = 'project-detail';
    document.getElementById('main').scrollTo(0,0);
    render();
  } else if (type === 'team') {
    currentMember = store.team.find(m => m.id === id);
    currentMemberTab = 'payments';
    currentView = 'team-profile';
    document.getElementById('main').scrollTo(0,0);
    render();
  } else if (type === 'client') {
    currentCompany = store.companies.find(c => c.id === id);
    currentView = 'contact-profile';
    document.getElementById('main').scrollTo(0,0);
    render();
  }
}
function navigateToLead(id) {
  highlightLeadId=id;
  navigate('leads');
  setTimeout(()=>{const el=document.getElementById('lead-row-'+id);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});}},80);
  setTimeout(()=>{highlightLeadId=null;},2000);
}
function navigateToCompany(companyId) {
  currentCompany=store.companies.find(c=>c.id===companyId);
  navigate('contact-profile');
}
function navigateToContact(contactId) {
  const person=store.contacts.find(c=>c.id===contactId);
  if(person&&person.companyId) navigateToCompany(person.companyId);
  else navigate('contacts');
}
function navigate(view, projectId, memberId) {
  currentView=view;
  if(projectId!==undefined){currentProject=store.projects.find(p=>p.id===projectId);currentTab='brief';}
  if(memberId!==undefined){currentMember=store.team.find(m=>m.id===memberId);currentMemberTab='overview';}
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.bottom-nav-item').forEach(el=>el.classList.remove('active'));
  const navMap={snapshot:1,dashboard:2,projects:3,calendar:4,finance:5,team:6,contacts:7,'global-suppliers':8,leads:9,ideas:10,feedback:11};
  document.querySelectorAll('.nav-item')[navMap[view]]?.classList.add('active');
  const studioViews=['projects','project-detail','calendar','finance','snapshot'];
  const resourceViews=['team','team-profile','contacts','contact-profile','global-suppliers'];
  const futureViews=['leads','ideas','feedback'];
  const bnItems=document.querySelectorAll('.bottom-nav-item');
  if(studioViews.includes(view)) bnItems[1]?.classList.add('active');
  else if(resourceViews.includes(view)) bnItems[3]?.classList.add('active');
  else if(futureViews.includes(view)) bnItems[4]?.classList.add('active');
  else bnItems[0]?.classList.add('active');
  document.getElementById('main').scrollTo(0,0);
  render();
}

function render() {
  const m=document.getElementById('main');
  if(currentView==='snapshot') m.innerHTML=renderSnapshot();
  else if(currentView==='dashboard') m.innerHTML=renderDashboard();
  else if(currentView==='projects') m.innerHTML=renderProjects();
  else if(currentView==='project-detail') m.innerHTML=renderProjectDetail();
  else if(currentView==='leads') m.innerHTML=renderLeads();
  else if(currentView==='calendar') m.innerHTML=renderCalendar();
  else if(currentView==='ideas') m.innerHTML=renderIdeas();
  else if(currentView==='team') m.innerHTML=renderTeam();
  else if(currentView==='team-profile') m.innerHTML=renderTeamProfile();
  else if(currentView==='contacts') m.innerHTML=renderContacts();
  else if(currentView==='contact-profile') m.innerHTML=renderContactProfile();
  else if(currentView==='global-suppliers') m.innerHTML=renderGlobalVendors();
  else if(currentView==='finance') m.innerHTML=renderFinance();
  else if(currentView==='feedback') m.innerHTML=renderFeedback();
  // Bind callsheet autosave after render
  if(currentTab==='production') {
    const ta=document.getElementById('callsheet-notes');
    if(ta) ta.addEventListener('input',function(){currentProject.production.callSheetNotes=this.value;save();});
  }
}

// ─── SNAPSHOT ─────────────────────────────────────────────────────────────────
function renderSnapshot() {
  const year = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentQ = Math.floor(currentMonth / 3) + 1;

  const quarters = [
    { q:1, label:'Q1', months:'Jan – Mar', start:new Date(year,0,1),  end:new Date(year,2,31)  },
    { q:2, label:'Q2', months:'Apr – Jun', start:new Date(year,3,1),  end:new Date(year,5,30)  },
    { q:3, label:'Q3', months:'Jul – Sep', start:new Date(year,6,1),  end:new Date(year,8,30)  },
    { q:4, label:'Q4', months:'Oct – Dec', start:new Date(year,9,1),  end:new Date(year,11,31) },
  ];

  // Current quarter first, then future quarters, then past
  const sorted = [
    quarters.find(q=>q.q===currentQ),
    ...quarters.filter(q=>q.q>currentQ),
    ...quarters.filter(q=>q.q<currentQ),
  ];

  function projectsInQuarter(q) {
    return store.projects.filter(p => {
      const d = p.endDate ? new Date(p.endDate+'T12:00:00') : (p.startDate ? new Date(p.startDate+'T12:00:00') : null);
      return d && d >= q.start && d <= q.end;
    });
  }

  // Year totals across ALL projects
  const allRev    = store.projects.reduce((s,p)=>s+getBudgetTotals(p).forecast,0);
  const allMark   = store.projects.reduce((s,p)=>s+getBudgetTotals(p).margin,0);
  const allCosts  = store.projects.reduce((s,p)=>s+getBudgetTotals(p).actuals,0);
  const allProfit = allRev - allCosts;

  function renderQ(q) {
    const isCurrent = q.q === currentQ;
    const projects  = projectsInQuarter(q);
    const qRev      = projects.reduce((s,p)=>s+getBudgetTotals(p).forecast,0);
    const qMark     = projects.reduce((s,p)=>s+getBudgetTotals(p).margin,0);
    const qCosts    = projects.reduce((s,p)=>s+getBudgetTotals(p).actuals,0);
    const qProfit   = qRev - qCosts;
    const pct       = qRev>0 ? Math.min(100,Math.round(qCosts/qRev*100)) : 0;

    return `
      <div style="background:var(--surface);border:${isCurrent?'2px solid var(--accent)':'1.5px solid var(--border)'};border-radius:var(--radius);padding:20px 22px;margin-bottom:14px;${isCurrent?'box-shadow:0 4px 20px rgba(240,192,64,0.1)':''}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:${projects.length?'16px':'0'}">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="font-size:17px;font-weight:800;color:var(--navy)">${q.label} ${year}</div>
            ${isCurrent?`<span style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--accent);color:var(--navy);padding:2px 8px;border-radius:20px">Current</span>`:''}
          </div>
          <div style="font-size:12px;color:var(--muted)">${q.months}</div>
        </div>

        ${projects.length===0
          ? `<div style="padding:14px 0 2px;color:var(--muted);font-size:13px">No projects this quarter.</div>`
          : `
            <div style="margin-bottom:16px">
              ${projects.map(p=>`
                <div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:opacity 0.1s" onclick="navigate('project-detail',${p.id})" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
                  <div style="width:9px;height:9px;border-radius:50%;background:${p.color||'var(--blue)'};flex-shrink:0"></div>
                  <div style="flex:1;font-weight:600;font-size:13px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
                  <div style="font-size:12px;color:var(--muted);flex-shrink:0">${p.type}</div>
                  <span class="status-badge badge-${p.status}" style="flex-shrink:0">${p.status}</span>
                  <div style="font-size:13px;font-weight:700;text-align:right;min-width:90px;flex-shrink:0">$${getBudgetTotals(p).forecast.toLocaleString()}</div>
                </div>`).join('')}
            </div>

            <div class="snap-grid-4-sm" style="margin-bottom:${qRev>0?'12px':'0'}">
              <div style="background:var(--bg);border-radius:8px;padding:12px 14px">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:4px">Revenue</div>
                <div style="font-size:17px;font-weight:800;color:var(--navy)">$${Math.round(qRev).toLocaleString()}</div>
              </div>
              <div style="background:var(--bg);border-radius:8px;padding:12px 14px">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:4px">Markup (20%)</div>
                <div style="font-size:17px;font-weight:800;color:var(--green)">$${Math.round(qMark).toLocaleString()}</div>
              </div>
              <div style="background:var(--bg);border-radius:8px;padding:12px 14px">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:4px">Costs</div>
                <div style="font-size:17px;font-weight:800;color:${qCosts>qRev?'var(--red)':'var(--text)'}">$${qCosts.toLocaleString()}</div>
              </div>
              <div style="background:var(--bg);border-radius:8px;padding:12px 14px">
                <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:4px">Profit</div>
                <div style="font-size:17px;font-weight:800;color:${qProfit>=0?'var(--green)':'var(--red)'}">${qProfit<0?'-':''}$${Math.abs(Math.round(qProfit)).toLocaleString()}</div>
              </div>
            </div>

            ${qRev>0?`
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:5px">
                  <span>Costs vs Revenue</span><span style="font-weight:700">${pct}%</span>
                </div>
                <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
                  <div style="height:100%;width:${pct}%;background:${pct>90?'var(--red)':pct>65?'var(--orange)':'var(--green)'};border-radius:3px;transition:width 0.4s"></div>
                </div>
              </div>`:''}`}
      </div>`;
  }

  // Projects with no date — show at bottom
  const undated = store.projects.filter(p=>!p.startDate&&!p.endDate);

  return `
    <div class="topbar">
      <div><div class="page-title">Snapshot</div><div class="page-sub">${year} — Company Overview</div></div>
    </div>
    <div class="content">

      <!-- Year at a glance -->
      <div style="background:var(--navy);border-radius:var(--radius);padding:22px 24px;margin-bottom:22px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.35);margin-bottom:16px;font-weight:700">${year} at a glance · All projects</div>
        <div class="snap-grid-4">
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.4);font-weight:700;margin-bottom:5px">Revenue</div>
            <div style="font-size:24px;font-weight:800;color:#fff">$${Math.round(allRev/1000)}k</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px">client budget</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.4);font-weight:700;margin-bottom:5px">Markup</div>
            <div style="font-size:24px;font-weight:800;color:var(--accent)">$${Math.round(allMark/1000)}k</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px">agency fee (20%)</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.4);font-weight:700;margin-bottom:5px">Costs</div>
            <div style="font-size:24px;font-weight:800;color:#fff">$${Math.round(allCosts/1000)}k</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px">logged expenses</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.4);font-weight:700;margin-bottom:5px">Net Profit</div>
            <div style="font-size:24px;font-weight:800;color:${allProfit>=0?'var(--green-light)':'var(--red-light)'}">$${Math.round(Math.abs(allProfit)/1000)}k</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px">${allProfit>=0?'on track':'over budget'}</div>
          </div>
        </div>
      </div>

      <!-- Monthly Revenue Chart -->
      ${(()=>{
        const now2=new Date();
        const months=[];
        for(let i=3;i>=-2;i--){
          const d=new Date(now2.getFullYear(),now2.getMonth()-i,1);
          const isCurr=i===0;
          months.push({label:d.toLocaleString('en-CA',{month:'short'}),year:d.getFullYear(),month:d.getMonth(),paid:0,pending:0,isCurrent:isCurr,isFuture:i<0});
        }
        store.companies.forEach(co=>{
          (co.payments||[]).forEach(pay=>{
            if(!pay.date)return;
            const d=new Date(pay.date+'T12:00:00');
            const m=months.find(m=>m.year===d.getFullYear()&&m.month===d.getMonth());
            if(!m)return;
            if(pay.status==='paid')m.paid+=(pay.amount||0);
            else m.pending+=(pay.amount||0);
          });
        });
        const maxBar=Math.max(...months.map(m=>m.paid+m.pending),1);
        const totalPaid=months.reduce((s,m)=>s+m.paid,0);
        const totalPending=months.reduce((s,m)=>s+m.pending,0);
        const barW=36,barGap=16,chartH=100,labelH=28,legendH=32;
        const svgW=(barW*2+barGap)*6+(barGap*5)+20;
        const bars=months.map((m,i)=>{
          const x=i*((barW*2+barGap)+barGap)+10;
          const paidH=Math.round((m.paid/maxBar)*chartH);
          const pendH=Math.round((m.pending/maxBar)*chartH);
          const labelColor=m.isCurrent?'var(--navy)':'var(--muted)';
          const labelWeight=m.isCurrent?'bold':'normal';
          const paidOpacity=m.isFuture?'0.35':'0.85';
          const pendOpacity=m.isFuture?'0.35':'0.7';
          return`<g>
            <rect x="${x}" y="${chartH-paidH}" width="${barW}" height="${paidH||2}" rx="3" fill="var(--green)" opacity="${paidOpacity}"/>
            <rect x="${x+barW+4}" y="${chartH-pendH}" width="${barW}" height="${pendH||2}" rx="3" fill="var(--accent)" opacity="${pendOpacity}"/>
            <text x="${x+barW+2}" y="${chartH+16}" text-anchor="middle" font-size="10" fill="${labelColor}" font-weight="${labelWeight}" font-family="inherit">${m.label}${m.isCurrent?' ▾':''}</text>
          </g>`;
        }).join('');
        return`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:20px 22px;margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px">
            <div style="font-size:13px;font-weight:800;color:var(--navy)">Revenue — 3 Months Either Side</div>
            <div style="display:flex;gap:16px;font-size:11px;color:var(--muted)">
              <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:10px;border-radius:2px;background:var(--green);display:inline-block;opacity:0.85"></span>Paid $${Math.round(totalPaid/1000)}k</span>
              <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:10px;border-radius:2px;background:var(--accent);display:inline-block;opacity:0.7"></span>Pending $${Math.round(totalPending/1000)}k</span>
            </div>
          </div>
          <div style="overflow-x:auto">
            <svg viewBox="0 0 ${svgW} ${chartH+labelH}" width="100%" height="${chartH+labelH}" xmlns="http://www.w3.org/2000/svg" style="display:block">${bars}</svg>
          </div>
        </div>`;
      })()}

      <!-- Team Capacity -->
      ${(()=>{
        const activeP=store.projects.filter(p=>p.status==='active'||p.status==='planning');
        if(store.team.length===0)return'';
        const AVAIL_COLOR={'available':'var(--green)','busy':'var(--orange)','away':'var(--muted)'};
        const AVAIL_LABEL2={'available':'Available','busy':'Busy','away':'Away'};
        const rows=store.team.map(m=>{
          const totalDays=activeP.reduce((s,p)=>s+((p.teamAllocation&&p.teamAllocation[m.id])||0),0);
          const projCount=activeP.filter(p=>p.teamIds.includes(m.id)).length;
          const avail=getMemberAvailability(m);
          const capMax=60;
          const pct=Math.min(100,Math.round((totalDays/capMax)*100));
          const barColor=pct>=80?'var(--red)':pct>=50?'var(--orange)':'var(--green)';
          return`<div style="padding:10px 0;border-bottom:1px solid var(--border)" onclick="navigate('team-profile',undefined,${m.id})" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;cursor:pointer" onclick="navigate('team-profile',undefined,${m.id})">
              <div class="team-avatar-sm">${initials(m.name)}</div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;font-size:13px;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.name}</div>
                <div style="font-size:11px;color:var(--muted)">${m.role}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="font-size:13px;font-weight:700;color:var(--navy)">${totalDays} days</div>
                <div style="font-size:11px;color:${AVAIL_COLOR[avail]||'var(--muted)'};font-weight:600">${AVAIL_LABEL2[avail]||avail} · ${projCount} project${projCount!==1?'s':''}</div>
              </div>
            </div>
            <div style="height:5px;background:var(--border);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:${barColor};border-radius:3px;transition:width 0.4s"></div>
            </div>
          </div>`;
        }).join('');
        return`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:20px 22px;margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
            <div style="font-size:13px;font-weight:800;color:var(--navy)">Team Capacity</div>
            <div style="font-size:11px;color:var(--muted)">Active + planning projects · bar = % of 60-day baseline</div>
          </div>
          ${rows}
        </div>`;
      })()}

      <!-- Quarters -->
      ${sorted.map(q=>renderQ(q)).join('')}

      <!-- Undated projects -->
      ${undated.length>0?`
        <div style="background:var(--surface);border:1.5px dashed var(--border);border-radius:var(--radius);padding:20px 22px;margin-bottom:14px">
          <div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:12px">No dates set</div>
          ${undated.map(p=>`
            <div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="navigate('project-detail',${p.id})">
              <div style="width:9px;height:9px;border-radius:50%;background:${p.color||'var(--blue)'};flex-shrink:0"></div>
              <div style="flex:1;font-weight:600;font-size:13px">${p.name}</div>
              <span class="status-badge badge-${p.status}">${p.status}</span>
              <div style="font-size:12px;color:var(--muted)">Add dates to include in quarters</div>
            </div>`).join('')}
        </div>`:''}

    </div>`;
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function setDashFilter(f){currentDashFilter=f;render();}
function setFinanceFilter(f){currentFinanceFilter=f;render();}
function renderDashboard() {
  const today = new Date(); today.setHours(0,0,0,0);
  const todayStr = today.toISOString().slice(0,10);
  const in30 = new Date(today); in30.setDate(in30.getDate()+30);
  const in30Str = in30.toISOString().slice(0,10);

  // ── Priorities ──────────────────────────────────────────────────────────────
  const overduePayments = [];
  store.companies.forEach(co => {
    (co.payments||[]).forEach(pay => {
      if(pay.status==='pending' && pay.date && pay.date < todayStr) {
        const proj = store.projects.find(p=>p.id===pay.projectId);
        overduePayments.push({...pay, companyName:co.name, projectName:proj?.name||''});
      }
    });
  });

  const todayTasks = [];
  store.projects.forEach(p => {
    if(p.status==='completed') return;
    (p.tasks||[]).forEach(t => {
      if(t.dueDate===todayStr && t.status!=='done') todayTasks.push({...t, projectName:p.name, projectId:p.id});
    });
  });

  const todayProdDays = [];
  store.projects.forEach(p => {
    (p.production?.shootDays||[]).forEach(sd => {
      if(sd.date===todayStr) todayProdDays.push({...sd, projectName:p.name, projectId:p.id});
    });
  });

  const hasPriorities = overduePayments.length || todayTasks.length || todayProdDays.length;

  // ── Coming Up (next 30 days) ─────────────────────────────────────────────
  const upcoming = [];
  store.projects.forEach(p => {
    if(p.status==='completed') return;
    if(p.endDate && p.endDate > todayStr && p.endDate <= in30Str)
      upcoming.push({date:p.endDate, label:`${p.name} deadline`, type:'deadline', projectId:p.id});
  });
  store.companies.forEach(co => {
    (co.payments||[]).forEach(pay => {
      if(pay.status==='pending' && pay.date && pay.date > todayStr && pay.date <= in30Str) {
        const proj = store.projects.find(p=>p.id===pay.projectId);
        upcoming.push({date:pay.date, label:`${co.name} — ${pay.description}`, type:'payment', amount:pay.amount, projectId:proj?.id});
      }
    });
  });
  upcoming.sort((a,b)=>a.date.localeCompare(b.date));

  const activeProjects = store.projects.filter(p=>p.status==='active'||p.status==='planning').slice(0,4);

  const AVAIL_DOT = {available:'#16A34A', busy:'#D97706', away:'#9CA3AF', unavailable:'#DC2626'};
  const AVAIL_LBL = {available:'Available', busy:'Busy', away:'Away', unavailable:'Unavailable'};
  const hr = new Date().getHours();
  const greeting = hr<12?'morning':hr<17?'afternoon':'evening';

  return `
    <div class="topbar"><div><div class="page-title">How ya feelin'?</div><div class="page-sub">${new Date().toLocaleDateString('en-CA',{weekday:'long',day:'numeric',month:'long'})}</div></div><div class="storage-badge">● Saved</div></div>
    <div class="content">

      <div style="margin-bottom:28px">
        <div class="section-title" style="margin-bottom:12px">Priorities</div>
        ${hasPriorities ? `
          ${overduePayments.map(pay=>`
            <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(180,90,50,0.07);border:1px solid rgba(180,90,50,0.2);border-radius:8px;margin-bottom:8px;cursor:pointer" onclick="navigate('finance')">
              <span style="font-size:15px">💰</span>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:600;color:var(--text)">${pay.companyName} — ${pay.description}</div>
                <div style="font-size:11px;color:#9A5030;margin-top:2px">${pay.projectName} · Overdue since ${formatDate(pay.date)}</div>
              </div>
              <div style="font-size:13px;font-weight:700;color:#9A5030;flex-shrink:0">$${(pay.amount||0).toLocaleString()}</div>
            </div>`).join('')}
          ${todayProdDays.map(sd=>`
            <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.18);border-radius:8px;margin-bottom:8px;cursor:pointer" onclick="navigate('project-detail',${sd.projectId})">
              <span style="font-size:15px">◉</span>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:600;color:var(--text)">${sd.location||'Production Day'} — ${sd.projectName}</div>
                ${sd.callTime?`<div style="font-size:11px;color:var(--muted);margin-top:2px">Call time ${sd.callTime}${sd.wrapTime?' · Wrap '+sd.wrapTime:''}</div>`:''}
              </div>
              <div style="font-size:11px;padding:3px 8px;border-radius:4px;background:rgba(249,115,22,0.15);color:#EA580C;font-weight:600;flex-shrink:0">Today</div>
            </div>`).join('')}
          ${todayTasks.map(t=>`
            <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(37,99,235,0.06);border:1px solid rgba(37,99,235,0.14);border-radius:8px;margin-bottom:8px;cursor:pointer" onclick="navigate('project-detail',${t.projectId})">
              <span style="font-size:15px">◆</span>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:600;color:var(--text)">${t.name}</div>
                <div style="font-size:11px;color:var(--muted);margin-top:2px">${t.projectName}${t.assignedTo?' · '+t.assignedTo:''}</div>
              </div>
              <div class="status-badge badge-${t.status}" style="flex-shrink:0">${t.status.replace('-',' ')}</div>
            </div>`).join('')}
        ` : `
          <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:rgba(22,163,74,0.07);border:1px solid rgba(22,163,74,0.18);border-radius:8px">
            <span style="font-size:16px">✓</span>
            <div style="font-size:13px;color:var(--text)">Nothing urgent today — you're on top of it.</div>
          </div>`}
      </div>

      ${upcoming.length ? `
      <div style="margin-bottom:28px">
        <div class="section-title" style="margin-bottom:12px">Coming Up <span style="font-size:11px;font-weight:400;color:var(--muted);margin-left:6px">next 30 days</span></div>
        <div style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
          ${upcoming.map((item,i)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;${i>0?'border-top:1px solid var(--border)':''}${item.projectId?';cursor:pointer':''}" ${item.projectId?`onclick="navigate('project-detail',${item.projectId})"`:''}>
              <div style="font-size:11px;font-weight:600;color:var(--muted);min-width:58px;flex-shrink:0">${formatDate(item.date)}</div>
              <div style="flex:1;font-size:13px;color:var(--text)">${item.label}</div>
              ${item.amount?`<div style="font-size:12px;font-weight:700;color:#16A34A;flex-shrink:0">$${item.amount.toLocaleString()}</div>`:''}
              <div style="font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;background:${item.type==='payment'?'rgba(22,163,74,0.1)':'rgba(37,99,235,0.1)'};color:${item.type==='payment'?'#16A34A':'var(--blue)'};flex-shrink:0;text-transform:uppercase;letter-spacing:0.4px">${item.type}</div>
            </div>`).join('')}
        </div>
      </div>` : ''}

      <div style="margin-bottom:28px">
        <div class="section-title" style="margin-bottom:12px">Today's Team</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:10px">
          ${store.team.map(m=>{
            const avail=getMemberAvailability(m);
            return `<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--surface);border:1px solid var(--border);border-radius:8px;cursor:pointer" onclick="navigate('team-profile',undefined,${m.id})">
              <div class="team-avatar-sm" style="flex-shrink:0">${initials(m.name)}</div>
              <div style="min-width:0">
                <div style="font-size:12px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.name.split(' ')[0]}</div>
                <div style="display:flex;align-items:center;gap:4px;margin-top:2px">
                  <span style="width:6px;height:6px;border-radius:50%;background:${AVAIL_DOT[avail]||'var(--muted)'};flex-shrink:0"></span>
                  <span style="font-size:10px;color:var(--muted)">${AVAIL_LBL[avail]||avail}</span>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <div class="section-title">Active Projects</div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('projects')">View all →</button>
        </div>
        <div class="projects-grid">${activeProjects.map(p=>renderProjectCard(p)).join('')}${activeProjects.length===0?`<div style="color:var(--muted);font-size:14px;padding:20px 0">No active projects.</div>`:''}</div>
      </div>

    </div>`;
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function setProjectsFilter(f) { currentProjectsFilter = f; render(); }
function renderProjects() {
  const all = store.projects;
  const filtered = currentProjectsFilter === 'active'
    ? all.filter(p => p.status !== 'completed')
    : currentProjectsFilter === 'completed'
      ? all.filter(p => p.status === 'completed')
      : all;
  const tabs = [
    { key: 'active',    label: 'Active' },
    { key: 'all',       label: 'All' },
    { key: 'completed', label: 'Completed' },
  ];
  return `
    <div class="topbar"><div><div class="page-title">Projects</div><div class="page-sub">${filtered.length} of ${all.length} projects</div></div><button class="btn btn-primary" onclick="openNewProjectModal()">+ New</button></div>
    <div class="content">
      <div style="display:flex;gap:6px;margin-bottom:20px">
        ${tabs.map(t=>`<button class="btn ${currentProjectsFilter===t.key?'btn-primary':'btn-ghost'} btn-sm" onclick="setProjectsFilter('${t.key}')">${t.label}</button>`).join('')}
      </div>
      <div class="projects-grid">${filtered.map(p=>renderProjectCard(p)).join('')}${filtered.length===0?`<div style="color:var(--muted);font-size:14px;padding:20px 0">No ${currentProjectsFilter} projects.</div>`:''}</div>
    </div>`;
}

function signoffProgress(p) {
  if(!p.signoff) return 0;
  return SIGNOFF_STEPS.filter(s=>p.signoff[s.id]?.completed).length;
}

function getBudgetTotals(p) {
  if (!p.budgetLines) p.budgetLines = BUDGET_CATS.map((cat,i)=>({id:i+1,category:cat,forecast:0,actuals:0}));
  // Separate hard costs (20% margin baked in) from fees (pass-through)
  const hardLines = p.budgetLines.filter(l=>HARD_COST_CATS.includes(l.category));
  const feeLines  = p.budgetLines.filter(l=>FEE_CATS.includes(l.category));
  const hardForecast = hardLines.reduce((s,l)=>s+(l.forecast||0),0);
  const feeForecast  = feeLines.reduce((s,l)=>s+(l.forecast||0),0);
  const rawForecast  = hardForecast + feeForecast;
  // forecast = total client-facing budget (already includes baked-in margin for hard costs)
  const forecast  = rawForecast > 0 ? rawForecast : (p.budgetTarget || 0);
  const margin    = Math.round(hardForecast * 0.2);   // planned FELT margin
  const feltCost  = Math.round(hardForecast * 0.8) + feeForecast; // FELT's target spend
  // Actuals = what FELT actually paid
  const invoiceActuals = (p.invoices||[]).filter(i=>i.status==='paid').reduce((s,i)=>s+(i.amount||0),0);
  const teamActuals = store.team.reduce((s,m)=>s+(m.payments||[]).filter(pay=>pay.status==='paid'&&pay.projectId===p.id).reduce((a,pay)=>a+(pay.amount||0),0),0);
  const actuals = invoiceActuals + teamActuals;
  const actualMargin = forecast - actuals; // actual profit to FELT
  return { forecast, actuals, rawForecast, hardForecast, feeForecast, margin, feltCost, actualMargin };
}

function getProjectHealth(p) {
  if(p.status==='completed'||p.status==='pitched') return null;
  const today=new Date();today.setHours(0,0,0,0);
  let score=0;
  const {forecast,actuals}=getBudgetTotals(p);
  const budgetPct=forecast>0?actuals/forecast:0;
  if(budgetPct>=1) score=Math.max(score,2);
  else if(budgetPct>=0.85) score=Math.max(score,1);
  if(p.endDate&&p.status==='active'){
    const end=new Date(p.endDate+'T12:00:00');
    const daysLeft=Math.ceil((end-today)/86400000);
    if(daysLeft<0) score=Math.max(score,2);
    else if(daysLeft<=7) score=Math.max(score,2);
    else if(daysLeft<=14) score=Math.max(score,1);
  }
  if(p.status==='active'){
    const soPct=signoffProgress(p)/SIGNOFF_STEPS.length;
    if(soPct<0.3&&budgetPct>0.5) score=Math.max(score,1);
  }
  return [{color:'#4A8A65',label:'On track'},{color:'#C8A020',label:'Needs attention'},{color:'#B5503A',label:'At risk'}][score];
}

function renderProjectCard(p) {
  const {forecast,actuals}=getBudgetTotals(p);
  const pct=forecast>0?Math.round(actuals/forecast*100):0;
  const teamInitials=p.teamIds.slice(0,3).map(id=>{const m=store.team.find(t=>t.id===id);return m?`<div class="team-avatar-sm">${initials(m.name)}</div>`:''}).join('');
  const soProgress=signoffProgress(p);
  const soTotal=SIGNOFF_STEPS.length;
  const health=getProjectHealth(p);
  return `
    <div class="project-card status-${p.status}" style="--project-color:${p.color||'#2563EB'}" onclick="navigate('project-detail',${p.id})">
      <div class="project-header"><div style="min-width:0"><div class="project-name">${p.name}</div><div class="project-client">${p.client}</div></div><div style="display:flex;align-items:center;gap:6px;flex-shrink:0">${health?`<div title="${health.label}" style="width:9px;height:9px;border-radius:50%;background:${health.color};flex-shrink:0;box-shadow:0 0 0 2px ${health.color}30"></div>`:''}<div class="status-badge badge-${p.status}">${p.status}</div></div></div>
      <div style="margin-top:10px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:4px"><span>Budget</span><span>$${actuals.toLocaleString()} / $${forecast.toLocaleString()}</span></div>
        <div class="budget-bar"><div class="budget-bar-fill ${pct>100?'over':''}" style="width:${Math.min(pct,100)}%"></div></div>
      </div>
      <div style="margin-top:10px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:4px"><span>Sign-off</span><span>${soProgress} / ${soTotal}</span></div>
        <div class="budget-bar"><div class="budget-bar-fill" style="width:${Math.round(soProgress/soTotal*100)}%;background:var(--accent)"></div></div>
      </div>
      <div class="project-meta">
        <div class="meta-item"><strong>${p.type}</strong>Type</div>
        <div class="meta-item"><strong>${formatDate(p.endDate)}</strong>Deadline</div>
        <div class="meta-item" style="margin-left:auto"><div class="team-avatars">${teamInitials}</div></div>
      </div>
    </div>`;
}

// ─── PROJECT DETAIL ───────────────────────────────────────────────────────────
function renderProjectDetail() {
  const p=currentProject; if(!p) return '';
  return `
    <div class="topbar"><div><div class="back-btn" onclick="navigate('projects')">← Projects</div><div class="page-title">${p.name}</div><div class="page-sub">${(()=>{const co=p.clientId?store.companies.find(c=>c.id===p.clientId):null;return co?`<span style="cursor:pointer;color:var(--navy);font-weight:600;text-decoration:underline;text-decoration-style:dotted" onclick="navigateToCompany(${co.id})" title="View client profile">${co.name}</span>`:(p.client||'—');})()}&thinsp;·&thinsp;<span class="status-badge badge-${p.status}">${p.status}</span>${p.leadId?` · <span style="font-size:11px;color:var(--muted);cursor:pointer" onclick="navigateToLead(${p.leadId})" title="View originating lead">◉ from lead</span>`:''}</div></div><div style="display:flex;gap:8px;flex-shrink:0"><button class="btn btn-ghost btn-sm" onclick="openClientSummary()">Share</button><button class="btn btn-ghost btn-sm" onclick="openEditProjectModal()">Edit</button></div></div>
    <div class="content">
      <div class="tabs">
        <div class="tab ${currentTab==='brief'?'active':''}" onclick="switchTab('brief')">Brief</div>
        <div class="tab ${currentTab==='timeline'?'active':''}" onclick="switchTab('timeline')">Timeline</div>

        <div class="tab ${currentTab==='production'?'active':''}" onclick="switchTab('production')">Production</div>
        <div class="tab ${currentTab==='assets'?'active':''}" onclick="switchTab('assets')">Assets</div>
        <div class="tab ${currentTab==='team'?'active':''}" onclick="switchTab('team')">Team</div>
        <div class="tab ${currentTab==='budget'?'active':''}" onclick="switchTab('budget')">Budget</div>
        <div class="tab ${currentTab==='invoices'?'active':''}" onclick="switchTab('invoices')">Invoices</div>
        <div class="tab ${currentTab==='contacts'?'active':''}" onclick="switchTab('contacts')">Clients</div>
      </div>
      ${currentTab==='brief'?renderBriefTab(p):''}
      ${currentTab==='timeline'?renderTimelineTab(p):''}

      ${currentTab==='production'?renderProductionTab(p):''}
      ${currentTab==='assets'?renderAssetsTab(p):''}
      ${currentTab==='team'?renderTeamTab(p):''}
      ${currentTab==='budget'?renderBudgetTab(p):''}
      ${currentTab==='invoices'?renderInvoicesTab(p):''}
      ${currentTab==='contacts'?renderContactsTab(p):''}
    </div>`;
}

function switchTab(tab){currentTab=tab;render();}

// ─── SIGN-OFF TAB ─────────────────────────────────────────────────────────────
function renderSignoffTab(p) {
  if(!p.signoff) p.signoff=emptySignoff();
  const completed=SIGNOFF_STEPS.filter(s=>p.signoff[s.id]?.completed).length;
  const total=SIGNOFF_STEPS.length;
  const pct=Math.round(completed/total*100);
  const nextStep=SIGNOFF_STEPS.find(s=>!p.signoff[s.id]?.completed);
  const allDone=completed===total;
  return `
    <div class="signoff-header">
      <div class="signoff-progress-label">
        <div class="signoff-progress-text">${allDone?'✓ All stages complete':completed+' of '+total+' stages complete'}</div>
        <div class="signoff-progress-pct">${pct}%</div>
      </div>
      <div class="signoff-bar"><div class="signoff-bar-fill" style="width:${pct}%"></div></div>
      ${!allDone&&nextStep?`<div class="signoff-current">Next up: <strong>${nextStep.label}</strong></div>`:''}
    </div>
    <div class="signoff-list">
      ${SIGNOFF_STEPS.map((step,i)=>{
        const data=p.signoff[step.id]||{};
        const isDone=data.completed;
        const isNext=!isDone&&SIGNOFF_STEPS.slice(0,i).every(s=>p.signoff[s.id]?.completed);
        const stateClass=isDone?'completed':isNext?'current':'future';
        const iconClass=isDone?'done':isNext?'next':'pending';
        const iconChar=isDone?'✓':(i+1);
        return `
          <div class="signoff-step ${stateClass}">
            <div class="signoff-icon ${iconClass}">${iconChar}</div>
            <div class="signoff-step-info">
              <div class="signoff-step-label">${step.label}</div>
              ${isDone?`<div class="signoff-step-meta"><strong>${data.completedBy}</strong> · ${formatDate(data.completedAt)}</div>`:''}
              ${isNext?`<div class="signoff-step-meta">Ready to sign off</div>`:''}
            </div>
            <div class="signoff-actions">
              ${isDone?`<button class="btn btn-ghost btn-sm" onclick="undoSignoff('${step.id}')">Undo</button>`:''}
              ${isNext?`<button class="btn btn-green btn-sm" onclick="openSignoffModal('${step.id}')">Sign Off</button>`:''}
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

function openSignoffModal(stepId) {
  const step=SIGNOFF_STEPS.find(s=>s.id===stepId);
  const memberNames=store.team.map(m=>`<option>${m.name}</option>`).join('');
  openModal(`
    <div class="modal-title">Sign Off: ${step.label}</div>
    <div class="form-grid">
      <div class="form-group full"><label>Signed off by</label><select id="so-name"><option value="">— Select —</option>${memberNames}<option value="Adam">Adam</option><option value="Other">Other</option></select></div>
      <div class="form-group full" id="so-other-wrap" style="display:none"><label>Name</label><input id="so-other" placeholder="Enter name"></div>
      <div class="form-group full"><label>Date</label><input id="so-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-green" onclick="confirmSignoff('${stepId}')">Confirm Sign Off</button></div>`);
  document.getElementById('so-name').addEventListener('change',function(){document.getElementById('so-other-wrap').style.display=this.value==='Other'?'flex':'none';});
}
function confirmSignoff(stepId) {
  const nameEl=document.getElementById('so-name');let name=nameEl.value;
  if(name==='Other')name=document.getElementById('so-other').value.trim();
  if(!name){toast('Please select a name');return;}
  const date=document.getElementById('so-date').value;
  const p=currentProject;if(!p.signoff)p.signoff=emptySignoff();
  p.signoff[stepId]={completed:true,completedBy:name,completedAt:date};
  closeModal();save();toast('✓ Signed off');render();
}
function undoSignoff(stepId) {
  const p=currentProject;if(p.signoff)p.signoff[stepId]={completed:false,completedBy:'',completedAt:''};
  save();toast('Sign-off removed');render();
}

// ─── PRODUCTION TAB ───────────────────────────────────────────────────────────
function renderProductionTab(p) {
  if(!p.production) p.production=emptyProduction();
  const prod=p.production;

  // Shoot Days
  const daysHtml = prod.shootDays.length===0
    ? `<div class="empty-state"><div class="empty-icon">📅</div><p>No production days added yet.</p></div>`
    : `<div class="prod-days-grid">${prod.shootDays.sort((a,b)=>a.date.localeCompare(b.date)).map(d=>{
        const dt=new Date(d.date+'T12:00:00');
        const dayNum=dt.toLocaleDateString('en-CA',{day:'numeric'});
        const mon=dt.toLocaleDateString('en-CA',{month:'short'});
        return `<div class="prod-day-card">
          <div class="prod-day-date"><div class="day-num">${dayNum}</div><div class="day-mon">${mon}</div></div>
          <div class="prod-day-info">
            <div class="prod-day-location">${d.location||'Location TBC'}</div>
            <div class="prod-day-times">${d.callTime?'Call: '+d.callTime:''}${d.wrapTime?' · Wrap: '+d.wrapTime:''}</div>
            ${d.notes?`<div class="prod-day-notes">${d.notes}</div>`:''}
          </div>
          <button class="prod-remove" onclick="removeShootDay(${d.id})">✕</button>
        </div>`;
      }).join('')}</div>`;

  // Vendors
  const suppliersHtml = prod.suppliers.length===0
    ? `<div class="empty-state"><div class="empty-icon">🏭</div><p>No vendors added yet.</p></div>`
    : `<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap"><table class="table">
        <thead><tr><th>Company</th><th>Category</th><th>Contact</th><th>Status</th><th></th></tr></thead>
        <tbody>${prod.suppliers.map(s=>`<tr>
          <td><div style="font-weight:700">${s.company}</div>${s.notes?`<div style="font-size:11px;color:var(--muted);margin-top:2px">${s.notes}</div>`:''}</td>
          <td style="color:var(--muted)">${s.category}</td>
          <td style="color:var(--muted)">${s.contact||'—'}</td>
          <td><span class="status-badge badge-${s.status}">${s.status}</span></td>
          <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="removeVendor(${s.id})">✕</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>`;

  // Equipment
  const equipHtml = prod.equipment.length===0
    ? `<div class="empty-state"><div class="empty-icon">📦</div><p>No equipment added yet.</p></div>`
    : `<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap"><table class="table">
        <thead><tr><th>Item</th><th>Qty</th><th>Vendor</th><th>Status</th><th></th></tr></thead>
        <tbody>${prod.equipment.map(e=>`<tr>
          <td style="font-weight:600">${e.item}</td>
          <td style="color:var(--muted)">${e.qty}</td>
          <td style="color:var(--muted)">${e.supplier||'—'}</td>
          <td><span class="status-badge badge-${e.status}">${e.status}</span></td>
          <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="removeEquipment(${e.id})">✕</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>`;

  return `
    <!-- SHOOT DAYS -->
    <div class="prod-section">
      <div class="section-header"><div class="section-title">Production Days</div><button class="btn btn-primary btn-sm" onclick="openAddShootDayModal()">+ Add Day</button></div>
      ${daysHtml}
    </div>

    <!-- SUPPLIERS -->
    <div class="prod-section">
      <div class="section-header"><div class="section-title">Vendors</div><button class="btn btn-primary btn-sm" onclick="openAddVendorModal()">+ Add</button></div>
      ${suppliersHtml}
    </div>

    <!-- EQUIPMENT -->
    <div class="prod-section">
      <div class="section-header"><div class="section-title">Equipment & Assets</div><button class="btn btn-primary btn-sm" onclick="openAddEquipmentModal()">+ Add</button></div>
      ${equipHtml}
    </div>

    <!-- KEY CONTACTS -->
    <div class="prod-section">
      <div class="section-header"><div class="section-title">Key Contacts</div><button class="btn btn-primary btn-sm" onclick="openAddKeyContactModal()">+ Add</button></div>
      ${prod.keyContacts.length===0
        ? `<div class="empty-state"><div class="empty-icon">📞</div><p>No key contacts added. Pull from Team, Contacts, or add manually.</p></div>`
        : `<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap"><table class="table">
            <thead><tr><th>Production Role</th><th>Name</th><th>Phone</th><th>Email</th><th></th></tr></thead>
            <tbody>${prod.keyContacts.map(kc=>`<tr>
              <td><span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--muted)">${kc.productionRole}</span></td>
              <td style="font-weight:700">${kc.name}</td>
              <td><a href="tel:${kc.phone}" style="color:var(--blue);text-decoration:none">${kc.phone||'—'}</a></td>
              <td><a href="mailto:${kc.email}" style="color:var(--blue);text-decoration:none">${kc.email||'—'}</a></td>
              <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="removeKeyContact(${kc.id})">✕</button></td>
            </tr>`).join('')}</tbody>
          </table></div></div>`}
    </div>

    <!-- CALL SHEET NOTES -->
    <div class="prod-section">
      <div class="section-header"><div class="section-title">Call Sheet Notes</div></div>
      <div class="callsheet-area">
        <textarea class="callsheet-textarea" id="callsheet-notes" placeholder="Emergency contacts, parking, access codes, run-of-show notes...">${prod.callSheetNotes||''}</textarea>
      </div>
    </div>`;
}

function openAddShootDayModal() {
  openModal(`
    <div class="modal-title">Add Production Day</div>
    <div class="form-grid">
      <div class="form-group full"><label>Date</label><input id="sd-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group full"><label>Location</label><input id="sd-location" placeholder="e.g. Boxpark Shoreditch — Unit 12"></div>
      <div class="form-group"><label>Call Time</label><input id="sd-call" type="time" value="08:00"></div>
      <div class="form-group"><label>Wrap Time</label><input id="sd-wrap" type="time" value="22:00"></div>
      <div class="form-group full"><label>Notes</label><textarea id="sd-notes" placeholder="Deliveries, crew, access, anything important..."></textarea></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addShootDay()">Add Day</button></div>`);
}
function addShootDay() {
  const d=document.getElementById('sd-date').value;if(!d){toast('Date required');return;}
  const p=currentProject;if(!p.production)p.production=emptyProduction();
  p.production.shootDays.push({id:store.nextId.shootDays++,date:d,location:document.getElementById('sd-location').value,callTime:document.getElementById('sd-call').value,wrapTime:document.getElementById('sd-wrap').value,notes:document.getElementById('sd-notes').value});
  closeModal();save();toast('Day added');render();
}
function removeShootDay(id){const p=currentProject;p.production.shootDays=p.production.shootDays.filter(d=>d.id!==id);save();toast('Removed');render();}

function openAddVendorModal() {
  const db = store.globalSuppliers||[];
  if(db.length===0){
    openModal(`
      <div class="modal-title">Add Vendor</div>
      <div style="padding:24px 0;text-align:center">
        <div style="font-size:32px;margin-bottom:12px">🏭</div>
        <div style="font-weight:600;margin-bottom:6px">No vendors in database yet</div>
        <div style="color:var(--muted);font-size:13px;margin-bottom:20px">Add vendors to your database first, then link them to projects.</div>
        <button class="btn btn-primary" onclick="closeModal();navigate('global-suppliers');setTimeout(openAddGlobalVendorModal,100)">+ Add to Vendor Database</button>
      </div>
      <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
    return;
  }
  const globalOpts = db.map(s=>`<option value="${s.id}">${s.company} — ${s.category}</option>`).join('');
  openModal(`
    <div class="modal-title">Add Vendor</div>
    <div class="form-grid">
      <div class="form-group full"><label>Vendor</label><select id="sup-pull" onchange="prefillVendor(this.value)"><option value="">— Select from vendor database —</option>${globalOpts}</select>
        <div style="margin-top:6px;font-size:12px;color:var(--muted)">Not listed? <a href="#" onclick="closeModal();navigate('global-suppliers');setTimeout(openAddGlobalVendorModal,100);return false;" style="color:var(--blue)">Add to vendor database first →</a></div>
      </div>
      <div class="form-group" id="sup-status-wrap" style="display:none"><label>Status</label><select id="sup-status"><option value="pending">Pending</option><option value="confirmed">Confirmed</option><option value="cancelled">Cancelled</option></select></div>
      <div class="form-group full" id="sup-notes-wrap" style="display:none"><label>Notes</label><textarea id="sup-notes" placeholder="Contract status, key dates, anything important..."></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addVendor()">Add to Project</button>
    </div>`);
}
function prefillVendor(id) {
  const show = !!id;
  document.getElementById('sup-status-wrap').style.display = show ? '' : 'none';
  document.getElementById('sup-notes-wrap').style.display = show ? '' : 'none';
}
function addVendor() {
  const id=parseInt(document.getElementById('sup-pull').value);
  if(!id){toast('Select a vendor from the database');return;}
  const s=store.globalSuppliers.find(x=>x.id===id);
  if(!s){toast('Vendor not found');return;}
  const p=currentProject;if(!p.production)p.production=emptyProduction();
  const status=document.getElementById('sup-status').value;
  const notes=document.getElementById('sup-notes').value;
  p.production.suppliers.push({id:store.nextId.suppliers++,globalSupplierId:s.id,company:s.company,contact:s.contactName||'',category:s.category,status,notes});
  closeModal();save();toast('Vendor added');render();
}
function removeVendor(id){const p=currentProject;p.production.suppliers=p.production.suppliers.filter(s=>s.id!==id);save();toast('Removed');render();}

function openAddEquipmentModal() {
  const db=store.globalSuppliers||[];
  const vendorOpts=db.map(s=>`<option value="${s.company}">${s.company} — ${s.category}</option>`).join('');
  openModal(`
    <div class="modal-title">Add Equipment / Asset</div>
    <div class="form-grid">
      <div class="form-group full"><label>Item</label><input id="eq-item" placeholder="e.g. LED Wall Panels"></div>
      <div class="form-group"><label>Quantity</label><input id="eq-qty" type="number" value="1" min="1"></div>
      <div class="form-group"><label>Status</label><select id="eq-status"><option value="needed">Needed</option><option value="confirmed">Confirmed</option><option value="on-site">On Site</option><option value="returned">Returned</option></select></div>
      <div class="form-group full"><label>Vendor</label><select id="eq-supplier"><option value="">— Select vendor (optional) —</option><option value="Internal">Internal</option>${vendorOpts}</select>
        <div style="margin-top:6px;font-size:12px;color:var(--muted)">Not listed? <a href="#" onclick="closeModal();navigate('global-suppliers');setTimeout(openAddGlobalVendorModal,100);return false;" style="color:var(--blue)">Add to vendor database →</a></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addEquipment()">Add Item</button></div>`);
}
function addEquipment() {
  const item=document.getElementById('eq-item').value.trim();if(!item){toast('Item name required');return;}
  const p=currentProject;if(!p.production)p.production=emptyProduction();
  p.production.equipment.push({id:store.nextId.equipment++,item,qty:parseInt(document.getElementById('eq-qty').value)||1,supplier:document.getElementById('eq-supplier').value,status:document.getElementById('eq-status').value});
  closeModal();save();toast('Item added');render();
}
function removeEquipment(id){const p=currentProject;p.production.equipment=p.production.equipment.filter(e=>e.id!==id);save();toast('Removed');render();}

function openAddKeyContactModal() {
  const teamOpts = store.team.map(m=>`<option value="team:${m.id}">${m.name} — ${m.role}</option>`).join('');
  const contactOpts = store.contacts.map(c=>{const co=c.companyId?store.companies.find(x=>x.id===c.companyId):null;return`<option value="contact:${c.id}">${c.name}${co?' — '+co.name:''}</option>`;}).join('');
  openModal(`
    <div class="modal-title">Add Key Contact</div>
    <div class="form-grid">
      <div class="form-group full"><label>Production Role</label><input id="kc-role" placeholder="e.g. Emergency Contact, Venue Manager, Client Contact"></div>
      <div class="form-group full">
        <label>Pull from existing</label>
        <select id="kc-source" onchange="prefillKeyContact(this.value)">
          <option value="">— Add manually below —</option>
          <optgroup label="Team">${teamOpts}</optgroup>
          <optgroup label="Contacts">${contactOpts}</optgroup>
        </select>
      </div>
      <div class="form-group"><label>Name</label><input id="kc-name" placeholder="Full name"></div>
      <div class="form-group"><label>Phone</label><input id="kc-phone" placeholder="07700 000000"></div>
      <div class="form-group full"><label>Email</label><input id="kc-email" placeholder="email@example.com"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addKeyContact()">Add Contact</button></div>`);
}
function prefillKeyContact(val) {
  if (!val) return;
  const [type, id] = val.split(':');
  const numId = parseInt(id);
  let record;
  if (type === 'team') record = store.team.find(m=>m.id===numId);
  else record = store.contacts.find(c=>c.id===numId);
  if (!record) return;
  document.getElementById('kc-name').value = record.name || '';
  document.getElementById('kc-phone').value = record.phone || '';
  document.getElementById('kc-email').value = record.email || '';
  if (!document.getElementById('kc-role').value) {
    document.getElementById('kc-role').value = record.role || '';
  }
}
function addKeyContact() {
  const role = document.getElementById('kc-role').value.trim();
  const name = document.getElementById('kc-name').value.trim();
  if (!role || !name) { toast('Role and name required'); return; }
  const p = currentProject;
  if (!p.production.keyContacts) p.production.keyContacts = [];
  p.production.keyContacts.push({
    id: store.nextId.keyContacts++,
    productionRole: role,
    name,
    phone: document.getElementById('kc-phone').value,
    email: document.getElementById('kc-email').value,
  });
  closeModal(); save(); toast('Contact added'); render();
}
function removeKeyContact(id) {
  const p = currentProject;
  p.production.keyContacts = p.production.keyContacts.filter(kc=>kc.id!==id);
  save(); toast('Removed'); render();
}

// ─── BRIEF TAB ────────────────────────────────────────────────────────────────
function renderBriefTab(p) {
  return `
    <div class="section-header"><div class="section-title">Project Brief</div><button class="btn btn-ghost btn-sm" onclick="openEditBriefModal()">Edit</button></div>
    <div class="brief-content">
      <div class="brief-section"><div class="brief-section-title">Overview</div><div class="brief-section-content">${p.brief.overview||'—'}</div></div>
      <div class="divider"></div>
      <div class="brief-section"><div class="brief-section-title">Objectives</div><div class="brief-section-content">${p.brief.objectives||'—'}</div></div>
      <div class="divider"></div>
      <div class="brief-section"><div class="brief-section-title">Deliverables</div><div class="brief-section-content">${p.brief.deliverables||'—'}</div></div>
      <div class="divider"></div>
      <div class="brief-section"><div class="brief-section-title">Timeline Notes</div><div class="brief-section-content">${p.brief.timeline||'—'}</div></div>
    </div>`;
}

function renderTeamTab(p) {
  const assigned=store.team.filter(m=>p.teamIds.includes(m.id));
  return `
    <div class="section-header"><div class="section-title">Assigned Team</div><button class="btn btn-primary btn-sm" onclick="openAllocateModal()">+ Allocate</button></div>
    <div class="card">
      ${assigned.length===0?`<div class="empty-state"><div class="empty-icon">◎</div><p>No team members assigned yet.</p></div>`:''}
      ${assigned.map(m=>{const days=(p.teamAllocation&&p.teamAllocation[m.id])||0;return`<div class="allocate-row"><div class="allocate-info" style="cursor:pointer" onclick="navigate('team-profile',undefined,${m.id})"><div class="team-avatar-lg" style="width:36px;height:36px;font-size:12px;margin-bottom:0">${initials(m.name)}</div><div style="min-width:0"><div style="font-weight:700;font-size:13px;color:var(--navy);text-decoration:underline;text-decoration-style:dotted">${m.name}</div><div style="font-size:12px;color:var(--muted)">${m.role} · $${m.rate}/day</div></div></div><div style="display:flex;align-items:center;gap:14px;flex-shrink:0"><div style="text-align:right"><div style="font-size:13px;font-weight:700">${days} days</div><div style="font-size:11px;color:var(--muted)">$${(days*m.rate).toLocaleString()}</div></div><button class="btn btn-ghost btn-sm" onclick="removeTeamMember(${m.id})">Remove</button></div></div>`;}).join('')}
    </div>`;
}

const BUDGET_CATS = ['Fabrication','Furniture & Décor','AV + Content Tech','Team','Uniforms & Materials','Print Collateral','Production Misc.','Other'];
const HARD_COST_CATS = ['Fabrication','Furniture & Décor','AV + Content Tech','Uniforms & Materials','Print Collateral','Production Misc.','Other'];
const FEE_CATS = ['Team'];
function ensureBudgetLines(p) {
  if (!p.budgetLines) {
    p.budgetLines = BUDGET_CATS.map((cat,i)=>({id:i+1,category:cat,forecast:0,actuals:0}));
  }
}
function renderBudgetTab(p) {
  ensureBudgetLines(p);
  const paidByCat={};
  (p.invoices||[]).filter(i=>i.status==='paid').forEach(i=>{paidByCat[i.category]=(paidByCat[i.category]||0)+(i.amount||0);});
  store.team.forEach(m=>(m.payments||[]).filter(pay=>pay.status==='paid'&&pay.projectId===p.id).forEach(pay=>{paidByCat['Team']=(paidByCat['Team']||0)+(pay.amount||0);}));

  const hardLines = p.budgetLines.filter(l=>HARD_COST_CATS.includes(l.category));
  const feeLines  = p.budgetLines.filter(l=>FEE_CATS.includes(l.category));
  const hardForecast = hardLines.reduce((s,l)=>s+(l.forecast||0),0);
  const feeForecast  = feeLines.reduce((s,l)=>s+(l.forecast||0),0);
  const plannedMargin = Math.round(hardForecast * 0.2);
  const feltHardCost  = Math.round(hardForecast * 0.8);
  const clientTotal   = hardForecast + feeForecast;
  const hardActuals   = hardLines.reduce((s,l)=>s+(paidByCat[l.category]||0),0);
  const feeActuals    = feeLines.reduce((s,l)=>s+(paidByCat[l.category]||0),0);
  const totalActuals  = hardActuals + feeActuals;
  const actualMargin  = clientTotal - totalActuals;
  const marginColor   = actualMargin >= plannedMargin ? 'var(--green)' : actualMargin > 0 ? 'var(--orange)' : 'var(--red)';

  function makeRows(lines) {
    return lines.map((line,_)=>{
      const idx = p.budgetLines.indexOf(line);
      const lineActuals=paidByCat[line.category]||0;
      const variance=(line.forecast||0)-lineActuals, varOver=variance<0;
      return `<tr>
        <td style="font-weight:600">${line.category}</td>
        <td style="text-align:right"><span class="budget-forecast-val" onclick="editBudgetLineForecast(${idx})" style="cursor:pointer;font-weight:700;color:var(--navy);padding:3px 8px;border-radius:6px;display:inline-block;transition:background 0.15s" title="Click to edit">$${(line.forecast||0).toLocaleString()}</span></td>
        <td style="text-align:right;color:var(--muted)">$${lineActuals.toLocaleString()}</td>
        <td style="text-align:right;font-weight:700;color:${varOver?'var(--red)':variance===0?'var(--muted)':'var(--green)'}">${varOver?'−':''}$${Math.abs(variance).toLocaleString()}</td>
        <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="removeBudgetLine(${idx})" style="padding:2px 7px">✕</button></td>
      </tr>`;
    }).join('');
  }

  function makeMobileCards(lines) {
    return lines.map((line,_)=>{
      const idx = p.budgetLines.indexOf(line);
      const lineActuals=paidByCat[line.category]||0;
      const variance=(line.forecast||0)-lineActuals, varOver=variance<0;
      return `<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:12px 14px;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <div style="font-size:14px;font-weight:700;color:var(--navy)">${line.category}</div>
          <button class="btn btn-ghost btn-sm" onclick="removeBudgetLine(${idx})" style="padding:2px 6px;font-size:11px">✕</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center">
          <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:3px">Client quote</div><div style="font-size:15px;font-weight:800;color:var(--navy);cursor:pointer" onclick="editBudgetLineForecast(${idx})">$${(line.forecast||0).toLocaleString()}</div><div style="font-size:9px;color:var(--muted);margin-top:2px">tap to edit</div></div>
          <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:3px">Actuals</div><div style="font-size:15px;font-weight:800;color:var(--muted)">$${lineActuals.toLocaleString()}</div></div>
          <div><div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:700;margin-bottom:3px">Variance</div><div style="font-size:15px;font-weight:800;color:${varOver?'var(--red)':variance===0?'var(--muted)':'var(--green)'}">${varOver?'−':''}$${Math.abs(variance).toLocaleString()}</div></div>
        </div>
      </div>`;
    }).join('');
  }

  // Internal profit summary
  const profitSummary = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:22px">
      <div style="background:var(--navy);border-radius:10px;padding:14px 16px">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.45);font-weight:700;margin-bottom:5px">Client Budget</div>
        <div style="font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.5px">$${clientTotal.toLocaleString()}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:3px">hard costs + fees</div>
      </div>
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:10px;padding:14px 16px">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:5px">Planned Margin</div>
        <div style="font-size:20px;font-weight:800;color:var(--green);letter-spacing:-0.5px">$${plannedMargin.toLocaleString()}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:3px">20% of hard costs</div>
      </div>
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:10px;padding:14px 16px">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:5px">Actual Spend</div>
        <div style="font-size:20px;font-weight:800;color:var(--navy);letter-spacing:-0.5px">$${totalActuals.toLocaleString()}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:3px">paid invoices + team</div>
      </div>
      <div style="background:var(--surface);border:1.5px solid ${marginColor};border-radius:10px;padding:14px 16px">
        <div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:5px">Actual Margin</div>
        <div style="font-size:20px;font-weight:800;color:${marginColor};letter-spacing:-0.5px">${actualMargin<0?'−':''}$${Math.abs(actualMargin).toLocaleString()}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:3px">${totalActuals===0?'no spend yet':actualMargin>=plannedMargin?'on or above target':'below planned'}</div>
      </div>
    </div>`;

  // Hard costs table
  const hardTable = `
    <div style="margin-bottom:6px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted)">Hard Costs <span style="font-size:9px;font-weight:400;margin-left:6px;background:var(--accent-light);color:var(--accent-dark);padding:1px 6px;border-radius:10px">20% margin baked in</span></div>
      <button class="btn btn-primary btn-sm" onclick="addBudgetLine()">+ Add Line</button>
    </div>
    <div class="card budget-desktop-table" style="padding:0;overflow:hidden;margin-bottom:6px">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Category</th><th style="text-align:right">Client quote</th><th style="text-align:right">Actuals paid</th><th style="text-align:right">Variance</th><th></th></tr></thead>
          <tbody>${makeRows(hardLines)}</tbody>
          <tfoot>
            <tr style="background:var(--bg)">
              <td style="font-weight:800;color:var(--navy);padding-top:10px">Subtotal</td>
              <td style="text-align:right;font-weight:800;color:var(--navy);padding-top:10px">$${hardForecast.toLocaleString()}</td>
              <td style="text-align:right;font-weight:700;color:var(--muted);padding-top:10px">$${hardActuals.toLocaleString()}</td>
              <td colspan="2"></td>
            </tr>
            <tr style="background:var(--accent-light)">
              <td style="font-size:12px;color:var(--accent-dark);padding:8px 12px;font-weight:700">↳ Margin (20%)</td>
              <td style="text-align:right;font-size:12px;font-weight:800;color:var(--green);padding:8px 12px">$${plannedMargin.toLocaleString()}</td>
              <td style="text-align:right;font-size:12px;color:var(--muted);padding:8px 12px">FELT's net cost: $${feltHardCost.toLocaleString()}</td>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="budget-mobile-cards">${makeMobileCards(hardLines)}</div>
    <div style="background:var(--accent-light);border-radius:8px;padding:10px 14px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:12px;font-weight:700;color:var(--accent-dark)">Margin (20% of hard costs)</span>
      <span style="font-size:14px;font-weight:800;color:var(--green)">$${plannedMargin.toLocaleString()}</span>
    </div>`;

  // Fees table
  const feesTable = feeLines.length > 0 ? `
    <div style="margin-bottom:6px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted)">Agency Fees <span style="font-size:9px;font-weight:400;margin-left:6px;background:var(--bg);color:var(--muted);padding:1px 6px;border-radius:10px;border:1px solid var(--border)">no markup</span></div>
    </div>
    <div class="card budget-desktop-table" style="padding:0;overflow:hidden;margin-bottom:6px">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Category</th><th style="text-align:right">Forecast</th><th style="text-align:right">Actuals paid</th><th style="text-align:right">Variance</th><th></th></tr></thead>
          <tbody>${makeRows(feeLines)}</tbody>
          <tfoot><tr style="background:var(--bg)">
            <td style="font-weight:800;color:var(--navy);padding-top:10px">Subtotal</td>
            <td style="text-align:right;font-weight:800;color:var(--navy);padding-top:10px">$${feeForecast.toLocaleString()}</td>
            <td style="text-align:right;font-weight:700;color:var(--muted);padding-top:10px">$${feeActuals.toLocaleString()}</td>
            <td colspan="2"></td>
          </tr></tfoot>
        </table>
      </div>
    </div>
    <div class="budget-mobile-cards">${makeMobileCards(feeLines)}</div>` : '';

  // Grand total footer
  const grandTotal = `
    <div style="border-top:2px solid var(--border);padding-top:14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;font-weight:800;color:var(--navy)">Total client budget</div>
      <div style="font-size:22px;font-weight:800;color:var(--navy);letter-spacing:-0.5px">$${clientTotal.toLocaleString()}</div>
    </div>`;

  return profitSummary + hardTable + feesTable + grandTotal;
}

function renderContactsTab(p) {
  const assigned=store.contacts.filter(c=>p.contactIds.includes(c.id));
  return `
    <div class="section-header"><div class="section-title">Project Clients</div><button class="btn btn-primary btn-sm" onclick="openAddContactToProjectModal()">+ Add</button></div>
    <div class="card">
      ${assigned.length===0?`<div class="empty-state"><div class="empty-icon">◇</div><p>No contacts linked.</p></div>`:''}
      ${assigned.map(c=>{const co=c.companyId?store.companies.find(x=>x.id===c.companyId):null;return`<div class="contact-row"><div class="contact-avatar">${initials(c.name)}</div><div style="flex:1;cursor:pointer" ${co?`onclick="navigateToCompany(${co.id})"`:''}><div class="contact-name">${c.name}</div><div class="contact-detail">${c.role||''}${co?' · '+co.name:''}</div><div class="contact-detail">${c.email||''}</div></div><div class="contact-actions"><button class="btn btn-ghost btn-sm" onclick="removeContact(${c.id})">Remove</button></div></div>`;}).join('')}
    </div>`;
}

// ─── INVOICES TAB ─────────────────────────────────────────────────────────────
function renderInvoicesTab(p) {
  if (!p.invoices) p.invoices = [];
  const invoices = p.invoices;
  const totalInvoiced = invoices.reduce((s,i)=>s+(i.amount||0),0);
  const totalPaid     = invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+(i.amount||0),0);
  const totalPending  = invoices.filter(i=>i.status==='pending').reduce((s,i)=>s+(i.amount||0),0);

  // Desktop table
  const tableHtml = invoices.length===0
    ? `<div class="empty-state"><div class="empty-icon">🧾</div><p>No invoices yet. Add one when a cost is agreed.</p></div>`
    : `<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap"><table class="table">
        <thead><tr><th>Vendor</th><th>Description</th><th>Category</th><th>Date</th><th style="text-align:right">Amount</th><th>Status</th><th></th></tr></thead>
        <tbody>${invoices.map(inv=>`<tr>
          <td style="font-weight:600">${inv.supplier}</td>
          <td style="color:var(--muted)">${inv.description||'—'}</td>
          <td style="color:var(--muted);font-size:12px">${inv.category}</td>
          <td style="color:var(--muted)">${inv.date?formatDate(inv.date):'—'}</td>
          <td style="text-align:right;font-weight:700">$${(inv.amount||0).toLocaleString()}</td>
          <td><button onclick="toggleInvoicePaid(${inv.id})" style="border:none;background:none;cursor:pointer;padding:0">
            <span class="status-badge badge-${inv.status==='paid'?'paid':'pending'}" style="cursor:pointer">${inv.status==='paid'?'✓ Paid':'Pending'}</span>
          </button></td>
          <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="deleteInvoice(${inv.id})">✕</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>`;

  // Mobile cards
  const mobileHtml = invoices.length===0 ? '' : invoices.map(inv=>`
    <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:12px;padding:14px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
        <div>
          <div style="font-size:14px;font-weight:700;color:var(--navy)">${inv.supplier}</div>
          ${inv.description?`<div style="font-size:12px;color:var(--muted);margin-top:2px">${inv.description}</div>`:''}
          <div style="font-size:11px;color:var(--muted);margin-top:2px">${inv.category} · ${inv.date?formatDate(inv.date):'—'}</div>
        </div>
        <div style="font-size:16px;font-weight:800;color:var(--navy)">$${(inv.amount||0).toLocaleString()}</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <button onclick="toggleInvoicePaid(${inv.id})" style="border:none;background:none;cursor:pointer;padding:0">
          <span class="status-badge badge-${inv.status==='paid'?'paid':'pending'}">${inv.status==='paid'?'✓ Paid':'Pending'}</span>
        </button>
        <button class="btn btn-ghost btn-sm" onclick="deleteInvoice(${inv.id})">✕</button>
      </div>
    </div>`).join('');

  return `
    <div class="budget-summary" style="margin-bottom:18px">
      <div class="budget-stat"><div class="budget-label">Total Invoiced</div><div class="budget-value">$${totalInvoiced.toLocaleString()}</div></div>
      <div class="budget-stat"><div class="budget-label">Paid</div><div class="budget-value good">$${totalPaid.toLocaleString()}</div></div>
      <div class="budget-stat"><div class="budget-label">Pending</div><div class="budget-value" style="color:var(--orange)">$${totalPending.toLocaleString()}</div></div>
    </div>
    <div class="section-header"><div class="section-title">Invoices</div><button class="btn btn-primary btn-sm" onclick="openAddInvoiceModal()">+ Add Invoice</button></div>
    <div class="budget-desktop-table">${tableHtml}</div>
    <div class="budget-mobile-cards">${mobileHtml}${invoices.length===0?`<div class="empty-state"><div class="empty-icon">🧾</div><p>No invoices yet.</p></div>`:''}</div>`;
}

function openAddInvoiceModal() {
  const db=store.globalSuppliers||[];
  const vendorOpts=db.map(s=>`<option value="${s.company}">${s.company} — ${s.category}</option>`).join('');
  const catOptions = BUDGET_CATS.map(c=>`<option>${c}</option>`).join('');
  openModal(`<div class="modal-title">Add Invoice</div><div class="form-grid">
    <div class="form-group full"><label>Vendor / Contractor</label><select id="inv-supplier"><option value="">— Select vendor —</option>${vendorOpts}</select>
      <div style="margin-top:6px;font-size:12px;color:var(--muted)">Not listed? <a href="#" onclick="closeModal();navigate('global-suppliers');setTimeout(openAddGlobalVendorModal,100);return false;" style="color:var(--blue)">Add to vendor database first →</a></div>
    </div>
    <div class="form-group full"><label>Description</label><input id="inv-desc" placeholder="e.g. Stage 1 build, Final delivery, Deposit..."></div>
    <div class="form-group"><label>Budget Category</label><select id="inv-cat">${catOptions}</select></div>
    <div class="form-group"><label>Amount ($)</label><input id="inv-amount" type="number" placeholder="0"></div>
    <div class="form-group"><label>Invoice Date</label><input id="inv-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    <div class="form-group"><label>Status</label><select id="inv-status"><option value="pending">Pending</option><option value="paid">Paid</option></select></div>
    <div class="form-group"><label>Notes</label><input id="inv-notes" placeholder="Optional"></div>
  </div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addInvoice()">Add Invoice</button></div>`);
}
function addInvoice() {
  const supplier=document.getElementById('inv-supplier').value.trim();
  if(!supplier){toast('Select a vendor');return;}
  const amount=parseFloat(document.getElementById('inv-amount').value)||0;
  if(!amount){toast('Amount required');return;}
  const p=currentProject;
  if(!p.invoices) p.invoices=[];
  if(!store.nextId.invoices) store.nextId.invoices=1;
  p.invoices.push({id:store.nextId.invoices++,supplier,description:document.getElementById('inv-desc').value.trim(),category:document.getElementById('inv-cat').value,amount,date:document.getElementById('inv-date').value,status:document.getElementById('inv-status').value,notes:document.getElementById('inv-notes').value});
  closeModal();save();toast('Invoice added');render();
}
function toggleInvoicePaid(id) {
  const p=currentProject;
  const inv=p.invoices.find(i=>i.id===id);
  if(!inv) return;
  inv.status=inv.status==='paid'?'pending':'paid';
  save();render();
}
function deleteInvoice(id) {
  currentProject.invoices=currentProject.invoices.filter(i=>i.id!==id);
  save();toast('Removed');render();
}

// ─── CALENDAR ─────────────────────────────────────────────────────────────────
function renderCalendar() {
  const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const monthNamesShort=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const dayInitials=['M','T','W','T','F','S','S'];

  // ── Mobile: week strip + agenda ──────────────────────────────────────────
  const todayMob=new Date(); todayMob.setHours(0,0,0,0);
  const dowMob=(todayMob.getDay()+6)%7;
  const weekMon=new Date(todayMob); weekMon.setDate(todayMob.getDate()-dowMob+calMobileWeekOffset*7);
  const weekDays=Array.from({length:7},(_,i)=>{const d=new Date(weekMon);d.setDate(weekMon.getDate()+i);return d;});
  const weekSun=weekDays[6];

  const weekStripHtml=weekDays.map((d,i)=>{
    const isToday=d.toDateString()===todayMob.toDateString();
    const dots=store.projects.filter(p=>{
      if(!p.startDate||!p.endDate)return false;
      const s=new Date(p.startDate+'T00:00:00'),e=new Date(p.endDate+'T23:59:59');
      return d>=s&&d<=e;
    }).slice(0,3).map(p=>`<span class="cal-wd-dot" style="background:${p.color||'#2563EB'}"></span>`).join('');
    return`<div class="cal-wd${isToday?' today':''}">
      <div class="cal-wd-name">${dayInitials[i]}</div>
      <div class="cal-wd-num">${d.getDate()}</div>
      <div class="cal-wd-dots">${dots}</div>
    </div>`;
  }).join('');

  const weekLabel=weekMon.getMonth()===weekSun.getMonth()
    ?`${monthNamesShort[weekMon.getMonth()]} ${weekMon.getFullYear()}`
    :`${monthNamesShort[weekMon.getMonth()]} – ${monthNamesShort[weekSun.getMonth()]} ${weekSun.getFullYear()}`;

  const weekProjects=store.projects.filter(p=>{
    if(!p.startDate&&!p.endDate)return false;
    const s=p.startDate?new Date(p.startDate+'T00:00:00'):null;
    const e=p.endDate?new Date(p.endDate+'T23:59:59'):null;
    return(!s||s<=weekSun)&&(!e||e>=weekMon);
  }).sort((a,b)=>new Date(a.startDate||'9999')-new Date(b.startDate||'9999'));

  const agendaHtml=weekProjects.length===0
    ?`<div class="empty-state" style="padding:16px 0"><p>No projects scheduled this week.</p></div>`
    :weekProjects.map(p=>{
      const health=getProjectHealth(p);
      return`<div class="cal-agenda-item" onclick="navigate('project-detail',${p.id})">
        <div class="cal-agenda-accent" style="background:${p.color||'#2563EB'}"></div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            ${health?`<div style="width:7px;height:7px;border-radius:50%;background:${health.color};flex-shrink:0"></div>`:''}
            <div class="cal-agenda-name">${p.name}</div>
          </div>
          ${p.client?`<div class="cal-agenda-meta">${p.client}</div>`:''}
          <div class="cal-agenda-meta">${formatDate(p.startDate)} → ${formatDate(p.endDate)}</div>
        </div>
        <div class="status-badge badge-${p.status}" style="align-self:flex-start;margin-top:2px">${p.status}</div>
      </div>`;
    }).join('');

  const mobileView=`
    <div class="cal-mobile-view">
      <div class="section-header" style="margin-bottom:8px"><div class="section-title">On the docket</div><div style="font-size:12px;color:var(--muted)">Next 5 days</div></div>
      <div class="cal-list" style="margin-bottom:24px">DOCKET_PLACEHOLDER</div>
      <div class="cal-week-nav">
        <button class="btn btn-ghost btn-sm" onclick="calMobileWeekOffset--;render()">← Prev</button>
        <div class="cal-week-label">${weekLabel}</div>
        <button class="btn btn-ghost btn-sm" onclick="calMobileWeekOffset++;render()">Next →</button>
      </div>
      <div class="cal-week-strip">${weekStripHtml}</div>
      <div class="section-header" style="margin-bottom:8px"><div class="section-title">This week</div></div>
      ${agendaHtml}
      <div class="section-header" style="margin-top:24px;margin-bottom:8px"><div class="section-title">All Projects</div></div>
      <div class="cal-list">ALL_PROJECTS_PLACEHOLDER</div>
    </div>`;

  const firstDay=new Date(calYear,calMonth,1),lastDay=new Date(calYear,calMonth+1,0);
  const startDow=(firstDay.getDay()+6)%7,totalDays=lastDay.getDate();
  const today=new Date();
  let cells=[];
  for(let i=0;i<startDow;i++) cells.push({date:new Date(calYear,calMonth,-startDow+i+1),thisMonth:false});
  for(let d=1;d<=totalDays;d++) cells.push({date:new Date(calYear,calMonth,d),thisMonth:true});
  while(cells.length%7!==0){const last=cells[cells.length-1].date;cells.push({date:new Date(last.getFullYear(),last.getMonth(),last.getDate()+1),thisMonth:false});}
  function renderCell(cell) {
    const isToday=cell.thisMonth&&cell.date.getDate()===today.getDate()&&cell.date.getMonth()===today.getMonth()&&cell.date.getFullYear()===today.getFullYear();
    const colIdx=(cell.date.getDay()+6)%7;
    const isWeekStart=colIdx===0,isWeekEnd=colIdx===6;
    const events=store.projects.filter(p=>{
      if(!p.startDate||!p.endDate)return false;
      const s=new Date(p.startDate+'T00:00:00'),e=new Date(p.endDate+'T23:59:59');
      return cell.date>=s&&cell.date<=e;
    });
    const evHtml=events.slice(0,3).map(p=>{
      const clr=p.color||'#2563EB';
      const isStart=cell.date.toDateString()===new Date(p.startDate+'T12:00:00').toDateString();
      const isEnd=cell.date.toDateString()===new Date(p.endDate+'T12:00:00').toDateString();
      const leftEdge=isStart||isWeekStart,rightEdge=isEnd||isWeekEnd;
      let margin,radius;
      if(leftEdge&&rightEdge){margin='1px 0';radius='3px';}
      else if(leftEdge){margin='1px -6px 1px 0';radius='3px 0 0 3px';}
      else if(rightEdge){margin='1px 0 1px -6px';radius='0 3px 3px 0';}
      else{margin='1px -6px';radius='0';}
      return`<div class="cal-event" style="background:${clr}CC;color:#fff;margin:${margin};border-radius:${radius};padding:2px ${leftEdge?'5px':'1px'}" onclick="event.stopPropagation();navigate('project-detail',${p.id})">${leftEdge?p.name.split('—')[0].trim():''}</div>`;
    }).join('');
    return`<div class="cal-day ${!cell.thisMonth?'other-month':''} ${isToday?'today':''}"><div class="cal-day-num">${cell.date.getDate()}</div>${evHtml}</div>`;
  }
  const sorted=[...store.projects].filter(p=>p.startDate||p.endDate).sort((a,b)=>new Date(a.startDate)-new Date(b.startDate));

  // On the docket — next 5 days
  const todayD=new Date(); todayD.setHours(0,0,0,0);
  const in5=new Date(todayD); in5.setDate(in5.getDate()+5);
  const docket=[];
  store.projects.forEach(p=>{
    if(p.startDate){const d=new Date(p.startDate+'T12:00:00');if(d>=todayD&&d<=in5)docket.push({date:d,label:p.name,sublabel:'Project kicks off',icon:'▦',color:p.color||'var(--blue)',projectId:p.id});}
    if(p.endDate){const d=new Date(p.endDate+'T12:00:00');if(d>=todayD&&d<=in5)docket.push({date:d,label:p.name,sublabel:'Deadline',icon:'⚑',color:'var(--red)',projectId:p.id});}
    if(p.production&&p.production.shootDays){p.production.shootDays.forEach(sd=>{const d=new Date(sd.date+'T12:00:00');if(d>=todayD&&d<=in5)docket.push({date:d,label:sd.location||p.name,sublabel:p.name+(sd.callTime?' · Call '+sd.callTime:''),icon:'◉',color:'var(--orange)',projectId:p.id});});}
    if(p.tasks){p.tasks.forEach(t=>{if(!t.dueDate||t.status==='done')return;const d=new Date(t.dueDate+'T12:00:00');if(d>=todayD&&d<=in5)docket.push({date:d,label:t.name,sublabel:p.name+' · '+t.category+(t.assignedTo?' · '+t.assignedTo:''),icon:'◆',color:t.status==='in-progress'?'var(--blue)':t.status==='blocked'?'var(--red)':'var(--muted)',projectId:p.id});});}
  });
  docket.sort((a,b)=>a.date-b.date);
  const docketHtml = docket.length===0
    ? `<div class="empty-state" style="padding:20px"><p>Nothing scheduled in the next 5 days.</p></div>`
    : docket.map(item=>`<div class="cal-list-item" onclick="navigate('project-detail',${item.projectId})">
        <div style="background:${item.color};color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">${item.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:14px">${item.label}</div>
          <div style="font-size:12px;color:var(--muted)">${item.sublabel}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:12px;font-weight:700;color:var(--navy)">${item.date.toLocaleDateString('en-CA',{weekday:'short',day:'numeric',month:'short'})}</div>
          <div style="font-size:11px;color:var(--muted)">${item.date.toDateString()===todayD.toDateString()?'Today':Math.ceil((item.date-todayD)/86400000)+' days away'}</div>
        </div>
      </div>`).join('');

  const allProjectsHtml=sorted.map(p=>`<div class="cal-list-item" onclick="navigate('project-detail',${p.id})"><div class="cal-dot" style="background:${p.color||'var(--blue)'}"></div><div style="flex:1;min-width:0"><div style="font-weight:700;font-size:14px">${p.name}</div><div style="font-size:12px;color:var(--muted)">${p.client}</div></div><div style="text-align:right;flex-shrink:0"><div style="font-size:12px;font-weight:600">${formatDate(p.startDate)}</div><div style="font-size:11px;color:var(--muted)">→ ${formatDate(p.endDate)}</div></div><div class="status-badge badge-${p.status}">${p.status}</div></div>`).join('');

  const finalMobileView=mobileView.replace('DOCKET_PLACEHOLDER',docketHtml).replace('ALL_PROJECTS_PLACEHOLDER',allProjectsHtml);

  return `
    <div class="topbar"><div><div class="page-title">Calendar</div><div class="page-sub">Project timeline overview</div></div></div>
    <div class="content">
      ${finalMobileView}
      <div class="cal-desktop-view">
        <div class="section-header"><div class="section-title">On the docket</div><div style="font-size:12px;color:var(--muted)">Next 5 days</div></div>
        <div class="cal-list" style="margin-bottom:24px">${docketHtml}</div>
        <div class="cal-nav"><button class="btn btn-ghost btn-sm" onclick="calMonth--;if(calMonth<0){calMonth=11;calYear--;}render()">← Prev</button><div class="cal-month">${monthNames[calMonth]} ${calYear}</div><button class="btn btn-ghost btn-sm" onclick="calMonth++;if(calMonth>11){calMonth=0;calYear++;}render()">Next →</button></div>
        <div class="cal-grid"><div class="cal-header">${days.map(d=>`<div class="cal-header-cell">${d}</div>`).join('')}</div><div class="cal-body">${cells.map(c=>renderCell(c)).join('')}</div></div>
        <div class="section-header"><div class="section-title">All Projects</div></div>
        <div class="cal-list">${allProjectsHtml}</div>
      </div>
    </div>`;
}

// ─── IDEAS ────────────────────────────────────────────────────────────────────
function renderIdeas() {
  return `
    <div class="topbar"><div><div class="page-title">Ideas Park</div><div class="page-sub">A space for wild, half-formed, and brilliant ideas.</div></div><button class="btn btn-primary" onclick="openNewIdeaModal()">+ Add Idea</button></div>
    <div class="content">
      ${store.ideas.length===0?`<div class="empty-state"><div class="empty-icon">✦</div><p>No ideas yet. Drop the first one.</p></div>`:''}
      <div class="ideas-grid">${store.ideas.map(idea=>`<div class="idea-card"><div class="idea-category-tag">${idea.category}</div><div class="idea-title">${idea.title}</div><div class="idea-desc">${idea.description}</div><div class="idea-footer"><div class="idea-by">By <strong>${idea.submittedBy}</strong> · ${formatDate(idea.date)}</div><button class="btn btn-ghost btn-sm" onclick="deleteIdea(${idea.id})">✕</button></div></div>`).join('')}</div>
    </div>`;
}

// ─── LEADS ────────────────────────────────────────────────────────────────────
const LEAD_STATUSES=[{key:'not-contacted',label:'Not Contacted'},{key:'reached-out',label:'Reached Out'},{key:'in-conversation',label:'In Conversation'},{key:'proposal-sent',label:'Proposal Sent'},{key:'won',label:'Won'},{key:'lost',label:'Lost'}];
function renderLeads() {
  const ap=LEAD_STATUSES.filter(s=>!['won','lost'].includes(s.key)).map(s=>({...s,leads:store.leads.filter(l=>l.status===s.key),value:store.leads.filter(l=>l.status===s.key).reduce((sum,l)=>sum+(l.estimatedValue||0),0)}));
  const tv=store.leads.filter(l=>!['won','lost'].includes(l.status)).reduce((s,l)=>s+(l.estimatedValue||0),0);
  return `
    <div class="topbar"><div><div class="page-title">Leads</div><div class="page-sub">${store.leads.length} leads · $${tv.toLocaleString()} pipeline</div></div><button class="btn btn-primary" onclick="openNewLeadModal()">+ Add</button></div>
    <div class="content">
      <div class="pipeline">${ap.map(s=>`<div class="pipeline-col"><div class="pipeline-col-label">${s.label}</div><div class="pipeline-col-count">${s.leads.length}</div>${s.value>0?`<div class="pipeline-col-value">$${s.value.toLocaleString()}</div>`:''}</div>`).join('')}</div>
      <div class="section-header"><div class="section-title">All Leads</div></div>
      <div class="card">
        ${store.leads.length===0?`<div class="empty-state"><div class="empty-icon">◉</div><p>No leads yet.</p></div>`:''}
        ${store.leads.map(l=>{const converted=l.convertedProjectId?store.projects.find(p=>p.id===l.convertedProjectId):null;const convertedCompany=converted&&converted.clientId?store.companies.find(c=>c.id===converted.clientId):store.companies.find(c=>c.name.toLowerCase()===l.company.toLowerCase());const isHighlighted=l.id===highlightLeadId;return`<div class="lead-row" id="lead-row-${l.id}" style="${isHighlighted?'background:var(--accent-light);border-radius:10px;transition:background 1.5s':''}"><div class="lead-avatar">${initials(l.company)}</div><div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><div class="lead-name">${l.company}</div><div class="status-badge badge-${converted?'converted':l.status}">${converted?'Converted':LEAD_STATUSES.find(s=>s.key===l.status)?.label||l.status}</div></div><div class="lead-detail">${l.contactName}${l.contactRole?' · '+l.contactRole:''}${l.contactEmail?' · '+l.contactEmail:''}${l.contactPhone?' · '+l.contactPhone:''} · ${l.projectType}</div>${l.estimatedValue?`<div class="lead-detail" style="color:var(--blue);font-weight:700">Est. $${l.estimatedValue.toLocaleString()}</div>`:''}${converted?`<div class="lead-detail" style="color:var(--green);font-weight:600;cursor:pointer" onclick="navigate('project-detail',${converted.id})">→ ${converted.name}</div>`:''}${convertedCompany?`<div class="lead-detail" style="color:var(--muted);cursor:pointer" onclick="navigateToCompany(${convertedCompany.id})">◇ Client: ${convertedCompany.name}</div>`:''}${l.notes?`<div class="lead-notes">${l.notes}</div>`:''}</div><div class="lead-actions">${!converted&&l.status==='won'?`<button class="btn btn-primary btn-sm" onclick="openConvertLeadModal(${l.id})">Convert →</button>`:''}${!converted?`<button class="btn btn-ghost btn-sm" onclick="openEditLeadModal(${l.id})">Edit</button>`:''}<button class="btn btn-ghost btn-sm" onclick="deleteLead(${l.id})">✕</button></div></div>`}).join('')}
      </div>
    </div>`;
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
const AVAIL_LABEL = {available:'Available',busy:'Busy',away:'Away'};
const CONTRACT_LABEL = {'not-sent':'No Contract','sent':'Contract Sent','signed':'Signed','expired':'Expired'};
const IR35_LABEL = {'outside':'Self-Employed','inside':'T4 Employee','not-assessed':'Status TBC'};

function renderTeam() {
  const avail = {available:0,busy:0,away:0};
  store.team.forEach(m=>{ const a=getMemberAvailability(m); if(avail[a]!==undefined) avail[a]++; });
  const pendingTotal = store.team.reduce((s,m)=>s+m.payments.filter(p=>p.status==='pending').reduce((a,p)=>a+p.amount,0),0);
  const overdueTotal = store.team.reduce((s,m)=>s+m.payments.filter(p=>p.status==='overdue').reduce((a,p)=>a+p.amount,0),0);
  return `
    <div class="topbar"><div><div class="page-title">Team</div><div class="page-sub">${store.team.length} freelancers · ${avail.available} available</div></div><button class="btn btn-primary" onclick="openNewMemberModal()">+ Add</button></div>
    <div class="content">
      <div class="stats-row" style="margin-bottom:20px">
        <div class="stat-card"><div class="stat-label">Available</div><div class="stat-value" style="color:var(--green)">${avail.available}</div></div>
        <div class="stat-card"><div class="stat-label">Busy</div><div class="stat-value" style="color:var(--accent-dark)">${avail.busy}</div></div>
        <div class="stat-card"><div class="stat-label">Pending Pay</div><div class="stat-value" style="color:var(--orange)">$${pendingTotal.toLocaleString()}</div></div>
        <div class="stat-card"><div class="stat-label">Overdue</div><div class="stat-value" style="color:var(--red)">$${overdueTotal.toLocaleString()}</div></div>
      </div>
      <div class="team-grid">${store.team.map(m=>{
        const pending=m.payments.filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
        const overdue=m.payments.filter(p=>p.status==='overdue').reduce((s,p)=>s+p.amount,0);
        return `<div class="team-card" style="cursor:pointer;align-items:flex-start;text-align:left" onclick="navigate('team-profile',undefined,${m.id})">
          <div style="display:flex;align-items:center;gap:12px;width:100%;margin-bottom:10px">
            <div class="team-avatar-lg" style="margin-bottom:0;flex-shrink:0">${initials(m.name)}</div>
            <div style="min-width:0">
              <div class="team-name">${m.name}</div>
              <div class="team-role">${m.role}</div>
              <div class="team-rate" style="margin-top:2px">$${m.rate}/day</div>
            </div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px">
            <span class="status-badge badge-${getMemberAvailability(m)}">${AVAIL_LABEL[getMemberAvailability(m)]||getMemberAvailability(m)}</span>
            <span class="status-badge badge-${m.contractStatus}">${CONTRACT_LABEL[m.contractStatus]||m.contractStatus}</span>
            <span class="status-badge badge-${m.ir35}">${IR35_LABEL[m.ir35]||m.ir35}</span>
          </div>
          ${m.availableFrom&&m.availability!=='available'?`<div style="font-size:11px;color:var(--muted);margin-bottom:8px">Available from ${formatDate(m.availableFrom)}</div>`:''}
          <div class="skill-tags" style="justify-content:flex-start">${m.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
          ${overdue>0?`<div style="margin-top:10px;font-size:12px;font-weight:700;color:var(--red)">⚠ $${overdue.toLocaleString()} overdue</div>`:''}
          ${pending>0&&overdue===0?`<div style="margin-top:10px;font-size:12px;color:var(--muted)">$${pending.toLocaleString()} pending</div>`:''}
        </div>`;
      }).join('')}</div>
    </div>`;
}

function renderTeamProfile() {
  const m=currentMember; if(!m) return '';
  const allPaid=m.payments.filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const pending=m.payments.filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
  const overdue=m.payments.filter(p=>p.status==='overdue').reduce((s,p)=>s+p.amount,0);
  return `
    <div class="topbar"><div><div class="back-btn" onclick="navigate('team')">← Team</div><div class="page-title">${m.name}</div><div class="page-sub">${m.role} · $${m.rate}/day</div></div>
      <button class="btn btn-ghost btn-sm" onclick="openEditMemberCRMModal(${m.id})">Edit</button>
    </div>
    <div class="content">
      <div class="member-profile-header">
        <div class="member-avatar-xl">${initials(m.name)}</div>
        <div>
          <div class="member-profile-name">${m.name}</div>
          <div class="member-profile-role">${m.role} · ${m.email}</div>
          <div class="member-profile-badges">
            <span class="status-badge badge-${getMemberAvailability(m)}">${AVAIL_LABEL[getMemberAvailability(m)]||getMemberAvailability(m)}</span>
            <span class="status-badge badge-${m.contractStatus}">${CONTRACT_LABEL[m.contractStatus]||m.contractStatus}</span>
            <span class="status-badge badge-${m.ir35}">${IR35_LABEL[m.ir35]||m.ir35}</span>
          </div>
        </div>
      </div>
      <div class="tabs">
        <div class="tab ${currentMemberTab==='overview'?'active':''}" onclick="currentMemberTab='overview';render()">Overview</div>
        <div class="tab ${currentMemberTab==='contracts'?'active':''}" onclick="currentMemberTab='contracts';render()">Contracts</div>
        <div class="tab ${currentMemberTab==='payments'?'active':''}" onclick="currentMemberTab='payments';render()">Payments</div>
      </div>
      ${currentMemberTab==='overview'?renderMemberOverview(m):''}
      ${currentMemberTab==='contracts'?renderMemberContracts(m):''}
      ${currentMemberTab==='payments'?renderMemberPayments(m):''}
    </div>`;
}

function renderMemberOverview(m) {
  const projects=store.projects.filter(p=>p.teamIds.includes(m.id));
  const today = new Date(); today.setHours(0,0,0,0);
  const currentAvail = getMemberAvailability(m);
  const periods = (m.availabilityPeriods||[]);
  const periodRows = periods.map(p => {
    const from = new Date(p.from+'T00:00:00'); const to = new Date(p.to+'T00:00:00');
    const isCurrent = today >= from && today <= to;
    const isPast = today > to;
    return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);opacity:${isPast?'0.5':'1'}">
      <span class="status-badge badge-${p.type}" style="flex-shrink:0">${AVAIL_LABEL[p.type]||p.type}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600;color:var(--navy)">${formatDate(p.from)} → ${formatDate(p.to)}</div>
        ${p.note?`<div style="font-size:11px;color:var(--muted);margin-top:2px">${p.note}</div>`:''}
      </div>
      ${isCurrent?`<span style="font-size:10px;font-weight:700;background:var(--accent);color:var(--navy);padding:2px 7px;border-radius:20px;flex-shrink:0">Now</span>`:''}
      <button class="btn btn-ghost btn-sm" onclick="deleteAvailabilityPeriod(${m.id},${p.id})" style="flex-shrink:0">✕</button>
    </div>`;
  }).join('');
  return `
    <div class="crm-grid">
      <div class="crm-stat"><div class="crm-stat-label">Day Rate</div><div class="crm-stat-value">$${m.rate}</div></div>
      <div class="crm-stat"><div class="crm-stat-label">Payment Terms</div><div class="crm-stat-value">${m.paymentTerms} days</div></div>
      <div class="crm-stat"><div class="crm-stat-label">Current Status</div><div class="crm-stat-value"><span class="status-badge badge-${currentAvail}">${AVAIL_LABEL[currentAvail]||currentAvail}</span></div></div>
      <div class="crm-stat"><div class="crm-stat-label">Worker Status</div><div class="crm-stat-value"><span class="status-badge badge-${m.ir35}">${IR35_LABEL[m.ir35]}</span></div></div>
    </div>
    <div class="section-header"><div class="section-title">Availability Schedule</div><button class="btn btn-primary btn-sm" onclick="openAddAvailabilityPeriodModal(${m.id})">+ Add Period</button></div>
    <div class="card" style="margin-bottom:18px;padding:0 16px">
      ${periods.length===0
        ? `<div style="padding:20px 0;color:var(--muted);font-size:13px;text-align:center">No periods scheduled. Add one to plan ahead.</div>`
        : periodRows}
    </div>
    <div class="section-header"><div class="section-title">Skills</div></div>
    <div class="card" style="margin-bottom:18px"><div class="skill-tags" style="justify-content:flex-start">${m.skills.length?m.skills.map(s=>`<span class="skill-tag">${s}</span>`).join(''):'<span style="color:var(--muted);font-size:13px">No skills listed.</span>'}</div></div>
    <div class="section-header"><div class="section-title">Active Projects</div></div>
    <div class="card" style="margin-bottom:18px">${projects.length===0?`<div class="empty-state" style="padding:20px"><p>Not on any projects.</p></div>`:projects.map(p=>`<div class="contact-row" style="cursor:pointer" onclick="navigate('project-detail',${p.id})"><div style="width:10px;height:10px;border-radius:50%;background:${p.status==='active'?'var(--green)':p.status==='planning'?'var(--accent)':'var(--muted)'};flex-shrink:0"></div><div><div class="contact-name">${p.name}</div><div class="contact-detail">${p.client} · <span class="status-badge badge-${p.status}">${p.status}</span></div></div><div style="margin-left:auto;font-size:12px;font-weight:700;color:var(--muted)">${(p.teamAllocation&&p.teamAllocation[m.id])||0} days</div></div>`).join('')}</div>
    ${m.notes?`<div class="section-header"><div class="section-title">Notes</div></div><div class="brief-content"><div class="brief-section-content">${m.notes}</div></div>`:''}`;
}

function renderMemberPayments(m) {
  const allPaid=m.payments.filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const pending=m.payments.filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
  const overdue=m.payments.filter(p=>p.status==='overdue').reduce((s,p)=>s+p.amount,0);
  const sorted=[...m.payments].sort((a,b)=>b.date.localeCompare(a.date));
  return `
    <div class="payment-total-row">
      <div class="payment-total"><div class="payment-total-label">Total Paid</div><div class="payment-total-value">$${allPaid.toLocaleString()}</div></div>
      <div class="payment-total"><div class="payment-total-label">Pending</div><div class="payment-total-value pending-val">$${pending.toLocaleString()}</div></div>
      <div class="payment-total"><div class="payment-total-label">Overdue</div><div class="payment-total-value overdue-val">$${overdue.toLocaleString()}</div></div>
    </div>
    <div class="section-header"><div class="section-title">Payment History</div><button class="btn btn-primary btn-sm" onclick="openAddPaymentModal()">+ Log Payment</button></div>
    <div class="card" style="padding:0;overflow:hidden">
      ${sorted.length===0?`<div class="empty-state"><div class="empty-icon">$</div><p>No payments logged yet.</p></div>`:`<div class="table-wrap"><table class="table">
        <thead><tr><th>Description</th><th>Project</th><th>Date</th><th>Status</th><th style="text-align:right">Amount</th><th></th></tr></thead>
        <tbody>${sorted.map(p=>{const proj=p.projectId?store.projects.find(x=>x.id===p.projectId):null;return`<tr>
          <td style="font-weight:600">${p.description}</td>
          <td style="color:var(--muted);font-size:12px">${proj?proj.name:'—'}</td>
          <td style="color:var(--muted)">${formatDate(p.date)}</td>
          <td><span class="status-badge badge-${p.status}">${p.status}</span></td>
          <td style="text-align:right;font-weight:700">$${p.amount.toLocaleString()}</td>
          <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="cyclePaymentStatus(${p.id})" title="Click to change status">↻</button> <button class="btn btn-ghost btn-sm" onclick="deletePayment(${p.id})">✕</button></td>
        </tr>`}).join('')}</tbody>
      </table></div>`}
    </div>`;
}

function renderMemberContracts(m) {
  const CONTRACT_STATUS = {'not-sent':'Not Sent','sent':'Sent','signed':'Signed / Returned'};
  const sorted = [...m.contracts].sort((a,b)=>b.id-a.id);
  const signedCount = m.contracts.filter(c=>c.status==='signed').length;
  const pendingCount = m.contracts.filter(c=>c.status==='sent').length;

  // Drive folder row
  const driveRow = `
    <div class="crm-stat" style="grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:12px">
      <div>
        <div class="crm-stat-label">Google Drive Folder</div>
        ${m.driveFolder
          ? `<a href="${m.driveFolder}" target="_blank" style="color:var(--blue);font-weight:700;font-size:14px">Open ${m.name.split(' ')[0]}'s folder ↗</a>`
          : `<div style="font-size:13px;color:var(--muted)">No folder linked yet.</div>`}
      </div>
      <button class="btn btn-ghost btn-sm" onclick="openEditDriveFolderModal()">
        ${m.driveFolder?'Change':'Set Folder'}
      </button>
    </div>`;

  // Templates section
  const templatesHtml = store.contractTemplates.length===0
    ? `<div style="font-size:13px;color:var(--muted);padding:12px 0">No templates saved yet.</div>`
    : store.contractTemplates.map(t=>`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${t.name}</div>
            ${t.description?`<div style="font-size:11px;color:var(--muted)">${t.description}</div>`:''}
          </div>
          ${t.url?`<a href="${t.url}" target="_blank" class="btn btn-ghost btn-sm">Open ↗</a>`:''}
          <button class="btn btn-ghost btn-sm" onclick="deleteTemplate(${t.id})">✕</button>
        </div>`).join('');

  // Contract engagements table
  const contractsTable = sorted.length===0
    ? `<div class="empty-state"><div class="empty-icon">📄</div><p>No contracts logged for ${m.name.split(' ')[0]} yet.</p></div>`
    : `<div class="table-wrap"><table class="table">
        <thead><tr><th>Project</th><th>Template</th><th>Sent</th><th>Signed / Returned</th><th>Status</th><th></th></tr></thead>
        <tbody>${sorted.map(c=>{
          const proj=store.projects.find(p=>p.id===c.projectId);
          const tmpl=store.contractTemplates.find(t=>t.id===c.templateId);
          return `<tr>
            <td style="font-weight:700">${proj?proj.name:'—'}</td>
            <td style="color:var(--muted);font-size:12px">${tmpl?tmpl.name:'—'}</td>
            <td style="color:var(--muted)">${c.sentDate?formatDate(c.sentDate):'—'}</td>
            <td style="color:var(--muted)">${c.signedDate?formatDate(c.signedDate):'—'}</td>
            <td><span class="status-badge badge-${c.status==='signed'?'signed':c.status==='sent'?'sent':'not-sent'}">${CONTRACT_STATUS[c.status]||c.status}</span></td>
            <td style="text-align:right;white-space:nowrap">
              <button class="btn btn-ghost btn-sm" onclick="cycleContractStatus(${c.id})" title="Change status">↻</button>
              <button class="btn btn-ghost btn-sm" onclick="deleteContract(${c.id})">✕</button>
            </td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>`;

  return `
    <div class="crm-grid" style="margin-bottom:18px">
      ${driveRow}
      <div class="crm-stat"><div class="crm-stat-label">Contracts Signed</div><div class="crm-stat-value" style="color:var(--green)">${signedCount}</div></div>
      <div class="crm-stat"><div class="crm-stat-label">Awaiting Signature</div><div class="crm-stat-value" style="color:var(--orange)">${pendingCount}</div></div>
    </div>

    <div class="section-header"><div class="section-title">Contract Templates</div><button class="btn btn-ghost btn-sm" onclick="openAddTemplateModal()">+ Add Template</button></div>
    <div class="card" style="margin-bottom:18px">${templatesHtml}</div>

    <div class="section-header"><div class="section-title">Project Contracts</div><button class="btn btn-primary btn-sm" onclick="openLogContractModal()">+ Log Contract</button></div>
    <div class="card" style="padding:0;overflow:hidden">${contractsTable}</div>`;
}

function openEditDriveFolderModal() {
  const m=currentMember;
  openModal(`
    <div class="modal-title">Google Drive Folder</div>
    <div class="form-group full" style="margin-bottom:0">
      <label>Paste the Google Drive folder link for ${m.name.split(' ')[0]}'s contracts</label>
      <input id="df-url" value="${m.driveFolder||''}" placeholder="https://drive.google.com/drive/folders/...">
    </div>
    <div style="font-size:12px;color:var(--muted);margin-top:8px">Right-click any folder in Google Drive → Share → Copy link</div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveDriveFolder()">Save</button></div>`);
}
function saveDriveFolder() {
  currentMember.driveFolder=document.getElementById('df-url').value.trim();
  closeModal();save();toast('Drive folder saved');render();
}

function openAddTemplateModal() {
  openModal(`
    <div class="modal-title">Add Contract Template</div>
    <div class="form-grid">
      <div class="form-group full"><label>Template Name</label><input id="t-name" placeholder="e.g. Standard Freelancer Agreement"></div>
      <div class="form-group full"><label>Google Doc / Drive Link</label><input id="t-url" placeholder="https://docs.google.com/..."></div>
      <div class="form-group full"><label>Description</label><input id="t-desc" placeholder="e.g. For day-rate freelancers, outside IR35"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addTemplate()">Add Template</button></div>`);
}
function addTemplate() {
  const n=document.getElementById('t-name').value.trim();if(!n){toast('Name required');return;}
  store.contractTemplates.push({id:store.nextId.templates++,name:n,url:document.getElementById('t-url').value.trim(),description:document.getElementById('t-desc').value.trim()});
  closeModal();save();toast('Template added');render();
}
function deleteTemplate(id){store.contractTemplates=store.contractTemplates.filter(t=>t.id!==id);save();toast('Template removed');render();}

function openLogContractModal() {
  const m=currentMember;
  const projectOpts=store.projects.filter(p=>p.teamIds.includes(m.id)).map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  const templateOpts=store.contractTemplates.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  if(!projectOpts){toast(`${m.name.split(' ')[0]} isn't assigned to any projects yet.`);return;}
  openModal(`
    <div class="modal-title">Log Contract</div>
    <div class="form-grid">
      <div class="form-group full"><label>Project</label><select id="c-project"><option value="">— Select —</option>${projectOpts}</select></div>
      <div class="form-group full"><label>Template Used</label><select id="c-template"><option value="">— None / Other —</option>${templateOpts}</select></div>
      <div class="form-group"><label>Status</label><select id="c-status"><option value="not-sent">Not Sent</option><option value="sent" selected>Sent</option><option value="signed">Signed / Returned</option></select></div>
      <div class="form-group"><label>Date Sent</label><input id="c-sent" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group"><label>Date Signed / Returned</label><input id="c-signed" type="date"></div>
      <div class="form-group full"><label>Notes</label><input id="c-notes" placeholder="Any notes..."></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="logContract()">Log Contract</button></div>`);
}
function logContract() {
  const proj=document.getElementById('c-project').value;if(!proj){toast('Select a project');return;}
  const m=currentMember;
  m.contracts.push({id:store.nextId.contracts++,projectId:parseInt(proj),templateId:parseInt(document.getElementById('c-template').value)||null,status:document.getElementById('c-status').value,sentDate:document.getElementById('c-sent').value,signedDate:document.getElementById('c-signed').value,notes:document.getElementById('c-notes').value});
  closeModal();save();toast('Contract logged');render();
}
function cycleContractStatus(id) {
  const cycle=['not-sent','sent','signed'];
  const c=currentMember.contracts.find(x=>x.id===id);
  c.status=cycle[(cycle.indexOf(c.status)+1)%cycle.length];
  if(c.status==='signed'&&!c.signedDate)c.signedDate=new Date().toISOString().split('T')[0];
  save();toast('Status: '+c.status);render();
}
function deleteContract(id){currentMember.contracts=currentMember.contracts.filter(c=>c.id!==id);save();toast('Removed');render();}

function openAddPaymentModal() {
  const projectOpts=store.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  openModal(`
    <div class="modal-title">Log Payment</div>
    <div class="form-grid">
      <div class="form-group full"><label>Description</label><input id="pay-desc" placeholder="e.g. Summer Pop-Up — 5 days"></div>
      <div class="form-group full"><label>Project</label><select id="pay-project"><option value="">— No project —</option>${projectOpts}</select></div>
      <div class="form-group"><label>Amount ($)</label><input id="pay-amount" type="number" placeholder="0"></div>
      <div class="form-group"><label>Status</label><select id="pay-status"><option value="pending">Pending</option><option value="paid">Paid</option><option value="overdue">Overdue</option></select></div>
      <div class="form-group"><label>Date</label><input id="pay-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addPayment()">Log Payment</button></div>`);
}
function addPayment() {
  const d=document.getElementById('pay-desc').value.trim();if(!d){toast('Description required');return;}
  const m=currentMember;
  const projId=parseInt(document.getElementById('pay-project').value)||null;
  m.payments.push({id:store.nextId.payments++,description:d,projectId:projId,amount:parseFloat(document.getElementById('pay-amount').value)||0,date:document.getElementById('pay-date').value,status:document.getElementById('pay-status').value});
  closeModal();save();toast('Payment logged');render();
}
function deletePayment(id){currentMember.payments=currentMember.payments.filter(p=>p.id!==id);save();toast('Removed');render();}
function cyclePaymentStatus(id) {
  const cycle=['pending','paid','overdue'];
  const p=currentMember.payments.find(x=>x.id===id);
  p.status=cycle[(cycle.indexOf(p.status)+1)%cycle.length];
  save();toast('Status: '+p.status);render();
}

function getMemberAvailability(m) {
  const today = new Date(); today.setHours(0,0,0,0);
  const active = (m.availabilityPeriods||[]).find(p => {
    const from = new Date(p.from+'T00:00:00'); const to = new Date(p.to+'T00:00:00');
    return today >= from && today <= to;
  });
  return active ? active.type : m.availability;
}

function openAddAvailabilityPeriodModal(memberId) {
  const today = new Date().toISOString().split('T')[0];
  openModal(`
    <div class="modal-title">Add Availability Period</div>
    <div class="form-grid">
      <div class="form-group"><label>From</label><input id="ap-from" type="date" value="${today}"></div>
      <div class="form-group"><label>To</label><input id="ap-to" type="date" value="${today}"></div>
      <div class="form-group"><label>Status</label><select id="ap-type">
        <option value="available">Available</option>
        <option value="busy">Busy</option>
        <option value="away">Away</option>
      </select></div>
      <div class="form-group"><label>Note (optional)</label><input id="ap-note" placeholder="e.g. On another project, Holiday..."></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveAvailabilityPeriod(${memberId})">Add Period</button>
    </div>`);
}

function saveAvailabilityPeriod(memberId) {
  const m = store.team.find(t => t.id === memberId);
  const from = document.getElementById('ap-from').value;
  const to = document.getElementById('ap-to').value;
  if (!from || !to) { toast('Please set both dates'); return; }
  if (to < from) { toast('End date must be after start date'); return; }
  if (!m.availabilityPeriods) m.availabilityPeriods = [];
  m.availabilityPeriods.push({
    id: Date.now(),
    from, to,
    type: document.getElementById('ap-type').value,
    note: document.getElementById('ap-note').value.trim()
  });
  m.availabilityPeriods.sort((a,b) => a.from.localeCompare(b.from));
  closeModal(); save(); toast('Period added'); render();
}

function deleteAvailabilityPeriod(memberId, periodId) {
  const m = store.team.find(t => t.id === memberId);
  m.availabilityPeriods = m.availabilityPeriods.filter(p => p.id !== periodId);
  save(); toast('Period removed'); render();
}

function openEditMemberCRMModal(id) {
  const m=store.team.find(t=>t.id===id);
  openModal(`
    <div class="modal-title">Edit ${m.name}</div>
    <div class="form-grid">
      <div class="form-group"><label>Full Name</label><input id="f-name" value="${m.name}"></div>
      <div class="form-group"><label>Role</label><input id="f-role" value="${m.role}"></div>
      <div class="form-group"><label>Email</label><input id="f-email" value="${m.email}"></div>
      <div class="form-group"><label>Day Rate ($)</label><input id="f-rate" type="number" value="${m.rate}"></div>
      <div class="form-group full"><label>Skills (comma separated)</label><input id="f-skills" value="${m.skills.join(', ')}"></div>
      <div class="form-group"><label>Availability</label><select id="f-avail"><option value="available" ${m.availability==='available'?'selected':''}>Available</option><option value="busy" ${m.availability==='busy'?'selected':''}>Busy</option><option value="away" ${m.availability==='away'?'selected':''}>Away</option></select></div>
      <div class="form-group"><label>Available From</label><input id="f-avfrom" type="date" value="${m.availableFrom||''}"></div>
      <div class="form-group"><label>Contract Status</label><select id="f-contract"><option value="not-sent" ${m.contractStatus==='not-sent'?'selected':''}>Not Sent</option><option value="sent" ${m.contractStatus==='sent'?'selected':''}>Sent</option><option value="signed" ${m.contractStatus==='signed'?'selected':''}>Signed</option><option value="expired" ${m.contractStatus==='expired'?'selected':''}>Expired</option></select></div>
      <div class="form-group"><label>Worker Status</label><select id="f-ir35"><option value="outside" ${m.ir35==='outside'?'selected':''}>Self-Employed</option><option value="inside" ${m.ir35==='inside'?'selected':''}>T4 Employee</option><option value="not-assessed" ${m.ir35==='not-assessed'?'selected':''}>Not Assessed</option></select></div>
      <div class="form-group"><label>Payment Terms (days)</label><input id="f-terms" value="${m.paymentTerms||'30'}"></div>
      <div class="form-group"></div>
      <div class="form-group full"><label>Notes</label><textarea id="f-notes">${m.notes||''}</textarea></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveMemberCRM(${id})">Save</button></div>`);
}
function saveMemberCRM(id) {
  const m=store.team.find(t=>t.id===id);
  m.name=document.getElementById('f-name').value.trim()||m.name;
  m.role=document.getElementById('f-role').value;
  m.email=document.getElementById('f-email').value;
  m.rate=parseInt(document.getElementById('f-rate').value)||0;
  m.skills=document.getElementById('f-skills').value.split(',').map(s=>s.trim()).filter(Boolean);
  m.availability=document.getElementById('f-avail').value;
  m.availableFrom=document.getElementById('f-avfrom').value;
  m.contractStatus=document.getElementById('f-contract').value;
  m.ir35=document.getElementById('f-ir35').value;
  m.paymentTerms=document.getElementById('f-terms').value;
  m.notes=document.getElementById('f-notes').value;
  currentMember=m;
  closeModal();save();toast('Saved');render();
}

// ─── TIMELINE TAB ─────────────────────────────────────────────────────────────
const TASK_CATS = ['Creative','Production','Client','Finance','Admin','Other'];
const TASK_STATUS = {'not-started':'Not Started','in-progress':'In Progress','done':'Done','blocked':'Blocked'};
const TASK_COLORS = {'done':'var(--green)','in-progress':'var(--blue)','blocked':'var(--red)','not-started':'#C8C4BE'};
const STANDARD_MILESTONES = [
  {name:'Kickoff',          category:'Client'},
  {name:'Concept',          category:'Creative'},
  {name:'Client Approval',  category:'Client'},
  {name:'Production',       category:'Production'},
  {name:'Install',          category:'Production'},
  {name:'Wrap',             category:'Production'},
];
function ensureDefaultMilestones(p) {
  if (!p.tasks) p.tasks = [];
  STANDARD_MILESTONES.forEach(m => {
    const exists = p.tasks.find(t => t.name.toLowerCase().trim() === m.name.toLowerCase());
    if (!exists) {
      p.tasks.push({id:store.nextId.tasks++, name:m.name, category:m.category, status:'not-started', startDate:'', dueDate:'', assignedTo:'', milestone:true});
    }
  });
  save();
}

function renderTimelineStrip(p) {
  if (!p.startDate || !p.endDate) return `<div class="card" style="margin-bottom:18px;text-align:center;color:var(--muted);font-size:13px;padding:14px">Set project start and end dates to see the visual timeline.</div>`;
  const start=new Date(p.startDate+'T00:00:00'), end=new Date(p.endDate+'T00:00:00'), total=end-start;
  if(total<=0) return '';
  const today=new Date(); today.setHours(0,0,0,0);
  const todayPct=Math.max(0,Math.min(100,(today-start)/total*100));
  const tasksWithDates=(p.tasks||[]).filter(t=>t.dueDate);
  const markers=tasksWithDates.map(t=>{
    const due=new Date(t.dueDate+'T00:00:00');
    const pct=Math.max(1,Math.min(99,(due-start)/total*100));
    const color=TASK_COLORS[t.status]||'#ccc';
    if(t.startDate){
      const sd=new Date(t.startDate+'T00:00:00');
      const sPct=Math.max(0,Math.min(99,(sd-start)/total*100));
      const w=Math.max(1,pct-sPct);
      return `<div title="${t.name}" style="position:absolute;left:${sPct}%;width:${w}%;top:50%;height:8px;transform:translateY(-50%);background:${color};border-radius:4px;opacity:0.85"></div>`;
    }
    return `<div title="${t.name} — due ${formatDate(t.dueDate)}" style="position:absolute;left:${pct}%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;border-radius:50%;background:${color};border:2px solid #fff;z-index:2"></div>`;
  }).join('');
  return `
    <div class="card" style="margin-bottom:18px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:8px">
        <span>${formatDate(p.startDate)}</span>
        <span style="font-weight:700;color:var(--navy)">▲ Today</span>
        <span>${formatDate(p.endDate)}</span>
      </div>
      <div style="position:relative;height:28px;background:var(--border);border-radius:6px;overflow:visible">
        <div style="position:absolute;left:0;top:0;bottom:0;width:${Math.min(100,todayPct)}%;background:var(--accent-light);border-radius:6px"></div>
        <div style="position:absolute;left:${todayPct}%;top:-6px;bottom:-6px;width:2px;background:var(--accent);z-index:3"></div>
        ${markers}
      </div>
      <div style="display:flex;gap:14px;margin-top:10px;flex-wrap:wrap">
        ${Object.entries(TASK_COLORS).map(([k,v])=>`<span style="font-size:11px;color:var(--muted);display:flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:50%;background:${v};display:inline-block"></span>${TASK_STATUS[k]}</span>`).join('')}
      </div>
    </div>`;
}

function renderTimelineTab(p) {
  ensureDefaultMilestones(p);
  const tasks=p.tasks||[];
  const done=tasks.filter(t=>t.status==='done').length;
  const milestoneOrder=STANDARD_MILESTONES.map(m=>m.name.toLowerCase());
  const sorted=[...tasks].sort((a,b)=>{
    if(a.dueDate&&b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    if(a.dueDate&&!b.dueDate) return -1;
    if(!a.dueDate&&b.dueDate) return 1;
    const ai=milestoneOrder.indexOf(a.name.toLowerCase()), bi=milestoneOrder.indexOf(b.name.toLowerCase());
    if(ai>=0&&bi>=0) return ai-bi;
    if(ai>=0) return -1;
    if(bi>=0) return 1;
    return 0;
  });
  const today=new Date(); today.setHours(0,0,0,0);

  return `
    <div class="section-header"><div class="section-title">Timeline</div><button class="btn btn-primary btn-sm" onclick="openAddTaskModal()">+ Add Milestone</button></div>
    ${renderTimelineStrip(p)}
    ${tasks.length>0?`<div style="font-size:12px;color:var(--muted);margin-bottom:12px">${done} of ${tasks.length} milestones complete</div>`:''}
    <div class="card" style="padding:0;overflow:hidden">
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Milestone</th><th>Category</th><th>Due Date</th><th>Assigned</th><th>Status</th><th></th></tr></thead>
        <tbody>${sorted.map(t=>{
          const due=t.dueDate?new Date(t.dueDate+'T00:00:00'):null;
          const overdue=due&&due<today&&t.status!=='done';
          const isStandard=milestoneOrder.includes(t.name.toLowerCase());
          return `<tr style="${overdue?'background:var(--red-light)':''}">
            <td style="font-weight:${t.status==='done'?'400':'700'};${t.status==='done'?'text-decoration:line-through;color:var(--muted)':''}">
              ${isStandard?'◆ ':''}${t.name}
              ${t.startDate?`<div style="font-size:11px;color:var(--muted);font-weight:400;text-decoration:none">From ${formatDate(t.startDate)}</div>`:''}
            </td>
            <td><span class="status-badge badge-planning">${t.category}</span></td>
            <td style="${overdue?'color:var(--red);font-weight:700':'color:var(--muted)'}">
              ${t.dueDate?formatDate(t.dueDate):'<span style="color:var(--border)">Set date</span>'}
              ${overdue?'<div style="font-size:10px">OVERDUE</div>':''}
            </td>
            <td style="color:var(--muted);font-size:12px">${t.assignedTo||'—'}</td>
            <td><span class="status-badge badge-${t.status==='done'?'won':t.status==='in-progress'?'in-conversation':t.status==='blocked'?'lost':'not-contacted'}">${TASK_STATUS[t.status]||t.status}</span></td>
            <td style="text-align:right;white-space:nowrap">
              <button class="btn btn-ghost btn-sm" onclick="openEditTaskModal(${t.id})" title="Edit">✎</button>
              <button class="btn btn-ghost btn-sm" onclick="cycleTaskStatus(${t.id})" title="Cycle status">↻</button>
              <button class="btn btn-ghost btn-sm" onclick="deleteTask(${t.id})">✕</button>
            </td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>
    </div>`;
}

function openAddTaskModal() {
  const p=currentProject;
  const memberOpts=[...store.team.filter(m=>p.teamIds.includes(m.id)).map(m=>`<option>${m.name}</option>`), '<option>Adam</option>'].join('');
  openModal(`
    <div class="modal-title">Add Task / Milestone</div>
    <div class="form-grid">
      <div class="form-group full"><label>Task Name</label><input id="t-name" placeholder="e.g. Creative concepts presented to client"></div>
      <div class="form-group"><label>Category</label><select id="t-cat">${TASK_CATS.map(c=>`<option>${c}</option>`).join('')}</select></div>
      <div class="form-group"><label>Status</label><select id="t-status"><option value="not-started">Not Started</option><option value="in-progress">In Progress</option><option value="done">Done</option><option value="blocked">Blocked</option></select></div>
      <div class="form-group"><label>Start Date (optional)</label><input id="t-start" type="date"></div>
      <div class="form-group"><label>Due Date</label><input id="t-due" type="date"></div>
      <div class="form-group full"><label>Assigned To</label><select id="t-assign"><option value="">— Unassigned —</option>${memberOpts}</select></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addTask()">Add Task</button></div>`);
}
function addTask() {
  const n=document.getElementById('t-name').value.trim(); if(!n){toast('Task name required');return;}
  const p=currentProject;
  p.tasks.push({id:store.nextId.tasks++,name:n,category:document.getElementById('t-cat').value,status:document.getElementById('t-status').value,startDate:document.getElementById('t-start').value,dueDate:document.getElementById('t-due').value,assignedTo:document.getElementById('t-assign').value});
  closeModal();save();toast('Task added');render();
}
function deleteTask(id){currentProject.tasks=currentProject.tasks.filter(t=>t.id!==id);save();toast('Removed');render();}
function cycleTaskStatus(id){
  const cycle=['not-started','in-progress','done','blocked'];
  const t=currentProject.tasks.find(x=>x.id===id);
  t.status=cycle[(cycle.indexOf(t.status)+1)%cycle.length];
  save();toast('Status: '+TASK_STATUS[t.status]);render();
}
function openEditTaskModal(id){
  const p=currentProject;
  const t=p.tasks.find(x=>x.id===id); if(!t) return;
  const memberOpts=[...store.team.filter(m=>p.teamIds.includes(m.id)).map(m=>`<option ${t.assignedTo===m.name?'selected':''}>${m.name}</option>`),'<option>Adam</option>'].join('');
  openModal(`
    <div class="modal-title">Edit Milestone</div>
    <div class="form-grid">
      <div class="form-group full"><label>Name</label><input id="et-name" value="${t.name}"></div>
      <div class="form-group"><label>Category</label><select id="et-cat">${TASK_CATS.map(c=>`<option ${t.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="form-group"><label>Status</label><select id="et-status">
        <option value="not-started" ${t.status==='not-started'?'selected':''}>Not Started</option>
        <option value="in-progress" ${t.status==='in-progress'?'selected':''}>In Progress</option>
        <option value="done" ${t.status==='done'?'selected':''}>Done</option>
        <option value="blocked" ${t.status==='blocked'?'selected':''}>Blocked</option>
      </select></div>
      <div class="form-group"><label>Start Date (optional)</label><input id="et-start" type="date" value="${t.startDate||''}"></div>
      <div class="form-group"><label>Due Date</label><input id="et-due" type="date" value="${t.dueDate||''}"></div>
      <div class="form-group full"><label>Assigned To</label><select id="et-assign"><option value="">— Unassigned —</option>${memberOpts}</select></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveTask(${id})">Save</button></div>`);
}
function saveTask(id){
  const t=currentProject.tasks.find(x=>x.id===id); if(!t) return;
  const n=document.getElementById('et-name').value.trim(); if(!n){toast('Name required');return;}
  t.name=n; t.category=document.getElementById('et-cat').value; t.status=document.getElementById('et-status').value;
  t.startDate=document.getElementById('et-start').value; t.dueDate=document.getElementById('et-due').value;
  t.assignedTo=document.getElementById('et-assign').value;
  closeModal();save();toast('Milestone saved');render();
}

// ─── ASSETS TAB ───────────────────────────────────────────────────────────────
const ASSET_TYPES=['Document','Deck / Presentation','Moodboard','Brand Guidelines','Image / Photo','Video','Spreadsheet','Other'];

function renderAssetsTab(p) {
  const assets=p.assets||{driveFolder:'',files:[]};
  return `
    <div class="section-header"><div class="section-title">Assets</div></div>
    <div class="crm-stat" style="margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;gap:12px">
      <div>
        <div class="crm-stat-label">Google Drive Folder</div>
        ${assets.driveFolder
          ? `<a href="${assets.driveFolder}" target="_blank" style="color:var(--blue);font-weight:700;font-size:14px">Open project assets folder ↗</a>`
          : `<div style="font-size:13px;color:var(--muted)">Link a Drive folder to store files, images and deliverables.</div>`}
      </div>
      <button class="btn btn-ghost btn-sm" onclick="openEditAssetsFolderModal()">${assets.driveFolder?'Change':'Set Folder'}</button>
    </div>
    <div class="section-header"><div class="section-title">Linked Assets</div><button class="btn btn-primary btn-sm" onclick="openAddAssetModal()">+ Link Asset</button></div>
    <div class="card" style="padding:0;overflow:hidden">
      ${assets.files.length===0?`<div class="empty-state"><div class="empty-icon">📎</div><p>No assets linked yet. Add links to key files — decks, moodboards, guidelines.</p></div>`:`<div class="table-wrap"><table class="table">
        <thead><tr><th>Name</th><th>Type</th><th>Added</th><th></th></tr></thead>
        <tbody>${assets.files.map(f=>`<tr>
          <td style="font-weight:700"><a href="${f.url}" target="_blank" style="color:var(--blue);text-decoration:none">${f.name} ↗</a></td>
          <td><span class="status-badge badge-pitched">${f.type}</span></td>
          <td style="color:var(--muted)">${formatDate(f.addedDate)}</td>
          <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="deleteAsset(${f.id})">✕</button></td>
        </tr>`).join('')}</tbody>
      </table></div>`}
    </div>`;
}
function openEditAssetsFolderModal() {
  const a=currentProject.assets||{};
  openModal(`
    <div class="modal-title">Project Assets Folder</div>
    <div class="form-group full"><label>Google Drive folder link</label><input id="af-url" value="${a.driveFolder||''}" placeholder="https://drive.google.com/drive/folders/..."></div>
    <div style="font-size:12px;color:var(--muted);margin-top:8px">Right-click a Drive folder → Share → Copy link</div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveAssetsFolder()">Save</button></div>`);
}
function saveAssetsFolder(){if(!currentProject.assets)currentProject.assets={driveFolder:'',files:[]};currentProject.assets.driveFolder=document.getElementById('af-url').value.trim();closeModal();save();toast('Folder saved');render();}
function openAddAssetModal(){
  openModal(`
    <div class="modal-title">Link Asset</div>
    <div class="form-grid">
      <div class="form-group full"><label>Asset Name</label><input id="a-name" placeholder="e.g. Creative Brief v2"></div>
      <div class="form-group"><label>Type</label><select id="a-type">${ASSET_TYPES.map(t=>`<option>${t}</option>`).join('')}</select></div>
      <div class="form-group full"><label>Link (Google Doc, Dropbox, etc.)</label><input id="a-url" placeholder="https://..."></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addAsset()">Link Asset</button></div>`);
}
function addAsset(){const n=document.getElementById('a-name').value.trim();if(!n){toast('Name required');return;}if(!currentProject.assets)currentProject.assets={driveFolder:'',files:[]};currentProject.assets.files.push({id:store.nextId.assets++,name:n,type:document.getElementById('a-type').value,url:document.getElementById('a-url').value.trim(),addedDate:new Date().toISOString().split('T')[0]});closeModal();save();toast('Asset linked');render();}
function deleteAsset(id){currentProject.assets.files=currentProject.assets.files.filter(f=>f.id!==id);save();toast('Removed');render();}

// ─── GLOBAL SUPPLIERS ─────────────────────────────────────────────────────────
const VENDOR_CATS=['Fabrication','AV / Tech','Catering','Staffing','Photography / Video','Transport','Print','Venue','Other'];

function renderFinance() {
  // Gather outgoings
  const outItems = [];
  store.projects.forEach(p => {
    (p.invoices||[]).forEach(inv => {
      outItems.push({ date:inv.date||'', description:inv.supplier+(inv.description?' — '+inv.description:''), project:p.name, category:inv.category, amount:inv.amount||0, status:inv.status, sourceType:'invoice', projectId:p.id });
    });
  });
  store.team.forEach(m => {
    (m.payments||[]).forEach(pay => {
      const proj = pay.projectId?store.projects.find(p=>p.id===pay.projectId):null;
      outItems.push({ date:pay.date||'', description:m.name+' — '+pay.description, project:proj?proj.name:'—', category:'Team', amount:pay.amount||0, status:pay.status, sourceType:'team', memberId:m.id });
    });
  });

  // Gather income
  const inItems = [];
  store.companies.forEach(co => {
    (co.payments||[]).forEach(pay => {
      const proj = pay.projectId?store.projects.find(p=>p.id===pay.projectId):null;
      inItems.push({ date:pay.date||'', description:co.name+' — '+pay.description, project:proj?proj.name:'—', amount:pay.amount||0, status:pay.status, sourceType:'client', companyId:co.id });
    });
  });

  // Summary stats
  const totalIn      = inItems.filter(i=>i.status==='paid').reduce((s,i)=>s+i.amount,0);
  const totalInPend  = inItems.filter(i=>i.status==='pending').reduce((s,i)=>s+i.amount,0);
  const totalOut     = outItems.filter(i=>i.status==='paid').reduce((s,i)=>s+i.amount,0);
  const totalOutPend = outItems.filter(i=>i.status==='pending'||i.status==='overdue').reduce((s,i)=>s+i.amount,0);
  const net          = totalIn - totalOut;

  const statusBadge = s => {
    if (s==='paid')    return `<span style="background:var(--green-light);color:#1A5030;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;">Paid</span>`;
    if (s==='overdue') return `<span style="background:var(--orange-light);color:#7A3510;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;">Overdue</span>`;
    return `<span style="background:var(--orange-light);color:#7A4010;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;">Pending</span>`;
  };

  // Merge + filter
  const allItems = [
    ...inItems.map(i=>({...i, flow:'in'})),
    ...outItems.map(i=>({...i, flow:'out'}))
  ].filter(i => currentFinanceFilter==='income' ? i.flow==='in' : currentFinanceFilter==='outgoings' ? i.flow==='out' : true);
  const todayKey = new Date().toISOString().slice(0,7);
  const byMonth = {};
  allItems.forEach(i => {
    const key = i.date?i.date.slice(0,7):'undated';
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(i);
  });
  const allKeys = Object.keys(byMonth);
  const upcomingKeys = allKeys.filter(k=>k!=='undated'&&k>=todayKey).sort((a,b)=>a.localeCompare(b));
  const historyKeys  = allKeys.filter(k=>k!=='undated'&&k<todayKey).sort((a,b)=>b.localeCompare(a));
  const undatedKeys  = allKeys.includes('undated')?['undated']:[];

  function renderMonthBlock(key, isUpcoming) {
    const rows = byMonth[key];
    const label = key==='undated'?'Undated':new Date(key+'-01').toLocaleDateString('en-GB',{month:'long',year:'numeric'});
    const isCurrent = key===todayKey;
    const mIn  = rows.filter(i=>i.flow==='in'&&i.status==='paid').reduce((s,i)=>s+i.amount,0);
    const mOut = rows.filter(i=>i.flow==='out'&&i.status==='paid').reduce((s,i)=>s+i.amount,0);
    const mPend= rows.filter(i=>i.status==='pending'||i.status==='overdue').reduce((s,i)=>s+i.amount,0);
    const sorted=[...rows].sort((a,b)=>isUpcoming?a.date.localeCompare(b.date):b.date.localeCompare(a.date));
    return `
      <div style="margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="font-size:13px;font-weight:700;color:var(--navy);">${label}${isCurrent?` <span style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--accent);color:var(--navy);padding:2px 7px;border-radius:20px;vertical-align:middle">Current</span>`:''}</div>
          <div style="flex:1;height:0.5px;background:var(--border);"></div>
          ${mIn>0?`<div style="font-size:11px;color:var(--green);font-weight:600;">In $${mIn.toLocaleString()}</div>`:''}
          ${mOut>0?`<div style="font-size:11px;color:var(--red);font-weight:600;">Out $${mOut.toLocaleString()}</div>`:''}
          ${mPend>0?`<div style="font-size:11px;color:var(--orange);font-weight:600;">Pending $${mPend.toLocaleString()}</div>`:''}
        </div>
        <div class="card" style="padding:0;overflow:hidden;">
          <div class="table-wrap"><table class="table">
            <thead><tr><th>Description</th><th>Project</th><th>Date</th><th>Status</th><th style="text-align:right">Amount</th></tr></thead>
            <tbody>${sorted.map(i=>{
              const src = i.sourceType==='invoice'?`goToFinanceSource('invoice',${i.projectId})`:i.sourceType==='team'?`goToFinanceSource('team',${i.memberId})`:`goToFinanceSource('client',${i.companyId})`;
              return `<tr onclick="${src}" style="cursor:pointer;transition:background 0.1s" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
              <td style="font-weight:600">${i.description}</td>
              <td style="color:var(--muted);font-size:12px">${i.project}</td>
              <td style="color:var(--muted)">${i.date?formatDate(i.date):'—'}</td>
              <td>${statusBadge(i.status)}</td>
              <td style="text-align:right;font-weight:700;color:${i.flow==='in'?'var(--green)':'var(--red)'}">
                ${i.flow==='in'?'+':'-'}$${i.amount.toLocaleString()}
              </td>
            </tr>`;}).join('')}</tbody>
          </table></div>
        </div>
      </div>`;
  }

  const upcomingHtml = upcomingKeys.map(k=>renderMonthBlock(k,true)).join('');
  const historyHtml  = historyKeys.map(k=>renderMonthBlock(k,false)).join('');
  const undatedHtml  = undatedKeys.map(k=>renderMonthBlock(k,false)).join('');

  const monthHtml = `
    ${upcomingKeys.length>0?upcomingHtml:''}
    ${historyKeys.length>0?`
      <div style="display:flex;align-items:center;gap:10px;margin:24px 0 16px">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted)">History</div>
        <div style="flex:1;height:0.5px;background:var(--border)"></div>
      </div>
      ${historyHtml}`:''}
    ${undatedHtml}
  `;

  return `
    <div class="topbar">
      <div><div class="page-title">Finance</div><div class="page-sub">Cashflow overview · all projects</div></div>
      <div style="display:flex;gap:4px">
        <button class="btn ${currentFinanceFilter==='all'?'btn-primary':'btn-ghost'} btn-sm" onclick="setFinanceFilter('all')">All</button>
        <button class="btn ${currentFinanceFilter==='income'?'btn-primary':'btn-ghost'} btn-sm" onclick="setFinanceFilter('income')">Income</button>
        <button class="btn ${currentFinanceFilter==='outgoings'?'btn-primary':'btn-ghost'} btn-sm" onclick="setFinanceFilter('outgoings')">Outgoings</button>
      </div>
    </div>
    <div class="content">
      <div class="finance-summary">
        <div class="card"><div class="budget-label">Income Received</div><div class="budget-value" style="color:var(--green)">$${totalIn.toLocaleString()}</div></div>
        <div class="card"><div class="budget-label">Income Pending</div><div class="budget-value" style="color:var(--orange)">$${totalInPend.toLocaleString()}</div></div>
        <div class="card"><div class="budget-label">Outgoings Paid</div><div class="budget-value" style="color:var(--red)">$${totalOut.toLocaleString()}</div></div>
        <div class="card"><div class="budget-label">Outgoings Pending</div><div class="budget-value" style="color:var(--orange)">$${totalOutPend.toLocaleString()}</div></div>
        <div class="card finance-net" style="background:var(--navy);border-color:var(--navy)"><div class="budget-label" style="color:rgba(255,255,255,0.5)">Net Position</div><div class="budget-value" style="color:${net>=0?'var(--accent)':'var(--red-light)'}">$${Math.abs(net).toLocaleString()}</div></div>
      </div>
      ${allItems.length===0
        ? `<div class="empty-state"><div class="empty-icon">◱</div><p>No payments logged yet. Add income via Clients or outgoings via Invoices and Team.</p></div>`
        : monthHtml}
    </div>`;
}

function renderGlobalVendors() {
  return `
    <div class="topbar"><div><div class="page-title">Vendor Database</div><div class="page-sub">${store.globalSuppliers.length} vendors</div></div><button class="btn btn-primary" onclick="openAddGlobalVendorModal()">+ Add Vendor</button></div>
    <div class="content">
      <div class="card" style="padding:0;overflow:hidden">
        ${store.globalSuppliers.length===0?`<div class="empty-state"><div class="empty-icon">🏭</div><p>No vendors yet. Add fabricators, AV companies, caterers and more.</p></div>`:`<div class="table-wrap"><table class="table">
          <thead><tr><th>Company</th><th>Category</th><th>Contact</th><th>Phone</th><th>Email</th><th></th></tr></thead>
          <tbody>${store.globalSuppliers.map(s=>`<tr>
            <td><div style="font-weight:700">${s.company}</div>${s.notes?`<div style="font-size:11px;color:var(--muted);margin-top:2px">${s.notes}</div>`:''}</td>
            <td><span class="status-badge badge-planning">${s.category}</span></td>
            <td style="color:var(--muted)">${s.contactName||'—'}</td>
            <td><a href="tel:${s.contactPhone}" style="color:var(--blue);text-decoration:none">${s.contactPhone||'—'}</a></td>
            <td><a href="mailto:${s.contactEmail}" style="color:var(--blue);text-decoration:none">${s.contactEmail||'—'}</a></td>
            <td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="openEditGlobalVendorModal(${s.id})">Edit</button> <button class="btn btn-ghost btn-sm" onclick="deleteGlobalVendor(${s.id})">✕</button></td>
          </tr>`).join('')}</tbody>
        </table></div>`}
      </div>
    </div>`;
}
function openAddGlobalVendorModal(prefill){
  const s=prefill||{};
  openModal(`
    <div class="modal-title">${prefill?'Edit':'Add'} Vendor</div>
    <div class="form-grid">
      <div class="form-group"><label>Company</label><input id="gs-company" value="${s.company||''}" placeholder="Company name"></div>
      <div class="form-group"><label>Category</label><select id="gs-cat">${VENDOR_CATS.map(c=>`<option ${s.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="form-group"><label>Contact Name</label><input id="gs-contact" value="${s.contactName||''}"></div>
      <div class="form-group"><label>Phone</label><input id="gs-phone" value="${s.contactPhone||''}"></div>
      <div class="form-group full"><label>Email</label><input id="gs-email" value="${s.contactEmail||''}"></div>
      <div class="form-group full"><label>Notes</label><textarea id="gs-notes">${s.notes||''}</textarea></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="${prefill?`saveGlobalVendor(${s.id})`:'addGlobalVendor()'}">Save</button></div>`);
}
function addGlobalVendor(){const c=document.getElementById('gs-company').value.trim();if(!c){toast('Company required');return;}store.globalSuppliers.push({id:store.nextId.globalSuppliers++,company:c,category:document.getElementById('gs-cat').value,contactName:document.getElementById('gs-contact').value,contactPhone:document.getElementById('gs-phone').value,contactEmail:document.getElementById('gs-email').value,notes:document.getElementById('gs-notes').value});closeModal();save();toast('Vendor added');render();}
function openEditGlobalVendorModal(id){openAddGlobalVendorModal(store.globalSuppliers.find(s=>s.id===id));}
function saveGlobalVendor(id){const s=store.globalSuppliers.find(x=>x.id===id);s.company=document.getElementById('gs-company').value.trim()||s.company;s.category=document.getElementById('gs-cat').value;s.contactName=document.getElementById('gs-contact').value;s.contactPhone=document.getElementById('gs-phone').value;s.contactEmail=document.getElementById('gs-email').value;s.notes=document.getElementById('gs-notes').value;closeModal();save();toast('Saved');render();}
function deleteGlobalVendor(id){store.globalSuppliers=store.globalSuppliers.filter(s=>s.id!==id);save();toast('Removed');render();}

// ─── CONTACTS / CLIENTS ───────────────────────────────────────────────────────
function renderContactProfile() {
  const co = currentCompany; if (!co) return '';
  if (!co.payments) co.payments = [];
  const people = store.contacts.filter(c=>c.companyId===co.id);
  const projects = store.projects.filter(p=>p.clientId===co.id);
  const totalPaid    = co.payments.filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const totalPending = co.payments.filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
  const totalAll     = co.payments.reduce((s,p)=>s+p.amount,0);

  const sidebarHtml = `
    <div class="card" style="padding:16px 20px">
      ${co.industry?`<div style="margin-bottom:14px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:4px">Industry</div><div style="font-weight:700">${co.industry}</div></div>`:''}
      ${co.notes?`<div style="margin-bottom:14px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:4px">Notes</div><div style="font-size:13px;color:var(--navy)">${co.notes}</div></div>`:''}
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700">Contacts</div>
        <button class="btn btn-primary btn-sm" onclick="openAddPersonModal(${co.id})">+ Add</button>
      </div>
      ${people.length===0?`<div style="color:var(--muted);font-size:12px;padding:8px 0">No contacts yet.</div>`:''}
      ${people.map(p=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div class="contact-avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">${initials(p.name)}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px">${p.name}</div>
          <div style="font-size:11px;color:var(--muted)">${p.role||'—'}</div>
          ${p.email?`<div style="font-size:11px;color:var(--muted)">${p.email}</div>`:''}
          ${p.phone?`<div style="font-size:11px;color:var(--muted)">${p.phone}</div>`:''}
        </div>
        <div style="display:flex;gap:4px;flex-shrink:0">
          <button class="btn btn-ghost btn-sm" onclick="openEditPersonModal(${p.id})">Edit</button>
          <button class="btn btn-ghost btn-sm" onclick="deletePerson(${p.id})">✕</button>
        </div>
      </div>`).join('')}
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:18px;margin-bottom:10px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700">Projects</div>
      </div>
      ${projects.length===0?`<div style="color:var(--muted);font-size:12px;padding:8px 0">No projects yet.</div>`:''}
      ${projects.map(p=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="navigate('project-detail',${p.id})">
        <span class="project-dot dot-${p.status||'planning'}" style="width:9px;height:9px;flex-shrink:0;border-radius:50%;display:inline-block"></span>
        <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px">${p.name}</div><div style="font-size:11px;color:var(--muted)">${p.type} · <span class="status-badge badge-${p.status}">${p.status}</span></div></div>
        <span style="color:var(--muted);font-size:12px;flex-shrink:0">→</span>
      </div>`).join('')}
    </div>`;

  const paymentsHtml = `
    <div class="payment-total-row">
      <div class="payment-total"><div class="payment-total-label">Total Invoiced</div><div class="payment-total-value">$${totalAll.toLocaleString()}</div></div>
      <div class="payment-total"><div class="payment-total-label">Received</div><div class="payment-total-value" style="color:var(--green)">$${totalPaid.toLocaleString()}</div></div>
      <div class="payment-total"><div class="payment-total-label">Pending</div><div class="payment-total-value" style="color:var(--orange)">$${totalPending.toLocaleString()}</div></div>
    </div>
    <div class="section-header"><div class="section-title">Income Payments</div><button class="btn btn-primary btn-sm" onclick="openAddClientPaymentModal()">+ Log Payment</button></div>
    <div class="card" style="padding:0;overflow:hidden">
      ${co.payments.length===0
        ? `<div class="empty-state"><div class="empty-icon">$</div><p>No payments logged yet.</p></div>`
        : `<div class="client-payments-table"><div class="table-wrap"><table class="table">
            <thead><tr><th>Description</th><th>Project</th><th>Date</th><th>Status</th><th style="text-align:right">Amount</th><th></th></tr></thead>
            <tbody>${[...co.payments].sort((a,b)=>(b.date||'').localeCompare(a.date||'')).map(p=>{
              const proj=p.projectId?store.projects.find(x=>x.id===p.projectId):null;
              return `<tr>
                <td style="font-weight:600">${p.description}</td>
                <td style="color:var(--muted);font-size:12px">${proj?proj.name:'—'}</td>
                <td style="color:var(--muted)">${p.date?formatDate(p.date):'—'}</td>
                <td><span class="status-badge badge-${p.status}">${p.status}</span></td>
                <td style="text-align:right;font-weight:700;color:var(--green)">$${(p.amount||0).toLocaleString()}</td>
                <td style="text-align:right">
                  <button class="btn btn-ghost btn-sm" onclick="cycleClientPaymentStatus(${p.id})" title="Change status">↻</button>
                  <button class="btn btn-ghost btn-sm" onclick="deleteClientPayment(${p.id})">✕</button>
                </td>
              </tr>`;
            }).join('')}</tbody>
          </table></div></div>
          <div class="client-payments-cards" style="padding:8px">${[...co.payments].sort((a,b)=>(b.date||'').localeCompare(a.date||'')).map(p=>{
            const proj=p.projectId?store.projects.find(x=>x.id===p.projectId):null;
            return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:8px">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
                <div style="font-weight:700;font-size:14px;color:var(--navy);flex:1;min-width:0;margin-right:8px">${p.description}</div>
                <div style="font-size:16px;font-weight:800;color:var(--green);flex-shrink:0">$${(p.amount||0).toLocaleString()}</div>
              </div>
              <div style="font-size:11px;color:var(--muted);margin-bottom:8px">${proj?proj.name+' · ':''}${p.date?formatDate(p.date):'—'}</div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="status-badge badge-${p.status}">${p.status}</span>
                <div style="display:flex;gap:4px">
                  <button class="btn btn-ghost btn-sm" onclick="cycleClientPaymentStatus(${p.id})">↻</button>
                  <button class="btn btn-ghost btn-sm" onclick="deleteClientPayment(${p.id})">✕</button>
                </div>
              </div>
            </div>`;
          }).join('')}</div>`}
    </div>`;

  return `
    <div class="topbar">
      <div><div class="back-btn" onclick="navigate('contacts')">← Clients</div><div class="page-title">${co.name}</div><div class="page-sub">${people.length} contact${people.length!==1?'s':''} · ${projects.length} project${projects.length!==1?'s':''}</div></div>
      <button class="btn btn-ghost btn-sm" onclick="openEditCompanyModal(${co.id})">Edit</button>
    </div>
    <div class="content">
      <div class="company-layout">
        <div>${sidebarHtml}</div>
        <div>${paymentsHtml}</div>
      </div>
    </div>`;
}

function openAddClientPaymentModal() {
  const projectOpts = store.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  openModal(`
    <div class="modal-title">Log Client Payment</div>
    <div class="form-grid">
      <div class="form-group full"><label>Description</label><input id="cp-desc" placeholder="e.g. Project fee — Summer Pop-Up"></div>
      <div class="form-group full"><label>Project</label><select id="cp-project"><option value="">— No project —</option>${projectOpts}</select></div>
      <div class="form-group"><label>Amount ($)</label><input id="cp-amount" type="number" placeholder="0"></div>
      <div class="form-group"><label>Status</label><select id="cp-status"><option value="pending">Pending</option><option value="paid">Paid</option></select></div>
      <div class="form-group"><label>Date</label><input id="cp-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addClientPayment()">Log Payment</button></div>`);
}
function addClientPayment() {
  const d = document.getElementById('cp-desc').value.trim();
  if (!d) { toast('Description required'); return; }
  if (!currentCompany.payments) currentCompany.payments = [];
  currentCompany.payments.push({
    id: store.nextId.clientPayments++,
    description: d,
    projectId: parseInt(document.getElementById('cp-project').value)||null,
    amount: parseFloat(document.getElementById('cp-amount').value)||0,
    date: document.getElementById('cp-date').value,
    status: document.getElementById('cp-status').value
  });
  closeModal(); save(); toast('Payment logged'); render();
}
function cycleClientPaymentStatus(id) {
  const cycle = ['pending','paid','overdue'];
  const p = currentCompany.payments.find(x=>x.id===id);
  if(!p) return;
  p.status = cycle[(cycle.indexOf(p.status)+1)%cycle.length];
  save(); toast('Status: '+p.status); render();
}
function deleteClientPayment(id) {
  currentCompany.payments = currentCompany.payments.filter(p=>p.id!==id);
  save(); toast('Removed'); render();
}

function renderContacts() {
  return `
    <div class="topbar"><div><div class="page-title">Clients</div><div class="page-sub">${store.companies.length} companies · ${store.contacts.length} people</div></div><button class="btn btn-primary" onclick="openNewCompanyModal()">+ Add</button></div>
    <div class="content"><div class="card">
      ${store.companies.length===0?`<div class="empty-state"><div class="empty-icon">◇</div><p>No clients yet.</p></div>`:''}
      ${store.companies.map(co=>{
        const people=store.contacts.filter(c=>c.companyId===co.id);
        const projects=store.projects.filter(p=>p.clientId===co.id);
        const paid=(co.payments||[]).filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
        const pending=(co.payments||[]).filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
        return `<div class="contact-row" style="cursor:pointer" onclick="navigateToCompany(${co.id})">
          <div class="contact-avatar">${initials(co.name)}</div>
          <div style="flex:1;min-width:0">
            <div class="contact-name">${co.name}</div>
            <div class="contact-detail">${people.length} contact${people.length!==1?'s':''} · ${projects.length} project${projects.length!==1?'s':''}</div>
            ${people.length>0?`<div class="contact-detail">${people.map(p=>p.name).join(', ')}</div>`:''}
          </div>
          ${paid>0||pending>0?`<div style="text-align:right;font-size:12px;flex-shrink:0">
            ${paid>0?`<div style="color:var(--green);font-weight:700">$${paid.toLocaleString()} received</div>`:''}
            ${pending>0?`<div style="color:var(--orange)">$${pending.toLocaleString()} pending</div>`:''}
          </div>`:''}
          <div class="contact-actions" onclick="event.stopPropagation()">
            <button class="btn btn-ghost btn-sm" onclick="openEditCompanyModal(${co.id})">Edit</button>
            <button class="btn btn-ghost btn-sm" onclick="deleteCompany(${co.id})">✕</button>
          </div>
        </div>`;
      }).join('')}
    </div></div>`;
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function openModal(html){document.getElementById('modal-content').innerHTML=html;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open');}
function closeModalOutside(e){if(e.target===document.getElementById('modal'))closeModal();}
function statusOpts(sel){return LEAD_STATUSES.map(s=>`<option value="${s.key}" ${sel===s.key?'selected':''}>${s.label}</option>`).join('');}

function openNewIdeaModal(){const mn=store.team.map(m=>`<option>${m.name}</option>`).join('');openModal(`<div class="modal-title">✦ New Idea</div><div class="form-grid"><div class="form-group full"><label>Idea Title</label><input id="i-title" placeholder="Give it a name..."></div><div class="form-group"><label>Category</label><select id="i-cat"><option>Brand</option><option>Event</option><option>Space</option><option>Print</option><option>Digital</option><option>Product</option><option>Other</option></select></div><div class="form-group"><label>Submitted By</label><select id="i-by"><option value="">— Select —</option>${mn}<option value="Other">Other</option></select></div><div class="form-group full"><label>Description</label><textarea id="i-desc" placeholder="Describe the idea — no filter needed..."></textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createIdea()">Add Idea</button></div>`);}
function createIdea(){const t=document.getElementById('i-title').value.trim();if(!t){toast('Give the idea a title');return;}store.ideas.unshift({id:store.nextId.ideas++,title:t,category:document.getElementById('i-cat').value,description:document.getElementById('i-desc').value,submittedBy:document.getElementById('i-by').value||'Anonymous',date:new Date().toISOString().split('T')[0]});closeModal();toast('Idea added ✦');save();render();}
function deleteIdea(id){store.ideas=store.ideas.filter(i=>i.id!==id);toast('Idea removed');save();render();}

// ─── FEEDBACK ─────────────────────────────────────────────────────────────────
function openFeedbackModal() {
  openModal(`
    <div class="modal-title">Submit Feedback</div>
    <div class="form-grid">
      <div class="form-group">
        <label>Type</label>
        <select id="fb-type">
          <option value="bug">🐛 Bug</option>
          <option value="improvement">✨ Improvement</option>
          <option value="feature">💡 Feature Request</option>
        </select>
      </div>
      <div class="form-group">
        <label>Priority</label>
        <select id="fb-priority">
          <option value="high">High</option>
          <option value="medium" selected>Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="form-group full">
        <label>Title <span style="color:var(--red)">*</span></label>
        <input id="fb-title" placeholder="e.g. Budget tab crashes on mobile" onkeydown="if(event.key==='Enter')submitFeedback()">
      </div>
      <div class="form-group full">
        <label>Notes <span style="font-size:10px;color:var(--muted);font-weight:400">(optional)</span></label>
        <textarea id="fb-notes" placeholder="Any extra context, steps to reproduce, etc." style="min-height:80px;resize:vertical"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitFeedback()">Submit</button>
    </div>
  `);
  setTimeout(()=>document.getElementById('fb-title')?.focus(), 80);
}

function submitFeedback() {
  const title = document.getElementById('fb-title').value.trim();
  if (!title) { document.getElementById('fb-title').style.borderColor='var(--red)'; document.getElementById('fb-title').focus(); return; }
  const type = document.getElementById('fb-type').value;
  const priority = document.getElementById('fb-priority').value;
  const notes = document.getElementById('fb-notes').value.trim();
  store.feedback.push({
    id: store.nextId.feedback++,
    title, type, priority, notes,
    submittedBy: currentUserName,
    submittedAt: new Date().toISOString().split('T')[0],
    status: 'open'
  });
  save();
  closeModal();
  toast('Feedback submitted ◌');
  if (currentView === 'feedback') render();
}

function setFeedbackStatus(id, status) {
  const f = store.feedback.find(f => f.id === id);
  if (f) { f.status = status; save(); render(); }
}

function deleteFeedback(id) {
  store.feedback = store.feedback.filter(f => f.id !== id);
  toast('Removed');
  save();
  render();
}

function renderFeedback() {
  const fb = store.feedback || [];
  const prioOrder = {high:0, medium:1, low:2};
  const open = fb.filter(f => f.status !== 'done')
    .sort((a,b) => (prioOrder[a.priority]??1) - (prioOrder[b.priority]??1) || a.id - b.id);
  const done = fb.filter(f => f.status === 'done').sort((a,b) => b.id - a.id);

  const typeIcon = {bug:'🐛', improvement:'✨', feature:'💡'};
  const typeLabel = {bug:'Bug', improvement:'Improvement', feature:'Feature Request'};
  const prioColor = {high:'#B03030', medium:'#A06020', low:'#5060A0'};

  function cardHtml(f) {
    const isAdmin = currentUserRole === 'admin';
    const statusBadge = f.status === 'in-progress'
      ? `<span style="font-size:10px;font-weight:600;background:rgba(200,130,30,0.12);color:#A06020;border-radius:4px;padding:2px 7px;white-space:nowrap">In Progress</span>`
      : '';
    const adminActions = isAdmin ? `<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
      ${f.status==='open' ? `<button onclick="setFeedbackStatus(${f.id},'in-progress')" class="btn btn-ghost btn-sm">→ In Progress</button>` : ''}
      ${f.status==='in-progress' ? `<button onclick="setFeedbackStatus(${f.id},'open')" class="btn btn-ghost btn-sm">↩ Open</button><button onclick="setFeedbackStatus(${f.id},'done')" class="btn btn-ghost btn-sm" style="color:#3A7A3A;border-color:#3A7A3A">✓ Mark Done</button>` : ''}
      ${f.status==='done' ? `<button onclick="setFeedbackStatus(${f.id},'open')" class="btn btn-ghost btn-sm">↩ Reopen</button>` : ''}
      <button onclick="deleteFeedback(${f.id})" class="btn btn-ghost btn-sm" style="margin-left:auto;color:var(--muted)">✕</button>
    </div>` : '';
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:8px">
      <div style="display:flex;align-items:flex-start;gap:10px">
        <span style="font-size:17px;flex-shrink:0;margin-top:1px;opacity:0.85">${typeIcon[f.type]||'📝'}</span>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
            <span style="font-size:13px;font-weight:600">${esc(f.title)}</span>
            ${statusBadge}
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:11px;color:var(--muted)">
            <span>${typeLabel[f.type]||f.type}</span>
            <span>·</span>
            <span style="font-weight:600;color:${prioColor[f.priority]||'var(--muted)'}">${(f.priority||'medium').charAt(0).toUpperCase()+(f.priority||'medium').slice(1)}</span>
            <span>·</span>
            <span>${esc(f.submittedBy||'')}</span>
            <span>·</span>
            <span>${f.submittedAt||''}</span>
          </div>
          ${f.notes ? `<p style="margin:7px 0 0;font-size:12px;color:var(--muted);line-height:1.55">${esc(f.notes)}</p>` : ''}
          ${adminActions}
        </div>
      </div>
    </div>`;
  }

  const isEmpty = fb.length === 0;

  return `
    <div class="topbar">
      <div><div class="page-title">Feedback</div><div class="page-sub">${open.length} open · ${done.length} done</div></div>
      <button class="btn btn-primary" onclick="openFeedbackModal()">+ Submit</button>
    </div>
    <div class="content">
      <div style="max-width:660px">
        ${isEmpty ? `
          <div class="empty-state">
            <div class="empty-icon">◌</div>
            <p>No feedback yet — use the + button to submit a bug, improvement, or feature request.</p>
          </div>` : ''}
        ${open.length > 0 ? `
          <div class="section-header"><div class="section-title">Open · ${open.length}</div></div>
          ${open.map(cardHtml).join('')}` : ''}
        ${done.length > 0 ? `
          <div class="section-header" style="${open.length?'margin-top:28px':''}"><div class="section-title">Done · ${done.length}</div></div>
          ${done.map(cardHtml).join('')}` : ''}
      </div>
    </div>`;
}

function openNewLeadModal(){openModal(`<div class="modal-title">Add Lead</div><div class="form-grid"><div class="form-group"><label>Company</label><input id="l-company" placeholder="Company name"></div><div class="form-group"><label>Contact Name</label><input id="l-contact"></div><div class="form-group"><label>Contact Role / Title</label><input id="l-role" placeholder="e.g. Brand Marketing Lead"></div><div class="form-group"><label>Contact Email</label><input id="l-email" type="email"></div><div class="form-group"><label>Contact Phone</label><input id="l-phone" placeholder="(416) 555-0000"></div><div class="form-group"><label>Project Type</label><select id="l-type"><option>Brand Activation</option><option>Pop-Up</option><option>Branding</option><option>Event</option><option>Creative Project</option><option>Other</option></select></div><div class="form-group"><label>Estimated Value ($)</label><input id="l-value" type="number" placeholder="0"></div><div class="form-group"><label>Status</label><select id="l-status">${statusOpts('not-contacted')}</select></div><div class="form-group full"><label>Notes & Next Steps</label><textarea id="l-notes"></textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createLead()">Add Lead</button></div>`);}
function createLead(){const c=document.getElementById('l-company').value.trim();if(!c){toast('Company name required');return;}store.leads.push({id:store.nextId.leads++,company:c,contactName:document.getElementById('l-contact').value,contactRole:document.getElementById('l-role').value,contactEmail:document.getElementById('l-email').value,contactPhone:document.getElementById('l-phone').value,projectType:document.getElementById('l-type').value,estimatedValue:parseInt(document.getElementById('l-value').value)||0,status:document.getElementById('l-status').value,notes:document.getElementById('l-notes').value,convertedProjectId:null});closeModal();toast('Lead added');save();render();}
function openEditLeadModal(id){const l=store.leads.find(x=>x.id===id);openModal(`<div class="modal-title">Edit Lead</div><div class="form-grid"><div class="form-group"><label>Company</label><input id="l-company" value="${l.company}"></div><div class="form-group"><label>Contact Name</label><input id="l-contact" value="${l.contactName||''}"></div><div class="form-group"><label>Contact Role / Title</label><input id="l-role" value="${l.contactRole||''}" placeholder="e.g. Brand Marketing Lead"></div><div class="form-group"><label>Contact Email</label><input id="l-email" value="${l.contactEmail||''}"></div><div class="form-group"><label>Contact Phone</label><input id="l-phone" value="${l.contactPhone||''}" placeholder="(416) 555-0000"></div><div class="form-group"><label>Project Type</label><select id="l-type">${['Brand Activation','Pop-Up','Branding','Event','Creative Project','Other'].map(t=>`<option ${l.projectType===t?'selected':''}>${t}</option>`).join('')}</select></div><div class="form-group"><label>Estimated Value ($)</label><input id="l-value" type="number" value="${l.estimatedValue||0}"></div><div class="form-group"><label>Status</label><select id="l-status">${statusOpts(l.status)}</select></div><div class="form-group full"><label>Notes & Next Steps</label><textarea id="l-notes">${l.notes||''}</textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveLead(${id})">Save</button></div>`);}
function saveLead(id){const l=store.leads.find(x=>x.id===id);l.company=document.getElementById('l-company').value.trim()||l.company;l.contactName=document.getElementById('l-contact').value;l.contactRole=document.getElementById('l-role').value;l.contactEmail=document.getElementById('l-email').value;l.contactPhone=document.getElementById('l-phone').value;l.projectType=document.getElementById('l-type').value;l.estimatedValue=parseInt(document.getElementById('l-value').value)||0;l.status=document.getElementById('l-status').value;l.notes=document.getElementById('l-notes').value;closeModal();toast('Lead saved');save();render();}
function deleteLead(id){store.leads=store.leads.filter(l=>l.id!==id);toast('Lead removed');save();render();}

function openConvertLeadModal(id) {
  convertingLeadId = id;
  const l = store.leads.find(x => x.id === id);
  // Check for existing company or contact match
  const existing = store.companies.find(c => c.name.toLowerCase().trim() === l.company.toLowerCase().trim()) ||
    (l.contactName ? store.contacts.find(c => c.name.toLowerCase().trim() === l.contactName.toLowerCase().trim()) : null);
  const existingCompany = store.companies.find(c => c.name.toLowerCase().trim() === l.company.toLowerCase().trim());
  const existingContact = l.contactName ? store.contacts.find(c => c.name.toLowerCase().trim() === l.contactName.toLowerCase().trim()) : null;
  const swatches = PROJECT_COLORS.map((c,i) => `<div class="color-swatch ${i===0?'selected':''}" style="background:${c}" onclick="selectConvertColor('${c}')"></div>`).join('');
  const defaultName = `${l.company} — ${l.projectType}`;
  let companyHtml;
  if (existingCompany) {
    companyHtml = `<div style="background:var(--accent-light);border-radius:10px;padding:12px 14px;margin-bottom:10px"><div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:600">We found a matching company:</div><label style="display:flex;align-items:center;gap:10px;cursor:pointer;margin-bottom:8px;font-weight:700;color:var(--navy)"><input type="radio" name="cl-comp" id="cl-comp-existing" value="existing" checked onchange="toggleConvertCompanyFields()"> Link to ${esc(existingCompany.name)}<input type="hidden" id="cl-comp-existing-id" value="${existingCompany.id}"></label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--muted)"><input type="radio" name="cl-comp" value="new" onchange="toggleConvertCompanyFields()"> Create new company</label></div><div id="cl-comp-new-fields" style="display:none"><div class="form-group full"><label>Company Name</label><input id="cl-coname" value="${esc(l.company)}"></div></div>`;
  } else {
    companyHtml = `<div class="form-group full"><label>Company Name</label><input id="cl-coname" value="${esc(l.company)}"></div>`;
  }
  let contactHtml;
  if (existingContact) {
    contactHtml = `<div style="background:var(--accent-light);border-radius:10px;padding:12px 14px;margin-bottom:10px"><div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:600">We found a matching contact:</div><label style="display:flex;align-items:center;gap:10px;cursor:pointer;margin-bottom:8px;font-weight:700;color:var(--navy)"><input type="radio" name="cl-cm" id="cl-existing" value="existing" checked onchange="toggleConvertContactFields()"> Link to ${esc(existingContact.name)}<input type="hidden" id="cl-existing-id" value="${existingContact.id}"></label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--muted)"><input type="radio" name="cl-cm" id="cl-new-radio" value="new" onchange="toggleConvertContactFields()"> Create new contact</label></div><div id="cl-new-fields" style="display:none"><div class="form-grid"><div class="form-group"><label>Contact Name</label><input id="cl-cname" value="${esc(l.contactName||'')}"></div><div class="form-group"><label>Role / Title</label><input id="cl-crole" value="${esc(l.contactRole||'')}"></div><div class="form-group"><label>Email</label><input id="cl-cemail" type="email" value="${esc(l.contactEmail||'')}"></div><div class="form-group"><label>Phone</label><input id="cl-cphone" value="${esc(l.contactPhone||'')}"></div></div></div>`;
  } else {
    contactHtml = `<div class="form-grid"><div class="form-group"><label>Contact Name</label><input id="cl-cname" value="${esc(l.contactName||'')}"></div><div class="form-group"><label>Role / Title</label><input id="cl-crole" value="${esc(l.contactRole||'')}"></div><div class="form-group"><label>Email</label><input id="cl-cemail" type="email" value="${esc(l.contactEmail||'')}"></div><div class="form-group"><label>Phone</label><input id="cl-cphone" value="${esc(l.contactPhone||'')}"></div></div>`;
  }
  openModal(`
    <div class="modal-title" style="color:var(--green)">🎉 Won — Convert to Project</div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:16px">${esc(l.company)} · Est. $${(l.estimatedValue||0).toLocaleString()}</div>
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;color:var(--muted);margin-bottom:10px">Project</div>
    <div class="form-grid">
      <div class="form-group full"><label>Project Name</label><input id="cl-name" value="${esc(defaultName)}"></div>
      <div class="form-group"><label>Type</label><select id="cl-type">${['Brand Activation','Pop-Up','Branding','Event','Creative Project','Other'].map(t=>`<option ${l.projectType===t?'selected':''}>${t}</option>`).join('')}</select></div>
      <div class="form-group"><label>Start Date</label><input id="cl-start" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group full"><label>Colour</label><div class="color-swatches">${swatches}</div><input type="hidden" id="cl-color" value="${PROJECT_COLORS[0]}"></div>
    </div>
    <div style="border-top:1px solid var(--border);margin:16px 0 12px"></div>
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;color:var(--muted);margin-bottom:10px">Company</div>
    ${companyHtml}
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;color:var(--muted);margin-bottom:10px;margin-top:12px">Contact Person</div>
    ${contactHtml}
    <div style="border-top:1px solid var(--border);margin:16px 0 12px"></div>
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;color:var(--muted);margin-bottom:10px">Budget Envelope</div>
    <div class="form-grid">
      <div class="form-group"><label>Budget Target ($)</label><input id="cl-budget" type="number" value="${l.estimatedValue||0}"></div>
      <div class="form-group" style="align-self:end"><div style="font-size:12px;color:var(--muted);padding:6px 0;line-height:1.6">Your ceiling. Add forecast lines once the project is open — remaining budget tracks automatically.</div></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="convertLead()">Create Project & Client →</button></div>
  `);
}

function toggleConvertContactFields() {
  const isNew = document.getElementById('cl-new-radio')?.checked;
  const fields = document.getElementById('cl-new-fields');
  if (fields) fields.style.display = isNew ? '' : 'none';
}
function toggleConvertCompanyFields() {
  const radios = document.querySelectorAll('input[name="cl-comp"]');
  const isNew = [...radios].find(r=>r.value==='new')?.checked;
  const fields = document.getElementById('cl-comp-new-fields');
  if (fields) fields.style.display = isNew ? '' : 'none';
}

function selectConvertColor(c) {
  document.getElementById('cl-color').value = c;
  document.querySelectorAll('.color-swatch').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.color-swatch').forEach(el => { if(el.style.background===c) el.classList.add('selected'); });
}

function convertLead() {
  const l = store.leads.find(x => x.id === convertingLeadId);
  if (!l) { toast('Lead not found'); return; }
  const name = document.getElementById('cl-name').value.trim();
  if (!name) { toast('Project name required'); return; }
  const color = document.getElementById('cl-color').value || PROJECT_COLORS[0];
  const budgetTarget = parseFloat(document.getElementById('cl-budget').value) || 0;
  // Determine or create company
  let companyId;
  const compExistingRadio = document.getElementById('cl-comp-existing');
  const compIsNew = !compExistingRadio || [...document.querySelectorAll('input[name="cl-comp"]')].find(r=>r.value==='new')?.checked;
  if (compExistingRadio && !compIsNew) {
    companyId = parseInt(document.getElementById('cl-comp-existing-id').value);
  } else {
    const coName = document.getElementById('cl-coname')?.value.trim() || l.company;
    const newCo = {id: store.nextId.companies++, name: coName, industry:'', notes:'', payments:[]};
    store.companies.push(newCo);
    companyId = newCo.id;
  }
  // Determine or create contact person
  let contactId;
  const existingRadio = document.getElementById('cl-existing');
  const newRadio = document.getElementById('cl-new-radio');
  if (existingRadio && !newRadio?.checked) {
    contactId = parseInt(document.getElementById('cl-existing-id').value);
  } else {
    const cname = document.getElementById('cl-cname')?.value.trim() || l.contactName || '';
    if (cname) {
      const newContact = {
        id: store.nextId.contacts++,
        companyId,
        name: cname,
        role: document.getElementById('cl-crole')?.value.trim() || l.contactRole || '',
        email: document.getElementById('cl-cemail')?.value.trim() || l.contactEmail || '',
        phone: document.getElementById('cl-cphone')?.value.trim() || l.contactPhone || ''
      };
      store.contacts.push(newContact);
      contactId = newContact.id;
    }
  }
  // Create project
  const newId = store.nextId.projects++;
  const co = store.companies.find(c=>c.id===companyId);
  store.projects.push({
    id: newId, name, client: co?co.name:l.company, clientId: companyId,
    type: document.getElementById('cl-type').value,
    status: 'planning', color,
    startDate: document.getElementById('cl-start').value, endDate: '',
    budget: 0, spent: 0,
    budgetTarget,
    leadId: l.id,
    brief: { overview: l.notes || '', objectives: '', deliverables: '', timeline: '' },
    teamIds: [], contactIds: contactId?[contactId]:[], expenses: [], teamAllocation: {},
    signoff: emptySignoff(), production: emptyProduction(),
    tasks: [], assets: { driveFolder: '', files: [] }, invoices: [],
    budgetLines: BUDGET_CATS.map((cat, i) => ({ id: i+1, category: cat, forecast: 0, actuals: 0 }))
  });
  // Mark lead converted
  l.convertedProjectId = newId;
  closeModal(); save();
  toast('Lead converted → ' + name);
  navigate('project-detail', newId);
}

function openNewProjectModal(){const swatches=PROJECT_COLORS.map((c,i)=>`<div class="color-swatch ${i===0?'selected':''}" style="background:${c}" onclick="selectProjectColor('${c}')"></div>`).join('');const coOpts=`<option value="">— No client —</option>`+store.companies.map(co=>`<option value="${co.id}">${esc(co.name)}</option>`).join('');openModal(`<div class="modal-title">New Project</div><div class="form-grid"><div class="form-group full"><label>Project Name</label><input id="f-name" placeholder="e.g. Summer Pop-Up"></div><div class="form-group"><label>Client</label><select id="f-client-id">${coOpts}</select></div><div class="form-group"><label>Type</label><select id="f-type"><option>Brand Activation</option><option>Pop-Up</option><option>Branding</option><option>Creative Project</option><option>Event</option><option>Other</option></select></div><div class="form-group"><label>Status</label><select id="f-status"><option value="planning">Planning</option><option value="active">Active</option><option value="pitched">Pitched</option><option value="completed">Completed</option></select></div><div class="form-group"><label>Budget ($)</label><input id="f-budget" type="number" placeholder="0"></div><div class="form-group"></div><div class="form-group"><label>Start Date</label><input id="f-start" type="date"></div><div class="form-group"><label>End Date</label><input id="f-end" type="date"></div><div class="form-group full"><label>Project Colour</label><div class="color-swatches">${swatches}</div><input type="hidden" id="f-color" value="${PROJECT_COLORS[0]}"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createProject()">Create Project</button></div>`);}
function createProject(){const n=document.getElementById('f-name').value.trim();if(!n){toast('Project name required');return;}const clientId=parseInt(document.getElementById('f-client-id').value)||null;const co=clientId?store.companies.find(c=>c.id===clientId):null;store.projects.push({id:store.nextId.projects++,name:n,client:co?co.name:'—',clientId,type:document.getElementById('f-type').value,status:document.getElementById('f-status').value,color:document.getElementById('f-color').value||PROJECT_COLORS[0],budget:parseInt(document.getElementById('f-budget').value)||0,spent:0,startDate:document.getElementById('f-start').value,endDate:document.getElementById('f-end').value,brief:{overview:'',objectives:'',deliverables:'',timeline:''},teamIds:[],contactIds:[],expenses:[],teamAllocation:{},signoff:emptySignoff(),production:emptyProduction(),tasks:[],assets:{driveFolder:'',files:[]},invoices:[]});closeModal();toast('Project created');save();render();}
function openEditProjectModal(){const p=currentProject;const swatches=PROJECT_COLORS.map(c=>`<div class="color-swatch ${p.color===c?'selected':''}" style="background:${c}" onclick="selectProjectColor('${c}')"></div>`).join('');const coOpts=`<option value="">— No client —</option>`+store.companies.map(co=>`<option value="${co.id}" ${p.clientId===co.id?'selected':''}>${esc(co.name)}</option>`).join('');openModal(`<div class="modal-title">Edit Project</div><div class="form-grid"><div class="form-group full"><label>Project Name</label><input id="f-name" value="${p.name}"></div><div class="form-group"><label>Client</label><select id="f-client-id">${coOpts}</select></div><div class="form-group"><label>Type</label><select id="f-type">${['Brand Activation','Pop-Up','Branding','Creative Project','Event','Other'].map(t=>`<option ${p.type===t?'selected':''}>${t}</option>`).join('')}</select></div><div class="form-group"><label>Status</label><select id="f-status">${['planning','active','pitched','completed'].map(s=>`<option value="${s}" ${p.status===s?'selected':''}>${s}</option>`).join('')}</select></div><div class="form-group"><label>Budget ($)</label><input id="f-budget" type="number" value="${p.budget}"></div><div class="form-group"></div><div class="form-group"><label>Start Date</label><input id="f-start" type="date" value="${p.startDate}"></div><div class="form-group"><label>End Date</label><input id="f-end" type="date" value="${p.endDate}"></div><div class="form-group full"><label>Project Colour</label><div class="color-swatches">${swatches}</div><input type="hidden" id="f-color" value="${p.color||PROJECT_COLORS[0]}"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveProject()">Save</button></div>`);}
function saveProject(){const p=currentProject;p.name=document.getElementById('f-name').value.trim()||p.name;const clientId=parseInt(document.getElementById('f-client-id').value)||null;const co=clientId?store.companies.find(c=>c.id===clientId):null;p.clientId=clientId;p.client=co?co.name:(p.client||'—');p.type=document.getElementById('f-type').value;p.status=document.getElementById('f-status').value;p.color=document.getElementById('f-color').value||p.color;p.budget=parseInt(document.getElementById('f-budget').value)||0;p.startDate=document.getElementById('f-start').value;p.endDate=document.getElementById('f-end').value;closeModal();toast('Project saved');save();render();}
function selectProjectColor(c){document.getElementById('f-color').value=c;document.querySelectorAll('.color-swatch').forEach(el=>el.classList.remove('selected'));document.querySelectorAll('.color-swatch').forEach(el=>{if(el.style.background===c)el.classList.add('selected');});}
function openEditBriefModal(){const p=currentProject;openModal(`<div class="modal-title">Edit Brief</div><div class="form-grid"><div class="form-group full"><label>Overview</label><textarea id="b-overview">${p.brief.overview}</textarea></div><div class="form-group full"><label>Objectives</label><textarea id="b-objectives">${p.brief.objectives}</textarea></div><div class="form-group full"><label>Deliverables</label><textarea id="b-deliverables">${p.brief.deliverables}</textarea></div><div class="form-group full"><label>Timeline Notes</label><textarea id="b-timeline">${p.brief.timeline}</textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveBrief()">Save Brief</button></div>`);}
function saveBrief(){const p=currentProject;p.brief.overview=document.getElementById('b-overview').value;p.brief.objectives=document.getElementById('b-objectives').value;p.brief.deliverables=document.getElementById('b-deliverables').value;p.brief.timeline=document.getElementById('b-timeline').value;closeModal();toast('Brief saved');save();render();}
function openAllocateModal(){const p=currentProject;const av=store.team.filter(m=>!p.teamIds.includes(m.id));openModal(`<div class="modal-title">Allocate Team Member</div>${av.length===0?'<p style="color:var(--muted)">All team members already assigned.</p>':`<div class="form-grid"><div class="form-group"><label>Team Member</label><select id="f-member">${av.map(m=>`<option value="${m.id}">${m.name} — ${m.role} ($${m.rate}/day)</option>`).join('')}</select></div><div class="form-group"><label>Days Allocated</label><input id="f-days" type="number" value="1" min="0"></div></div>`}<div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button>${av.length>0?`<button class="btn btn-primary" onclick="allocateMember()">Add to Project</button>`:''}</div>`);}
function allocateMember(){const mid=parseInt(document.getElementById('f-member').value),days=parseInt(document.getElementById('f-days').value)||0,p=currentProject;p.teamIds.push(mid);if(!p.teamAllocation)p.teamAllocation={};p.teamAllocation[mid]=days;closeModal();toast('Team member added');save();render();}
function removeTeamMember(id){const p=currentProject;p.teamIds=p.teamIds.filter(t=>t!==id);if(p.teamAllocation)delete p.teamAllocation[id];toast('Removed');save();render();}
function editBudgetLineForecast(idx){const p=currentProject;ensureBudgetLines(p);const line=p.budgetLines[idx];openModal(`<div class="modal-title">Set Forecast</div><div class="form-grid"><div class="form-group full"><label>Category</label><div style="font-size:16px;font-weight:700;color:var(--navy);padding:4px 0">${line.category}</div></div><div class="form-group full"><label>Forecast Amount ($)</label><input id="f-forecast" type="number" value="${line.forecast||0}" placeholder="0"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveBudgetLineForecast(${idx})">Save</button></div>`);}
function saveBudgetLineForecast(idx){currentProject.budgetLines[idx].forecast=parseFloat(document.getElementById('f-forecast').value)||0;closeModal();save();render();}
function addBudgetLine(){openModal(`<div class="modal-title">Add Budget Line</div><div class="form-grid"><div class="form-group full"><label>Category Name</label><input id="f-cat" placeholder="e.g. Catering"></div><div class="form-group full"><label>Forecast Amount ($)</label><input id="f-forecast" type="number" placeholder="0"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveNewBudgetLine()">Add</button></div>`);}
function saveNewBudgetLine(){const cat=document.getElementById('f-cat').value.trim();if(!cat){toast('Category name required');return;}const p=currentProject;ensureBudgetLines(p);const newId=Math.max(0,...p.budgetLines.map(l=>l.id))+1;p.budgetLines.push({id:newId,category:cat,forecast:parseFloat(document.getElementById('f-forecast').value)||0,actuals:0});closeModal();toast('Budget line added');save();render();}
function removeBudgetLine(idx){currentProject.budgetLines.splice(idx,1);toast('Removed');save();render();}
function openAddExpenseModal(){openModal(`<div class="modal-title">Add Expense</div><div class="form-grid"><div class="form-group full"><label>Description</label><input id="f-desc" placeholder="e.g. Venue hire"></div><div class="form-group"><label>Category</label><select id="f-cat"><option>Venue</option><option>Production</option><option>Staffing</option><option>Tech</option><option>Design</option><option>Travel</option><option>Other</option></select></div><div class="form-group"><label>Amount ($)</label><input id="f-amount" type="number" placeholder="0"></div><div class="form-group"><label>Date</label><input id="f-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addExpense()">Add Expense</button></div>`);}
function addExpense(){const a=parseFloat(document.getElementById('f-amount').value)||0,d=document.getElementById('f-desc').value.trim();if(!d){toast('Description required');return;}const p=currentProject;p.expenses.push({id:store.nextId.expenses++,description:d,category:document.getElementById('f-cat').value,amount:a,date:document.getElementById('f-date').value});p.spent=p.expenses.reduce((s,e)=>s+e.amount,0);closeModal();toast('Expense added');save();render();}
function deleteExpense(id){const p=currentProject;p.expenses=p.expenses.filter(e=>e.id!==id);p.spent=p.expenses.reduce((s,e)=>s+e.amount,0);toast('Removed');save();render();}
function openAddContactToProjectModal(){const p=currentProject,av=store.contacts.filter(c=>!p.contactIds.includes(c.id));openModal(`<div class="modal-title">Add Contact</div>${av.length===0?'<p style="color:var(--muted)">All contacts already linked.</p>':`<div class="form-group"><label>Select Person</label><select id="f-contact">${av.map(c=>{const co=c.companyId?store.companies.find(x=>x.id===c.companyId):null;return`<option value="${c.id}">${c.name}${co?' — '+co.name:''}${c.role?' · '+c.role:''}`;}).join('')}</select></div>`}<div style="margin-top:10px;font-size:12px;color:var(--muted)">Don't see them? <a onclick="closeModal();navigate('contacts')" style="color:var(--blue);cursor:pointer">Add to Clients first.</a></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button>${av.length>0?`<button class="btn btn-primary" onclick="addContactToProject()">Add</button>`:''}</div>`);}
function addContactToProject(){currentProject.contactIds.push(parseInt(document.getElementById('f-contact').value));closeModal();toast('Contact added');save();render();}
function removeContact(id){currentProject.contactIds=currentProject.contactIds.filter(c=>c!==id);toast('Removed');save();render();}
function openNewMemberModal(){openModal(`<div class="modal-title">Add Team Member</div><div class="form-grid"><div class="form-group"><label>Full Name</label><input id="f-name"></div><div class="form-group"><label>Role</label><input id="f-role" placeholder="e.g. Designer"></div><div class="form-group"><label>Email</label><input id="f-email" type="email"></div><div class="form-group"><label>Day Rate ($)</label><input id="f-rate" type="number" placeholder="0"></div><div class="form-group full"><label>Skills (comma separated)</label><input id="f-skills"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createMember()">Add Member</button></div>`);}
function createMember(){const n=document.getElementById('f-name').value.trim();if(!n){toast('Name required');return;}store.team.push({id:store.nextId.team++,name:n,role:document.getElementById('f-role').value||'Freelancer',email:document.getElementById('f-email').value,rate:parseInt(document.getElementById('f-rate').value)||0,skills:document.getElementById('f-skills').value.split(',').map(s=>s.trim()).filter(Boolean),availability:'available',availableFrom:'',contractStatus:'not-sent',ir35:'not-assessed',paymentTerms:'30',payments:[],notes:''});closeModal();toast('Team member added');save();render();}
function deleteMember(id){store.team=store.team.filter(m=>m.id!==id);toast('Removed');save();render();}
// ─── COMPANY CRUD ──────────────────────────────────────────────────────────────
function openNewCompanyModal(){openModal(`<div class="modal-title">Add Client</div><div class="form-grid"><div class="form-group full"><label>Company Name</label><input id="f-coname" placeholder="e.g. RBC Royal Bank of Canada"></div><div class="form-group"><label>Industry</label><input id="f-industry" placeholder="e.g. Financial Services"></div><div class="form-group full"><label>Notes</label><textarea id="f-notes" placeholder="Any context..."></textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createCompany()">Add Client</button></div>`);}
function createCompany(){const n=document.getElementById('f-coname').value.trim();if(!n){toast('Company name required');return;}const co={id:store.nextId.companies++,name:n,industry:document.getElementById('f-industry').value,notes:document.getElementById('f-notes').value,payments:[]};store.companies.push(co);closeModal();toast('Client added');save();render();}
function openEditCompanyModal(id){const co=store.companies.find(x=>x.id===id);if(!co)return;openModal(`<div class="modal-title">Edit Client</div><div class="form-grid"><div class="form-group full"><label>Company Name</label><input id="f-coname" value="${esc(co.name)}"></div><div class="form-group"><label>Industry</label><input id="f-industry" value="${esc(co.industry||'')}"></div><div class="form-group full"><label>Notes</label><textarea id="f-notes">${esc(co.notes||'')}</textarea></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveCompany(${id})">Save</button></div>`);}
function saveCompany(id){const co=store.companies.find(x=>x.id===id);if(!co)return;co.name=document.getElementById('f-coname').value.trim()||co.name;co.industry=document.getElementById('f-industry').value;co.notes=document.getElementById('f-notes').value;closeModal();toast('Saved');save();render();}
function deleteCompany(id){if(!confirm('Remove this client? Their contacts and project links will be cleared.'))return;store.companies=store.companies.filter(c=>c.id!==id);store.contacts.forEach(c=>{if(c.companyId===id)c.companyId=null;});store.projects.forEach(p=>{if(p.clientId===id)p.clientId=null;});toast('Client removed');save();render();}
// ─── PERSON CRUD ───────────────────────────────────────────────────────────────
function openAddPersonModal(companyId){openModal(`<div class="modal-title">Add Contact</div><div class="form-grid"><div class="form-group"><label>Full Name</label><input id="f-name"></div><div class="form-group"><label>Role / Title</label><input id="f-role"></div><div class="form-group"><label>Email</label><input id="f-email" type="email"></div><div class="form-group"><label>Phone</label><input id="f-phone"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createPerson(${companyId})">Add Contact</button></div>`);}
function createPerson(companyId){const n=document.getElementById('f-name').value.trim();if(!n){toast('Name required');return;}store.contacts.push({id:store.nextId.contacts++,companyId,name:n,role:document.getElementById('f-role').value,email:document.getElementById('f-email').value,phone:document.getElementById('f-phone').value});closeModal();toast('Contact added');save();render();}
function openEditPersonModal(id){const c=store.contacts.find(x=>x.id===id);if(!c)return;openModal(`<div class="modal-title">Edit Contact</div><div class="form-grid"><div class="form-group"><label>Full Name</label><input id="f-name" value="${esc(c.name)}"></div><div class="form-group"><label>Role / Title</label><input id="f-role" value="${esc(c.role||'')}"></div><div class="form-group"><label>Email</label><input id="f-email" value="${esc(c.email||'')}"></div><div class="form-group"><label>Phone</label><input id="f-phone" value="${esc(c.phone||'')}"></div></div><div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="savePerson(${id})">Save</button></div>`);}
function savePerson(id){const c=store.contacts.find(x=>x.id===id);if(!c)return;c.name=document.getElementById('f-name').value.trim()||c.name;c.role=document.getElementById('f-role').value;c.email=document.getElementById('f-email').value;c.phone=document.getElementById('f-phone').value;closeModal();toast('Saved');save();render();}
function deletePerson(id){store.contacts=store.contacts.filter(c=>c.id!==id);store.projects.forEach(p=>{p.contactIds=(p.contactIds||[]).filter(c=>c!==id);});save();toast('Contact removed');render();}
// Legacy aliases for compatibility
function openNewContactModal(){openNewCompanyModal();}
function openEditContactModal(id){openEditCompanyModal(id);}
function deleteContact(id){deleteCompany(id);}

// ─── BACKUP / RESTORE ─────────────────────────────────────────────────────────
function exportData() {
  const json = JSON.stringify(store, null, 2);
  const blob = new Blob([json], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `felt-studio-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Backup downloaded ✓');
}
function triggerImport() {
  document.getElementById('import-input').click();
}
function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.projects || !data.team) { toast('Unrecognised file — not restored'); return; }
      if (!confirm('This will replace all current data with the backup. Continue?')) return;
      store = data;
      await save();
      toast('Restored — reloading...');
      setTimeout(() => location.reload(), 1200);
    } catch(err) {
      toast('Invalid backup file');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function initials(name){return name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);}
function formatDate(d){if(!d)return'—';return new Date(d).toLocaleDateString('en-CA',{day:'numeric',month:'short',year:'numeric'});}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
function esc(str){return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

// ─── GLOBAL SEARCH ────────────────────────────────────────────────────────────
function openSearch(){
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(()=>document.getElementById('search-input').focus(),60);
  renderSearchResults('');
}
function closeSearch(){
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input').value='';
}
function handleSearchOverlayClick(e){if(e.target===document.getElementById('search-overlay'))closeSearch();}
function handleSearchKey(e){if(e.key==='Escape')closeSearch();}
function renderSearchResults(q){
  const query=q.toLowerCase().trim();
  const results=[];
  if(!query){
    store.projects.slice(0,5).forEach(p=>results.push({type:'Project',label:p.name,sub:p.client+' · '+p.status,action:`closeSearch();navigate('project-detail',${p.id})`}));
  } else {
    store.projects.forEach(p=>{if(p.name.toLowerCase().includes(query)||p.client.toLowerCase().includes(query))results.push({type:'Project',label:p.name,sub:p.client+' · '+p.status,action:`closeSearch();navigate('project-detail',${p.id})`});});
    store.team.forEach(m=>{if(m.name.toLowerCase().includes(query)||m.role.toLowerCase().includes(query))results.push({type:'Team',label:m.name,sub:m.role+' · $'+m.rate+'/day',action:`closeSearch();navigate('team-profile',undefined,${m.id})`});});
    store.companies.forEach(co=>{if(co.name.toLowerCase().includes(query))results.push({type:'Client',label:co.name,sub:(co.industry||'')+(co.industry?' · ':'')+store.contacts.filter(c=>c.companyId===co.id).length+' contacts',action:`closeSearch();navigateToCompany(${co.id})`});});
    store.contacts.forEach(c=>{if(c.name.toLowerCase().includes(query)||(c.email||'').toLowerCase().includes(query)){const co=c.companyId?store.companies.find(x=>x.id===c.companyId):null;results.push({type:'Contact',label:c.name,sub:(co?co.name+' · ':'')+c.role,action:co?`closeSearch();navigateToCompany(${co.id})`:`closeSearch();navigate('contacts')`});}});
    store.leads.forEach(l=>{if(l.company.toLowerCase().includes(query)||(l.contactName||'').toLowerCase().includes(query))results.push({type:'Lead',label:l.company,sub:(l.contactName||'')+(l.status?' · '+l.status:''),action:`closeSearch();navigate('leads')`});});
    store.globalSuppliers.forEach(s=>{if(s.company.toLowerCase().includes(query)||(s.contactName||'').toLowerCase().includes(query))results.push({type:'Vendor',label:s.company,sub:s.category+(s.contactName?' · '+s.contactName:''),action:`closeSearch();navigate('global-suppliers')`});});
    store.ideas.forEach(i=>{if(i.title.toLowerCase().includes(query)||i.description.toLowerCase().includes(query))results.push({type:'Idea',label:i.title,sub:i.category+' · '+i.submittedBy,action:`closeSearch();navigate('ideas')`});});
  }
  const container=document.getElementById('search-results');
  if(!results.length){container.innerHTML=`<div style="text-align:center;padding:32px 20px;color:var(--muted);font-size:13px">${query?'No results for "'+q+'"':'Start typing to search everything...'}</div>`;return;}
  const groups={};
  results.forEach(r=>{if(!groups[r.type])groups[r.type]=[];groups[r.type].push(r);});
  container.innerHTML=Object.entries(groups).map(([type,items])=>`
    <div class="search-group-label">${type}s</div>
    ${items.map(r=>`<div class="search-result" onclick="${r.action}">
      <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:14px">${r.label}</div><div style="font-size:12px;color:var(--muted)">${r.sub}</div></div>
      <span class="search-result-type">${r.type}</span>
    </div>`).join('')}`).join('');
}
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}
  if(e.key==='Escape'){closeSearch();}
});

// ─── QUICK CAPTURE ────────────────────────────────────────────────────────────
let qcOpen=false;
function toggleQC(){
  qcOpen=!qcOpen;
  document.getElementById('qc-menu').style.display=qcOpen?'flex':'none';
  document.getElementById('qc-btn')?.style.setProperty('transform',qcOpen?'rotate(45deg)':'rotate(0)');
  const mb=document.getElementById('qc-btn-mobile');
  if(mb) mb.style.transform=qcOpen?'rotate(45deg)':'rotate(0)';
}
function closeQC(){
  qcOpen=false;
  document.getElementById('qc-menu').style.display='none';
  document.getElementById('qc-btn')?.style.setProperty('transform','rotate(0)');
  const mb=document.getElementById('qc-btn-mobile');
  if(mb) mb.style.transform='rotate(0)';
}
function openQuickTaskModal(){
  const projectOpts=store.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  openModal(`
    <div class="modal-title">◆ Add Task</div>
    <div class="form-grid">
      <div class="form-group full"><label>Project</label><select id="qt-project"><option value="">— Select project —</option>${projectOpts}</select></div>
      <div class="form-group full"><label>Task Name</label><input id="qt-name" placeholder="e.g. Send proposal draft"></div>
      <div class="form-group"><label>Category</label><select id="qt-cat">${TASK_CATS.map(c=>`<option>${c}</option>`).join('')}</select></div>
      <div class="form-group"><label>Due Date</label><input id="qt-due" type="date"></div>
      <div class="form-group"><label>Status</label><select id="qt-status"><option value="not-started">Not Started</option><option value="in-progress">In Progress</option></select></div>
      <div class="form-group"><label>Assign To</label><select id="qt-assign"><option value="">— Unassigned —</option>${store.team.map(m=>`<option>${m.name}</option>`).join('')}<option>Adam</option></select></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="quickAddTask()">Add Task</button></div>`);
}
function quickAddTask(){
  const projId=parseInt(document.getElementById('qt-project').value);
  const n=document.getElementById('qt-name').value.trim();
  if(!projId){toast('Select a project');return;}
  if(!n){toast('Task name required');return;}
  const p=store.projects.find(x=>x.id===projId);
  if(!p.tasks)p.tasks=[];
  p.tasks.push({id:store.nextId.tasks++,name:n,category:document.getElementById('qt-cat').value,status:document.getElementById('qt-status').value,startDate:'',dueDate:document.getElementById('qt-due').value,assignedTo:document.getElementById('qt-assign').value});
  closeModal();save();toast('Task added ◆');render();
}
function openQuickExpenseModal(){
  const projectOpts=store.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  openModal(`
    <div class="modal-title">$ Log Expense</div>
    <div class="form-grid">
      <div class="form-group full"><label>Project</label><select id="qe-project"><option value="">— Select project —</option>${projectOpts}</select></div>
      <div class="form-group full"><label>Description</label><input id="qe-desc" placeholder="e.g. Venue hire"></div>
      <div class="form-group"><label>Category</label><select id="qe-cat"><option>Venue</option><option>Production</option><option>Staffing</option><option>Tech</option><option>Design</option><option>Travel</option><option>Other</option></select></div>
      <div class="form-group"><label>Amount ($)</label><input id="qe-amount" type="number" placeholder="0"></div>
      <div class="form-group"><label>Date</label><input id="qe-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="quickLogExpense()">Log Expense</button></div>`);
}
function quickLogExpense(){
  const projId=parseInt(document.getElementById('qe-project').value);
  const d=document.getElementById('qe-desc').value.trim();
  if(!projId){toast('Select a project');return;}
  if(!d){toast('Description required');return;}
  const p=store.projects.find(x=>x.id===projId);
  const a=parseFloat(document.getElementById('qe-amount').value)||0;
  p.expenses.push({id:store.nextId.expenses++,description:d,category:document.getElementById('qe-cat').value,amount:a,date:document.getElementById('qe-date').value});
  p.spent=p.expenses.reduce((s,e)=>s+e.amount,0);
  closeModal();save();toast('Expense logged');render();
}
function openQuickInvoiceModal(){
  const projectOpts=store.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  const catOptions=BUDGET_CATS.map(c=>`<option>${c}</option>`).join('');
  const db=store.globalSuppliers||[];
  const vendorOpts=db.map(s=>`<option value="${s.company}">${s.company} — ${s.category}</option>`).join('');
  openModal(`
    <div class="modal-title">🧾 Add Invoice</div>
    <div class="form-grid">
      <div class="form-group full"><label>Project</label><select id="qi-project"><option value="">— Select project —</option>${projectOpts}</select></div>
      <div class="form-group full"><label>Vendor / Contractor</label><select id="qi-supplier"><option value="">— Select vendor —</option>${vendorOpts}</select>
        <div style="margin-top:6px;font-size:12px;color:var(--muted)">Not listed? <a href="#" onclick="closeModal();navigate('global-suppliers');setTimeout(openAddGlobalVendorModal,100);return false;" style="color:var(--blue)">Add to vendor database first →</a></div>
      </div>
      <div class="form-group full"><label>Description</label><input id="qi-desc" placeholder="e.g. Stage 1 build, Final delivery, Deposit..."></div>
      <div class="form-group"><label>Budget Category</label><select id="qi-cat">${catOptions}</select></div>
      <div class="form-group"><label>Amount ($)</label><input id="qi-amount" type="number" placeholder="0"></div>
      <div class="form-group"><label>Date</label><input id="qi-date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group"><label>Status</label><select id="qi-status"><option value="pending">Pending</option><option value="paid">Paid</option></select></div>
    </div>
    <div class="modal-footer"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="quickAddInvoice()">Add Invoice</button></div>`);
}
function quickAddInvoice(){
  const projId=parseInt(document.getElementById('qi-project').value);
  if(!projId){toast('Select a project');return;}
  const supplier=document.getElementById('qi-supplier').value.trim();
  if(!supplier){toast('Select a vendor');return;}
  const p=store.projects.find(x=>x.id===projId);
  if(!p.invoices)p.invoices=[];
  p.invoices.push({
    id:store.nextId.invoices++,
    supplier,
    description:document.getElementById('qi-desc').value.trim(),
    category:document.getElementById('qi-cat').value,
    amount:parseFloat(document.getElementById('qi-amount').value)||0,
    date:document.getElementById('qi-date').value,
    status:document.getElementById('qi-status').value,
    notes:''
  });
  closeModal();save();toast('Invoice added 🧾');render();
}

// ─── CLIENT SUMMARY ───────────────────────────────────────────────────────────
function openClientSummary(){
  const p=currentProject; if(!p) return;
  const color=p.color||'#2563EB';
  const tasks=(p.tasks||[]).filter(t=>t.dueDate).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  const keyContacts=p.production?.keyContacts||[];
  document.getElementById('summary-content').innerHTML=`
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:48px">
      <div>
        <div style="font-size:34px;font-weight:800;letter-spacing:8px;color:#0F1F35">FELT<span style="color:${color}">.</span></div>
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#7A7570;margin-top:4px">Project Summary</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:#7A7570">${new Date().toLocaleDateString('en-CA',{day:'numeric',month:'long',year:'numeric'})}</div>
        <div style="font-size:11px;color:#C8C4BE;margin-top:2px;text-transform:uppercase;letter-spacing:1px">Confidential</div>
      </div>
    </div>

    <div style="border-top:4px solid ${color};padding-top:28px;margin-bottom:36px">
      <div style="font-size:30px;font-weight:800;color:#0F1F35;margin-bottom:5px;line-height:1.2">${p.name}</div>
      <div style="font-size:17px;color:#7A7570;margin-bottom:18px">${p.client}</div>
      <div style="display:flex;gap:28px;flex-wrap:wrap">
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;margin-bottom:3px">Type</div><div style="font-size:14px;font-weight:700;color:#0F1F35">${p.type}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;margin-bottom:3px">Start</div><div style="font-size:14px;font-weight:700;color:#0F1F35">${formatDate(p.startDate)}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;margin-bottom:3px">Delivery</div><div style="font-size:14px;font-weight:700;color:#0F1F35">${formatDate(p.endDate)}</div></div>
        <div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;margin-bottom:3px">Budget</div><div style="font-size:14px;font-weight:700;color:#0F1F35">$${p.budget.toLocaleString()}</div></div>
      </div>
    </div>

    ${p.brief.overview?`<div style="margin-bottom:32px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;padding-bottom:8px;border-bottom:1px solid #E0DBD2;margin-bottom:12px">Overview</div><div style="font-size:15px;line-height:1.75;color:#0F1F35;white-space:pre-wrap">${p.brief.overview}</div></div>`:''}
    ${p.brief.objectives?`<div style="margin-bottom:32px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;padding-bottom:8px;border-bottom:1px solid #E0DBD2;margin-bottom:12px">Objectives</div><div style="font-size:15px;line-height:1.75;color:#0F1F35;white-space:pre-wrap">${p.brief.objectives}</div></div>`:''}
    ${p.brief.deliverables?`<div style="margin-bottom:32px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;padding-bottom:8px;border-bottom:1px solid #E0DBD2;margin-bottom:12px">Deliverables</div><div style="font-size:15px;line-height:1.75;color:#0F1F35;white-space:pre-wrap">${p.brief.deliverables}</div></div>`:''}

    ${tasks.length>0?`<div style="margin-bottom:32px">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;padding-bottom:8px;border-bottom:1px solid #E0DBD2;margin-bottom:12px">Timeline Milestones</div>
      ${tasks.map(t=>`<div style="display:flex;align-items:center;gap:14px;padding:11px 0;border-bottom:1px solid #F2F0EB">
        <div style="width:10px;height:10px;border-radius:50%;background:${TASK_COLORS[t.status]||'#ccc'};flex-shrink:0"></div>
        <div style="flex:1;font-size:14px;font-weight:600;color:#0F1F35">${t.name}</div>
        <div style="font-size:13px;color:#7A7570;white-space:nowrap">${formatDate(t.dueDate)}</div>
      </div>`).join('')}
    </div>`:''}

    ${keyContacts.length>0?`<div style="margin-bottom:32px">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7A7570;font-weight:700;padding-bottom:8px;border-bottom:1px solid #E0DBD2;margin-bottom:12px">Key Contacts</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">
        ${keyContacts.map(kc=>`<div style="background:#F2F0EB;border-radius:10px;padding:16px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#7A7570;margin-bottom:6px">${kc.productionRole}</div>
          <div style="font-size:15px;font-weight:800;color:#0F1F35;margin-bottom:6px">${kc.name}</div>
          ${kc.phone?`<div style="font-size:13px;color:#0F1F35;margin-bottom:2px">${kc.phone}</div>`:''}
          ${kc.email?`<div style="font-size:13px;color:#2563EB">${kc.email}</div>`:''}
        </div>`).join('')}
      </div>
    </div>`:''}

    <div style="margin-top:56px;padding-top:16px;border-top:1px solid #E0DBD2;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:16px;font-weight:800;letter-spacing:4px;color:#0F1F35">FELT<span style="color:${color}">.</span></span>
      <span style="font-size:12px;color:#7A7570">hello@feltstudio.co</span>
    </div>`;
  document.getElementById('summary-overlay').style.display='block';
}
function closeClientSummary(){
  document.getElementById('summary-overlay').style.display='none';
}

// ─── AUTH & INIT ──────────────────────────────────────────────────────────────
function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
}
function hideLoginScreen() {
  document.getElementById('login-screen').style.display = 'none';
}

function updateUserChip() {
  const chip = document.getElementById('sidebar-user-chip');
  if (!chip) return;
  const initials = currentUserName.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() || '—';
  const roleLabel = currentUserRole === 'admin' ? 'Admin' : currentUserRole === 'viewer' ? 'Viewer' : 'Member';
  chip.innerHTML = `<div class="avatar">${initials}</div> <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${currentUserName}</span> <span style="font-size:10px;color:var(--muted);flex-shrink:0">${roleLabel}</span>`;
}

async function afterLogin(session) {
  currentUser = session.user;
  const { data: profile, error: profileError } = await _sb.rpc('get_my_profile');
  if (profileError) console.error('Profile fetch error:', profileError);
  currentUserRole = profile?.role || 'member';
  currentUserName = profile?.name || currentUser.email.split('@')[0];
  store = await loadFromSupabase();
  runMigrations();
  updateUserChip();
  if (currentUserRole === 'viewer') document.body.classList.add('viewer-mode');
  else document.body.classList.remove('viewer-mode');
  hideLoginScreen();
  render();
}

async function login() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');
  errEl.textContent = '';
  btn.textContent = 'Signing in…';
  btn.disabled = true;
  const { error } = await _sb.auth.signInWithPassword({ email, password });
  if (error) {
    errEl.textContent = error.message;
    btn.textContent = 'Sign in';
    btn.disabled = false;
  }
  // On success, onAuthStateChange fires afterLogin()
}

async function logout() {
  await _sb.auth.signOut();
}

// ─── ACCOUNT PANEL ────────────────────────────────────────────────────────────
async function openAccountPanel() {
  // Show loading state immediately
  openModal(`<div class="modal-title">Account & Team</div><div style="padding:20px 0;text-align:center;color:var(--muted)">Loading…</div>`);

  // Fetch all profiles via security-definer RPC (admins get all, others get null)
  const { data: profiles } = await _sb.rpc('get_all_profiles');

  const isAdmin = currentUserRole === 'admin';
  const roleColors = { admin: 'var(--accent)', member: 'var(--green)', viewer: 'var(--muted)' };

  // My Account section
  const myAccountHtml = `
    <div style="margin-bottom:24px">
      <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:12px">My Account</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <div class="avatar" style="width:40px;height:40px;font-size:15px;flex-shrink:0">${currentUserName.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div>
          <div style="font-weight:700;color:var(--text)">${currentUserName}</div>
          <div style="font-size:12px;color:var(--muted)">${currentUser?.email||''}</div>
        </div>
        <span style="margin-left:auto;font-size:11px;font-weight:700;padding:3px 8px;border-radius:20px;background:${roleColors[currentUserRole]||'var(--muted)'};color:${currentUserRole==='admin'?'#000':'#fff'};text-transform:capitalize">${currentUserRole}</span>
      </div>
      <button class="btn btn-ghost" style="width:100%;justify-content:center" onclick="sendPasswordReset()">Send password reset email</button>
    </div>`;

  // Team section (admin only)
  let teamHtml = '';
  if (isAdmin && profiles && profiles.length > 0) {
    const rows = profiles.map(p => {
      const isSelf = p.id === currentUser?.id;
      return `<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
        <div class="avatar" style="width:30px;height:30px;font-size:11px;flex-shrink:0">${(p.name||p.email||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name||'—'}</div>
          <div style="font-size:11px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.email||''}</div>
        </div>
        <select onchange="updateUserRole('${p.id}', this.value)" style="font-size:12px;padding:4px 6px;border:1.5px solid var(--border);border-radius:6px;background:var(--bg);color:var(--text);font-family:inherit;cursor:pointer" ${isSelf?'disabled title="Cannot change your own role"':''}>
          <option value="admin" ${p.role==='admin'?'selected':''}>Admin</option>
          <option value="member" ${p.role==='member'?'selected':''}>Member</option>
          <option value="viewer" ${p.role==='viewer'?'selected':''}>Viewer</option>
        </select>
        ${!isSelf?`<button class="btn btn-ghost btn-sm" onclick="revokeUserAccess('${p.id}','${p.name||p.email}')" style="color:var(--red);flex-shrink:0">✕</button>`:'<div style="width:32px"></div>'}
      </div>`;
    }).join('');

    teamHtml = `
      <div style="margin-bottom:24px">
        <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:4px">Team</div>
        ${rows}
      </div>`;
  }

  // Invite section (admin only)
  const inviteHtml = isAdmin ? `
    <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:14px;margin-bottom:8px">
      <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:4px">Invite a team member</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Add new users via the Supabase dashboard. They'll be set to Member by default — change their role here after they sign up.</div>
      <button class="btn btn-ghost btn-sm" onclick="window.open('https://supabase.com/dashboard/project/qyxbjtbipdpevzecbhkd/auth/users','_blank')">Open Supabase Auth →</button>
    </div>` : '';

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-title">Account & Team</div>
    ${myAccountHtml}
    ${teamHtml}
    ${inviteHtml}
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      <button class="btn btn-ghost" style="color:var(--red)" onclick="closeModal();logout()">Sign out</button>
    </div>`;
}

async function sendPasswordReset() {
  const { error } = await _sb.auth.resetPasswordForEmail(currentUser.email, {
    redirectTo: window.location.origin + window.location.pathname
  });
  if (error) { toast('Error: ' + error.message); }
  else { toast('Password reset email sent ✓'); }
}

async function updateUserRole(userId, role) {
  const { error } = await _sb.from('profiles').update({ role }).eq('id', userId);
  if (error) { toast('Error updating role'); return; }
  toast('Role updated ✓');
  // If they changed their own role, update local state
  if (userId === currentUser?.id) {
    currentUserRole = role;
    updateUserChip();
    if (role === 'viewer') document.body.classList.add('viewer-mode');
    else document.body.classList.remove('viewer-mode');
  }
}

async function revokeUserAccess(userId, name) {
  if (!confirm(`Remove ${name}'s access? They will no longer be able to sign in. You can re-add them via Supabase Auth.`)) return;
  const { error } = await _sb.from('profiles').delete().eq('id', userId);
  if (error) { toast('Error removing user'); return; }
  toast(`${name} removed ✓`);
  openAccountPanel(); // Refresh the panel
}

// Guard against Supabase firing SIGNED_IN twice on page load
// (once from initApp getSession, once from onAuthStateChange)
let _sessionInitialised = false;

_sb.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN' && session) {
    if (_sessionInitialised) return; // already handled by initApp
    _sessionInitialised = true;
    await afterLogin(session);
  } else if (event === 'SIGNED_OUT') {
    _sessionInitialised = false;
    currentUser = null;
    currentUserRole = 'member';
    store = {};
    showLoginScreen();
  }
  // Ignore TOKEN_REFRESHED, USER_UPDATED etc — don't reload store
});

async function initApp() {
  const { data: { session } } = await _sb.auth.getSession();
  if (session) {
    if (!_sessionInitialised) {
      _sessionInitialised = true;
      await afterLogin(session);
    }
  } else {
    showLoginScreen();
  }
}

initApp();

// Copy logo src from sidebar to mobile header and login screen
(function(){
  const sidebarLogo = document.querySelector('.sidebar-logo img');
  const mobileHeaderLogo = document.querySelector('.mobile-header img');
  const loginLogo = document.getElementById('login-logo');
  if(sidebarLogo && mobileHeaderLogo) mobileHeaderLogo.src = sidebarLogo.src;
  if(sidebarLogo && loginLogo) loginLogo.src = sidebarLogo.src;
})();

// Inject ladybird SVG into sidebar button icon span
(function(){
  const span = document.querySelector('#ff-sidebar-btn .icon');
  if(span) span.innerHTML = LADYBIRD_SVG_SM;
})();

// ─── INIT ─────────────────────────────────────────────────────────────────────
// Inject ladybird into Future Feels modal
(function(){
  const el = document.getElementById('ff-ladybird');
  if(el) el.innerHTML = LADYBIRD_SVG_LG;
})();
