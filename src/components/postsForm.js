import React, { useState } from 'react';


const PostsForm = () => {

    const [formState, setFormState] = useState({
        titulo: '',
        cuerpo: ''
    });

    const { titulo, cuerpo } = formState;
    

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...setFormState,
            [target.name]: target.value
        });
    };

    const handleClick = (e) => {
        console.log('click en guardar');
    };

    

        return (
            <>
            <div className="container">
                <h2>
                    Nuevo POST
                </h2>
                <form >
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input 
                        value={titulo}
                        onChange={handleInputChange} 
                        name="titulo" type="text" 
                        className="form-control" 
                        id="titulo" 
                        placeholder="Titulo del Posts"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cuerpo" className="form-label">Texto del Posts</label>
                    <textarea 
                        value={cuerpo}
                        onChange={handleInputChange} 
                        name="cuerpo" 
                        className="form-control" 
                        id="cuerpo" rows="3"
                    ></textarea>
                </div>
                <button onClick={handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
            </>
        )
}


export default PostsForm;