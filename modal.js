// MODAL INTRODUÇÃO 
function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar')
            modal.classList.remove('abrir')
    })
}

// MODAL QUESTÕES AMBIENTAIS 

function modalabrir(){
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar2')
            modal.classList.remove('open')
    })
}

// MODAL ACIDENTES 

function abrir(){
    const modal = document.getElementById('janela-modal3')
    modal.classList.add('openmodal')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar3')
            modal.classList.remove('openmodal')
    })
}

// MODAL CONCLUSÃO 

function conclusao(){
    const modal = document.getElementById('janelaconcl')
    modal.classList.add('abr')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechaconcl')
            modal.classList.remove('abr')
    })
}





