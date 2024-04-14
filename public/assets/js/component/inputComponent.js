export default class InputComponent {
    constructor(type, placeholder) {
        this.type = type;
        this.placeholder = placeholder;
        this.element = this.createInputElement();
    }

    createInputElement() {
        const inputElement = document.createElement('input');
        inputElement.type = this.type;
        inputElement.placeholder = this.placeholder;
        return inputElement;
    }

    getElement() {
        return this.element;
    }
}