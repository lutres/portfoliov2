import './styles.css';

const categoriesBtn = document.querySelectorAll('.categories-btn')

// Sticky navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);

})

// Cambiar de categorías en el portafolio

let vanilla = [];
let react   = [];
let design  = [];
let all     = [vanilla[0], react[0], design[0], vanilla[1], react[1], design[1]];

categoriesBtn.forEach(btn => {

    btn.addEventListener('click', () => {

        for (const category of categoriesBtn) {
            category.classList.remove('marked');
        }    

        btn.classList.toggle('marked');

    })    

})

// Enviar formulario

const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    
    event.preventDefault();
    const $form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: $form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        const contactDiv = document.querySelector('.contact')
        const alertDiv = document.createElement('div');
        alertDiv.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
        </svg>
        <h1>Su correo ha sido enviado con éxito</h1>
        <h2>¡Muchas gracias por comunicarse conmigo, me pondré en contacto con usted en cuanto pueda!</h2>
        `
        contactDiv.appendChild(alertDiv);
        alertDiv.classList.add('popup');
        
    } else {
        const contactDiv = document.querySelector('.contact')
        const alertDiv = document.createElement('div');
        alertDiv.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg>
        <h1>¡Algo salió mal!</h1>
        <h2>Intenta nuevamente, o también me puedes contactar a través de mis redes sociales</h2>
        `
        contactDiv.appendChild(alertDiv);
        alertDiv.classList.toggle('popup');
        setTimeout(() => {
            alertDiv.classList.toggle('disapear')
        }, 4000);
    }
    
}

// Fondo de estrellas

const bgDiv = document.querySelector('.bg');

for (let i = 0; i < window.innerHeight; i++) {

    let randomWidth = Math.random() * window.innerWidth;
    let randomHeight = Math.random() * window.innerHeight;
    
    const star = document.createElement('div');

    star.classList.add('star');
    bgDiv.appendChild(star);

    star.style.left = `${Math.floor(randomWidth)}px`;
    star.style.top = `${Math.floor(randomHeight)}px`;

    let randomTransitionY = Math.random() * window.innerHeight;
    let randomTransitionX = Math.random() * window.innerWidth;

    let axis = Math.floor(Math.random() * 3);
    let sign = Math.floor(Math.random() * 2);

    axis === 0 ? axis = 'Y' : axis = 'X';
    sign === 0 ? sign = '-' : sign = '';

    let starKeyframeY = [
        {transform: `translate${axis}(0px)`},
        {transform: `translate${axis}(${sign}${Math.floor(randomTransitionY)}px)`},
        {transform: `translate${axis}(0px)`}
    ];

    star.animate(starKeyframeY, {
        duration: 100000,
        iterations: Infinity
    });

}