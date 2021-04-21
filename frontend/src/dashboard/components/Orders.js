import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2020', 'canal 9 después de fertilizar', 'Cartago', 'IoT-1', 8),
  createData(1, '16 Jun, 2020', 'canal 9 antes de fertilizar', 'Cartago', 'IoT-1', 16),
  createData(2, '16 Jun, 2020', 'canal 4 1 de julio con estandard', 'Cartago', 'IoT-2', 10),
  createData(3, '16 Jul, 2020', 'canal 6 1 de julio con estandard', 'Cartago', 'IoT-3', 12),
  createData(4, '15 Jul, 2020', 'canal 1 1 de julio con estandard', 'Cartago', 'IoT-4', 14),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Archivos recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre de Archivo</TableCell>
            <TableCell>Ubicación</TableCell>
            <TableCell>Dispositivo</TableCell>
            <TableCell align="right">Frecuencia de envío de datos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Buscar mas archivos
        </Link>
      </div>
    </React.Fragment>
  );
}