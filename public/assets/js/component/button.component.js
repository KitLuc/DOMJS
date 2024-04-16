export default class ButtonComponent {
    constructor(configurations) {
        const { type, text, onClickHandler } = configurations;
        
        this.type = type;
        this.text = text;
        this.onClickHandler = onClickHandler;
        this.element = this.createButtonElement();
    }

    createButtonElement() {
        const buttonElement = document.createElement('a');
        buttonElement.textContent = this.text;
        buttonElement.addEventListener(this.type, this.onClickHandler);
        return buttonElement;
    }

    getElement() {
        return this.element;
    }
}