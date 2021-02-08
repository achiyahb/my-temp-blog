import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Post from "./Post";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        },
    }
));

const Posts = ({posts}) => {
    const classes = useStyles();
       return (
        <div className={classes.main}>
            <Grid container direction={'row'} className={classes.root} spacing={2}>
                {
                    posts.map((post, i) => {
                        return (
                            <Grid md={4}>
                                <Link to={`/${i}`} style={{ textDecoration: 'none' }}>
                                    <Post post={post} key={i}/>
                                </Link>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Posts

