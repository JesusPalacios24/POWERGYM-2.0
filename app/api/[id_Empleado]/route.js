// Importamos la conexión a la base de datos
import pool from "@/app/libs/mysql";

// Ruta para obtener un empleado por ID (GET)
export async function GET(req, { params }) {
  try {
    const { id_Empleado } = params;

    if (!id_Empleado) {
      return new Response(
        JSON.stringify({ error: 'ID del empleado es requerido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const [result] = await pool.execute(
      `SELECT * FROM empleado WHERE id_Empleado = ?`,
      [id_Empleado]
    );

    if (result.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Empleado no encontrado.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify(result[0]),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al obtener el empleado:', error);
    return new Response(
      JSON.stringify({ error: 'Error al obtener los datos del empleado.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Ruta para actualizar un empleado (PUT)
export async function PUT(req, { params }) {
  try {
    const { id_Empleado } = params;

    if (!id_Empleado) {
      return new Response(
        JSON.stringify({ error: 'ID del empleado es requerido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedData = await req.json();

    const [result] = await pool.execute(
      `UPDATE empleado SET nombreE = ?, apellidoPE = ?, apellidoME = ?, sexoE = ?, sueldoE = ?, puesto = ?, correoE = ?, celularE = ?, domicilioE = ?, nivelEducacion = ?, fechaCumple = ?, codigoPo = ?, curp = ?, rfc = ?, foto = ? WHERE id_Empleado = ?`,
      [
        updatedData.nombreE,
        updatedData.apellidoPE,
        updatedData.apellidoME,
        updatedData.sexoE,
        updatedData.sueldoE,
        updatedData.puesto,
        updatedData.correoE,
        updatedData.celularE,
        updatedData.domicilioE,
        updatedData.nivelEducacion,
        updatedData.fechaCumple,
        updatedData.codigoPo,
        updatedData.curp,
        updatedData.rfc,
        updatedData.foto,
        id_Empleado
      ]
    );

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: 'Empleado no encontrado o no se pudo actualizar.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Empleado actualizado correctamente.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al actualizar el empleado:', error);
    return new Response(
      JSON.stringify({ error: 'Error al actualizar los datos del empleado.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Ruta para eliminar un empleado (DELETE)
export async function DELETE(req, { params }) {
  try {
    const { id_Empleado } = params;

    if (!id_Empleado) {
      return new Response(
        JSON.stringify({ error: 'ID del empleado es requerido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const [result] = await pool.execute(
      `DELETE FROM empleado WHERE id_Empleado = ?`,
      [id_Empleado]
    );

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: 'Empleado no encontrado o no se pudo eliminar.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Empleado eliminado correctamente.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al eliminar el empleado:', error);
    return new Response(
      JSON.stringify({ error: 'Error al eliminar los datos del empleado.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
