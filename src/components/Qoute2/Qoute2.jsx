import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

const Qoute2 = () => {
  // const theme = useTheme();
  const isMobile = useMediaQuery('');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: { xs: 6, sm: 8, md: 10 },
          position: 'relative',
          zIndex: 0,
        }}
      >
        {/* Top Left Decoration */}
        {isMobile ? '' :
        <Box
          component="img"
          src="./src/assets/Vector4.png"
          alt="Decoration Left"
          sx={{
            position: 'absolute',
            top: 10,
            left: '-5%',
            zIndex: -1,
            width: { xs: '80px', sm: '100px', md: '140px' },
          }}
        />
        }

        <Box
          sx={{
            position: 'relative',
            zIndex: 0,
            maxWidth: { xs: '100%', sm: '90%', md: '960px' },
            width: '100%',
            overflow: 'visible',
          }}
        >
          {/* Right Mid Decoration */}
          {isMobile ? '' :          
          <Box
            component="img"
            src="./src/assets/Vector4.png"
            alt="Decoration Right"
            sx={{
              position: 'absolute',
              top: '40%',
              right: '-5%',
              zIndex: -1,
              width: { xs: '80px', sm: '100px', md: '140px' },
            }}
          />
         }
          {/* Bottom Left Decoration */}
          {isMobile ? '' :
          <Box
            component="img"
            src="./src/assets/Vector3.png"
            alt="Decoration Bottom Left"
            sx={{
              position: 'absolute',
              top: '90%',
              left: '-6%',
              zIndex: -1,
              width: { xs: '80px', sm: '100px', md: '140px' },
            }}
          />
          }

          {/* Typography Box */}
          <Box
            sx={{
              // border:'2px solid red',
              boxShadow: '0 2px 4px rgba(178, 176, 176, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              // maxWidth: { xs: '100%', sm: '90%', md: '800px' },
              width: '100%',
              mx: 'auto',
              paddingTop:1,
              paddingBottom:1,
              backgroundColor: '#FFFFFF',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontfamily: 'Roboto',
                color: '#2A2A2A',
                fontWeight: 600,
                mb: 2,
              }}
            >
              What Are You Waiting For?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                fontfamily: 'Roboto',
                color: '#2A2A2A',
              }}
            >
              Join with the special launch discount before registration closes on Wednesday,
              April 6th @ 11:59 Central Time.
            </Typography>

            <Button
              variant="contained"
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                width: { xs: '100%', sm: '250px', md: '323px' },
                height: '56px',
                backgroundColor: '#0264E1',
                mt: 3,
                px: 3,
              }}
            >
              Join Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer Stripe */}
      <Box
        sx={{
          width: '100%',
          height: '70px',
          backgroundColor: '#072336',
        }}
      />
    </>
  );
};

export default Qoute2;
