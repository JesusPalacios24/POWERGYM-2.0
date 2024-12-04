import pool from "@/app/libs/mysql";

// Exportar la función para manejar las solicitudes POST
export async function POST(req) {
  try {
    const {
      id_cliente,
      nombreC,
      apellidoPC,
      apellidoMC,
      sexo,
      membresia,
      correoC,
      celularC,
      direccionC,
      estudiante,
      fecha_cumple,
    } = await req.json();

    // Validación de datos recibidos
    if (
      !nombreC || !apellidoPC || !sexo || !membresia || !correoC ||
      !celularC || !direccionC || !estudiante || !fecha_cumple ||
      !apellidoMC || !id_cliente
    ) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
        { status: 400 }
      );
    }

    // Validar formato de fecha
    if (isNaN(Date.parse(fechaCumple))) {
      return new Response(
        JSON.stringify({ error: 'Fecha de cumpleaños inválida.' }),
        { status: 400 }
      );
    }

    // Insertar el nuevo empleado en la base de datos
    const [result] = await pool.execute(
      `INSERT INTO empleado
        (id_cliente, nombreC, apellidoPC, apellidoMC, sexo, membresia, correoC, celularC, direccionC, estudiante, fecha_cumple)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id_cliente,
        nombreC,
        apellidoPC,
        apellidoMC,
        sexo,
        membresia,
        correoC,
        celularC,
        direccionC,
        estudiante,
        fecha_cumple,
      ]
    );

    // Retornar respuesta de éxito con el ID del empleado registrado
    return new Response(
      JSON.stringify({ message: 'Empleado registrado exitosamente.', id: result.insertId }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al insertar datos:', error);
    return new Response(
      JSON.stringify({ error: 'Error al registrar empleado.' }),
      { status: 500 }
    );
  }
}
