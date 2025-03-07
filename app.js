// Dark Theme/ Light Theme Toggle

const toggleLightDarkTheme = document.createElement('button');
toggleLightDarkTheme.textContent = 'Toggle Theme';
toggleLightDarkTheme.style.position = 'fixed'
toggleLightDarkTheme.style.bottom = '20px'
toggleLightDarkTheme.style.right = '20px'
toggleLightDarkTheme.style.padding = '10px'
toggleLightDarkTheme.style.borderRadius = '5px'
toggleLightDarkTheme.style.backgroundColor = '#6c63ff'
toggleLightDarkTheme.style.color = '#fff'
toggleLightDarkTheme.style.cursor = 'pointer'
document.body.appendChild(toggleLightDarkTheme);


toggleLightDarkTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
})


const style = document.createElement('style');

style.textContent = `
.dark-theme{
    background-color: #222;
    color: #fff;
}
.dark-theme .hero{
    background: linear-gradient (135deg, #3b3b98, #1e1e1e)
}
.dark-theme .btn{
    background: #ffd700;
    color: #222;

}
.dark-theme footer{
    background: #111;
}

.dark-theme social-icons a:hover{
    color: #FFD700;
}
`;

document.head.appendChild(style);

document.querySelectorAll('a[href^="#"').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).
        scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projectCards = document.querySelectorAll('.projects-card');

projectCards.forEach(card => {
    card.addEventListener('mouseover', 
        () => {
            card.style.transform = 'scale(1.05)';

    });
    card.addEventListener('mouseout', 
        () => {
            card.style.transform = 'scale(1)';

    });
});


toggleLightDarkTheme?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const headings = document.querySelectorAll('h2, h3, p');

    headings.forEach(heading => {
        if (document.body.classList.contains('dark-mode')){
            heading.style.color = 'white';
        }
        else{
            heading.style.color = '';
        }
    });
});