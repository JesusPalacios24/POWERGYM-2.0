import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";
export async function POST(req){
    const {username, password} = await req.json();

    try {
        const db= await pool.getConnection();

        let query
        //Dependiendo de con que letra comienze la id va en su tabla correspondiente
        if (username.startsWith("C")){
             query = 'select * from cliente where id_cliente = ? and contrasena= ?'
             
        }else if(["E", "G", "S", "I"].some(prefix => username.startsWith(prefix))){
            query = 'select * from empleado where id_Empleado = ? and contrasena= ?'
        }else {
            return NextResponse.json({ success: false, message: "Usuario no válido" }, { status: 400 });
          }

        const [rows]= await db.execute(query, [username, password]); 
        db.release();//liberacion de la db

        //Si es mayor a 0 
        if (rows.length>0) {
            //autentificacion  exitosa
            return NextResponse.json({ success: true, message: rows[0]})
        } else {
            //autentificacion NO exitosa
            return NextResponse.json({ success: false, message:"Usuario o contrasena incorrecta"}, { status: 401 });
            
        }
        
    } catch (error) {
        return NextResponse.json({error: error.message || "Error en la BD"},{status: 500});
    }
}
