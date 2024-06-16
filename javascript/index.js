window.onload = function () {
  // Declarar datosJSON
  let datosJSON;
  const url = "./recursos/json/datos.json";

  async function obtenerDatosJson() {
    try {
      // Realiza la solicitud usando fetch y espera la respuesta
      const response = await fetch(url);

      // Verifica si la solicitud fue exitosa (código de respuesta 200)
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }

      // Parsea la respuesta como JSON y asigna a datosJSON
      datosJSON = await response.json();

      // Actualiza el gráfico con los datos obtenidos
      manejarDatos();
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  function manejarDatos() {
    const ctxManejarDatos = document.getElementById("myChart").getContext("2d");
    new Chart(ctxManejarDatos, {
      type: "radar",
      data: datosJSON,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Temperaturas",
          },
          legend: {
            position: "bottom",
          }
        },
      },
    });
  }

  // Llama a la función para obtener y procesar los datos JSON
  obtenerDatosJson();
};
