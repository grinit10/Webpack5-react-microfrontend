import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CounterAppOne = () => {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save app1</Button>
    </Box>
  );
}

export default CounterAppOne;