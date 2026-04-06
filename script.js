const wordList = [
    { de: "Hallo", ar: "مرحبا", cat: "basics" },
    { de: "Tschüss", ar: "وداعاً", cat: "basics" },
    { de: "Bitte", ar: "من فضلك", cat: "basics" },
    { de: "Danke", ar: "شكراً", cat: "basics" },
    { de: "Ja", ar: "نعم", cat: "basics" },
    { de: "Nein", ar: "لا", cat: "basics" },
    { de: "Vielleicht", ar: "ربما", cat: "basics" },
    { de: "Entschuldigung", ar: "عذراً", cat: "basics" },
    { de: "Guten Morgen", ar: "صباح الخير", cat: "basics" },
    { de: "Guten Tag", ar: "نهرك سعيد", cat: "basics" },
    { de: "Guten Abend", ar: "مساء الخير", cat: "basics" },
    { de: "Gute Nacht", ar: "تصبح على خير", cat: "basics" },
    { de: "Wie geht's?", ar: "كيف حالك؟", cat: "basics" },
    { de: "Gut", ar: "جيد", cat: "basics" },
    { de: "Schlecht", ar: "سيء", cat: "basics" },
    { de: "Willkommen", ar: "أهلاً بك", cat: "basics" },
    { de: "Hilfe", ar: "مساعدة", cat: "basics" },
    { de: "Ich heiße", ar: "اسمي هو", cat: "basics" },
    { de: "Name", ar: "اسم", cat: "basics" },
    { de: "Freund", ar: "صديق", cat: "basics" },
    { de: "Null", ar: "صفر", cat: "numbers" },
    { de: "Eins", ar: "واحد", cat: "numbers" },
    { de: "Zwei", ar: "اثنان", cat: "numbers" },
    { de: "Drei", ar: "ثلاثة", cat: "numbers" },
    { de: "Vier", ar: "أربعة", cat: "numbers" },
    { de: "Fünf", ar: "خمسة", cat: "numbers" },
    { de: "Sechs", ar: "ستة", cat: "numbers" },
    { de: "Sieben", ar: "سبعة", cat: "numbers" },
    { de: "Acht", ar: "ثمانية", cat: "numbers" },
    { de: "Neun", ar: "تسعة", cat: "numbers" },
    { de: "Zehn", ar: "عشرة", cat: "numbers" },
    { de: "Elf", ar: "أحد عشر", cat: "numbers" },
    { de: "Zwölf", ar: "اثنا عشر", cat: "numbers" },
    { de: "Dreizehn", ar: "ثلاثة عشر", cat: "numbers" },
    { de: "Zwanzig", ar: "عشرون", cat: "numbers" },
    { de: "Dreißig", ar: "ثلاثون", cat: "numbers" },
    { de: "Vierzig", ar: "أربعون", cat: "numbers" },
    { de: "Fünfzig", ar: "خمسون", cat: "numbers" },
    { de: "Hundert", ar: "مئة", cat: "numbers" },
    { de: "Tausend", ar: "ألف", cat: "numbers" },
    { de: "Rot", ar: "أحمر", cat: "colors" },
    { de: "Blau", ar: "أزرق", cat: "colors" },
    { de: "Grün", ar: "أخضر", cat: "colors" },
    { de: "Gelb", ar: "أصفر", cat: "colors" },
    { de: "Schwarz", ar: "أسود", cat: "colors" },
    { de: "Weiß", ar: "أبيض", cat: "colors" },
    { de: "Braun", ar: "بني", cat: "colors" },
    { de: "Grau", ar: "رمادي", cat: "colors" },
    { de: "Rosa", ar: "وردي", cat: "colors" },
    { de: "Orange", ar: "برتقالي", cat: "colors" },
    { de: "Lila", ar: "بنفسجي", cat: "colors" },
    { de: "Dunkel", ar: "داكن", cat: "colors" },
    { de: "Hell", ar: "فاتح", cat: "colors" },
    { de: "Bunt", ar: "ملون", cat: "colors" },
    { de: "Gold", ar: "ذهبي", cat: "colors" },
    { de: "Mutter", ar: "أم", cat: "family" },
    { de: "Vater", ar: "أب", cat: "family" },
    { de: "Bruder", ar: "أخ", cat: "family" },
    { de: "Schwester", ar: "أخت", cat: "family" },
    { de: "Oma", ar: "جدة", cat: "family" },
    { de: "Opa", ar: "جد", cat: "family" },
    { de: "Kind", ar: "طفل", cat: "family" },
    { de: "Sohn", ar: "ابن", cat: "family" },
    { de: "Tochter", ar: "ابنة", cat: "family" },
    { de: "Familie", ar: "عائلة", cat: "family" },
    { de: "machen", ar: "يفعل", cat: "verbs" },
    { de: "gehen", ar: "يذهب", cat: "verbs" },
    { de: "kommen", ar: "يأتي", cat: "verbs" },
    { de: "essen", ar: "يأكل", cat: "verbs" },
    { de: "trinken", ar: "يشرب", cat: "verbs" },
    { de: "schlafen", ar: "ينام", cat: "verbs" },
    { de: "lernen", ar: "يتعلم", cat: "verbs" },
    { de: "lesen", ar: "يقرأ", cat: "verbs" },
    { de: "schreiben", ar: "يكتب", cat: "verbs" },
    { de: "sprechen", ar: "يتحدث", cat: "verbs" },
    { de: "sehen", ar: "يرى", cat: "verbs" },
    { de: "hören", ar: "يسمع", cat: "verbs" },
    { de: "arbeiten", ar: "يعمل", cat: "verbs" },
    { de: "spielen", ar: "يلعب", cat: "verbs" },
    { de: "kaufen", ar: "يشتري", cat: "verbs" },
    { de: "verkaufen", ar: "يبيع", cat: "verbs" },
    { de: "helfen", ar: "يساعد", cat: "verbs" },
    { de: "lieben", ar: "يحب", cat: "verbs" },
    { de: "wissen", ar: "يعرف", cat: "verbs" },
    { de: "denken", ar: "يفكر", cat: "verbs" },
    { de: "fragen", ar: "يسأل", cat: "verbs" },
    { de: "antworten", ar: "يجيب", cat: "verbs" },
    { de: "fahren", ar: "يقود/يسافر", cat: "verbs" },
    { de: "laufen", ar: "يركض", cat: "verbs" },
    { de: "bleiben", ar: "يبقى", cat: "verbs" },
    { de: "Tag", ar: "يوم", cat: "time" },
    { de: "Woche", ar: "أسبوع", cat: "time" },
    { de: "Monat", ar: "شهر", cat: "time" },
    { de: "Jahr", ar: "سنة", cat: "time" },
    { de: "Heute", ar: "اليوم", cat: "time" },
    { de: "Morgen", ar: "غداً", cat: "time" },
    { de: "Gestern", ar: "أمس", cat: "time" },
    { de: "Jetzt", ar: "الآن", cat: "time" },
    { de: "Stunde", ar: "ساعة", cat: "time" },
    { de: "Minute", ar: "دقيقة", cat: "time" },
    { de: "Uhr", ar: "ساعة (أداة)", cat: "time" },
    { de: "Zeit", ar: "وقت", cat: "time" },
    { de: "Früh", ar: "مبكراً", cat: "time" },
    { de: "Spät", ar: "متأخراً", cat: "time" },
    { de: "Mittag", ar: "ظهيرة", cat: "time" },
    { de: "Haus", ar: "منزل", cat: "objects" },
    { de: "Zimmer", ar: "غرفة", cat: "objects" },
    { de: "Tisch", ar: "طاولة", cat: "objects" },
    { de: "Stuhl", ar: "كرسي", cat: "objects" },
    { de: "Bett", ar: "سرير", cat: "objects" },
    { de: "Schrank", ar: "خزانة", cat: "objects" },
    { de: "Tür", ar: "باب", cat: "objects" },
    { de: "Fenster", ar: "نافذة", cat: "objects" },
    { de: "Küche", ar: "مطبخ", cat: "objects" },
    { de: "Buch", ar: "كتاب", cat: "objects" },
    { de: "Heft", ar: "دفتر", cat: "objects" },
    { de: "Stift", ar: "قلم", cat: "objects" },
    { de: "Schule", ar: "مدرسة", cat: "objects" },
    { de: "Lehrer", ar: "معلم", cat: "objects" },
    { de: "Schüler", ar: "طالب", cat: "objects" },
    { de: "Computer", ar: "حاسوب", cat: "objects" },
    { de: "Handy", ar: "هاتف محمول", cat: "objects" },
    { de: "Auto", ar: "سيارة", cat: "objects" },
    { de: "Bus", ar: "حافلة", cat: "objects" },
    { de: "Fahrrad", ar: "دراجة هوائية", cat: "objects" },
    { de: "Tasche", ar: "حقيبة", cat: "objects" },
    { de: "Kleidung", ar: "ملابس", cat: "objects" },
    { de: "Schuh", ar: "حذاء", cat: "objects" },
    { de: "Lampe", ar: "مصباح", cat: "objects" },
    { de: "Bild", ar: "صورة", cat: "objects" },
    { de: "Essen", ar: "طعام", cat: "food" },
    { de: "Trinken", ar: "شراب", cat: "food" },
    { de: "Wasser", ar: "ماء", cat: "food" },
    { de: "Brot", ar: "خبز", cat: "food" },
    { de: "Milch", ar: "حليب", cat: "food" },
    { de: "Kaffee", ar: "قهوة", cat: "food" },
    { de: "Tee", ar: "شاي", cat: "food" },
    { de: "Saft", ar: "عصير", cat: "food" },
    { de: "Apfel", ar: "تفاحة", cat: "food" },
    { de: "Banane", ar: "موزة", cat: "food" },
    { de: "Fleisch", ar: "لحم", cat: "food" },
    { de: "Fisch", ar: "سمك", cat: "food" },
    { de: "Gemüse", ar: "خضروات", cat: "food" },
    { de: "Obst", ar: "فاكهة", cat: "food" },
    { de: "Ei", ar: "بيضة", cat: "food" },
    { de: "Käse", ar: "جبن", cat: "food" },
    { de: "Zucker", ar: "سكر", cat: "food" },
    { de: "Salz", ar: "ملح", cat: "food" },
    { de: "Frühstück", ar: "فطور", cat: "food" },
    { de: "Abendessen", ar: "عشاء", cat: "food" },
    { de: "Sonne", ar: "شمس", cat: "objects" },
    { de: "Mond", ar: "قمر", cat: "objects" },
    { de: "Stern", ar: "نجم", cat: "objects" },
    { de: "Regen", ar: "مطر", cat: "objects" },
    { de: "Schnee", ar: "ثلج", cat: "objects" },
    { de: "Wind", ar: "ريح", cat: "objects" },
    { de: "Baum", ar: "شجرة", cat: "objects" },
    { de: "Blume", ar: "زهرة", cat: "objects" },
    { de: "Berg", ar: "جبل", cat: "objects" },
    { de: "Meer", ar: "بحر", cat: "objects" },
    { de: "Stadt", ar: "مدينة", cat: "objects" },
    { de: "Land", ar: "بلد", cat: "objects" },
    { de: "Wald", ar: "غابة", cat: "objects" }
];

// Elements from HTML
const inputField = document.getElementById('myInput');
const micBtn = document.getElementById('btnMic');
const infoCard = document.getElementById('resCard');
const deResult = document.getElementById('resGerman');
const arResult = document.getElementById('resArabic');
const errorMsg = document.getElementById('noMatch');
const speakerBtn = document.getElementById('btnListen');
const mainGrid = document.getElementById('grid');
const tabsBar = document.getElementById('tabs');
const micOverlay = document.getElementById('micBox');
const closeMicBtn = document.getElementById('stopMic');
const switchBtn = document.getElementById('btnSwitch');
const langLabel1 = document.getElementById('lang1');
const langLabel2 = document.getElementById('lang2');

// Variables to keep track of state
let currentCat = 'all';
let isDeToArabic = true; 

// Initial setup
function startApplication() {
    drawWords();
    addEventListeners();
}

function drawWords() {
    mainGrid.innerHTML = '';
    let filteredList;
    
    if (currentCat === 'all') {
        filteredList = wordList;
    } else {
        filteredList = wordList.filter(item => item.cat === currentCat);
    }

    filteredList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'word-box';
        
        if (isDeToArabic) {
            div.innerHTML = `
                <span class="txt-de">${item.de}</span>
                <span class="txt-ar">${item.ar}</span>
            `;
            div.onclick = function() {
                inputField.value = item.de;
                search(item.de);
            };
        } else {
            div.innerHTML = `
                <span class="txt-ar" dir="rtl">${item.ar}</span>
                <span class="txt-de">${item.de}</span>
            `;
            div.onclick = function() {
                inputField.value = item.ar;
                search(item.ar);
            };
        }
        mainGrid.appendChild(div);
    });
}

function search(val) {
    if (val.trim() === "") {
        infoCard.classList.add('hidden');
        errorMsg.classList.add('hidden');
        return;
    }

    const simpleVal = val.toLowerCase().trim();
    let foundWord;

    if (isDeToArabic) {
        foundWord = wordList.find(word => word.de.toLowerCase() === simpleVal);
    } else {
        foundWord = wordList.find(word => word.ar === val.trim() || word.ar === simpleVal);
    }

    if (foundWord) {
        if (isDeToArabic) {
            deResult.innerText = foundWord.de;
            arResult.innerText = foundWord.ar;
            arResult.setAttribute('dir', 'rtl');
            deResult.setAttribute('dir', 'ltr');
        } else {
            deResult.innerText = foundWord.ar;
            deResult.setAttribute('dir', 'rtl');
            arResult.innerText = foundWord.de;
            arResult.setAttribute('dir', 'ltr');
        }
        infoCard.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    } else {
        infoCard.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }
}

function changeMode() {
    isDeToArabic = !isDeToArabic;
    
    if (isDeToArabic) {
        langLabel1.innerText = 'Deutsch';
        langLabel2.innerText = 'عربي';
        inputField.placeholder = 'Type a word...';
        inputField.classList.remove('rtl-input');
        if (myVoiceRec) myVoiceRec.lang = 'de-DE';
    } else {
        langLabel1.innerText = 'عربي';
        langLabel2.innerText = 'Deutsch';
        inputField.placeholder = 'اكتب كلمة بالعربية...';
        inputField.classList.add('rtl-input');
        if (myVoiceRec) myVoiceRec.lang = 'ar-SA';
    }

    inputField.value = '';
    infoCard.classList.add('hidden');
    errorMsg.classList.add('hidden');
    drawWords();
}

let myVoiceRec;
if (window.webkitSpeechRecognition) {
    myVoiceRec = new webkitSpeechRecognition();
    myVoiceRec.lang = isDeToArabic ? 'de-DE' : 'ar-SA';
    
    myVoiceRec.onresult = function(e) {
        const text = e.results[0][0].transcript;
        inputField.value = text;
        search(text);
        micOverlay.classList.add('hidden');
    };

    myVoiceRec.onerror = function() {
        micOverlay.classList.add('hidden');
    };

    myVoiceRec.onend = function() {
        micOverlay.classList.add('hidden');
    };
}

function listenToWord() {
    const speech = new SpeechSynthesisUtterance(deResult.innerText);
    speech.lang = isDeToArabic ? 'de-DE' : 'ar-SA';
    window.speechSynthesis.speak(speech);
}

function addEventListeners() {
    inputField.oninput = function(e) {
        search(e.target.value);
    };

    switchBtn.onclick = changeMode;

    micBtn.onclick = function() {
        if (myVoiceRec) {
            micOverlay.classList.remove('hidden');
            myVoiceRec.start();
        } else {
            alert("No microphone support in this browser.");
        }
    };

    closeMicBtn.onclick = function() {
        if (myVoiceRec) myVoiceRec.stop();
        micOverlay.classList.add('hidden');
    };

    speakerBtn.onclick = listenToWord;

    tabsBar.onclick = function(e) {
        if (e.target.classList.contains('t-btn')) {
            const btns = document.querySelectorAll('.t-btn');
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            e.target.classList.add('active');
            currentCat = e.target.getAttribute('data-cat');
            drawWords();
        }
    };
}

// Start everything
startApplication();
