import { connect } from 'react-redux';
import { marcaAction } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


class Marca extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(marcaAction.getMarca());
    }
    
      handleChange = event => {
        this.setState({
          anchor: event.target.value,
        });
      };


      handleClick = (event, id) => {
        console.log(id);
        const { dispatch } = this.props;
        dispatch(marcaAction.deleteMarcaById(id))
      };
    
   render() {
     const { classes } = this.props;
     const { marcas } = this.props.marcas;
     
      return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                      <Typography>{'Marca'}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                            
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                      <Button variant="contained" color="primary" className={classes.button} component='a' href="/agregar-marca">
                        Add Marca
                      </Button>      
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                          <TableRow>
                              <TableCell>Marca</TableCell>
                              <TableCell >Descripcion</TableCell>
                              <TableCell >Usuario</TableCell>
                              <TableCell>Action</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {marcas.map(n => {
return (
<TableRow key={n.marca}>
<TableCell component="th" scope="row">
{n.marca}
</TableCell>
<TableCell >{n.descrip}</TableCell>
<TableCell >{n.usuario}</TableCell>
<TableCell>
<IconButton className={classes.button} aria-label="Editar" component='a' href={`/editar-marca/${n.marca}`}>
<EditIcon />
</IconButton>
<IconButton className={classes.button} aria-label="Eliminar" onClick={(event) => this.handleClick(event, n.marca)}>
<DeleteIcon />
</IconButton>
</TableCell>
</TableRow>
);
})}
                          </TableBody>
                      </Table>
                  </Paper>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}


Marca.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
  return {
      marcas : state.marca
  };
}

const connectedMarcaPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Marca)));

export { connectedMarcaPage as Marca };