
let getImage;
let imageFile;
let showImage;
    
function IniciarVariables() {
    getImage = document.getElementById("loadImgBtn");
    imageFile = document.getElementById("imageFile");
    showImage = document.getElementById("image-container");

    getImage.addEventListener("click", () => imageFile.click());
    imageFile.addEventListener("change", ProcesarArchivo);
}

function ProcesarArchivo(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        showImage.textContent = "Seleccione un archivo de imagen válido.";
        event.target.value = "";
        return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => Mostrar(reader.result, file.name, file.size));
    reader.readAsDataURL(file);
}

function Mostrar(source, fileName, fileSize) {
    showImage.replaceChildren();

    const image = document.createElement("img");
    image.src = source;
    image.alt = fileName;
    showImage.append(image);

    const imageInfo = document.createElement("p");
    imageInfo.textContent = `Nombre: ${fileName} - Tamaño: ${fileSize} bytes`;
    showImage.append(imageInfo);
}

document.addEventListener("DOMContentLoaded", IniciarVariables);