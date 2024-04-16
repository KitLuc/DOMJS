import FormComponent from './component/form.component.js';
import H2Component from './component/h2.component.js';
import LabelComponent from './component/label.component.js';
import InputComponent from './component/input.component.js';
import ButtonComponent from './component/button.component.js';


export default function login() {
    const content = { id: 'main', text: 'Iniciar sesión' };
    const h2 = new H2Component(content);
    h2.element.classList.add('text-2xl', 'font-semibold', 'mb-4', 'text-center');

    const labelUser = new LabelComponent('username', 'Correo electrónico');
    const inputUser = new InputComponent('email', 'corre@example.com');
    inputUser.element.classList.add('w-full', 'px-3', 'py-2', 'border', 'rounded-md', 'focus:outline-none', 'focus:border-blue-500');

    const labelPassword = new LabelComponent('password', 'Contraseña');
    const inputPassword = new InputComponent('password', 'Contraseña');
    inputPassword.element.classList.add('w-full', 'px-3', 'py-2', 'border', 'rounded-md', 'focus:outline-none', 'focus:border-blue-500');

    const button = new ButtonComponent({
        type: 'click',
        text: 'Iniciar sesión',
        onClickHandler: () => {
            const username = inputUser.element.value;
            const password = inputPassword.element.value;

            if (username === 'admin@gmail.com' && password === 'admin')
                window.location.replace('drag_drop.html');
            else
                alert('Usuario o contraseña incorrectos');

        }
    });

    button.element.classList.add('bg-blue-500', 'text-center', 'text-white', 'px-4', 'py-2', 'rounded-md', 'hover:bg-blue-600', 'focus:outline-none', 'focus:bg-blue-600', 'w-full');

    const form = FormComponent({ id: 'login', method: 'POST' },
        [h2, labelUser, inputUser, labelPassword, inputPassword, button]);
        form.classList.add('flex', 'flex-col', 'justify-center', 'max-w-md', 'mx-auto');
    return form;
}