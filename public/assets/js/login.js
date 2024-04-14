import FormComponent from './component/formComponent.js';
import H2Component from './component/h2Component.js';
import LabelComponent from './component/labelComponent.js';
import InputComponent from './component/inputComponent.js';
import ButtonComponent from './component/buttonComponent.js';


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
        type: 'submit',
        text: 'Iniciar sesión',
        onClickHandler: () => {
            console.log('Iniciando sesión...');
        },
        typeComportament: 'submit'
    });
    button.element.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-md', 'hover:bg-blue-600', 'focus:outline-none', 'focus:bg-blue-600', 'w-full');
    
    const form = FormComponent({id: 'login', method: 'POST'},
                                [h2, labelUser, inputUser, labelPassword, inputPassword, button]);
    return form;
}