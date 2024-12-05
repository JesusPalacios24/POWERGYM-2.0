'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function GestionEmpleado() {
  const hoy = new Date();
  const fechaActual = hoy.toISOString().split('T')[0];
  const route = useRouter();

  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
  const [id_Empleado, setEmpleadoId] = useState(""); // Almacena el ID del empleado que el usuario ingresa

 
  const [imageSrc, setImageSrc] = useState("/userdefecto.png");
  const [imageBlob, setImageBlob] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      const blob = new Blob([file], { type: file.type }); // Crea un blob del archivo
      setImageBlob(blob);

      // Genera una URL temporal para mostrar la imagen seleccionada
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  };


    
    
   

  // Estado para almacenar los datos del empleado
  const [empleado, setEmpleado] = useState({
    id_Empleado: "",
    nombreE: "",
    apellidoPE: "",
    apellidoME: "",
    sexoE: "",
    sueldoE: "",
    puesto: "",
    correoE: "",
    celularE: "",
    domicilioE: "",
    nivelEducacion: "",
    fechaCumple: "",
  });

  // Función para generar la ID basada en el cargo
  const generarId = (puesto) => {
    const letras = {
      "Entrenador": "E",
      "Secretaria": "S",
      "Gerente": "G",
      "Instructor": "I",
    };

    // Genera un número aleatorio de 6 dígitos
    const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);

    // Asigna la letra correspondiente al cargo y genera la ID completa
    return `${letras[puesto] || 'X'}${numeroAleatorio}`;
  };

  // Establecer ID solo cuando no hay uno
  useEffect(() => {
    // Solo generar ID si no existe y si el puesto tiene valor
    if (!empleado.id_Empleado && empleado.puesto) {
      const nuevaId = generarId(empleado.puesto);
      setEmpleado((prevState) => ({
        ...prevState,
        id_Empleado: nuevaId,
      }));
    }
  }, [empleado.puesto]); // Re-ejecuta el efecto solo cuando 'puesto' cambia

  // Verificar si el estado de 'empleado' cambia
  useEffect(() => {
    console.log('ID Empleado actualizado:', empleado.id_Empleado);
  }, [empleado.id_Empleado]); // Esto solo debe ejecutarse cuando 'id_Empleado' cambia

  // Función para manejar el cambio en el puesto
  const handlePuestoChange = (e) => {
    setEmpleado((prevState) => ({
      ...prevState,
      puesto: e.target.value,  // Solo cambiar el puesto
      id_Empleado: "",  // Resetear la ID para que se regenere cuando cambie el puesto
    }));
  };

  // Manejar los cambios de los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //funcion para registrar
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(empleado); // Verifica los datos que estás enviando

    try {
      const res = await fetch('../api/registroEmp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleado),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert('Empleado registrado exitosamente');
        route.push("/perfilE"); // Redirigir a otra página si es necesario
      } else {
        alert(`Error al registrar al empleado: ${data.error || 'Error: Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al registrar el empleado');
    }
  };

  //Función para manejar el envío del ID y cargar los datos
  const handleModalSubmit = async () => {
    // Verifica si el ID no está vacío
    if (!id_Empleado) {
      alert("Por favor ingrese un ID de empleado válido");
      return;
    }

    try {
      // Aquí haces una solicitud al backend para obtener los datos del empleado
      const res = await fetch(`/api/${id_Empleado}`); // Asumiendo que tienes una ruta para obtener datos por ID
      const data = await res.json();

      if (res.status === 200 && data) {
        setEmpleado(data); // Carga los datos del empleado en el formulario
        setShowModal(false); // Cierra el modal
      } else {
        alert("Empleado no encontrado o error al cargar datos");
      }
    } catch (error) {
      console.error('Error al cargar los datos del empleado:', error);
      alert('Se produjo un problema al cargar los datos del empleado');
    }
  };

  // Función para manejar la actualización del empleado
  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/${empleado.id_Empleado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleado),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Empleado actualizado exitosamente");
        setShowModal(false); // Cierra el modal
        route.push("/perfilE"); // Redirigir a la página de perfil
      } else {
        alert(`Error: ${data.error || 'Error: Error desconocido'}`);

      }
    } catch (error) {
      console.error('Error al actualizar empleado:', error);
      alert('Hubo un error al actualizar los datos');
    }
  };

  const eliminarEmpleado = async (id_Empleado) => {
    try {
      const response = await fetch(`/api/${id_Empleado}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        alert('Empleado eliminado correctamente');
        route.push("/perfilE"); // Redirigir a otra página si es necesario
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al eliminar el empleado:', error);
      alert('Hubo un error al eliminar al empleado');
    }
  };

  const handleEliminarClick = (id_Empleado) => {
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar a este empleado?');
    if (confirmDelete) {
      eliminarEmpleado(id_Empleado);
    }
  };

  // Función para regresar
  const handleBack = () => {
    route.push("/perfilE");
  };

  return (
    
    <div className="flex flex-col md:flex-row space-x-8 p-8">
     
      {/* Modal para ingresar el ID del empleado */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Ingrese el ID del empleado</h3>
            <input
              type="text"
              value={id_Empleado}
              onChange={(e) => setEmpleadoId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Columna izquierda con imagen */}
      <div className="flex-1 md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
        <img
          src={imageSrc}
          alt="Empleado"
          className="w-48 h-48 rounded-full object-cover mb-4"
        />
        <button 
        onClick={() => document.getElementById("fileInput").click()}
        className="text-white bg-salmonColor hover:bg-naranjaLogo py-2 px-4 rounded-full mb-4">
          Cambiar la imagen
        </button>
        <div className="mt-4 w-full">
          <label className="block text-sm font-medium text-gray-700">Fecha de cumpleaños</label>
          <input
            type="date"
            name="fechaCumple"
            value={empleado.fechaCumple}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Input oculto para seleccionar archivo */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
        </div>
        <div className="flex flex-col space-y-4 mt-6 w-full">
         
          <button
          type="submit"
            onClick={() => setShowModal(true)} // Abre el modal al hacer clic
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Buscar Empleado
          </button>
          {empleado.id_Empleado && empleado.nombreE && (
             <button
             type="submit"
             onClick={() => handleEliminarClick(empleado.id_Empleado)}
             className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
           >
             Eliminar
           </button>
          )}
          {empleado.id_Empleado && empleado.nombreE && (
            

            <button
            type="submit"
              onClick={handleUpdate}
              className="w-full py-2 bg-yellow-400 text-white rounded-md"
            >
              Actualizar
            </button>
          )}
          <button
          type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            Registrar
          </button>
        </div>
        <div className="w-full mt-6">
          <button
          type="submit"
            onClick={handleBack}
            className="w-full py-2 bg-salmonColor text-white rounded-md hover:bg-naranjaLogo"
          >
            Volver
          </button>
        </div>
      </div>

      {/* Columna derecha con formulario */}
      <div className="flex-1 md:w-2/3 space-y-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ID */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">ID (predeterminado):</label>
            <input
              disabled
              type="text"
              value={empleado.id_Empleado || ''}  // Asegúrate de que siempre haya un valor, incluso si es vacío
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fecha */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Fecha de registro:</label>
            <input
              disabled
              type="date"
              value={fechaActual}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Nombre */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Nombre(s):</label>
            <input
              type="text"
              name="nombreE"
              placeholder="Pedro"
              value={empleado.nombreE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Apellido Paterno */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Apellido Paterno:</label>
            <input
              type="text"
              placeholder="Balmaceda"
              name="apellidoPE"
              value={empleado.apellidoPE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Apellido Materno */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Apellido Materno:</label>
            <input
              type="text"
              name="apellidoME"
              placeholder="Pascal"
              value={empleado.apellidoME}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sexo */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Sexo:</label>
            <select
              name="sexoE"
              value={empleado.sexoE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="Is">Intersex</option>
            </select>
          </div>

          {/* Sueldo */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Sueldo:</label>
            <input
              type="number"
              name="sueldoE"
              placeholder="5000"
              value={empleado.sueldoE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          {/* Puesto */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Puesto:</label>
            <select
              name="puesto"
              value={empleado.puesto}
              onChange={handlePuestoChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Secretaria">Secretaria</option>
              <option value="Entrenador">Entrenador</option>
              <option value="Instructor">Instructor</option>
              <option value="Gerente">Gerente</option>
            </select>
          </div>

          {/* Correo */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Correo electrónico:</label>            
            <input
              type="email"
              name="correoE"
              id="helperCorreo"
              value={empleado.correoE}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              
            />
            <p id="helperCorreo" className="mt-2 text-sm text-gray-500 ">Asegúrate de incluir "@" y un dominio</p>
             
          </div>

          {/* Teléfono */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Teléfono personal:</label>
            <input
              type="tel"
              name="celularE"
              placeholder="6141098578"
              pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
              value={empleado.celularE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dirección */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Dirección:</label>
            <input
              type="text"
              name="domicilioE"
              placeholder="Calle Juarez 123, Col. Centro CP 31000, Chihuahua,Chihua"
              value={empleado.domicilioE}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p id="helperCorreo" className="mt-2 text-sm text-gray-500 ">Calle, numero, colonia, Codigo Postal, Ciudad, Estado</p>
          </div>

          {/* Nivel de educación */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Nivel de educación</label>
            <select
              name="nivelEducacion"
              value={empleado.nivelEducacion}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Medio Superior">Medio Superior</option>
              <option value="Superior">Superior</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );

}

export default GestionEmpleado;
