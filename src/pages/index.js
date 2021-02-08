import React, {useContext} from 'react';
import Posts from '../components/Posts'
import {makeStyles} from "@material-ui/styles";
import PostsContext from "../context/PostsContext";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: '7rem'
        }
    }
));

const Main = () => {
    const classes = useStyles();
    const posts = useContext(PostsContext)


    return (
        <div className={classes.main}>
            <h1>
                ברוכים הבאים לבלוג הזמני שלי
            </h1>
            <h2>
                למה קראתי לו ככה? קראו בפוסט הראשון
            </h2>
            <div className={classes.main}>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default Main


