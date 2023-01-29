import { CssBaseline, Box, Container} from "@mui/material";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => (
  <CssBaseline>
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Container fixed>
        <CounterAppOne></CounterAppOne>
        <CounterAppTwo></CounterAppTwo>
      </Container>
    </Box>
  </CssBaseline>
);
