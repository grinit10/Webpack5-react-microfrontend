import { CounterAppTwo } from "./components/CounterAppTwo";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const App = () => (
  <CssBaseline>
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Container fixed>
        <Grid container direction={"column"}>
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            App 2
          </Box>
          <CounterAppTwo></CounterAppTwo>
        </Grid>
      </Container>
    </Box>
  </CssBaseline>
);

export default App;
