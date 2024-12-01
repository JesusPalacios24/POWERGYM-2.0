'use client'
import PerfilE from "../components/cards/perifEmpl";
import { useAuth } from "../components/ui/AuthContext";
import { useRouter } from "next/navigation";


export default function PerfilEmp(){
    const {userData,isAuthenticated} = useAuth();
    const route = useRouter();

    if (!isAuthenticated) {
        return <p>Debes iniciar sesión para ver tu perfil.</p>;
      }

      //Redirigir Gestion Empleados
      const navigationGEmpleados =()=>{
        route.push("/perfilE/empleadoG");
      };

      //Redirigir Gestion Cliente
      const navigationGCliente =()=>{
        route.push("/perfilE/clienteG");
      };

      //Redirigir Compras Productos
      const navigationCProdcutos =()=>{
        route.push("/perfilE/productosC");
      };

       //Redirigir Venta Productos
       const navigationVProductos =()=>{
        route.push("/perfilE/VentaProd");
      };

       //Redirigir Gestion Horarios
       const navigationGestionHor =()=>{
        route.push("/perfilE/GestionHor");
      };

       //Redirigir Clases Grupales
       const navigationClasesGrup =()=>{
        route.push("/perfilE/ClasesGrup");
      };

       //Redirigir Entrevista Entrenador
       const navigationEntrevistaEntr =()=>{
        route.push("/perfilE/EntrevistaEntr");
      };

    return(
        <div className="pl-5 flex space-x-10">
        <PerfilE username= {userData?.id}  />
        
        
        <div className="grid grid-cols-3 gap-10  pt-10">
        <button onClick={ navigationGEmpleados} className="h-52 flex flex-col justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
             Gestion de Empleados
        </button>
        
        <button onClick={ navigationGCliente} className="h-52 flex flex-col justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            Gestion de Clientes
        </button>

        <button  onClick={ navigationCProdcutos} className="h-52 justify-center inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="text-lg">Compra de Productos</span>
        </button>

        <button onClick={navigationVProductos} className="h-52 justify-center inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
            <span className="text-lg">Venta de Productos</span>
        </button>

        <button onClick={navigationGestionHor} className="h-52 justify-center inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-lg">Horarios de los Empleados</span>
        </button>

        <button onClick={navigationClasesGrup} className="h-52 justify-center inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            <span className="text-lg">Registro de clases grupales</span>
        </button>

        <button onClick={navigationEntrevistaEntr} className="h-52 justify-center inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="text-lg">Seguimiento de Entrenador</span>
        </button>
        
        </div>
       

            

        </div>

       
    );
}