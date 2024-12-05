'use client'
import Cliente from "../components/cards/periflClt"
import Tabs from "../components/tabs";
import { useAuth } from "../components/ui/AuthContext";

export default function PerfilCliente(){

    const {userData,isAuthenticated} = useAuth();
    

    if (!isAuthenticated) {
        return <p>Debes iniciar sesión para ver tu perfil.</p>;
      }
    return(
        <div className="pl-5 flex space-x-4">
                <Cliente username= {userData?.id}/>
                <Tabs username={userData?.id}/>
        </div>
    );
}