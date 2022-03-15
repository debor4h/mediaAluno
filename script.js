function calc(){
    var nota1 = document.getElementById('p1').value
    var nota2 = document.getElementById('p2').value
    var nota3 = document.getElementById('p3').value
    var resultado = document.getElementById('msg')
  
    media = (parseFloat(nota1) +  parseFloat(nota2) + parseFloat(nota3)) / 3

    if(nota1.length == 0|| nota2.length == 0 || nota3.length == 0){
        alert('Por favor, preencha os campos com as notas e tente novamente !')
        }else if((nota1 > 10 || nota1 < 0)||(nota2 > 10 || nota2 < 0)||(nota3 > 10 || nota3 < 0)){
            alert('As notas devem ser superior a zero e inferior a dez.\nTente novamente.')
        }
    else{
        if(media<=5){
            resultado.innerHTML = `Aluno(a) reprovado(a) !<br>Média: ${media.toFixed(2)}`
            document.body.style.background = 'red'
        }else if(media<=7){
            resultado.innerHTML = `Aluno(a) em recuperação !<br>Média: ${media.toFixed(2)}`
            document.body.style.background = 'orange'
        }else if(media>7){
            resultado.innerHTML = `Aluno(a) aprovado(a) !<br>Média: ${media.toFixed(2)}`
            document.body.style.background = "blue"
        }
    }
}