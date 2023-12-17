var nome = document.getElementById('nm')
var email = document.querySelector('id#em')

function bot(){
    var davi = document.getElementById('dv')
    var re = document.getElementById('res')
    var butt= document.createElement("button")
    
    if (davi.value== '0'){
        alert('Escreva na ultima box e atualize a pág')
    } else if (davi.value=== 'lindo' ||davi.value=== 'legal')
    {
        
        re.innerHTML='Acertou! Grande amigo, pode <a href="https://daviss77.github.io/PJ-HTML/mpb"><button> Seguir</button></a>'
        davi.value=''
    }
    else if (davi.value==='chato' ||davi.value=== 'feio'){
    
        re.innerHTML='Como que é amigo?! Tente Novamente'
        davi.value='';
    }
   
}
document.getElementById('bt').addEventListener('click', bot)