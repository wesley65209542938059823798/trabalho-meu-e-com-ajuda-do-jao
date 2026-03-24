const prompt = require('prompt-sync')();

function menu() {
     console.log("======menu======");
     console.log("1.modulo financeiro");
     console.log("2.modulo de funcoes ");
     console.log("3.modulo trigometrico ");
     console.log("4.historico");
     console.log("5.sair \n");

     let p = prompt("digite uma opçao:   ");


     if (p === "1") {

          console.log("=====PG======");
          let razao1 = parseFloat(prompt("digite a razao: "));
          let primeirotermo1 = parseFloat(prompt("digite o primeiro termo da PG: "));
          let quantostermos1 = parseFloat(prompt("digite quantos termos tem na PG: "));


          let resultado1 = primeirotermo1 * ((razao1 ** quantostermos1) - 1) / (razao1 - 1);

          console.log(resultado1);

          let n = parseFloat(prompt("digite a posiçao do termo que vc quer: "));

          let t = primeirotermo1 * (razao1 ** (n - 1));

          console.log("posiçao", n, "resultado =", t);



     

          console.log("=====PA======");

          let ultimotermo = parseFloat(prompt("digite o ultimo termo: "));
          let primeirotermo2 = parseFloat(prompt("digite o primeiro termo da PA: "));
          let quantostermos2 = parseFloat(prompt("digite quantos termos tem na PA: "));

          let resultado2 = ((primeirotermo2 + ultimotermo) * quantostermos2) / 2

          console.log("resultado =", resultado2);


          let razao2 = parseFloat(prompt("digite a razao: "));




          let primeirotermo3 = parseFloat(prompt("digite o primeiro termo da PA: "));
          let n1 = parseFloat(prompt("digite a posiçao do termo que vc quer: "));

          let an = primeirotermo3 + (n1 - 1) * (razao2)

          console.log("sua conta da pa e de ", an)





          //esse function faz a conta do investimento
          console.log("=====simulador_Investimento=========")
          let usuario = parseFloat(prompt("digite o valor do investimento: "))
          let porcetagem = parseFloat(prompt("digite a taxa: "))
          let tempo = parseFloat(prompt("digite o tempo: "))





     }



}


 menu()
