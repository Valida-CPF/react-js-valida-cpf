import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Item {
    items: Array<{
        Nome: String,
        Sobrenome: String,
        CPF: String,
        CPF_CHECK: String,
        status: String
    }>
}

export function MyTable({ items }: Item) {

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:'#a8dadc'}}>Nome </TableCell>
            <TableCell align="center" style={{backgroundColor:'#a8dadc'}}>Sobrenome</TableCell>
            <TableCell align="center" style={{backgroundColor:'#a8dadc'}}>CPF do arquivo base</TableCell>
            <TableCell align="center" style={{backgroundColor:'#a8dadc'}}>CPF verificado</TableCell>
            <TableCell align="center" style={{backgroundColor:'#a8dadc'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow>
              <TableCell component="th" scope="row">
                {item.Nome}
              </TableCell>
              <TableCell align="center">{item.Sobrenome}</TableCell>
              <TableCell align="center">{item.CPF}</TableCell>
              {(() => {
                switch(item.status) {
                    case "Correto": return <TableCell align="center" style={{backgroundColor:'white', color: 'green',}}>{item.CPF_CHECK}</TableCell>;
                    case "Errado": return <TableCell color="red" align="center" style={{backgroundColor:'white', color: 'red',}}>{item.CPF_CHECK}</TableCell>;
                }
                })()}
              <TableCell align="center">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
