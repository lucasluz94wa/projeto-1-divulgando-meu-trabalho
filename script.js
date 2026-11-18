function abrirModal(iddomodal) {
    document.getElementById(iddomodal).style.display = "block";
}

function fecharModal(iddomodal) {
    document.getElementById(iddomodal).style.display = "none";
}

window.onclick = function(evento) {
    if (evento.target.className === "modal-fundo") 
        evento.target.style.display = "none";
}