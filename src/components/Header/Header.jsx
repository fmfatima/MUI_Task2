import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        mt:4,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
            fontWeight: 700,
            fontfamily: 'roboto',
            mx:'3rem',
          }}
        >
          Find Profitable Crypto Opportunities before Anyone Else!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
          }}
        >
          See how with my brand new blockchain analytics platform, Blocksight.
        </Typography>

        <Box
          component="img"
          src="./src/assets/about.png"
          alt="Header"
          sx={{
            width: { xs: '100%', sm: '80%', md: '28.875rem' },
            height: 'auto',
            maxHeight: { xs: '400px', md: '32.5rem' },
            borderRadius: '20px',
            objectFit: 'contain',
            mx: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
