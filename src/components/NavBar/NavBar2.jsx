import { useMediaQuery, Typography } from '@mui/material';

const ResponsiveText = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Typography variant="h4">
      {isMobile ? 'Mobile View' : 'Desktop View'}
      
    </Typography>
  );
};

export default ResponsiveText;