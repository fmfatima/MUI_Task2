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
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        py: { xs: 4, sm: 5, md: 6 },
        mt: 5,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            color="black"
            sx={{
              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.625rem' }, // Responsive size
              fontWeight: 700,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Hurry, your invitation expires soon!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', },
              maxWidth: '600px',
              color: '#444',
            }}
          >
            Blocksight registration will close on Wednesday, April 6th @ 11:59 Central Time.
          </Typography>

          <CountDownTimer />

          <Typography
            variant="body2"
            sx={{
              fontSize: {  xs: '0.875rem', sm: '0.9375rem', md: '1rem',  },
              maxWidth: '400px',
              color: '#666',
            }}
          >
            No one will be admitted after registration closes. When it opens again, we’ll raise the price.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: '0.85rem', sm: '1rem' },
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: { xs: 1.25, sm: 1.5 },
              borderRadius: '8px',
              mt: 2,
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
