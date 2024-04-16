import ButtonComponent from './component/button.component.js';


document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header');
    header.classList.add('bg-blue-500', 'py-4', 'flex', 'justify-between', 'items-center', 'px-8');

    const nav = document.createElement('nav');
    nav.classList.add('flex', 'items-center', 'space-x-4', 'relative');

    const button = new ButtonComponent({
        type: 'click',
        text: 'Log in',
        onClickHandler: () => {
            window.location.href = 'login.html';
        }
    });
    button.element.classList.add('text-white', 'font-semibold', 'hover:underline', 'focus:outline-none'); 
    nav.appendChild(button.element);
    header.appendChild(nav);
    document.body.appendChild(header);
});