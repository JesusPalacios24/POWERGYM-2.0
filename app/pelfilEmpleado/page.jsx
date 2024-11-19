'use client'
import PerfilE from "../components/ui/perifEmpl";
import { useAuth } from "../components/ui/AuthContext";


export default function PerfilEmp(){
    const {userData,isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <p>Debes iniciar sesión para ver tu perfil.</p>;
      }

    return(
        <div className="pl-5">
        <PerfilE username= {userData?.id}  />
        </div>
    );
}