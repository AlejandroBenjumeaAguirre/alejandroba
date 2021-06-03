import React from 'react';

import './styles/postsItem.css';


class PostsItems extends React.Component {
   
    render() {
        return (
            <div className="contenedor">
                <div className="card posts">
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Abrir Post</a>
                </div>
            </div>
            </div>
            
        )
    }
}

export default PostsItems;