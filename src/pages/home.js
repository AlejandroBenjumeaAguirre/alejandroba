import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import PostsItems from '../components/postsItem';
import PostsForm from '../components/postsForm';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <PostsItems></PostsItems>
                <PostsForm></PostsForm>
                <Footer></Footer>
            </div>
        )
    }
}


export default Home;