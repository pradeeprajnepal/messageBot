function botResponses(input){
     //rock paper scissors
     if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "How are you";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    if (input == "fine and you"){
        return "me too ! how may i help you?";
    } else if(input == "i am a girl"){
        return "Ok apsara. How may i help you?";
    } 
    if (input == "thank you"){
        return "yeah you wish";
    } else{
        return "Try asking something else!";
    };
};