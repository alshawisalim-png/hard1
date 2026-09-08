'use strict';

/* ============================================================
   1) قاعدة بيانات التمارين (يمكن إضافة تمارين جديدة بسهولة لاحقًا
      بإضافة عنصر جديد لهذه المصفوفة فقط)
   category: push | pull | legs | core
   level:    beginner | intermediate | advanced
   unit:     reps (عدد تكرارات) | sec (ثوانٍ ثبات)
   ============================================================ */
const EXERCISES = [
  // 🟢 مبتدئ
  { id: 'ex01', name: 'ضغط على الحائط', category: 'push', level: 'beginner',
    description: 'قف مواجهًا للحائط على مسافة ذراع، ضع يديك بعرض الكتفين على الحائط، اثنِ مرفقيك لتقريب صدرك من الحائط ثم ادفع للخلف بتحكم.',
    sets: 3, reps: 10, unit: 'reps' },
  { id: 'ex02', name: 'ضغط على الركبتين', category: 'push', level: 'beginner',
    description: 'كوضعية الضغط العادي لكن بالاستناد على الركبتين بدل أطراف القدم، حافظ على استقامة الظهر والرقبة من الركبة حتى الرأس.',
    sets: 3, reps: 8, unit: 'reps' },
  { id: 'ex03', name: 'سكوات بوزن الجسم', category: 'legs', level: 'beginner',
    description: 'قف بعرض الكتفين، انزل بالحوض للخلف وللأسفل كأنك تجلس على كرسي، مع إبقاء الظهر مستقيمًا والركبتين في اتجاه أصابع القدم.',
    sets: 3, reps: 12, unit: 'reps' },
  { id: 'ex04', name: 'اندفاع ثابت (Static Lunge)', category: 'legs', level: 'beginner',
    description: 'قف بخطوة واسعة للأمام، انزل عموديًا حتى تقترب الركبة الخلفية من الأرض دون لمسها، ثم اصعد بتحكم.',
    sets: 3, reps: 10, unit: 'reps' },
  { id: 'ex05', name: 'بلانك (Plank)', category: 'core', level: 'beginner',
    description: 'استلقِ على بطنك، ارفع جسمك على الساعدين وأطراف القدمين، حافظ على استقامة الجسم كخط واحد من الرأس حتى الكعبين.',
    sets: 3, reps: 20, unit: 'sec' },
  { id: 'ex06', name: 'جسر الحوض (Glute Bridge)', category: 'core', level: 'beginner',
    description: 'استلقِ على ظهرك واثنِ ركبتيك، ادفع الحوض للأعلى بالضغط على الكعبين وشد عضلات الأرداف، ثم انزل ببطء.',
    sets: 3, reps: 12, unit: 'reps' },
  { id: 'ex07', name: 'صف مائل (Incline Row)', category: 'pull', level: 'beginner',
    description: 'استلقِ تحت طاولة أو عارضة منخفضة، أمسك حافتها واسحب صدرك للأعلى نحوها بزاوية مائلة، ثم انزل بتحكم.',
    sets: 3, reps: 10, unit: 'reps' },
  { id: 'ex08', name: 'سوبرمان (Superman)', category: 'pull', level: 'beginner',
    description: 'استلقِ على بطنك، ارفع الذراعين والصدر والساقين معًا عن الأرض في نفس الوقت، وحافظ على الوضعية لثوانٍ ثم انزل.',
    sets: 3, reps: 12, unit: 'reps' },

  // 🟡 متوسط
  { id: 'ex09', name: 'ضغط عادي (Push-up)', category: 'push', level: 'intermediate',
    description: 'استلقِ على بطنك، يداك بعرض الكتفين، ادفع الجسم للأعلى مع إبقائه مستقيمًا كخط واحد من الرأس حتى الكعبين.',
    sets: 4, reps: 12, unit: 'reps' },
  { id: 'ex10', name: 'ضغط الماس (Diamond Push-up)', category: 'push', level: 'intermediate',
    description: 'ضع اليدين متلاصقتين تحت منتصف الصدر لتشكيل شكل الماس، وأدِّ حركة الضغط مع تركيز أكبر على عضلة الترايسبس.',
    sets: 3, reps: 8, unit: 'reps' },
  { id: 'ex11', name: 'اندفاع متحرك (Walking Lunge)', category: 'legs', level: 'intermediate',
    description: 'كرر حركة الاندفاع الثابت لكن بالتقدم خطوة بخطوة للأمام مع كل تكرار بدل العودة لنفس المكان.',
    sets: 3, reps: 12, unit: 'reps' },
  { id: 'ex12', name: 'قرفصاء بقفزة (Jump Squat)', category: 'legs', level: 'intermediate',
    description: 'نفّذ حركة السكوات العادية ثم اقفز للأعلى بانفجارية عند الصعود، واهبط بنعومة مع ثني الركبتين لامتصاص الصدمة.',
    sets: 4, reps: 10, unit: 'reps' },
  { id: 'ex13', name: 'تعليق سلبي (Negative Pull-up)', category: 'pull', level: 'intermediate',
    description: 'اقفز أو استخدم صندوقًا للوصول لأعلى العارضة (الذقن فوقها)، ثم انزل ببطء شديد ومتحكم قدر الإمكان.',
    sets: 4, reps: 5, unit: 'reps' },
  { id: 'ex14', name: 'صف بمقاومة الجسم (Inverted Row)', category: 'pull', level: 'intermediate',
    description: 'تحت عارضة مرتفعة، أمسكها واسحب صدرك للأعلى نحوها مع إبقاء الجسم مستقيمًا كخط واحد، ثم انزل بتحكم.',
    sets: 4, reps: 10, unit: 'reps' },
  { id: 'ex15', name: 'رفع الساقين (Leg Raise)', category: 'core', level: 'intermediate',
    description: 'استلقِ على ظهرك، ارفع ساقيك المستقيمتين حتى الزاوية القائمة ثم أنزلهما ببطء دون لمس الأرض.',
    sets: 3, reps: 12, unit: 'reps' },
  { id: 'ex16', name: 'بلانك جانبي (Side Plank)', category: 'core', level: 'intermediate',
    description: 'استند على ساعد واحد وحافظ على استقامة الجسم من الجانب، مع رفع الحوض بعيدًا عن الأرض.',
    sets: 3, reps: 20, unit: 'sec' },

  // 🔴 متقدم
  { id: 'ex17', name: 'العقلة الكاملة (Pull-up)', category: 'pull', level: 'advanced',
    description: 'تعلّق على العارضة بقبضة كاملة عرض الكتفين، اسحب جسمك للأعلى حتى تتجاوز ذقنك العارضة، وانزل بتحكم كامل.',
    sets: 4, reps: 6, unit: 'reps' },
  { id: 'ex18', name: 'عقلة أرشر (Archer Pull-up)', category: 'pull', level: 'advanced',
    description: 'أثناء السحب لأعلى، مد إحدى الذراعين أفقيًا للجانب لتركيز معظم الجهد على الذراع العاملة الأخرى.',
    sets: 3, reps: 4, unit: 'reps' },
  { id: 'ex19', name: 'غطس متوازي (Dips)', category: 'push', level: 'advanced',
    description: 'باستخدام قضيبين متوازيين، ادفع الجسم للأعلى بمد الذراعين بالكامل، وانزل ببطء حتى زاوية 90 درجة بالمرفق.',
    sets: 4, reps: 8, unit: 'reps' },
  { id: 'ex20', name: 'ضغط بايك (Pike Push-up)', category: 'push', level: 'advanced',
    description: 'ارفع الحوض عاليًا لتشكيل مثلث مع الأرض (قدماك ويداك)، ثم اثنِ المرفقين لإنزال الرأس نحو الأرض والتركيز على الكتفين.',
    sets: 3, reps: 8, unit: 'reps' },
  { id: 'ex21', name: 'بستول سكوات (Pistol Squat)', category: 'legs', level: 'advanced',
    description: 'قف على رجل واحدة، انزل ببطء حتى أسفل وضعية القرفصاء مع مد الرجل الأخرى للأمام، ثم اصعد للأعلى دون فقدان التوازن.',
    sets: 3, reps: 6, unit: 'reps' },
  { id: 'ex22', name: 'قفزة بستول (Jump Pistol)', category: 'legs', level: 'advanced',
    description: 'نفّذ حركة البستول سكوات لكن بانفجارية مع قفزة صغيرة عند الصعود من الأسفل.',
    sets: 3, reps: 5, unit: 'reps' },
  { id: 'ex23', name: 'إل-سيت (L-sit)', category: 'core', level: 'advanced',
    description: 'من وضع الجلوس على متوازيين أو التعليق، ارفع الساقين المستقيمتين لتكونا موازيتين للأرض، مع الحفاظ على استقامة الظهر.',
    sets: 4, reps: 15, unit: 'sec' },
  { id: 'ex24', name: 'ضغط بمقلوب على الحائط', category: 'push', level: 'advanced',
    description: 'بالاستناد على الحائط رأسًا على عقب (Handstand)، اثنِ المرفقين للنزول برأسك نحو الأرض ثم ادفع للأعلى بتحكم.',
    sets: 3, reps: 5, unit: 'reps' },
];

/* ============================================================
   2) جدول الخطط الأسبوعية حسب المستوى (Rule-Based، محلي بالكامل)
      كل مفتاح 0-6 يمثل يوم الأسبوع (0=الأحد ... 6=السبت)
      القيمة: مصفوفة الفئات المطلوبة في ذلك اليوم، أو null = يوم راحة
   ============================================================ */
const WEEK_SCHEDULE = {
  beginner: {
    // 3 أيام: سبت / اثنين / أربعاء — جسم كامل
    6: ['push', 'pull', 'legs', 'core'],
    1: ['push', 'pull', 'legs', 'core'],
    3: ['push', 'pull', 'legs', 'core'],
  },
  intermediate: {
    // 4 أيام: سبت / اثنين / أربعاء / خميس — تقسيم دفع+جذع / سحب+أرجل
    6: ['push', 'core'],
    1: ['pull', 'legs'],
    3: ['push', 'core'],
    4: ['pull', 'legs'],
  },
  advanced: {
    // 5 أيام: تخصص كامل لكل فئة + يوم مزيج
    6: ['push'],
    0: ['pull'],
    1: ['legs'],
    3: ['core'],
    4: ['push', 'pull', 'legs', 'core'],
  },
};

const LEVEL_LABELS = { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' };
const CATEGORY_LABELS = { push: 'دفع', pull: 'سحب', legs: 'أرجل', core: 'جذع' };
const DAY_NAMES = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

/* ============================================================
   3) طبقة IndexedDB
   ============================================================ */
const DB_NAME = 'HardDB';
const DB_VERSION = 1;
let dbInstance = null;

function openDB() {
  return new Promise((resolve, reject) => {
    if (dbInstance) return resolve(dbInstance);
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('exercises')) {
        db.createObjectStore('exercises', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('userProfile')) {
        db.createObjectStore('userProfile', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('workoutLogs')) {
        const store = db.createObjectStore('workoutLogs', { keyPath: 'id', autoIncrement: true });
        store.createIndex('by_date', 'date');
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };
    request.onerror = (event) => reject(event.target.error);
  });
}

function tx(storeName, mode) {
  return openDB().then((db) => db.transaction(storeName, mode).objectStore(storeName));
}

async function seedExercisesIfNeeded() {
  const store = await tx('exercises', 'readonly');
  const countReq = store.count();
  const count = await new Promise((res, rej) => {
    countReq.onsuccess = () => res(countReq.result);
    countReq.onerror = () => rej(countReq.error);
  });
  if (count > 0) return;

  const writeStore = await tx('exercises', 'readwrite');
  EXERCISES.forEach((ex) => writeStore.put(ex));
}

async function getAllExercises() {
  const store = await tx('exercises', 'readonly');
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getUserProfile() {
  const store = await tx('userProfile', 'readonly');
  return new Promise((resolve, reject) => {
    const req = store.get(1);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function saveUserProfile(profile) {
  const store = await tx('userProfile', 'readwrite');
  return new Promise((resolve, reject) => {
    const req = store.put({ id: 1, ...profile });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function addWorkoutLog(entry) {
  const store = await tx('workoutLogs', 'readwrite');
  return new Promise((resolve, reject) => {
    const req = store.add(entry);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getAllLogs() {
  const store = await tx('workoutLogs', 'readonly');
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => b.date.localeCompare(a.date)));
    req.onerror = () => reject(req.error);
  });
}

async function getLogsForDate(dateStr) {
  const all = await getAllLogs();
  return all.filter((l) => l.date === dateStr);
}

/* ============================================================
   4) منطق توليد خطة اليوم (الذكاء المحلي القائم على قواعد)
   ============================================================ */
function todayDateStr() {
  // نبني السلسلة من التوقيت المحلي (وليس toISOString التي تعتمد UTC)
  // لتفادي اختلاف يوم كامل في ساعات منتصف الليل الأولى حسب المنطقة الزمنية
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

async function getTodayWorkout(level) {
  const dayIndex = new Date().getDay();
  const schedule = WEEK_SCHEDULE[level] || WEEK_SCHEDULE.beginner;
  const categories = schedule[dayIndex];
  if (!categories) return { isRestDay: true, exercises: [] };

  const allExercises = await getAllExercises();
  const picked = categories.map((cat) => {
    const candidates = allExercises.filter((e) => e.category === cat && e.level === level);
    // إن لم توجد تمارين لهذا المستوى في هذه الفئة (نادر)، ارجع لأقرب مستوى متاح
    const fallback = allExercises.filter((e) => e.category === cat);
    const pool = candidates.length ? candidates : fallback;
    return pool[0] || null;
  }).filter(Boolean);

  return { isRestDay: false, exercises: picked };
}

/* ============================================================
   5) واجهة التطبيق (View Management)
   ============================================================ */
const appEl = document.getElementById('app');
let currentLevel = null;

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function init() {
  await openDB();
  await seedExercisesIfNeeded();
  const profile = await getUserProfile();

  if (!profile) {
    renderOnboarding();
  } else {
    currentLevel = profile.level;
    renderMainApp('today');
  }
}

/* ---------- شاشة الإعداد الأولي ---------- */
function renderOnboarding() {
  appEl.innerHTML = `
    <div class="onboarding">
      <h1 class="brand">HARD</h1>
      <p class="subtitle">اختر مستواك الحالي في الكالسثنكس لنبني خطتك</p>
      <div class="level-cards">
        <button class="level-card" data-level="beginner">
          <span class="level-title">مبتدئ</span>
          <span class="level-desc">أول مرة أو أقل من 6 أشهر تدريب</span>
        </button>
        <button class="level-card" data-level="intermediate">
          <span class="level-title">متوسط</span>
          <span class="level-desc">أستطيع تنفيذ عقلة وضغط كامل بشكل جيد</span>
        </button>
        <button class="level-card" data-level="advanced">
          <span class="level-title">متقدم</span>
          <span class="level-desc">أتقن التمارين الأساسية وأبحث عن تحدٍّ أكبر</span>
        </button>
      </div>
    </div>
  `;

  appEl.querySelectorAll('.level-card').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const level = btn.dataset.level;
      await saveUserProfile({ level, startDate: todayDateStr() });
      currentLevel = level;
      renderMainApp('today');
    });
  });
}

/* ---------- الهيكل الرئيسي + شريط التنقل السفلي ---------- */
function renderMainApp(activeView) {
  appEl.innerHTML = `
    <header class="app-header">
      <span class="brand-small">HARD</span>
      <span class="level-badge">${LEVEL_LABELS[currentLevel]}</span>
    </header>
    <main id="view-container" class="view-container"></main>
    <nav class="bottom-nav">
      <button class="nav-btn" data-view="today">اليوم</button>
      <button class="nav-btn" data-view="library">التمارين</button>
      <button class="nav-btn" data-view="history">السجل</button>
      <button class="nav-btn" data-view="profile">الملف</button>
    </nav>
  `;

  appEl.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => setActiveView(btn.dataset.view));
  });

  setActiveView(activeView);
}

function setActiveView(view) {
  appEl.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  const container = document.getElementById('view-container');
  if (view === 'today') renderTodayView(container);
  else if (view === 'library') renderLibraryView(container);
  else if (view === 'history') renderHistoryView(container);
  else if (view === 'profile') renderProfileView(container);
}

/* ---------- شاشة "اليوم" (خطة اليوم + التسجيل) ---------- */
async function renderTodayView(container) {
  container.innerHTML = `<p class="loading">جارٍ تحميل خطة اليوم...</p>`;
  const dateStr = todayDateStr();
  const [{ isRestDay, exercises }, todayLogs] = await Promise.all([
    getTodayWorkout(currentLevel),
    getLogsForDate(dateStr),
  ]);

  if (isRestDay) {
    container.innerHTML = `
      <div class="rest-day">
        <h2>يوم راحة 💤</h2>
        <p>خذ راحتك اليوم — العضلات تنمو أثناء التعافي وليس فقط أثناء التمرين. عد غدًا لمواصلة خطتك.</p>
      </div>
    `;
    return;
  }

  const dayName = DAY_NAMES[new Date().getDay()];
  const completedIds = new Set(todayLogs.filter((l) => l.completed).map((l) => l.exerciseId));

  container.innerHTML = `
    <div class="today-view">
      <h2>تمرين ${escapeHtml(dayName)}</h2>
      <p class="progress-line">${completedIds.size} / ${exercises.length} تمارين مكتملة</p>
      <div class="exercise-list" id="today-list"></div>
    </div>
  `;

  const list = document.getElementById('today-list');
  exercises.forEach((ex) => {
    const done = completedIds.has(ex.id);
    const card = document.createElement('div');
    card.className = 'exercise-card' + (done ? ' completed' : '');
    card.innerHTML = `
      <div class="exercise-card-head">
        <span class="cat-tag cat-${ex.category}">${CATEGORY_LABELS[ex.category]}</span>
        <span class="exercise-name">${escapeHtml(ex.name)}</span>
      </div>
      <p class="exercise-desc">${escapeHtml(ex.description)}</p>
      <div class="log-row">
        <label>المجموعات
          <input type="number" min="1" class="input-sets" value="${ex.sets}">
        </label>
        <label>${ex.unit === 'sec' ? 'ثوانٍ' : 'تكرارات'}
          <input type="number" min="1" class="input-reps" value="${ex.reps}">
        </label>
        <button class="btn-complete" ${done ? 'disabled' : ''}>${done ? 'تم ✓' : 'إتمام'}</button>
      </div>
    `;
    const btn = card.querySelector('.btn-complete');
    btn.addEventListener('click', async () => {
      const sets = parseInt(card.querySelector('.input-sets').value, 10) || ex.sets;
      const reps = parseInt(card.querySelector('.input-reps').value, 10) || ex.reps;
      await addWorkoutLog({
        date: dateStr,
        exerciseId: ex.id,
        exerciseName: ex.name,
        sets, reps, unit: ex.unit,
        completed: true,
      });
      card.classList.add('completed');
      btn.textContent = 'تم ✓';
      btn.disabled = true;
      const progressLine = container.querySelector('.progress-line');
      const newCount = container.querySelectorAll('.exercise-card.completed').length;
      progressLine.textContent = `${newCount} / ${exercises.length} تمارين مكتملة`;
      if (newCount === exercises.length) {
        showToast('أحسنت! أكملت تمرين اليوم بالكامل 🔥');
      }
    });
    list.appendChild(card);
  });
}

/* ---------- شاشة مكتبة التمارين ---------- */
async function renderLibraryView(container) {
  container.innerHTML = `<p class="loading">جارٍ التحميل...</p>`;
  const all = await getAllExercises();

  container.innerHTML = `
    <div class="library-view">
      <div class="filters">
        <select id="filter-level">
          <option value="all">كل المستويات</option>
          <option value="beginner">مبتدئ</option>
          <option value="intermediate">متوسط</option>
          <option value="advanced">متقدم</option>
        </select>
        <select id="filter-cat">
          <option value="all">كل الفئات</option>
          <option value="push">دفع</option>
          <option value="pull">سحب</option>
          <option value="legs">أرجل</option>
          <option value="core">جذع</option>
        </select>
      </div>
      <div class="exercise-list" id="library-list"></div>
    </div>
  `;

  function draw() {
    const lvl = document.getElementById('filter-level').value;
    const cat = document.getElementById('filter-cat').value;
    const filtered = all.filter((e) =>
      (lvl === 'all' || e.level === lvl) && (cat === 'all' || e.category === cat)
    );
    const list = document.getElementById('library-list');
    list.innerHTML = filtered.map((ex) => `
      <div class="exercise-card">
        <div class="exercise-card-head">
          <span class="cat-tag cat-${ex.category}">${CATEGORY_LABELS[ex.category]}</span>
          <span class="exercise-name">${escapeHtml(ex.name)}</span>
          <span class="level-tag">${LEVEL_LABELS[ex.level]}</span>
        </div>
        <p class="exercise-desc">${escapeHtml(ex.description)}</p>
        <p class="default-scheme">افتراضي: ${ex.sets} × ${ex.reps} ${ex.unit === 'sec' ? 'ثانية' : 'تكرار'}</p>
      </div>
    `).join('') || `<p class="empty-msg">لا توجد تمارين مطابقة</p>`;
  }

  document.getElementById('filter-level').addEventListener('change', draw);
  document.getElementById('filter-cat').addEventListener('change', draw);
  draw();
}

/* ---------- شاشة السجل ---------- */
async function renderHistoryView(container) {
  container.innerHTML = `<p class="loading">جارٍ التحميل...</p>`;
  const logs = await getAllLogs();

  if (!logs.length) {
    container.innerHTML = `<div class="empty-state"><p>لا يوجد سجل تمارين بعد. أكمل تمرين اليوم لتبدأ بناء سجلك!</p></div>`;
    return;
  }

  const byDate = {};
  logs.forEach((l) => {
    if (!byDate[l.date]) byDate[l.date] = [];
    byDate[l.date].push(l);
  });

  const totalWorkoutDays = Object.keys(byDate).length;

  container.innerHTML = `
    <div class="history-view">
      <div class="stats-row">
        <div class="stat-box"><span class="stat-num">${totalWorkoutDays}</span><span class="stat-label">أيام تمرين</span></div>
        <div class="stat-box"><span class="stat-num">${logs.length}</span><span class="stat-label">تمارين مكتملة</span></div>
      </div>
      ${Object.entries(byDate).map(([date, entries]) => `
        <div class="history-day">
          <h3>${escapeHtml(date)}</h3>
          <ul>
            ${entries.map((e) => `<li>${escapeHtml(e.exerciseName)} — ${e.sets}×${e.reps}${e.unit === 'sec' ? ' ث' : ''}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

/* ---------- شاشة الملف الشخصي ---------- */
async function renderProfileView(container) {
  const profile = await getUserProfile();
  container.innerHTML = `
    <div class="profile-view">
      <h2>الملف الشخصي</h2>
      <p>المستوى الحالي: <strong>${LEVEL_LABELS[profile.level]}</strong></p>
      <p>تاريخ البدء: <strong>${escapeHtml(profile.startDate)}</strong></p>
      <label class="change-level-label">تغيير المستوى
        <select id="change-level">
          <option value="beginner" ${profile.level === 'beginner' ? 'selected' : ''}>مبتدئ</option>
          <option value="intermediate" ${profile.level === 'intermediate' ? 'selected' : ''}>متوسط</option>
          <option value="advanced" ${profile.level === 'advanced' ? 'selected' : ''}>متقدم</option>
        </select>
      </label>
      <p class="app-note">التطبيق يعمل بالكامل دون اتصال بالإنترنت، وكل بياناتك مخزَّنة محليًا على جهازك فقط.</p>
    </div>
  `;
  document.getElementById('change-level').addEventListener('change', async (e) => {
    const newLevel = e.target.value;
    await saveUserProfile({ ...profile, level: newLevel });
    currentLevel = newLevel;
    showToast('تم تحديث المستوى بنجاح');
  });
}

/* ---------- تنبيه بسيط (Toast) ---------- */
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

/* ============================================================
   6) تسجيل Service Worker + بدء التطبيق
   ============================================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch((err) => {
      console.error('فشل تسجيل Service Worker:', err);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
