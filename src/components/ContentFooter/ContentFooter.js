import React from "react";
import { Button, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useTodo } from "../../context/TodoContext";


function ContentFooter() {

  const {filter, setFilter, clearComplated } = useTodo();

  return (
    <div>


        <Table color="success" sx={{ width: "50%", m: "auto", borderRadius:1, alignItems:'center' }}>
          <TableBody>
            <TableRow>
              <TableCell align="center"><Button id={"labelId"} onClick={() => setFilter("all")} selected={filter === "all" ? true : false}><i>all</i></Button>  </TableCell>
              <TableCell align="center"><Button id={"labelId"} onClick={() => setFilter("active")} selected={filter === "active" ? true : false}><i>active</i></Button>  </TableCell>
              <TableCell align="center"><Button id={"labelId"} onClick={() => setFilter("completed")} selected={filter === "completed" ? true : false}><i>completed</i></Button> </TableCell>
              
              <TableCell align="center"><Button id={"labelId"} onClick={() => clearComplated()}><i><b>Clear completed</b></i></Button>  </TableCell>
            </TableRow>
          </TableBody>
        </Table>

    </div>
  );
}

export default ContentFooter;
