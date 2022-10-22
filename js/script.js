/* Funcion comenzar */
function comenzar() {
  let y = document.getElementById("bienvenida");
  let x = document.getElementById("juego");
  y.style.display = "none";
  x.style.display = "block";
  let z = document.getElementById("nombre").value;
  document.getElementById("parrafo").innerHTML = "Hola " + z;
}

/* Funcion responder */ 
function responder() {
  let y = document.getElementById("juego");
  let x = document.getElementById("resultados");
  y.style.display = "none";
  x.style.display = "block";
  respuestas();
}

/* Funcion respuestas */
function respuestas() {
  let form1 = document.getElementById("form1")
  let form2 = document.getElementById("form2")
  let form3 = document.getElementById("form3")
  let respuesta1 = form1.elements["actor"].value
  let respuesta2 = form2.elements["actriz"].value
  let respuesta3 = form3.elements["pretty"].value

  if (respuesta1 === "Tom Cruise") {
    document.getElementById("r1").innerHTML = "Tom Cruise (Correcto)";
  }
  else if (respuesta1 === "Brad Pitt") {
    document.getElementById("r1").innerHTML = "Brad Pitt (Incorrecto)";
  }
  else {
    document.getElementById("r1").innerHTML = "Zac Efron (Incorrecto)";
  }

  if (respuesta2 === "Emma Watson") {
    document.getElementById("r2").innerHTML = "Emma Watson (Correcto)";
  }
  else if (respuesta2 === "Julia Roberts") {
    document.getElementById("r2").innerHTML = "Julia Roberts (Incorrecto)";
  }
  else {
    document.getElementById("r2").innerHTML = "Selena Gomez (Incorrecto)";
  }

  if (respuesta3 === "Richard Gere") {
    document.getElementById("r3").innerHTML = "Richard Gere (Correcto)";
  }
  else if (respuesta3 === "Nick Nolte") {
    document.getElementById("r3").innerHTML = "Nick Nolte (Incorrecto)";
  }
  else {
    document.getElementById("r3").innerHTML = "Nicholas Cage (Incorrecto)";
  }
}
