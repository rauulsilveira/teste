 var rblamborghini = document.getElementById("rblamborghini");
 var rbFerrari = document.getElementById("rbFerrari");
 var rbF1 = document.getElementById("rbF1");
 var outPreco = document.getElementById("outPreco");

 var ckgui = document.getElementById("ckgui");
 var ckfita = document.getElementById("ckfita");


 var preco = 5900
 var imgCarro = document.getElementById("imgCarro");

 function exibirPreco() {
     outPreco.textContent = preco.toLocaleString("pt-br", {
         style: "currency",
         currency: "BRL"
     })
 }

 function trocarFoto() {

     if (rblamborghini.checked) {
         imgCarro.src = "img/lambo.jpg"
         preco = 5900
     } else if (rbFerrari.checked) {
         imgCarro.src = "img/ferrari.jpg"
         preco = 1800

     } else {
         imgCarro.src = "img/f1.jpg"
         preco = 500
     }
     ckgui.checked = false;
     ckfita.checked = false;
     exibirPreco()


 }



 function somargui() {
     if (ckgui.checked) {
         preco = preco + 200;
     } else {

         preco = preco - 200;
     }
     exibirPreco()
 }

 function somarfita() {
     if (ckfita.checked) {
         preco = preco + 300;

     } else {
         preco = preco - 300;
     }
     exibirPreco()
 }

 function sorteio() {
     var btSorte = document.getElementById("btSorte");
     var outResposta = document.getElementById("outResposta");
     btSorte = Math.ceil(Math.random() * 10);
     alert("O seu desconto é de " + btSorte + " % ")
     var num
     num = btSorte / 100
     var preco1
     preco1 = (preco * num);
     preco = preco - preco1;
     exibirPreco()
     document.getElementById("btSorte").style.display = "none";

 }

 rblamborghini.addEventListener("change", trocarFoto);
 rbFerrari.addEventListener("change", trocarFoto);
 rbF1.addEventListener("change", trocarFoto);

 ckgui.addEventListener("change", somargui);
 ckfita.addEventListener("change", somarfita);

 var btSorte = document.getElementById("btSorte");
 btSorte.addEventListener("click", sorteio);