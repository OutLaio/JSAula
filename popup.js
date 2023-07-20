class Cxmsg{
    static cor = "#888";
    static destino = null;
    static divmsg = null;

    static mostrar = (titulo, texto, config)=>{
        this.cor = config.cor;
        this.destino = document.body;
        this.divmsg = document.createElement("div");
        const estilo_divmsg = 
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"+
            "z-index: 999999999999"
        
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areacxmsg = 
            "display: flex;"+
            "justify-content: flex-end;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
        const areacxmsg = document.createElement("div");
        areacxmsg.setAttribute("style", estilo_areacxmsg)
        this.divmsg.appendChild(areacxmsg)

        const estilo_tituloCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:" + this.cor + ";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = titulo
        areacxmsg.appendChild(tituloCxmsg)

        const estilo_corpoCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        const corpoCxmsg = document.createElement("div");
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = texto
        areacxmsg.appendChild(corpoCxmsg)

        const estilo_rodapeCxmsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        const rodapeCxmsg = document.createElement("div");
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areacxmsg.appendChild(rodapeCxmsg)

        const estilo_btn_ok = 
            "background-color:" + this.cor + ";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style", estilo_btn_ok)
        btn_ok.innerHTML = "OK"
        btn_ok.addEventListener("click", (evt)=>{
            this.ocultar();
        })
        rodapeCxmsg.appendChild(btn_ok)

    };

    static ocultar = ()=>{
        this.divmsg.remove();
    };
}