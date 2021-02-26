import React , {useEffect,useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from "./pages"
import BlogPost from "./pages/blog-post"
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import {PostsProvider} from "./context/PostsContext";
import firebaseApi from "./firebase/firebaseApi";

const App = () => {
    const [posts, setPosts]= useState([])

    useEffect(()=>{
        getPostsData()
    },[])

    function getPostsData(){
        const uid = 'LzAYf67JBhcs64hpJDI9TvjKQ4n1'
        let collections = [{name:'users',id:uid},{name:'posts'}]
        firebaseApi.getData(collections)
            .then(res=>{
                if(res){
                    let postsObj = res
                    let dbPosts = []
                    let index = 0
                    for (const [key, post] of Object.entries(postsObj)) {
                        post.key = key
                        post.index = index
                        dbPosts.push(post)
                        index++
                    }
                    setPosts(dbPosts)
                }
            })
    }


    return (
        <div
        dir="rtl"
        >
            <Header/>
            <PostsProvider value={posts}>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/"><Products/></Route>
                        <Route path="/:postId"><BlogPost/></Route>
                    </Switch>
                </Router>
            </Container>
            </PostsProvider>
        </div>

    );
}

export default App;
