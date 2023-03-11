class Paragraph extends HTMLDivElement {
    #paragraph;

    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: "open"});

        // criar elementos
        this.paragraph = document.createElement("p");
        this.paragraph.textContent = "";
        this.paragraph.setAttribute("class", "paragraph");
        
        const style = document.createElement("style");
        style.textContent = `.paragraph {
            width: 100%;
            text-align: center;
            height: 100px;
            margin: 80px 0 20px 0;
            font-family: "Roboto", sans-serif;
        }`;
        
        // adicionando elementos internos
        shadow.appendChild(this.paragraph);
        shadow.appendChild(style);
    }
    
    connectedCallback() {
        this.paragraph.innerText = this.getAttribute("paragraph");
    }
}
// Define the new element
customElements.define("paragraph-library", Paragraph, { extends: "div" });