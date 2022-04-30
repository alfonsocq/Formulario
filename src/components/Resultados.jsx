import React from "react";

const Resultados = ra => {
    const {nombre, apellido, email, password, confirmPasssword} = ra.data;

    return(
        <div> 
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <p>Contraseña: {password}</p>
            <p>Confirmar contraseña{confirmPasssword}</p>
            
        </div>
    )
}

export default Resultados;