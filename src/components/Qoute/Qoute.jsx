import { Box, Typography } from '@mui/material';

const Qoute = () => {
  return (
    <Box
      sx={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // px: 2, 
        p: 2,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      
      <Box
        sx={{
          p: { xs: 4, sm: 6, md: 8 },
        //   border: '1px solid black',
          boxShadow: '2px 4px 12px rgba(178, 176, 176, 0.35)',
          display: 'flex',
        //   backgroundColor: 'white',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          mx: 'auto',

        position: 'relative',       
        zIndex: 0,
        }}
      >
        {/* Add rectangle to the top left and right bottom of the BOX */}
      {/* Top Left Decoration */}
      <Box
        component="img"
        src="./src/assets/recImg.png"
        alt="Top Left Decoration"
        sx={{
          position: 'absolute',
          top: -10,
          left: -10,
          zIndex: -1,
          width: '277',
          height: '149',
        }}
      />

      {/* Bottom Right Decoration */}
      <Box
        component="img"
        src="./src/assets/recImg.png"
        alt="Bottom Right Decoration"
        sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          zIndex: -1,
        width: '277',
          height: '149',
        }}
      />


        <Typography
          variant="h2"
          color="#2A2A2A"
          sx={{
            fontSize: '32px',
            fontfamily: 'Roboto',
            fontWeight: 600,
            mb: 2,
          }}
        >
          We don’t guarantee profits. This is only designed to teach you how to make flash loans.
        </Typography>
        <Typography
          variant="body1"
          color="#747474"
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            fontfamily: 'Roboto',
            
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
