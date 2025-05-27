import { Typography, Box } from "@mui/material";


const Header = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '75%',
          position: 'relative',   
        }}
      >

        {/* This is a vector at left side */}
        <Box
        component="img"
        src="./src/assets/vector1.png"
        alt="Top Left Decoration"
        sx={{
          position: 'absolute',
          top: 160,
          left: '-16.5%',
          zIndex: 0,
        }}
        />

        {/* This is a vector at right side */}
        <Box
        component="img"
        src="./src/assets/Vector.png"
        alt="Top Left Decoration"
        sx={{
          position: 'absolute',
          top: '70%',
          right: '-16.5%',
          zIndex: 0,
        }}
        />

        {/* This is an ellipse at the typography */}
        <Box
        component="img"
        src="./src/assets/Ellipse.png"
        alt="Top Left Decoration"
        sx={{
          position: 'absolute',
          top: 120,
          left: '87%',
          zIndex: 0,
        }}
        />
        <Typography
          variant="h2"

          gutterBottom
          sx={{
            fontSize: {xs: '2rem', sm: '2.5rem',md: '4rem'},
            fontWeight: 600,
            fontfamily: "Roboto",
            color:  '#2A2A2A',
            mx:'3rem',
          }}
        >
          Find Profitable Crypto Opportunities before Anyone Else!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            // mb: 6,
            fontfamily: "Roboto",
            fontWeight:400,
            fontSize: '24px',
            color:'#747474',
          }}
        >
          See how with my brand new blockchain analytics platform, Blocksight.
        </Typography>


      {/* Add rectangle to the top left and right bottom of the image */}
      <Box
      sx={{
        position: 'relative',       
        width: 'fit-content',
        mx: 'auto',                 
      }}
      >
      {/* Top Left Decoration */}
      <Box
        component="img"
        src="./src/assets/recImg.png"
        alt="Top Left Decoration"
        sx={{
          position: 'absolute',
          top: -15,
          left: -15,
          zIndex: -1,
        }}
      />

      {/* Bottom Right Decoration */}
      <Box
        component="img"
        src="./src/assets/recImg.png"
        alt="Bottom Right Decoration"
        sx={{
          position: 'absolute',
          bottom: -15,
          right: -15,
          zIndex: -1,
        }}
      />

      {/* Actual Main Image */}
      <Box
        component="img"
        src="./src/assets/about.png"
        alt="Header"
        sx={{
          width: { xs: '100%', sm: '90%', md: '786px' },
          height: 'auto',
          maxHeight: { xs: '400px', md: '449px' },
          borderRadius: '10px',
          objectFit: 'contain',
          display: 'block',
          zIndex: 1,
          marginBottom: 10,
          marginTop: 10,
        }}
      />
      </Box>

      </Box>
    </Box>
  );
};

export default Header;
