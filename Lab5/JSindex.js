var json = "";

window.onload = () => {
    diseño();
    body();
    get();
};

function post() {
    let chats = document.getElementById("textBox").value;

    fetch("http://stw-uvg-23.site:3002/chat", {
        method: "POST",
        body: JSON.stringify({
            'user': "Sebas",
            'chat': chats}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => {
        return data.json();
    })
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
    get();
}

function get() {
    fetch("http://stw-uvg-23.site:3002/chats")
        .then(response=>{
            return response.json();
        })
        .then(chats =>{
            chats.reverse();
            var jsonGet = JSON.stringify(chats);
            if(jsonGet != json){
                json = jsonGet;
                let chat = document.getElementById("mensaje");
                chat.innerHTML = "";
                for (let i = 0; i < chats.length; i++) {
                    let chat = document.getElementById("mensaje");
                    let espacioChats = document.createElement("div");
                    espacioChats.style.width = "950px";
                    espacioChats.style.height = "50px";
                    espacioChats.style.wordwrap = "break-word"
                    espacioChats.style.overflow = "hidden";
                    espacioChats.style.display = "inline-block";
                    espacioChats.style.backgroundColor = "white";
                    espacioChats.style.marginTop = "5px";
                    espacioChats.style.borderRadius = "10px";
                    espacioChats.style.padding = "10px";
                    espacioChats.style.boxSizing = "border-box";
                    if(chats[i].user == "Sebas"){
                        espacioChats.style.backgroundColor = "#D9FDD3";
                        espacioChats.style.marginLeft = "25px";
                    }
                    
                    if (mensaje.chat.includes("http")){
                        let link = mensaje.chat.toLowerCase();
                        if (link.includes(".jpg") || link.includes(".png") || link.includes(".gif")){
                            let img = document.createElement("img");
                            img.src = mensaje.chat;
                            img.style.width = "100%";
                            img.style.height = "auto";
                            espacioChats.appendChild(img);
                        }else {
                            let iframe = document.createElement("iframe");
                            iframe.src = mensaje.chat;
                            iframe.style.width = "100%";
                            iframe.style.height = "auto";
                            espacioChats.appendChild(iframe);
                        }
                    }

                    espacioChats.innerHTML = chats[i].user + ": " + chats[i].chat;
                    chat.appendChild(espacioChats);
                }
            }
            chats.scrollTop = chats.scrollHeight;
            
        }).finally(
            setTimeout(get, 250)
        );
}

function diseño(){

    let espacio = document.createElement("div");
    espacio.style.position = "absolute";
    espacio.style.width = "400px";
    espacio.style.height = "800px";
    espacio.style.backgroundColor = "white";
    espacio.style.marginLeft = "2%";
    espacio.style.marginTop = "1%";
    document.body.appendChild(espacio);

    let chatGrupo = document.createElement("div");
    chatGrupo.style.position = "absolute";
    chatGrupo.style.width = "380px";
    chatGrupo.style.height = "80px";
    chatGrupo.style.backgroundColor = "white";
    chatGrupo.style.marginLeft = "2%";
    chatGrupo.style.marginTop = "5%";
    chatGrupo.style.border = "2px solid #000000";
    chatGrupo.style.borderRadius = "10px";
    espacio.appendChild(chatGrupo);

    let nombreChatGrupo = document.createElement("h3");
    nombreChatGrupo.style.textAlign = "left";
    nombreChatGrupo.style.color = "#000000";
    nombreChatGrupo.innerHTML = "STW 23";
    nombreChatGrupo.style.marginTop = "2%";
    nombreChatGrupo.style.marginLeft = "23%";
    chatGrupo.appendChild(nombreChatGrupo);

    let logoChatGrupo = document.createElement("img");
    logoChatGrupo.src = "img/grupo.jpg";
    logoChatGrupo.style.width = "80px";
    logoChatGrupo.style.height = "60px";
    logoChatGrupo.style.marginTop = "-10%";
    chatGrupo.appendChild(logoChatGrupo);

    let chat1 = document.createElement("div");
    chat1.style.position = "absolute";
    chat1.style.width = "380px";
    chat1.style.height = "80px";
    chat1.style.backgroundColor = "white";
    chat1.style.marginLeft = "2%";
    chat1.style.marginTop = "30%";
    chat1.style.border = "2px solid #000000";
    chat1.style.borderRadius = "10px";
    espacio.appendChild(chat1);

    let nombreChat1 = document.createElement("h3");
    nombreChat1.style.textAlign = "left";
    nombreChat1.style.color = "#000000";
    nombreChat1.innerHTML = "Manuel Rodas";
    nombreChat1.style.marginTop = "2%";
    nombreChat1.style.marginLeft = "23%";
    chat1.appendChild(nombreChat1);

    let logoChat1 = document.createElement("img");
    logoChat1.src = "img/user.jpg";
    logoChat1.style.width = "70px";
    logoChat1.style.height = "70px";
    logoChat1.style.marginLeft = "1%";
    logoChat1.style.marginTop = "-12%";
    chat1.appendChild(logoChat1);    

    let chat2 = document.createElement("div");
    chat2.style.position = "absolute";
    chat2.style.width = "380px";
    chat2.style.height = "80px";
    chat2.style.backgroundColor = "white";
    chat2.style.marginLeft = "2%";
    chat2.style.marginTop = "55%";
    chat2.style.border = "2px solid #000000";
    chat2.style.borderRadius = "10px";
    espacio.appendChild(chat2);

    let nombreChat2 = document.createElement("h3");
    nombreChat2.style.textAlign = "left";
    nombreChat2.style.color = "#000000";
    nombreChat2.innerHTML = "Diego Valdez";
    nombreChat2.style.marginTop = "2%";
    nombreChat2.style.marginLeft = "23%";
    chat2.appendChild(nombreChat2);

    let logoChat2 = document.createElement("img");
    logoChat2.src = "img/user.jpg";
    logoChat2.style.width = "70px";
    logoChat2.style.height = "70px";
    logoChat2.style.marginLeft = "1%";
    logoChat2.style.marginTop = "-12%";
    chat2.appendChild(logoChat2);

    let chat3 = document.createElement("div");
    chat3.style.position = "absolute";
    chat3.style.width = "380px";
    chat3.style.height = "80px";
    chat3.style.backgroundColor = "white";
    chat3.style.marginLeft = "2%";
    chat3.style.marginTop = "80%";
    chat3.style.border = "2px solid #000000";
    chat3.style.borderRadius = "10px";
    espacio.appendChild(chat3);
    
    let nombreChat3 = document.createElement("h3");
    nombreChat3.style.textAlign = "left";
    nombreChat3.style.color = "#000000";
    nombreChat3.innerHTML = "Sebas Estrada";
    nombreChat3.style.marginTop = "2%";
    nombreChat3.style.marginLeft = "23%";
    chat3.appendChild(nombreChat3);

    let logoChat3 = document.createElement("img");
    logoChat3.src = "img/user.jpg";
    logoChat3.style.width = "70px";
    logoChat3.style.height = "70px";
    logoChat3.style.marginLeft = "1%";
    logoChat3.style.marginTop = "-12%";
    chat3.appendChild(logoChat3);

    let chat4 = document.createElement("div");
    chat4.style.position = "absolute";
    chat4.style.width = "380px";
    chat4.style.height = "80px";
    chat4.style.backgroundColor = "white";
    chat4.style.marginLeft = "2%";
    chat4.style.marginTop = "105%";
    chat4.style.border = "2px solid #000000";
    chat4.style.borderRadius = "10px";
    espacio.appendChild(chat4);
    
    let nombreChat4 = document.createElement("h3");
    nombreChat4.style.textAlign = "left";
    nombreChat4.style.color = "#000000";
    nombreChat4.innerHTML = "Jose Santisteban";
    nombreChat4.style.marginTop = "2%";
    nombreChat4.style.marginLeft = "23%";
    chat4.appendChild(nombreChat4);

    let logoChat4 = document.createElement("img");
    logoChat4.src = "img/user.jpg";
    logoChat4.style.width = "70px";
    logoChat4.style.height = "70px";
    logoChat4.style.marginLeft = "1%";
    logoChat4.style.marginTop = "-12%";
    chat4.appendChild(logoChat4);

    let fondo_recuadro = document.createElement("div");
    fondo_recuadro.style.position = "absolute";
    fondo_recuadro.style.width = "1000px";
    fondo_recuadro.style.height = "800px";
    fondo_recuadro.style.backgroundColor = "#F0EBE3";
    fondo_recuadro.style.marginLeft = "28.5%";
    fondo_recuadro.style.marginTop = "1%";
    document.body.appendChild(fondo_recuadro);

    let nombre = document.createElement("div");
    nombre.style.position = "absolute";
    nombre.style.width = "1000px";
    nombre.style.height = "70px";
    nombre.style.backgroundColor = "#F0F2F5"
    nombre.style.marginTop = "0%";
    fondo_recuadro.appendChild(nombre);

    let mensaje = document.createElement("h2");
    mensaje.style.textAlign = "left";
    mensaje.style.color = "#000000";
    mensaje.innerHTML = "STW 23";
    mensaje.style.marginTop = "2%";
    mensaje.style.marginLeft = "2%";
    nombre.appendChild(mensaje);

    let espacioChat = document.createElement("div");
    espacioChat.id = "mensaje";
    espacioChat.style.position = "absolute";
    espacioChat.style.width = "95%";
    espacioChat.style.height = "80%";
    espacioChat.style.borderRadius = "10px";
    espacioChat.style.backgroundColor = "#F0EBE3";
    espacioChat.style.left = "1.5%";
    espacioChat.style.top = "11%";
    espacioChat.style.overflow = "auto";
    espacioChat.style.display = "inline-block";
    fondo_recuadro.appendChild(espacioChat);

    let espacioMensaje = document.createElement("div");
    espacioMensaje.style.position = "absolute";
    espacioMensaje.style.width = "1000px";
    espacioMensaje.style.height = "100px";
    espacioMensaje.style.backgroundColor = "#F0F2F5"
    espacioMensaje.style.marginTop = "70%";
    fondo_recuadro.appendChild(espacioMensaje);

    let texto = document.createElement("textarea");
    texto.id = "textBox";
    texto.style.width = "80%";
    texto.style.height = "70%";
    texto.style.backgroundColor = "white";
    texto.style.padding = "15px 20px";
    texto.style.boxSizing = "border-box";
    texto.style.marginTop = "1.5%";
    texto.style.marginLeft = "1%";
    texto.style.borderRadius = "10px";
    texto.maxLength = "140";
    texto.placeholder = "Escriba un mensaje aqui";
    espacioMensaje.appendChild(texto);

    let submit = document.createElement("button");
    submit.style.position = "absolute";
    submit.style.width = "15%";
    submit.style.height = "70px";
    submit.style.backgroundColor = "transparent";  
    submit.style.marginLeft = "1%";
    submit.style.marginTop = "1.5%";  
    submit.style.color = "#000000";
    submit.style.borderRadius = "10px";
    submit.style.cursor = "pointer";  
    submit.innerHTML = "Enviar";
    submit.addEventListener("click", ()=>{post()});
    espacioMensaje.appendChild(submit);

    texto.addEventListener("keyup", (e)=>{
        if (e.code === 'Enter') {
            document.getElementById("submit").click();
        }
    });

    submit.addEventListener("click", get);

}

function body(){
    let fondo_body = document.body;
    fondo_body.style.backgroundColor = "#E0DFDC";
}

