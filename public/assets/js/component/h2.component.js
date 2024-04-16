export default class H2Component {
    constructor(content) {
        this.element = this.createH2Element(content);
    }

    createH2Element(content) {
        const h2Element = document.createElement('h2');
        h2Element.id = content.id;
        h2Element.textContent = content.text;
        return h2Element;
    }

    getElement() {
        return this.element;
    }
}