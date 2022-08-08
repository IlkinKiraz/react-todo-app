import Header from "./components/Header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Content from "./components/Content/Content";
import ContentFooter from "./components/ContentFooter/ContentFooter";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div style={{
      background:
        "radial-gradient(circle, rgba(220,137,173,0.4262838924632353) 0%, rgba(106,154,210,0.41507941067051823) 100%)",
      zIndex: -1,
      height: "245px",
      borderRadius:10
    }}>
    
      <TodoProvider>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Content />
            </Grid>
            <Grid item xs={12}>
              <ContentFooter />
            </Grid>
          </Grid>
        </Box>
      </TodoProvider>
    </div>
  );
}

export default App;
