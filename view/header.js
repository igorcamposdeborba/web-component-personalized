class Logo extends HTMLElement {
    #logo; // atributo privado
    shadow;
    
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    // ciclo de vida: após carregada a página
    connectedCallback(){
        this.createLogo();

        // colocar a tag a href no nó acima do img, após carregada a tela
        let parent = this.logo.parentNode;
        let link = document.createElement('a');

        parent.replaceChild(link, this.logo);
        link.appendChild(this.logo);

        link.href = "index.html";
        link.title = "home";
    }
    
    
    createLogo() {
        this.logo = document.createElement("img"); // criar elemento img do logo
        this.logo.src = "images/logo.png";
        this.logo.alt = "";
        this.logo.title = "";
        this.logo.setAttribute("class", "centralize");
        
        const style = document.createElement("style");
        style.textContent = `.centralize {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 150px;
        }`;

        // adicionar input dos atributos do html no objeto
        this.logo.alt = this.getAttribute("alt");
        this.logo.title = this.getAttribute("title");
        
         // adicionar ao shadow dom
         this.shadow.append(this.logo);
         this.shadow.append(style);
    }
}

// Criar novo objeto personalizado
customElements.define('brand-library', Logo);
