import React from 'react';
import LinkDuo from "../../shared/components/LinkDuo/LinkDuo";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';
import AddIcon from '@material-ui/icons/Add';
import BarChartIcon from '@material-ui/icons/BarChart';
import BorderLeftIcon from '@material-ui/icons/BorderLeft';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <LinkDuo to="http://localhost:8080">
    <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Visualizador" />
    </ListItem>
    </LinkDuo>
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar archivos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BorderLeftIcon />
      </ListItemIcon>
      <ListItemText primary="Absorbancia" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Concentración" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CompassCalibrationIcon />
      </ListItemIcon>
      <ListItemText primary="Calibrar" />
    </ListItem>
    <LinkDuo to="https://molabs-docs.herokuapp.com/">
    <ListItem button>
      <ListItemIcon>
        <CompassCalibrationIcon />
      </ListItemIcon>
      <ListItemText primary="Documentación" />
    </ListItem>
    </LinkDuo>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Archivos almacenados</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Este mes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Por rango de fechas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Todos los datos" />
    </ListItem>
  </div>
);