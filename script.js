let cont = 0;
const val = document.getElementById("input");
const botp = document.getElementById("botp");
let redcont = 0;
let multiplicador = 1;

function ch() {
   
   cont +=  multiplicador;
   val.innerText = cont;

   botp.classList.remove("pulsar");
   void botp.offsetWidth;
   botp.classList.add("pulsar");
};

function pot() {
   if(cont >= 10 * multiplicador){
      cont -= 10 * multiplicador;
      val.innerText = cont;
      multiplicador += 1 ;
      }
      else (alert("você não tem o sufisciente"));
   };

function red() {
   if(cont >= 10 * redcont){
      cont -= 10 * redcont;
      val.innerText = cont;
      redcont += 1;
      multiplicador += 1;
   }
   else (alert("você não tem o sufisciente"));
};


function chr(valor = 0) {
   cont += valor;
   val.innerText = cont;
};

window.setInterval(
   function(){
      chr(redcont);
   }, 1000);