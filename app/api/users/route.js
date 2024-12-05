import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

//solo es para ver los usuarios en este caso clientes(si funciona)
export async function GET() {
    try {
        const db = await pool.getConnection()//conecatar
        const query = 'SELECT * FROM cliente' 
        const query2= 'select * from empleado'
        const [rows] = await db.execute(query)
        const [rows2] = await db.execute(query2)
        db.release()

        return NextResponse.json(rows)
        

    } catch (error) {
        return  NextResponse.json({ error: error},{status:500})
        
    }
    
}