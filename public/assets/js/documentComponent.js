import login from './login.js';
import mainComponent from './component/mainComponent.js';


document.addEventListener("DOMContentLoaded", function() {
    const form = login();
    const main = mainComponent([form]);
    document.body.appendChild(main);
});