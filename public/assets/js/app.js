import login from './login.js';
import mainComponent from './component/main.component.js';


document.addEventListener("DOMContentLoaded", function() {
    const form = login();
    const main = mainComponent([form]);
    document.body.appendChild(main);
});