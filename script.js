/* =========================================================
   Učím se česky — script
   Vanilla JS. No frameworks. Modular sections.
   ========================================================= */

/* ============================================================
   DATA
   ============================================================ */

/* ----- Vocabulary by category ----- */
const VOCAB = {
  Greetings: [
    { cz: 'Ahoj',         en: 'Hi / Bye (informal)', hint: '[ah-hoy]' },
    { cz: 'Dobrý den',    en: 'Good day / Hello',    hint: '[doh-bree den]' },
    { cz: 'Dobré ráno',   en: 'Good morning',        hint: '[doh-breh rah-no]' },
    { cz: 'Dobrý večer',  en: 'Good evening',        hint: '[doh-bree veh-cher]' },
    { cz: 'Na shledanou', en: 'Goodbye',             hint: '[nah skleh-dah-no-oo]' },
    { cz: 'Dobrou noc',   en: 'Good night',          hint: '[doh-broh nots]' },
  ],
  Numbers: [
    { cz: 'jedna',  en: 'one',   hint: '[yed-nah]' },
    { cz: 'dva',    en: 'two',   hint: '[dvah]' },
    { cz: 'tři',    en: 'three', hint: '[trzhee]' },
    { cz: 'čtyři',  en: 'four',  hint: '[chti-rzhee]' },
    { cz: 'pět',    en: 'five',  hint: '[pyet]' },
    { cz: 'šest',   en: 'six',   hint: '[shest]' },
    { cz: 'sedm',   en: 'seven', hint: '[seh-doom]' },
    { cz: 'osm',    en: 'eight', hint: '[oh-soom]' },
    { cz: 'devět',  en: 'nine',  hint: '[deh-vyet]' },
    { cz: 'deset',  en: 'ten',   hint: '[deh-set]' },
  ],
  Colors: [
    { cz: 'červená', en: 'red',    hint: '[cher-veh-nah]' },
    { cz: 'modrá',   en: 'blue',   hint: '[mod-rah]' },
    { cz: 'zelená',  en: 'green',  hint: '[zeh-leh-nah]' },
    { cz: 'žlutá',   en: 'yellow', hint: '[zhloo-tah]' },
    { cz: 'černá',   en: 'black',  hint: '[cher-nah]' },
    { cz: 'bílá',    en: 'white',  hint: '[bee-lah]' },
    { cz: 'hnědá',   en: 'brown',  hint: '[hnyeh-dah]' },
  ],
  Food: [
    { cz: 'chléb',   en: 'bread',  hint: '[khlehb]' },
    { cz: 'voda',    en: 'water',  hint: '[voh-dah]' },
    { cz: 'káva',    en: 'coffee', hint: '[kah-vah]' },
    { cz: 'pivo',    en: 'beer',   hint: '[pih-voh]' },
    { cz: 'sýr',     en: 'cheese', hint: '[seer]' },
    { cz: 'jablko',  en: 'apple',  hint: '[yah-bul-koh]' },
    { cz: 'maso',    en: 'meat',   hint: '[mah-soh]' },
    { cz: 'polévka', en: 'soup',   hint: '[poh-lehv-kah]' },
  ],
  Family: [
    { cz: 'matka',   en: 'mother',   hint: '[mat-kah]' },
    { cz: 'otec',    en: 'father',   hint: '[oh-tets]' },
    { cz: 'bratr',   en: 'brother',  hint: '[brah-tur]' },
    { cz: 'sestra',  en: 'sister',   hint: '[ses-trah]' },
    { cz: 'syn',     en: 'son',      hint: '[sin]' },
    { cz: 'dcera',   en: 'daughter', hint: '[tseh-rah]' },
    { cz: 'babička', en: 'grandma',  hint: '[bah-bich-kah]' },
    { cz: 'dědeček', en: 'grandpa',  hint: '[dyeh-deh-chek]' },
  ],
  'Common Verbs': [
    { cz: 'být',    en: 'to be',         hint: '[beet]' },
    { cz: 'mít',    en: 'to have',       hint: '[meet]' },
    { cz: 'jít',    en: 'to go (walk)',  hint: '[yeet]' },
    { cz: 'chtít',  en: 'to want',       hint: '[khteet]' },
    { cz: 'vidět',  en: 'to see',        hint: '[vee-dyet]' },
    { cz: 'mluvit', en: 'to speak',      hint: '[mloo-vit]' },
    { cz: 'jíst',   en: 'to eat',        hint: '[yeest]' },
    { cz: 'pít',    en: 'to drink',      hint: '[peet]' },
  ],
};

/* ----- Czech special letters ----- */
const LETTERS = [
  { char: 'č', sound: 'ch as in "church"',          example: 'čaj — tea' },
  { char: 'ř', sound: 'a unique rolled "rzh" sound — like saying r and zh together', example: 'řeka — river' },
  { char: 'š', sound: 'sh as in "shop"',            example: 'škola — school' },
  { char: 'ž', sound: 'zh as in "measure"',         example: 'žena — woman' },
  { char: 'ě', sound: 'ye as in "yes"',             example: 'pět — five' },
  { char: 'ů', sound: 'long oo as in "moon"',       example: 'dům — house' },
  { char: 'ď', sound: 'soft d, like "d" in "duke"', example: 'ďábel — devil' },
  { char: 'ť', sound: 'soft t, like "t" in "tube"', example: 'kuťácký — tinkering' },
  { char: 'ň', sound: 'soft n, like "ny" in "canyon"', example: 'kůň — horse' },
];

/* ----- Essential phrases by category ----- */
const PHRASES = {
  Basics: [
    { cz: 'Ahoj', en: 'Hello (informal)', pron: '[ah-hoy]' },
    { cz: 'Dobrý den', en: 'Hello (formal)', pron: '[doh-bree den]' },
    { cz: 'Děkuji', en: 'Thank you', pron: '[dyeh-koo-yi]' },
    { cz: 'Prosím', en: 'Please / You\'re welcome', pron: '[proh-seem]' },
    { cz: 'Promiňte', en: 'Excuse me / Sorry', pron: '[proh-min-teh]' },
    { cz: 'Ano', en: 'Yes', pron: '[ah-no]' },
    { cz: 'Ne', en: 'No', pron: '[neh]' },
  ],
  Conversation: [
    { cz: 'Jak se máš?', en: 'How are you? (informal)', pron: '[yak seh mahsh]' },
    { cz: 'Jak se máte?', en: 'How are you? (formal)', pron: '[yak seh mah-teh]' },
    { cz: 'Mám se dobře', en: 'I\'m fine', pron: '[mahm seh dob-rzheh]' },
    { cz: 'Jak se jmenuješ?', en: 'What\'s your name?', pron: '[yak seh ymeh-noo-yesh]' },
    { cz: 'Jmenuji se…', en: 'My name is…', pron: '[ymeh-noo-yi seh]' },
    { cz: 'Těší mě', en: 'Nice to meet you', pron: '[tyeh-shee mnyeh]' },
  ],
  Help: [
    { cz: 'Nerozumím', en: 'I don\'t understand', pron: '[neh-roh-zoo-meem]' },
    { cz: 'Mluvíte anglicky?', en: 'Do you speak English?', pron: '[mloo-vee-teh ang-lits-kih]' },
    { cz: 'Můžete to zopakovat?', en: 'Can you repeat that?', pron: '[moo-zheh-teh toh zoh-pah-koh-vat]' },
    { cz: 'Pomalu, prosím', en: 'Slowly, please', pron: '[poh-mah-loo proh-seem]' },
  ],
  'Out and About': [
    { cz: 'Kde je nádraží?', en: 'Where is the station?', pron: '[gdeh yeh nah-drah-zhee]' },
    { cz: 'Kde je záchod?', en: 'Where is the toilet?', pron: '[gdeh yeh zah-khod]' },
    { cz: 'Kolik to stojí?', en: 'How much does it cost?', pron: '[koh-lik toh stoh-yee]' },
    { cz: 'Dal/a bych si kávu', en: 'I would like coffee', pron: '[dahl-ah bikh see kah-voo]' },
    { cz: 'Účet, prosím', en: 'The bill, please', pron: '[oo-chet proh-seem]' },
  ],
};

/* ----- Verb conjugations (present tense) ----- */
const VERBS = [
  {
    inf: 'být',
    meaning: 'to be',
    forms: {
      'já':       'jsem',
      'ty':       'jsi',
      'on/ona':   'je',
      'my':       'jsme',
      'vy':       'jste',
      'oni':      'jsou',
    },
  },
  {
    inf: 'mít',
    meaning: 'to have',
    forms: {
      'já':       'mám',
      'ty':       'máš',
      'on/ona':   'má',
      'my':       'máme',
      'vy':       'máte',
      'oni':      'mají',
    },
  },
  {
    inf: 'jít',
    meaning: 'to go (on foot)',
    forms: {
      'já':       'jdu',
      'ty':       'jdeš',
      'on/ona':   'jde',
      'my':       'jdeme',
      'vy':       'jdete',
      'oni':      'jdou',
    },
  },
  {
    inf: 'chtít',
    meaning: 'to want',
    forms: {
      'já':       'chci',
      'ty':       'chceš',
      'on/ona':   'chce',
      'my':       'chceme',
      'vy':       'chcete',
      'oni':      'chtějí',
    },
  },
];

const PRONOUNS = ['já', 'ty', 'on/ona', 'my', 'vy', 'oni'];

/* ============================================================
   UTILITIES
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Save and read small bits of state in localStorage */
const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
};

/* ============================================================
   NAVIGATION — switches active section
   ============================================================ */

function initNav() {
  const links = $$('.nav__link');
  const sections = $$('.section');

  function activate(id) {
    links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    storage.set('lastSection', id);
  }

  links.forEach(link => {
    link.addEventListener('click', () => activate(link.dataset.section));
  });

  // Restore last section
  const last = storage.get('lastSection', 'vocabulary');
  if ($('#' + last)) activate(last);
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */

function initTheme() {
  const toggle = $('#themeToggle');
  const saved = storage.get('theme', null);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initial);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    storage.set('theme', next);
  });
}

/* ============================================================
   VOCABULARY — flashcards
   ============================================================ */

const vocabState = {
  category: 'Greetings',
  index: 0,
  revealed: false,
};

function renderVocabChips() {
  const wrap = $('#vocabChips');
  wrap.innerHTML = '';
  Object.keys(VOCAB).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (cat === vocabState.category ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      vocabState.category = cat;
      vocabState.index = 0;
      vocabState.revealed = false;
      renderVocabChips();
      renderVocabCard();
    });
    wrap.appendChild(btn);
  });
}

function renderVocabCard() {
  const list = VOCAB[vocabState.category];
  const item = list[vocabState.index];

  $('#vocabCzech').textContent = item.cz;
  $('#vocabHint').textContent = item.hint || '';
  $('#vocabEnglish').textContent = item.en;
  $('#vocabEnglish').hidden = !vocabState.revealed;
  $('#vocabReveal').textContent = vocabState.revealed ? 'Hide translation' : 'Show translation';

  $('#vocabProgress').textContent = `${vocabState.index + 1} / ${list.length}`;
  const pct = ((vocabState.index + 1) / list.length) * 100;
  $('#vocabProgressFill').style.width = pct + '%';

  $('#vocabPrev').disabled = vocabState.index === 0;
  $('#vocabNext').disabled = vocabState.index === list.length - 1;
}

function initVocab() {
  renderVocabChips();
  renderVocabCard();

  $('#vocabPrev').addEventListener('click', () => {
    if (vocabState.index > 0) {
      vocabState.index--;
      vocabState.revealed = false;
      renderVocabCard();
    }
  });

  $('#vocabNext').addEventListener('click', () => {
    const list = VOCAB[vocabState.category];
    if (vocabState.index < list.length - 1) {
      vocabState.index++;
      vocabState.revealed = false;
      renderVocabCard();
    }
  });

  $('#vocabReveal').addEventListener('click', () => {
    vocabState.revealed = !vocabState.revealed;
    renderVocabCard();
  });
}

/* ============================================================
   PRONUNCIATION — letter cards
   ============================================================ */

function initPronunciation() {
  const grid = $('#letterGrid');
  grid.innerHTML = '';

  LETTERS.forEach(letter => {
    const card = document.createElement('button');
    card.className = 'letter-card';
    card.innerHTML = `
      <span class="letter-card__char">${letter.char}</span>
      <span class="letter-card__example">${letter.example}</span>
      <span class="letter-card__detail">${letter.sound}</span>
    `;
    card.addEventListener('click', () => {
      // Toggle this one; close others for clarity
      const wasOpen = card.classList.contains('expanded');
      $$('.letter-card').forEach(c => c.classList.remove('expanded'));
      if (!wasOpen) card.classList.add('expanded');
      // Hook here for future audio: playAudio(letter.char);
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   PHRASES — collapsible cards + category filter
   ============================================================ */

const phraseState = { category: 'All' };

function renderPhraseChips() {
  const wrap = $('#phraseChips');
  wrap.innerHTML = '';

  const cats = ['All', ...Object.keys(PHRASES)];
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (cat === phraseState.category ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      phraseState.category = cat;
      renderPhraseChips();
      renderPhrases();
    });
    wrap.appendChild(btn);
  });
}

function renderPhrases() {
  const list = $('#phraseList');
  list.innerHTML = '';

  const items = phraseState.category === 'All'
    ? Object.values(PHRASES).flat()
    : PHRASES[phraseState.category];

  items.forEach((p, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'phrase';
    wrap.innerHTML = `
      <button class="phrase__header" aria-expanded="false">
        <span class="phrase__czech">${p.cz}</span>
        <span class="phrase__english-preview">${p.en}</span>
        <svg class="phrase__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="phrase__body">
        <div class="phrase__body-inner">
          <span class="phrase__label">English</span>
          <span class="phrase__value">${p.en}</span>
          <span class="phrase__label">Pronunciation</span>
          <span class="phrase__value phrase__value--pronunciation">${p.pron}</span>
        </div>
      </div>
    `;
    const header = wrap.querySelector('.phrase__header');
    header.addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      header.setAttribute('aria-expanded', open);
    });
    list.appendChild(wrap);
  });
}

function initPhrases() {
  renderPhraseChips();
  renderPhrases();
}

/* ============================================================
   VERBS — conjugation tables + practice
   ============================================================ */

const verbState = {
  index: 0,
  quiz: null,        // { verbIdx, pronoun, answer }
  score: 0,
};

function renderVerbChips() {
  const wrap = $('#verbChips');
  wrap.innerHTML = '';
  VERBS.forEach((v, i) => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (i === verbState.index ? ' active' : '');
    btn.textContent = v.inf;
    btn.addEventListener('click', () => {
      verbState.index = i;
      renderVerbChips();
      renderVerbTable();
    });
    wrap.appendChild(btn);
  });
}

function renderVerbTable() {
  const verb = VERBS[verbState.index];
  const card = $('#verbTable');
  const rows = PRONOUNS.map(p => `
    <tr>
      <td class="pronoun">${p}</td>
      <td class="form">${verb.forms[p]}</td>
    </tr>
  `).join('');
  card.innerHTML = `
    <h2>${verb.inf}</h2>
    <p class="verb-table__meaning">${verb.meaning}</p>
    <table><tbody>${rows}</tbody></table>
  `;
}

function newQuiz() {
  const verbIdx = Math.floor(Math.random() * VERBS.length);
  const pronoun = PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)];
  const answer = VERBS[verbIdx].forms[pronoun];
  verbState.quiz = { verbIdx, pronoun, answer };

  $('#quizPrompt').innerHTML = `Conjugate <strong>${VERBS[verbIdx].inf}</strong> for <strong>${pronoun}</strong>:`;
  $('#quizInput').value = '';
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz__feedback';
  $('#quizInput').focus();
}

function checkQuiz() {
  if (!verbState.quiz) return;
  const guess = $('#quizInput').value.trim().toLowerCase();
  const target = verbState.quiz.answer.toLowerCase();
  const feedback = $('#quizFeedback');

  if (guess === target) {
    verbState.score++;
    storage.set('quizScore', verbState.score);
    $('#quizScore').textContent = verbState.score;
    feedback.textContent = `✓ Correct — ${verbState.quiz.answer}`;
    feedback.className = 'quiz__feedback show ok';
    setTimeout(newQuiz, 900);
  } else {
    feedback.textContent = `Not quite. The answer is "${verbState.quiz.answer}".`;
    feedback.className = 'quiz__feedback show err';
  }
}

function initVerbs() {
  renderVerbChips();
  renderVerbTable();

  verbState.score = storage.get('quizScore', 0);
  $('#quizScore').textContent = verbState.score;
  newQuiz();

  $('#quizCheck').addEventListener('click', checkQuiz);
  $('#quizSkip').addEventListener('click', newQuiz);
  $('#quizInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkQuiz();
  });
}

/* ============================================================
   KEYBOARD SHORTCUTS — for vocab flashcards
   ============================================================ */

function initShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Don't hijack typing in inputs
    if (e.target.matches('input, textarea')) return;
    // Only when vocabulary is active
    if (!$('#vocabulary').classList.contains('active')) return;

    if (e.key === 'ArrowLeft')  $('#vocabPrev').click();
    if (e.key === 'ArrowRight') $('#vocabNext').click();
    if (e.key === ' ') { e.preventDefault(); $('#vocabReveal').click(); }
  });
}

/* ============================================================
   BOOT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initVocab();
  initPronunciation();
  initPhrases();
  initVerbs();
  initShortcuts();
});
