const generarHTML = document.getElementById("generarHTML");

generarHTML.addEventListener("click", function () {
    const nombreEntrada = document.getElementById("nombreEntrada");
    const imagenPortada = document.getElementById("imagenPortada");
    const textoEntrada = document.getElementById("textoEntrada");
    const generos = document.getElementById("generos");
    const imagenes = document.getElementById("imagenes");
    const año = document.getElementById("año");
    const capitulos = document.getElementById("capitulos");
    let censura = document.getElementById("censura");
    let audio = document.getElementsByClassName("audio")
    let subtitulo = document.getElementsByClassName("subtitulo");
    let formato = document.getElementsByClassName("formato");
    const peso = document.getElementById("peso");
    const duracion = document.getElementById("duracion");
    const calidad = document.getElementById("calidad");
    const urlDescarga = document.getElementById("urlDescarga");


    for (var i = 0; i < formato.length; i++) {
        if (formato[i].checked) {
            formato = formato[i].value
        }
    }

    for (var i = 0; i < subtitulo.length; i++) {
        if (subtitulo[i].checked) {
            subtitulo = subtitulo[i].value
        }
    }

    for (var i = 0; i < audio.length; i++) {
        if (audio[i].checked) {
            audio = audio[i].value
        }
    }
    if (censura.checked) {
        censura = "Si"
    } else {
        censura = "No"
    }
    let codigo = window.open("", "codigo", "width=600,height=500,scrollbars=yes,resizable=yes");
    codigo.document.body.innerText = `
    <div align=center>

    <div class="altpost__info">
        <div class="info__content">
            <img src="${imagenPortada.value}" alt="${nombreEntrada.value}" title="${nombreEntrada.value}"/>
        </div>
    </div>

<div class="altpost__info">
    <div class="info__content">
        <a>${textoEntrada.value}</a>
    </div>
</div>

</div>
<div class="info__title flex">
    <h4><i class="fas fa-images"></i> Capturas</h4>
</div>

<div class="info__content flex wrap align-items-start info__content--images">
    <img src="${imagenes.value}"><!-- duplica esta etiqueta tantas veces como sean necesarias -->
</div>

<div class="altpost__info">
    <div class="info__title flex">
        <h4><i class="fas fa-info-circle"></i>Informacion</h4>
    </div>
    <div align=center>
        <div class="info__content">
            Titulo: ${nombreEntrada.value}<br/>
            Genero: ${generos.value}<br/>
            Año: ${año.value}<br/>
            Capitulos: ${capitulos.value}<br/>
            Censura: ${censura}<br/>
            Audio: ${audio}<br/>
            Subtítulos: ${subtitulo}<br/>
            Formato: ${formato}<br/>
            Tamaño: ${peso.value}MB Aprox<br/>
            Duración: ${duracion.value} min<br/>
            Calidad: ${calidad.value}<br/>
        </div>
    </div>
</div>
<div class="altpost__info">
    <div class="info__title flex">
        <h4><i class="fas fa-download"></i> Descargas</h4>
    </div>
<center>
    <div class="info__content flex wrap align-items-start info__content--images">
        <a class="btn bg-blue-violet" href="${urlDescarga.value}"><i class="fas fa-file-download"></i> Carpeta Contenedora</a>
    </div>
</div>
</center>
    `;
});