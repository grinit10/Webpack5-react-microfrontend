import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const CounterAppOne = () => {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}