import { Box, Typography } from '@mui/material';

const Qoute = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 0,
          width: '100%',
          maxWidth: { xs: '100%', sm: '95%', md: '85%', lg: '930px', xl: '930px', },
          mx: 'auto',
        }}
      >
        {/* Top Left Decoration */}
      <Box
        component="img"
        src="./src/assets/qoute1.png"
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
        src="./src/assets/qoute1.png"
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

        {/* Quote Content Box */}
        <Box
          sx={{
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 4, sm: 5, md: 6 },
            boxShadow: '2px 4px 12px rgba(178, 176, 176, 0.35)',
            backgroundColor: 'white',
            borderRadius: 2,
            textAlign: 'center',
            // width: '100%',
            mx: 'auto',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
              fontWeight: 600,
              fontfamily: 'Roboto',
              mb: 2,
              color: '#2A2A2A',
              lineHeight: 1.4,
            }}
          >
            We don’t guarantee profits. This is only designed to teach you how to make flash loans.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '17px' },
              fontWeight: 400,
              fontfamily: 'Roboto',
              color: '#747474',
              lineHeight: 1.6,
            }}
          >
            This class is designed to teach you how to create flash loans with smart contracts.
            This is for educational purposes only, and we do not guarantee any profit from attending the class.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Qoute;
