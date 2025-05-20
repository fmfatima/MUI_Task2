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
          maxWidth: '75%',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          gutterBottom
          sx={{
            fontSize: {xs: '2rem', sm: '2.5rem',md: '4rem'},
            fontWeight: 600,
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
            fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.75rem' },
          }}
        >
          See how with my brand new blockchain analytics platform, Blocksight.
        </Typography>

        <Box
          component="img"
          src="./src/assets/about.png"
          alt="Header"
          sx={{
            // width: { xs: '100%', sm: '80%', md: '28.875rem' },
            width: "786px",
            height: '449px',
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
