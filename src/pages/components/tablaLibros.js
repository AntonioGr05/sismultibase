const connection = require('../../../DB/mysql');

connection.query('SELECT * FROM libro', (error, results, fields) => {
  if (error) {
    console.error('Error en la consulta:', error);
    return;
  }

  // Crear una tabla HTML para mostrar los resultados
  const table = '<table><tr><th>ID</th><th>Título</th><th>Autor</th></tr>';

  // Iterar a través de los resultados y agregar filas a la tabla
  results.forEach((row) => {
    table += `<tr><td>${row.id}</td><td>${row.titulo}</td><td>${row.autor}</td></tr>`;
  });

  // Cerrar la etiqueta de la tabla
  table += '</table>';

  // Insertar la tabla en el elemento HTML donde deseas mostrarla (por ejemplo, un div con un id "tablaContainer")
  document.getElementById('tablaContainer').innerHTML = table;
});