import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import Button from '@mui/material/Button';

export default function CriteriaTable(props) {

  const data_columns = [
    { name: 'Criteria', attribute: 'criterionName' },
    { name: 'Weight (%)', attribute: 'weight' },

  ];


  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            {data_columns.map((column, idx) => (
              idx === 0 ?
                <TableCell key={column.name}>{column.name}</TableCell>
                :
                <TableCell align="center" key={column.name}>{column.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((row, idx) => (
            <TableRow key={row.criterionName}>
              <TableCell component="th" scope="row">
                {row.criterionName}
              </TableCell>
              <TableCell align="center">{row.weight}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="secondary"
                  onClick={() => props.removeRow(idx)}>   REMOVE </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}