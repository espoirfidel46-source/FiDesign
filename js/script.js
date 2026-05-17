

// =======================
// TYPING EFFECT
// =======================

const text = "Créativité • Formation • Innovation";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);

    }

}

window.onload = typingEffect;



// =======================
// SCROLL ANIMATION
// =======================

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            card.classList.add('show');

        }

    });

});



// =======================
// NAVBAR EFFECT
// =======================

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";

    }

    else{

        navbar.style.background = "rgba(0,0,0,0.65)";
        navbar.style.boxShadow = "none";

    }

});



// =======================
// HERO PARALLAX
// =======================

window.addEventListener('scroll', () => {

    const heroImage = document.querySelector('.hero-image');

    let scroll = window.pageYOffset;

    heroImage.style.transform = "translateY(" + scroll * 0.3 + "px)";

});



// =======================
// GLOW EFFECT
// =======================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.boxShadow = "0 0 25px rgba(255,215,0,0.6)";

    });

    button.addEventListener('mouseleave', () => {

        button.style.boxShadow = "none";

    });

});



// =======================
// GALLERY LIGHTBOX
// =======================

const galleryItems = document.querySelectorAll('.gallery-item img');

const lightbox = document.createElement('div');

lightbox.classList.add('lightbox');

document.body.appendChild(lightbox);

galleryItems.forEach(image => {

    image.addEventListener('click', () => {

        lightbox.classList.add('active');

        const img = document.createElement('img');

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener('click', () => {

    lightbox.classList.remove('active');

});



// =======================
// TESTIMONIAL SLIDER
// =======================

const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

function showTestimonials(){

    testimonials.forEach(testimonial => {

        testimonial.classList.remove('active');

    });

    testimonials[currentTestimonial].classList.add('active');

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){

        currentTestimonial = 0;

    }

}

setInterval(showTestimonials, 4000);



// =======================
// COUNTER ANIMATION
// =======================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});



// =======================
// MOBILE MENU
// =======================

const menuToggle = document.getElementById('menu-toggle');

const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active');

});



// =======================
// CHATBOT TOGGLE
// =======================

const chatbotToggle = document.getElementById('chatbot-toggle');

const chatbotContainer = document.getElementById('chatbot-container');

chatbotToggle.addEventListener('click', () => {

    if(chatbotContainer.style.display === 'flex'){

        chatbotContainer.style.display = 'none';

    }

    else{

        chatbotContainer.style.display = 'flex';

    }

});



// =======================
// CHATBOT RESPONSES
// =======================

const sendBtn = document.getElementById('send-btn');

const chatInput = document.getElementById('chat-input');

const chatbotBody = document.getElementById('chatbot-body');

function sendMessage(){

    const message = chatInput.value.trim();

    if(message === '') return;

    // USER MESSAGE

    const userMessage = document.createElement('div');

    userMessage.classList.add('user-message');

    userMessage.innerText = message;

    chatbotBody.appendChild(userMessage);

    // BOT RESPONSE

    const botMessage = document.createElement('div');

    botMessage.classList.add('bot-message');

    let response = "Merci de votre message.";

    const lowerMessage = message.toLowerCase();

    if(lowerMessage.includes('formation')){

        response = "FiDesign propose des formations KoboToolbox, SPSS, Stata et développement numérique.";

    }

    else if(lowerMessage.includes('mémoire')){

        response = "Nous accompagnons la rédaction de mémoires et projets académiques.";

    }

    else if(lowerMessage.includes('contact')){

        response = "Vous pouvez nous contacter au +243902551063.";

    }

    else if(lowerMessage.includes('livre')){

        response = "Le livre 'Nous sommes ce que Dieu veut que nous soyons' est disponible gratuitement.";

    }

    else if(lowerMessage.includes('musique')){

        response = "FiDesign possède également une section musique et créations artistiques.";

    }

    else if(lowerMessage.includes('prix')){

        response = "Les prix varient selon le service demandé. Contactez-nous pour plus d’informations.";

    }

    else{

        response = "Merci pour votre question. FiDesign vous répondra rapidement.";

    }

    setTimeout(() => {

        botMessage.innerText = response;

        chatbotBody.appendChild(botMessage);

        chatbotBody.scrollTop = chatbotBody.scrollHeight;

    }, 700);

    chatInput.value = '';

}

sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', function(e){

    if(e.key === 'Enter'){

        sendMessage();

    }

});

