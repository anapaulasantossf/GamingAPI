console.log("helooooooo");

const bcrypt = require('bcrypt');


var a = "Ana Paula Santos Ferreira";

cont b = metodoCriptografa();

console.log();



async function metodoCriptografa(){

    return await bcrypt.hash(a, 10);
    
}


async function criptografa(){
    
}