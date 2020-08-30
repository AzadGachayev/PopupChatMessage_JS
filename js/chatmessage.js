var chatmini = document.getElementById("chat-mini");
var chat = document.getElementById("chat");
var chatinput = document.getElementById("chat_input");

chatmini.addEventListener("click", function(){
    chat.classList.add("active")
})
chat.querySelector(".close_icon").onclick = function(){
    chat.classList.remove("active");
}

chatinput.addEventListener("keypress", function(e){
    if(e.keyCode==13){
    e.preventDefault()
    }
})
chatinput.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        var userinput = this.value;
        if(userinput.length){
            if(userinput[0].toUpperCase() == userinput[0]){
              myFunction(userinput, "support")
            }
            else{
                myFunction(userinput, "user")
            }
        }
    }
})

function myFunction(a,b){
    var div = document.createElement("div")
    div.className = "message " + b;
    var textP = document.createElement("p");
    textP.innerText = a;
    var timeP = document.createElement("p");
    timeP.className = "time"
    var timeVersion = new Date();
    timeP.innerText = timeVersion.getHours() + ":" + timeVersion.getMinutes();
    div.appendChild(textP);
    div.appendChild(timeP);
    chat.querySelector("main").appendChild(div);
    chatinput.value ="";
    div.scrollIntoView();
}
