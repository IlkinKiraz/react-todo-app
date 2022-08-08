import React from "react";
import List from "@mui/material/List";
import ContendList from "./ContentList";

function Content() {
  return (
    <div>
      <List
        dense
        sx={{
          width: "50%",
          m: "auto",
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >

        <ContendList />
        
      </List>
    </div>
  );
}

export default Content;
