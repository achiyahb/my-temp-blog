import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            // height:450
        },
        media: {
            height: 140,
        },
        pargr:{
            textDecoration:"none"
        }
    }
));

const Posts = ({post}) => {
    const classes = useStyles();
    useEffect(()=>{
        setTimeout(()=>{
        },2000)
    },[])

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                    component="img"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.pargr}>
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Posts

