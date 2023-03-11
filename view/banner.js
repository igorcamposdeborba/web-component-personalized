class Banner extends HTMLElement {
    #banner; // atributo privado
    shadow;
    
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    connectedCallback(){
        this.createbanner();
    }

    createbanner() {
        this.banner = document.createElement("img"); // criar elemento img do banner
        this.banner.src = "";
        this.banner.alt = "";
        this.banner.title = "";
        this.banner.setAttribute("class", "centralize");
        
        const style = document.createElement("style");
        style.textContent = `.centralize {
            width: 100%;
            margin: 15px 0;
        }`;

        // adicionar input dos atributos do html no objeto
        this.banner.src = this.getAttribute("src");
        this.banner.alt = this.getAttribute("alt");
        this.banner.title = this.getAttribute("title");
        
         // adicionar ao shadow dom
         this.shadow.append(this.banner);
         this.shadow.append(style);
    }
}

// Criar novo objeto personalizado
customElements.define('banner-library', Banner);
