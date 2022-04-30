import React from 'react';

const Formulario = props => {
    const{imputs, setImputs} =props;
    
    const onChange = ga => {
        setImputs({
            imputs,
            [ga.target.name]: ga.target.value
        })
    
    };    



    return( 
        <form>
            <h2>Crear Usuario</h2>
            <div className='form-group'>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={onChange} id="nombre" className='form-control'name="nombre" />
            </div>
            <div className='form-group'>
            <label htmlFor="apellido">Apellido</label>
            <input onChange={onChange} id="apellido" className='form-control'name="apellido" />
            </div>
            <div className='form-group'>
                <label>E-mail</label>
                <input onChange={onChange} id="email" className='form-control'name="email" />
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input type="password" onChange={onChange} id="password" className='form-control'name="password" />
            </div>
            <div className='form-group'>
                <label>Confirmar Contraseña</label>
                <input type="password" onChange={onChange} id="confirmPasssword" className='form-control'name="confirmPasssword" />
            </div>
            
            
        </form>
    )

}

export default Formulario;