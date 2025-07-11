let divResultado = document.querySelector('.resultadoNota');
let escritaResultado = document.querySelector('.tellResult');
let resultado = document.querySelector('.resultado');

document.getElementById('formNotas').addEventListener('submit', function(event) {
    event.preventDefault();
    divResultado.style.display = "block";
    calculaNota()
})

function calculaNota(){
    let Ai  = document.querySelector('.Ai').value;
    let Ad  = document.querySelector('.Ad').value; 
    Ad = Number(Ad);
    Ai = Number(Ai);
    let media = ((Ai + Ad) / 2);

    if(media >= 6)
    {
   escritaResultado.innerHTML = `A sua média é: <span style="color: #90EE90">${media}</span>`;
        resultado.value = "APROVADO";
    }
   else{
    if(media >= 4 && media <= 6){
         escritaResultado.innerHTML = `A sua média é: <span style="color:rgb(229, 255, 0);">${media}</span>`;
        resultado.value = "PROVA SUBSTITUTIVA";
    }
    else{
        escritaResultado.innerHTML = `A sua média é: <span style="color: red;">${media}</span>`;
        resultado.value = "REPROVADO";
    }
   }
}