let cometarios = [];
const drawBox = () => {

  const lista = cometarios.map(lik => `

    <li class="media">
    <p style="background:#FF813E; border-radius:4px; color:#FF813E">-----</p>
      <div class="media-body">
        <h4 class="mt-0 mb-1">${lik.name}</h4>
        <h6>${lik.fechatxt}</h6>
         <p>${lik.comentario}</p>
      </div>
    </li>


`);
  const reversed = lista.reverse()
  document.getElementById("box").innerHTML = reversed.join('');


};



const fnComentar = () => {
  let fecha = new Date();
  let fechatxt = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear()
  let name = document.getElementById("inputName").value;
  let comentario = document.getElementById("inputComment").value;
  if (name == "" || comentario == "") { alert("no se puede vacio") } else {


    if (cometarios.length == 4) {
      cometarios.shift();
    }
    cometarios.push({ name, fechatxt, comentario });
    console.log(cometarios);
    document.getElementById("inputName").value = "";
    document.getElementById("inputComment").value = "";
    window.location = "#box";
    drawBox();
  }
}
function valIN() {
  var input = document.getElementById('inputName');
  if (input.value.length < 3) {
    alert('Escribe mínimo 3 carácteres.');
    document.getElementById("inputName").value = "";
  }
}

