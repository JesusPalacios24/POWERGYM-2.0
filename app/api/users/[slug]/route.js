import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET(req, { params }) {
  const { slug } = await params;

  // Validación inicial
  if (!slug || typeof slug !== "string") {
    return NextResponse.json(
      { error: "El parámetro `slug` es obligatorio y debe ser una cadena válida." },
      { status: 400 }
    );
  }

  try {
    const db = await pool.getConnection();
    let query;

    // Selección de consulta en función del prefijo de `slug`
    if (slug.startsWith("C")) {
      query = "SELECT * FROM cliente WHERE id_cliente = ?";
    } else if (["E", "G", "S", "I"].some((prefix) => slug.startsWith(prefix))) {
      query = "SELECT * FROM empleado WHERE id_empleado = ?";
    } else {
      return NextResponse.json(
        { error: "Usuario no encontrado. Prefijo no reconocido." },
        { status: 404 }
      );
    }

    // Ejecución de la consulta
    const [rows] = await db.execute(query, [slug]);

    // Liberar conexión a la base de datos
    db.release();

    // Verificación de resultados
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "No se encontró un usuario con el `slug` proporcionado." },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    return NextResponse.json(
      { error: "Error interno del servidor. Inténtelo nuevamente más tarde." },
      { status: 500 }
    );
  }
}
