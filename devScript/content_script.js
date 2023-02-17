setTimeout(function() {
  var scripts = document.querySelectorAll("script");
  if (scripts.length > 1) {
    var script = scripts[1];
    const stringSrc = script.src
    const jsStr = stringSrc.substring(0, stringSrc.length - 1)
    fetch(jsStr)
    .then(response => response.json())
    .then(data => {
      window.open(data.media.assets[0].url)
    })
    .catch(error => {
      console.error(error);
    }).finally(() => {
      window.close()
    });

  } else {
    console.error("No se han encontrado scripts en la página");
  }
}, 1000);
