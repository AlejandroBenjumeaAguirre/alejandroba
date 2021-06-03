import React from 'react';


class PostsForm extends React.Component {

    state = {
        titulo: '',
        cuerpo: ''
    };

    handleInputChange = ({target}) => {
        
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    };

    handleClick = (e) => {
        console.log('click en guardar');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('detener submit');
        console.log(this.state);
    };

    render() {
        return (
            <>
            <div className="container">
                <h2>
                    Nuevo POST
                </h2>
                <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input 
                        onChange={this.handleInputChange} 
                        name="titulo" type="text" 
                        className="form-control" 
                        id="titulo" 
                        placeholder="Titulo del Posts"
                        value={this.state.titulo}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cuerpo" className="form-label">Texto del Posts</label>
                    <textarea 
                        onChange={this.handleInputChange} 
                        name="cuerpo" 
                        className="form-control" 
                        id="cuerpo" rows="3"
                        value={this.state.cuerpo}
                    ></textarea>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
            </>
        )
    }
}


export default PostsForm;