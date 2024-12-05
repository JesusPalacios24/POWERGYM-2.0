import pool from "@/app/libs/mysql";

// Exportar la función para manejar las solicitudes POST
export async function POST(req) {
  try {
    const {
      id_Empleado,
      nombreE,
      apellidoPE,
      apellidoME,
      sexoE,
      sueldoE,
      puesto,
      correoE,
      celularE,
      domicilioE,
      nivelEducacion,
      fechaCumple,
      contrasena,
      foto,
    } = await req.json();

    // Validación de datos recibidos
    if (
      !nombreE || !apellidoPE || !sexoE || !puesto || !correoE ||
      !celularE || !domicilioE || !nivelEducacion || !fechaCumple ||
      !apellidoME || !sueldoE || !id_Empleado
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
        (id_Empleado, nombreE, apellidoPE, apellidoME, sexoE, sueldoE, puesto, correoE, celularE, domicilioE, nivelEducacion, fechaCumple, contrasena, foto)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id_Empleado,
        nombreE,
        apellidoPE,
        apellidoME,
        sexoE,
        sueldoE || null,  // Asegurando que sueldoE sea null si no se proporciona
        puesto,
        correoE,
        celularE,
        domicilioE,
        nivelEducacion,
        fechaCumple,
        contrasena,
        foto,
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
