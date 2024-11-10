import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET(req, { params }) {
  // Asegúrate de que `params.slug` está disponible de forma asíncrona
  const { slug } = params;

  try {
    const db = await pool.getConnection();
    let query;

    // Dependiendo del prefijo, selecciona la tabla y la consulta adecuada
    if (slug.startsWith("C")) {
      query = 'SELECT * FROM cliente WHERE id_cliente = ?';
    } else if (["E", "G", "S", "I"].some(prefix => slug.startsWith(prefix))) {
      query = 'SELECT * FROM empleado WHERE id_Empleado = ?';
    } else {
      return NextResponse.json({ error: "Usuario No Encontrado" }, { status: 400 });
    }

    // Ejecución de la consulta
    const [rows] = await db.execute(query, [slug]);
    
    // Liberación de la conexión a la base de datos
    db.release();

    return NextResponse.json(rows);

  } catch (error) {
    return NextResponse.json({ error: error.message || "Error en la BD" }, { status: 500 });
  }
}

export async function POST(req, res){
    
}
