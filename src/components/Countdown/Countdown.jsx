import { Box, Typography, Button, Container } from '@mui/material';
import CountDownTimer from './CountdownTimer.jsx';

const Countdown = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
  
      }}
    >
      


      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            color="black"
            sx={{
              fontSize: '48px', // Responsive size
              fontWeight: 600,
              fontfamily: "Roboto",
              color: '#2A2A2A',
              marginBottom: 5,
            }}
          >
            Hurry, your invitation expires soon!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '24px',
              maxWidth: '800px',
              fontfamily: "Roboto",
              color: '#2A2A2A',
            }}
          >
            Blocksight registration will close onBlocksight registration will close on Wednesday, April 6th @ 11:59 Central Time.
          </Typography>

          <CountDownTimer />

          <Typography
            variant="body2"
            sx={{
              maxWidth: '500px',
              fontSize: '16px',
              fontWeight: 400,
              fontfamily: "Roboto",
              color: '#5E5E62',
            }}
          >
            No one will be admitted after registration closes. When it opens again, we’ll raise the price.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '323px',
              height: ' 50px',
              fontSize: '14px',
              fontWeight: 400,
              borderRadius: '2px',
              mt: 4,
            }}
          >
            Hold your Spot Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Countdown;
