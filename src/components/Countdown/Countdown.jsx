import { Box, Typography, Button, Container } from '@mui/material';
import CountDownTimer from './CountdownTimer.jsx';

const Countdown = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        px: { xs: 2, sm: 4, md: 6 }, 
        backgroundColor: '#f9f9f9',
        width: '100%',
        mt: 3,
        mb: 3,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt:4,
          }}
        >
          <Typography
            variant="h2"
            color="black"
            gutterBottom
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem' },
              fontWeight: 600,
              fontFamily: 'Roboto, sans-serif',
              mb: 2,
            }}
          >
            Hurry, your invitation expires soon!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            Blocksight registration will close on Wednesday, April 6th @ 11:59 Central Time.
          </Typography>

          <CountDownTimer />

          <Typography
            variant="body1"
            sx={{
              my: 4,
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.95rem' },
              color: '#555',
            }}
          >
            No one will be admitted after registration closes. When it opens again, we’ll raise the price.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.9rem' },
              fontWeight: 600,
              px: 4,
              py: 1,
              borderRadius: '8px',
              mb: 3,
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
