import {Box, Typography, Button} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';

const Discount = () => {
  return (
    <Box
        sx={{
        minHeight:'100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor:'#f8faf8',

        position:'relative',
        zIndex: 0,
        }}
        >
        <Typography 
            variant="h2"
            color="#2A2A2A"
            gutterBottom
            sx={{
            fontSize: '48px',
            fontWeight: 600,
            fontfamily: 'Roboto',
            }}
        >
            Claim Your Discount Now!
        </Typography>

        <Typography
            variant="body1"
            sx={{
            mb: 4,
            fontSize: '16px' , 
            fontfamily: "Roboto",
            fontWeight: 400,
            color: '#2A2A2A',
            // mx: '3rem',
            maxWidth: '600px',   
            }}
        >
            We’re offering a special launch discount of $99 per month for our fully featured analytics platform. Join now before we raise the price.
        </Typography>

       {/* here is the middle chiled box code */}

        <Box
            sx={{
            position: 'relative', // allows inner label to be absolutely positioned
            mt: 3,
            }}
        >
        {/* The floating label on top border */}
        <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#25CE8F',
            width:'35%',
            borderRadius:'2px',
            height:'40px',
            fontWeight: 400,
            fontfamily :'Roboto',
            fontSize: '18px',
            zIndex: 1,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
        }}
        >
        Special 30% discount
        </Box>

        {/* Main content box */}
        <Box
        sx={{
            width: { xs: '100%', sm: '450px', md: '500px' },  
            height: { xs: 'auto', sm: '450px', md: '400px' },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.09)',
            borderRadius: '2px',

            position: 'relative',
            zIndex: 0,
        }}
        >
            {/* This is a vector at left side */}
        <Box
        component="img"
        src="./src/assets/Vector3.png"
        alt="Top Left Decoration"
        sx={{
        position: 'absolute',
        top: 350,
        left: '-9%',
        width:'98',
        height: '50',
        zIndex: -1,
        }}
        />

        {/* This is a vector at righ side */}
        <Box
        component="img"
        src="./src/assets/vector1.png"
        alt="Top Left Decoration"
        sx={{
        position: 'absolute',
        top: 100,
        left: '93%',
        zIndex: -1,
        }}
        />

        <Typography
            variant="body1"
            sx={{
            mb: 1,
            fontSize:'24px' ,
            fontfamily: 'Roboto',
            fontWeight: 400,
            mt: -5,
            }}
        >
            Launch Plan
        </Typography>
        <Typography
            variant="body1"
            sx={{
            fontfamily: 'Roboto',
            fontSize: '32px',
            fontWeight: '500',
            }}
        >
            $99 per month
        </Typography>

        <Typography
            variant="body1"
            sx={{
            mb: 3,
            mt: -1,
            fontfamily: 'Roboto',
            fontSize: '16px',
            fontWeight: '400',
            color: '#9A9DA5',
            textDecorationLine: 'line-through',
            }}
        >
            $349 per month
        </Typography>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            textAlign:'center',
            gap: 1.5,
            mb: 4,
            }}
        >
            {[
            'Feature 1 Community Access',
            'Feature 2 All Past and Future Masterclasses',
            'Feature 3 Exclusive Content Drops',
            ].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: 'green', fontSize: '1.2rem', mr: 1 }} />
                <Typography
                variant="body1"
                sx={{
                    fontSize: '16px' ,
                    fontWeight: 400,
                    color: '#67677C',
                }}
                >
                {item}
                </Typography>
            </Box>
            ))}
        </Box>

        <Button
            variant="contained"
            color="primary"
            sx={{
                fontSize: '16px',
                fontWeight: 600,
                width: '100%',
                maxWidth: '300px',
                height: '48px',
                borderRadius: '2px',
            }}
        >
            Join Now
        </Button>
        </Box>
    </Box>
    {/* edn inner child box*/}


    </Box>
  )
}

export default Discount
