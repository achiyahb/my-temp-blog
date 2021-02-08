import React from "react"
import {AppBar, Grid, Toolbar} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
        typographyStyles: {
            flex: 1
        },
        Toolbar: {
            background: "primary",
        },
        avatar:{
            left:'2.0rem',
            top:'2.0rem',
            cursor:'pointer',
            position:'absolute'
        }
    }
));

const Header = () =>{
    const classes = useStyles();
    return(

    <header
        dir="rtl"

        style={{

        }}
    >
        <AppBar position="static">
            <Toolbar
                className={classes.Toolbar}
            >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0.90rem 1.0875rem`,
            }}
        >
            <Grid container >
                <Grid item>
                    <h1>
                        הבלוג הזמני שלי
                    </h1>
                </Grid>
            </Grid>
        </div>
            </Toolbar>
        </AppBar>
    </header>
)
}





export default Header
//
// <Link
// to="/"
// style={{
//     color: `white`,
//         textDecoration: `none`,
//         marginRight: `2rem`
// }}
// >
// {siteTitle}
// </Link>
