import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './Login.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

export default class UserProfile extends React.Component {
    render(){
    return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                    <Typography variant="h2">Registration</Typography>
                        <form className="">
                            <div className="form">
                                <FormControl  margin="normal" required fullWidth> 
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">  
                                            <TextField id = "icongrid" label="Full Name"/>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="email" label = "email"/>
                                        </Grid>
                                    </Grid>  
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="Password" label = "Password"/> 
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="Confirm password" label = "Confirm Password"/> 
                                        </Grid>
                                    </Grid>
                                </FormControl>
                                <br/><br/>
                                <Link to="/Drawer">
                                    <Button className="button"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                    >
                                        Save
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}