import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#0072ffcc',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

function DynamicTable() {
  const classes = useStyles();
  const tableData = {
    headers:["Region","Excess Baggage", "Document Print", "Lounge", "Upgrade", "Paid Seat","Empty Row", "Total"],
    ancillaryData: [
      {
          "region": "UAE",
          "excessBaggage": 300,
          "documentPrint": 450,
          "lounge": 175,
          "promotionalUpgrade": 200,
          "paidSeat": 58,
          "emptyRow": 4,
          "total":1187
      },
      {
          "region": "UK",
          "excessBaggage": 400,
          "documentPrint": 150,
          "lounge": 75,
          "promotionalUpgrade": 200,
          "paidSeat": 58,
          "emptyRow": 2,
          "total":885
      },
      {
          "region": "Europe",
          "excessBaggage": 620,
          "documentPrint": 300,
          "lounge": 100,
          "promotionalUpgrade": 200,
          "paidSeat": 58,
          "emptyRow": 1.25,
          "total":1279.25
      },
      {
          "region": "Asia",
          "excessBaggage": 220,
          "documentPrint": 700,
          "lounge": 60,
          "promotionalUpgrade": 600,
          "paidSeat": 12,
          "emptyRow": 0.5,
          "total":1592.5
      },
      {
          "region": "USA",
          "excessBaggage": 800,
          "documentPrint": 170,
          "lounge": 390,
          "promotionalUpgrade": 1200,
          "paidSeat": 25,
          "emptyRow": 0.5,
          "total":2585.5
      }
      ]
  }; 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableData.headers && tableData.headers.map((header, headerIndex) => (
                    <StyledTableCell key={headerIndex}>{header}</StyledTableCell>
                ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.ancillaryData.map((row, rowIndex) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.region}
              </StyledTableCell>
                            <StyledTableCell>{row.excessBaggage}</StyledTableCell>
                            <StyledTableCell>{row.documentPrint}</StyledTableCell>
                            <StyledTableCell>{row.lounge}</StyledTableCell>
                            <StyledTableCell>{row.promotionalUpgrade}</StyledTableCell>
                            <StyledTableCell>{row.paidSeat}</StyledTableCell>
                            <StyledTableCell>{row.emptyRow}</StyledTableCell>
                            <StyledTableCell>{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;