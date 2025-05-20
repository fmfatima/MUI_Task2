import { Box, Typography } from '@mui/material';

const Qoute = () => {
  return (
    <Box
      sx={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2, 
        p: 8,
      }}
    >
      <Box
        sx={{
          p: { xs: 4, sm: 6, md: 8 },
        //   border: '1px solid black',
          boxShadow: '0 2px 4px rgba(178, 176, 176, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            fontWeight: 600,
            mb: 2,
          }}
        >
          We don’t guarantee profits. This is only designed to teach you how to make flash loans.
        </Typography>
        <Typography
          variant="body1"
          color="black"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 500,
          }}
        >
          This class is designed to teach you how to create flash loans with smart contracts.
          This is for educational purposes only, and we do not guarantee any profit from attending the class.
        </Typography>
      </Box>
    </Box>
  );
};

export default Qoute;
