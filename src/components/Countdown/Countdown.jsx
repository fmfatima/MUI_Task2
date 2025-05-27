import { Box, Typography, Button, Container } from '@mui/material';
import CountDownTimer from './CountdownTimer.jsx';

const Countdown = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', sm: '60vh', md: '70vh', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 6 }, // padding on smaller screens
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
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 600,
              fontfamily: 'Roboto',
              color: '#2A2A2A',
            }}
          >
            Hurry, your invitation expires soon!
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem', lg: '1.5rem' },
              maxWidth: '800px',
              fontfamily: 'Roboto',
              color: '#2A2A2A',
            }}
          >
            Blocksight registration will close on Wednesday, April 6th @ 11:59 Central Time.
          </Typography>

          {/* Countdown Timer */}
          <CountDownTimer />

          {/* Disclaimer */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              maxWidth: '500px',
              fontWeight: 400,
              fontfamily: 'Roboto',
              color: '#5E5E62',
            }}
          >
            No one will be admitted after registration closes. When it opens again, we’ll raise the price.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              width: { xs: '100%', sm: '260px', md: '323px' },
              height: '50px',
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 500,
              borderRadius: '4px',
              mt: { xs: 2, sm: 3 },
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
