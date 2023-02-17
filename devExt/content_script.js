setTimeout(function() {
  const nombreVideo = document.querySelector("#main-content > section > div > div.course-player__content-header._content-header__container_h7ytgy > div._content-header__title-container_h7ytgy > h3").textContent
  //hacer peticion post a la api http://localhost:3000/name
  fetch('http://localhost:3000/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: nombreVideo})
  }).then(res => res.json()).then(data => {
    console.log(data)
  })
  var iframe = document.querySelector("iframe");
  if (iframe) {
    var src = iframe.src;
    window.open(src)
  } else {
    console.error("No se ha encontrado el iframe");
  }
},2500)
