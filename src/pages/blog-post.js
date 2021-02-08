import React, {useEffect,useContext,useState} from "react";
import {useParams} from "react-router-dom";
import PostsContext from "../context/PostsContext";
import Spiner from "../components/Spiner";

function createMarkup(item) {
    return {__html:item};
}


const BlogPost = () => {
    let { postId } = useParams();
    const [hasData,setHasData]= useState(false)
    const [post,setPost] = useState({})
    let posts = useContext(PostsContext)
    useEffect(()=>{
        let post = posts[postId]
        if(post){
            setHasData(true)
            setPost(post)
        }
    },[posts])

    return (
        <div>
            {
                hasData?
                    <div>
                        <h1>{post.title}</h1>
                        <h3>{post.description}</h3>
                        <div dangerouslySetInnerHTML={createMarkup(post.text)} />
                    </div>:
                    <Spiner/>
            }

        </div>
    );
}
export default BlogPost;
