import { Box, Typography, Button } from '@mui/material';

const Qoute2 = () => {
  return (
    <>
    <Box
      sx={{
        // height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2, 
        p: 8,
      }}
    >
      <Box
        sx={{
          p: { xs: 4, sm: 6, md: 10 },
        //   border: '1px solid black',
          boxShadow: '0 2px 4px rgba(178, 176, 176, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          height:'auto',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '3rem' },
            fontWeight: 600,
            mb: 2,
          }}
        >
          What Are you Waiting For?
        </Typography>
        <Typography
          variant="body1"
          color="black"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.5rem' },
            fontWeight: 500,
          }}
        >
          Join with the special launch discount before registration closes on 
          Wednesday Wednesday, April 6th @ 11:59 Central Time.
        </Typography>
        <Button
            variant="contained"
            color="primary"
            sx={{
                fontSize: '1rem',
                fontWeight: 600,
                width:'25%',
                height:'50px',
                mt:3,
                px: 3,
            }}
            >
            Join Now
        </Button>
      </Box>
    </Box>
    <Box
        sx={{
            width:'100%',
            height:'70px',
            backgroundColor:'#0b016f',

        }}
      />

    </>

  );
};

export default Qoute2;
