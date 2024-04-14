export default function FormComponent(configurations, components) {
    const formElement = document.createElement('form');
    formElement.id = configurations.id;
    formElement.method = configurations.method;
    formElement.classList.add('space-y-4');

    
    components.forEach((component) => {
        formElement.appendChild(component.getElement());
    });
    return formElement;
}