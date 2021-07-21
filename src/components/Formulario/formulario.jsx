import React, {useState} from 'react';
import Error from '../Error/error';

const Formulario = ({guardarBusqueda}) => {

    //  State para registrar lo que el usuario escriba en el input
    const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //  Validar
        if(terminoBusqueda.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //  Enviar el término de búsqueda hacia el componente ppal
        guardarBusqueda(terminoBusqueda);
    }

    return ( 
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejempli: futbol o café"
                        onChange={e => guardarTerminoBusqueda(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
        </form>
     );
}
 
export default Formulario;
