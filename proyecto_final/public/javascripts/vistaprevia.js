var $seleccionImage = document.querySelector("#imagen"),
  $imagenPrevisualizacion = document.querySelector(".previsualizacion");
 
  console.log($seleccionImage)
  console.log($imagenPrevisualizacion)

$seleccionImage.addEventListener("change", () => {
  var archivos = $seleccionImage.files;
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  const vista = archivos[0];
  const objectURL = URL.createObjectURL(vista);

  $imagenPrevisualizacion.src = objectURL;
  $imagenPrevisualizacion.width = 960;
  $imagenPrevisualizacion.height = 960;

});