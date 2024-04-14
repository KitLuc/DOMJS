export default class ButtonComponent {
    constructor(configurations) {
        const { type, text, onClickHandler, typeComportament } = configurations;
        
        this.type = type;
        this.text = text;
        this.onClickHandler = onClickHandler;
        this.typeComportament = typeComportament;
        this.element = this.createButtonElement();
    }

    createButtonElement() {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.text;
        buttonElement.addEventListener(this.typeComportament, this.onClickHandler);
        return buttonElement;
    }

    getElement() {
        return this.element;
    }
}