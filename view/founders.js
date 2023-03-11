class Founders extends HTMLElement {
    #founders; // atributo privado
    #container;
    #name;
    #description;
    shadow;
    
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    // ciclo de vida: após carregada a página
    connectedCallback(){
        this.createFounders();

        // colocar a tag a titulo dentro da div da imagem, após carregada a tela
        let parent = this.name.parentNode;
        parent.replaceChild(this.container, this.name);
        this.container.appendChild(this.name);

        // colocar a tag a descrição dentro da div da imagem, após carregada a tela
        let parent2 = this.description.parentNode;
        parent2.replaceChild(this.container, this.description);
        this.container.appendChild(this.description);
    }

    createFounders() {
        // criar elementos
        this.container = document.createElement("div"); // criar div para envolver elementos

        this.founders = document.createElement("img"); // criar elemento img do founders
        this.founders.src = "";
        this.founders.alt = "";
        this.founders.title = "";
        this.founders.setAttribute("class", "centralize-image");
        this.container.setAttribute("class", "centralize-div");
        
        this.name = document.createElement("h2"); // criar elemento título
        this.name.textContent = "";
        this.name.setAttribute("class", "centralize-name");

        const styleName = document.createElement("style");
        styleName.textContent = `.centralize-name{
            text-align: center;
            margin: 0;
            padding: 0;
        }`;

        this.description = document.createElement("p"); // criar elemento descrição
        this.description.textContent = "";
        this.description.setAttribute("class", "centralize-description");

        const styleDescription = document.createElement("style");
        styleName.textContent = `.centralize-description{
            text-align: center;
            margin: 0;
            padding: 0;
        }`;

        // estilizar css da div e imagem
        const styleContainer = document.createElement("style");
        styleContainer.textContent = `.centralize-div {
            display: inline-block;
            text-align: center;
            width: 200px;
            margin: 0 9.5vw;
            font-family: "Roboto", sans-serif;
        }`;

        const styleImage = document.createElement("style");
        styleImage.textContent = `.centralize-image {
            display: left;
            width:200px;
            border-radius: 50%;
            
        }`;

        // adicionar input dos atributos do html no objeto
        this.founders.src = this.getAttribute("src");
        this.founders.alt = this.getAttribute("alt");
        this.founders.title = this.getAttribute("title");

        this.container.appendChild(this.founders); // adicionar elementos dentro da div
        this.container.append(styleContainer);
        
        // adicionar input dos atributos do html no objeto
        this.name.innerText = this.getAttribute("name");
        this.description.innerText = this.getAttribute("description");
        
         // adicionar ao shadow dom
         this.shadow.append(this.container);
         this.shadow.append(styleImage);
         this.shadow.append(this.name);
         this.shadow.append(this.description);
         this.shadow.appendChild(styleName);
         this.shadow.appendChild(styleDescription);
    }
}

// Criar novo objeto personalizado
customElements.define('founders-library', Founders);
