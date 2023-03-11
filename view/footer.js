class Footer extends HTMLDivElement {
    #address; // atributo privado

    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: "open"});

        // criar elementos
        this.address = document.createElement("p");
        this.address.textContent = "";
        this.address.setAttribute("class", "paragraph");
        
        const style = document.createElement("style");
        style.textContent = `.paragraph {
            position: relative;
            text-align: center;
            margin: 0;
            padding: 30px 0;
            left: 0
            width: 100%;
            background: #E5E5E5;
            font-size: 11pt;
            font-family: "Roboto", sans-serif;
        }`;
        
        // adicionando elementos internos
        shadow.append(this.address);
        shadow.append(style);
    }
    
    connectedCallback() {
        this.address.innerText = this.getAttribute("content");
    }
}

// Criar novo objeto personalizado
customElements.define('footer-library', Footer, { extends: "div" });
