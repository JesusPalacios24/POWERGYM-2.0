import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

{/** MOSTRAR EL SEGUIMIENTO DEL CLIENTE*/}
export async function GET(req,{params}) {
    const{slug}= await params;

    //Validacion inicial
    if (!slug || typeof slug !== 'string') {
        return NextResponse.json(
            {error: 'El parametro `slug` es obligatorio y debe ser una cadena valida.'},
            {status: 400}
        );
    }

    try {
        const db= await pool.getConnection();

       
        let query ='SELECT * FROM seguimientoCl WHERE id_Cliente=?'

        //ejecucion
        const [rows]= await db.execute(query,[slug]);
        db.release();

        //Verificaion de resultado
        if (rows.length === 0) {
            return NextResponse.json(
                {error: 'No se encontro un usuario con el `slug` proporcionado.'},
                {status: 404}
            );
        }

        return NextResponse.json(rows);

    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        return NextResponse.json(
            {error: 'Error interno del servidor. Intentelo nuevamente mas tarde.'},
            {status: 500}
        );
    }
        
    }

    
{/** Agregar EL SEGUIMIENTO DEL CLIENTE*/}

export async function POST(req) {
    const {username,fecha,pesoActual, imcActual }= await req.json();
    
    try {
        const db= await pool.getConnection();


        let query
        query='INSERT INTO seguimientoCl (id_Cliente, fecha, semana, pesoActual,imcActual) SELECT ?, ?, COALESCE(MAX(semana), 0) + 1, ?,? FROM seguimientoCl WHERE id_Cliente = ?;'
        
         // Ejecutar la consulta con los valores correspondientes
         const [result] = await db.query(query, [username, fecha, pesoActual, imcActual, username]);

         // Liberar la conexión
         db.release();
 
         // Respuesta exitosa
         return NextResponse.json({
             message: "Seguimiento agregado correctamente",
             affectedRows: result.affectedRows,
         }, { status: 200 });
          
    } catch (error) {
        return NextResponse.json({error: error.message || "Error en la BD"},{status: 500});
    }
    
    
    
}

    
