export default class LabelComponent {
    constructor(forId, text) {
        this.forId = forId;
        this.text = text;
        this.element = this.createLabelElement();
    }

    createLabelElement() {
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.forId);
        labelElement.textContent = this.text;
        labelElement.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold');
        return labelElement;
    }

    getElement() {
        return this.element;
    }
}