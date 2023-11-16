import axios from 'axios';

export async function obtenerDatos() {
  try {
    const usuarios = await axios.get('/api/getUsuarios');
    const libros = await axios.get('/api/getLibros');
    const prestamos = await axios.get('/api/getPrestamos');

    const users = usuarios.data.usuarios;
    
    const prestamosConDetalles = prestamos.data.map(prestamo => {
      const usuario = users[prestamo.id_usuario];
      const libro = libros.data[prestamo.id_libro];
    
      const fechaPrestamo = new Date(prestamo.fecha_prestamo);
      const fechaDevolucion = new Date(prestamo.fecha_devolucion);
    
      const fechaPrestamoFormato = `${fechaPrestamo.getDate()}/${fechaPrestamo.getMonth() + 1}/${fechaPrestamo.getFullYear()}`;
      const fechaDevolucionFormato = `${fechaDevolucion.getDate()}/${fechaDevolucion.getMonth() + 1}/${fechaDevolucion.getFullYear()}`;
    
      return {
        ...prestamo,
        nombreUsuario: usuario ? usuario.nombre : 'Usuario no encontrado',
        tituloLibro: libro ? libro.titulo : 'Libro no encontrado',
        fecha_prestamo: fechaPrestamoFormato,
        fecha_devolucion: fechaDevolucionFormato,
      };
    });

    return {
      prestamos: prestamosConDetalles,
      usuarios: users,
    };
  } catch (error) {
    console.error('Error obteniendo datos:', error);
  }
}