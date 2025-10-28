// Til o'zgartirish funksiyasi
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    
    // Tillar lug'ati
    const translations = {
        uz: {
            'home': 'Bosh sahifa',
            'about': 'Men haqimda',
            'skills': 'Ko\'nikmalar',
            'contact': 'Aloqa',
            'hero-title': 'Salom, mening ismim [Ismingiz]',
            'hero-text': 'Men [kasbingiz] bo\'lib ishlayman va [qisqacha ma\'lumot]. Ushbu sayt orqali o\'zim haqimda ko\'proq ma\'lumot beraman.',
            'learn-more': 'Ko\'proq bilib oling',
            'greeting': 'Salom, mening ismim [Ismingiz]',
            'about-text1': 'Men [yosh] yoshdaman va [shahringiz]da yashayman. [Kasbingiz] sifatida [necha yil] yildan beri ishlayman.',
            'about-text2': 'Mening asosiy qiziqishlarim [qiziqishlaringiz] va men [maqsadlaringiz] ustida ishlayman.',
            'about-text3': 'Bo\'sh vaqtimda men [bo\'sh vaqt faoliyatlaringiz] bilan shug\'ullanaman.',
            'professional': 'Professional ko\'nikmalar',
            'technical': 'Texnik ko\'nikmalar',
            'languages': 'Tillar',
            'skill1': '[1-kasbiy ko\'nikma]',
            'skill2': '[2-kasbiy ko\'nikma]',
            'skill3': '[3-kasbiy ko\'nikma]',
            'skill4': '[4-kasbiy ko\'nikma]',
            'tech1': '[1-texnik ko\'nikma]',
            'tech2': '[2-texnik ko\'nikma]',
            'tech3': '[3-texnik ko\'nikma]',
            'tech4': '[4-texnik ko\'nikma]',
            'lang1': 'O\'zbek tili - ona tili',
            'lang2': 'Rus tili - [bilish darajangiz]',
            'lang3': 'Ingliz tili - [bilish darajangiz]',
            'name': 'Ism',
            'email': 'Elektron pochta',
            'message': 'Xabar',
            'send': 'Xabarni yuborish',
            'copyright': '© 2023 [Ismingiz]. Barcha huquqlar himoyalangan.',
            'contact-info': 'Aloqa: [elektron pochta] | [telefon raqam]'
        },
        ru: {
            'home': 'Главная',
            'about': 'Обо мне',
            'skills': 'Навыки',
            'contact': 'Контакты',
            'hero-title': 'Привет, меня зовут [Ваше имя]',
            'hero-text': 'Я работаю [ваша профессия] и [краткая информация]. На этом сайте я расскажу больше о себе.',
            'learn-more': 'Узнать больше',
            'greeting': 'Привет, меня зовут [Ваше имя]',
            'about-text1': 'Мне [возраст] лет, и я живу в [ваш город]. Я работаю [ваша профессия] уже [сколько лет] лет.',
            'about-text2': 'Мои основные интересы [ваши интересы], и я работаю над [ваши цели].',
            'about-text3': 'В свободное время я занимаюсь [ваши хобби].',
            'professional': 'Профессиональные навыки',
            'technical': 'Технические навыки',
            'languages': 'Языки',
            'skill1': '[1-профессиональный навык]',
            'skill2': '[2-профессиональный навык]',
            'skill3': '[3-профессиональный навык]',
            'skill4': '[4-профессиональный навык]',
            'tech1': '[1-технический навык]',
            'tech2': '[2-технический навык]',
            'tech3': '[3-технический навык]',
            'tech4': '[4-технический навык]',
            'lang1': 'Узбекский язык - родной',
            'lang2': 'Русский язык - [ваш уровень]',
            'lang3': 'Английский язык - [ваш уровень]',
            'name': 'Имя',
            'email': 'Электронная почта',
            'message': 'Сообщение',
            'send': 'Отправить сообщение',
            'copyright': '© 2023 [Ваше имя]. Все права защищены.',
            'contact-info': 'Контакты: [электронная почта] | [номер телефона]'
        }
    };
    
    // Tilni o'zgartirish funksiyasi
    function changeLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Aktiv til tugmasini yangilash
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // HTML til atributini yangilash
        document.documentElement.lang = lang;
    }
    
    // Til tugmalariga hodisa qo'shish
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Tanlangan tilni saqlash
            localStorage.setItem('selectedLanguage', lang);
        });
    });
    
    // Saqlangan tilni yuklash
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'uz';
    changeLanguage(savedLanguage);
    
    // Formani yuborish
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Tanlangan tilga qarab xabar
        const currentLang = document.documentElement.lang;
        if (currentLang === 'uz') {
            alert('Xabaringiz yuborildi! Rahmat!');
        } else {
            alert('Ваше сообщение отправлено! Спасибо!');
        }
        
        this.reset();
    });
    
    // Silliq skroll qilish
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});