
let coll= document.getElementsByClassName("collapsible");

for (let i=0; i<coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var content= this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight +"px";
        }

    })
}

function getTime(){
    let today= new Date();
    hours= today.getHours();
    minutes=today.getMinutes();

    if(hours<10){
        hours= "0"+hours;
    }

    if (minutes<10){
        minutes= "0"+minutes;
    }

    let time= hours+ ":"+minutes;
    return time;
}

function firstBotMessage(){
    let message= "Hello! How's it going?";
    document.getElementById("botStarterChat").innerHTML="<p class='botText'> <span>"+message+"</span></p>";

    let time=getTime();

    $(".timestamp").append(time);
    document.getElementsByClassName('userInput').scrollIntoView(false);
}    
firstBotMessage();

function getHardResponse(input){
    let botReply= botResponses(input);
    let botHtml="<p class='botText'><span>"+botReply+"</span></p>"
    $(".message-display").append(botHtml);

    document.getElementsByClassName("chat-bar-bottom").scrollIntoview(true);
}

function getResponse(){
    let text= $("#textInput").val();

    if(text==""){
        text= "Empty!"
    }
    let userHtml= "<p class='userText'><span>"+text+"</span></p>";

    $("#textInput").val("");
    $(".message-display").append(userHtml);

    document.getElementsByClassName("chat-bar-bottom").scrollIntoView("true");

    setTimeout(()=>{
        getHardResponse(input);
    },500);
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $(".message-display").append(userHtml);
    document.getElementsByClassName(".chat-bar-bottom").scrollIntoView(true);
}


function sendButton(){
    getResponse();
}
function heartButton() {
    buttonSendText("Like");
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});