import './styles.css';
// import './css/all.css';

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
    
    let star = document.createElement('div');

    star.classList.add('star');
    bgDiv.appendChild(star);

    star.style.left = `${Math.floor(randomWidth)}px`;
    star.style.top = `${Math.floor(randomHeight)}px`;

}

// Activar animación de fondo

const nightModeBtn = document.querySelector('#animation');
let star = document.querySelectorAll('.star');
let play = false;
let starAnimation = [];

for (let i = 0; i < star.length; i++) {
            
    let randomTransition = Math.random() * window.innerHeight;

    let axis = Math.floor(Math.random() * 3);
    let sign = Math.floor(Math.random() * 2);

    axis === 0 ? axis = 'Y' : axis = 'X';
    sign === 0 ? sign = '-' : sign = '';

    let starKeyframe = [
        {transform: `translate${axis}(0px)`},
        {transform: `translate${axis}(${sign}${Math.floor(randomTransition)}px)`},
        {transform: `translate${axis}(0px)`}
    ];

    starAnimation.push(star[i].animate(starKeyframe, {
        duration: 100000,
        iterations: Infinity
    })); 

    starAnimation.forEach(animation => {
       animation.pause() 
    });

}

nightModeBtn.addEventListener('click', () => {
    
        if (play === false) {

            starAnimation.forEach(animation => {
                animation.play() 
             });
         
        nightModeBtn.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        `

        nightModeBtn.title = 'Desactivar animación de fondo';

        play = true;

    } else {

        starAnimation.forEach(animation => {
            animation.pause() 
         });

        nightModeBtn.innerHTML =
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        `

        play = false;

    }

});