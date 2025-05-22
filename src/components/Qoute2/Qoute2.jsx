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
        p: 10,
        position: 'relative',
      }}
    >
        {/* vector on right side Decoration */}
            <Box
                component="img"
                src="./src/assets/Vector4.png"
                alt="Bottom Right Decoration"
                sx={{
                position: 'absolute',
                top: 10,
                left: '-2%',
                // zIndex: -1,
                }}
            />


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

          position: 'relative',
          zIndex: 0,         
        }}
      > 
       
         {/* vector on right side Decoration */}
            <Box
                component="img"
                src="./src/assets/Vector4.png"
                alt="Bottom Right Decoration"
                sx={{
                position: 'absolute',
                top: 160,
                left: '93%',
                zIndex: -1,
                }}
            />

             {/* vector on left side Decoration */}
            <Box
                component="img"
                src="./src/assets/Vector3.png"
                alt="Bottom Right Decoration"
                sx={{
                position: 'absolute',
                top: 290,
                left: '-7%',
                zIndex: -1,
                }}
            />


        <Typography
          variant="h2"
          color="black"
          sx={{
            fontSize: '48px',
            fontfamily: 'Roboto',
            color: '#2A2A2A',
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
            fontSize: '24px',
            fontWeight: 400,
            fontfamily: 'Roboto',
            color: '#2A2A2A',
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
                width:'40%',
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
            backgroundColor:'#072336',

        }}
      />

    </>

  );
};

export default Qoute2;
