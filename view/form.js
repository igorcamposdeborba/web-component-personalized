class Form extends HTMLElement {
    #type // atributo privado
    shadow;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        // Criar label do formulário e aplicar valores padrões
        const title = document.createElement("label");
        title.innerText = this.getAttribute("title");
        title.setAttribute("class", "label");
    

        // estilos css
        const styleLabel = document.createElement("style");
        styleLabel.textContent = `.label {
            margin-top: 15px;
            display:inline-block;
        }`;
    
        // Lógica de diferenciação entre label de texto ou textArea da mensagem
        let input;
        this.type = this.getAttribute("dialogBox");
    
        switch(this.type){
            case "true":
                input = document.createElement("textarea"); // criar caixa de diálogo para parágrafo
                const cols = this.getAttribute("cols");
                const rows = this.getAttribute("rows");
                if (cols){
                    input.setAttribute("cols", cols);
                }
                if (rows){
                    input.setAttribute("rows", rows);
                }
                if (this.getAttribute("placeholder") == true){
                    input.innerText = this.getAttribute("placeholder");
                }
                break;
            
            case null:
                input = document.createElement("input"); // criar label para linha
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", this.getAttribute("placeholder"));
                break;
        }

        const br = document.createElement('br');

        this.shadow.appendChild(title);
        this.shadow.appendChild(br);
        this.shadow.appendChild(input);
        this.shadow.appendChild(styleLabel);
    }
}

customElements.define("form-library", Form);