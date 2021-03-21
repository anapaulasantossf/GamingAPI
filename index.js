console.log("helooooooo");

const bcrypt = require('bcrypt');

const retorno = bcrypt.hashSync("ana Pula Santos Ferreira", 10);
console.log(retorno);


iniciar();

async function iniciar() {
   const result = await metodoCriptografa();
   console.log(result);
}

async function metodoCriptografa(){
    return await bcrypt.hash("lucas", 10);    
}
