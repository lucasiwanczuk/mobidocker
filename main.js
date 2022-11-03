function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//---- Para ----//
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

   // console.log(contador);
}
