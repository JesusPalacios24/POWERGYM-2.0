import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function POST(req) {
    const { type } = await req.json(); // Recibimos el tipo de puesto, ej: "S" para secretaria.

    try {
        const db = await pool.getConnection();

        // Validar si el tipo de puesto es válido
        const validTypes = { C: "Cliente", S: "Secretaria", E: "Empleado", G: "Gerente", I: "Instructor" };

        if (!validTypes[type]) {
            return NextResponse.json({ success: false, message: "Tipo de puesto no válido" }, { status: 400 });
        }

        // Consulta para contar los usuarios que tienen el prefijo correspondiente
        const query = `SELECT COUNT(*) AS total FROM empleado WHERE id_Empleado LIKE ?`;
        const likePattern = `${type}%`; // Busca IDs que empiezan con el prefijo del tipo
        const [rows] = await db.execute(query, [likePattern]);
        const total = rows[0].total || 0;

        db.release(); // Liberar la conexión

        // Retornar el total de usuarios encontrados
        return NextResponse.json({ success: true, total });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message || "Error en la base de datos" }, { status: 500 });
    }
}