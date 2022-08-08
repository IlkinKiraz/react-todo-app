import React from "react";
import { useTodo } from "../../context/TodoContext";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

let filtered = null;

function ContentList() {
  const { todos, toggleTodo, filter, deleteTodo } = useTodo();

  filtered = todos;

  if(filter !== "all"){
    filtered = todos.filter((todo) => filter === 'active' ? todo.completed === false && todo : todo.completed === true && todo);
  }

  return (
    <div>
      {filtered.map((todo) => (
        <ListItem key={todo.id}>
          <Checkbox color="success" checked={todo.completed === true ? true : false} onChange={() => toggleTodo(todo.id)} />

          <ListItemText id={todo.id} primary={todo.text} />
          

          <IconButton aria-label="delete" size="large" onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </div>
  );
}

export default ContentList;
