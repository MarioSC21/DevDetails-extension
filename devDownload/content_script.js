setTimeout(function() {
  //hacer petigio get a la api http://localhost:3000/name
  //obtener el nombre del video
  fetch("http://localhost:3000/name").then((res) => res.json()).then((d) => {
    const url = document.querySelector("body > video > source").src
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${d.data.trim()}.mp4`
    // Hacer clic en el enlace para descargar el video
    downloadLink.click();
    window.close();
  })

}, 1000);
