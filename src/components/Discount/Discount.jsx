import {Box, Typography, Button} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
        mt: 3,
        mb: 3,
        p: 5,
        backgroundColor:'#f8faf8'
        }}
        >
        <Typography 
            variant="h2"
            color="black"
            gutterBottom
            sx={{
            fontSize: '3rem',
            fontWeight: 700,
            // fontFamily: 'Roboto',
            }}
        >
            Claim Your Discount Now!
        </Typography>

        <Typography
            variant="body1"
            sx={{
            mb: 4,
            fontSize: '1rem' , 
            mx: '3rem',
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
            mb: 3,
            }}
        >
        {/* The floating label on top border */}
        <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#2acb6e',
            // px: 2,
            // py: 0.5,
            width:'35%',
            borderRadius:'4px',
            height:'40px',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            zIndex: 1,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
        >
        Special 30% discount
        </Box>

        {/* Main content box */}
        <Box
        sx={{
            width: { xs: '100%', sm: '450px', md: '550px' },  
            height: { xs: 'auto', sm: '450px', md: '490px' },
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.09)',
            borderRadius: '2px',
            p: 5,
        }}
        >
        <Typography
            variant="body1"
            sx={{
            mb: 1,
            fontSize:  '1.5rem' ,
            }}
        >
            Launch Plan
        </Typography>
        <Typography
            variant="body1"
            sx={{
            mb: 4,
            fontSize: '2rem',
            fontWeight: '600',
            }}
        >
            $99 per month
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
            'Community Access',
            'All Past and Future Masterclasses',
            'Exclusive Content Drops',
            ].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: 'green', fontSize: '1.2rem', mr: 1 }} />
                <Typography
                variant="body1"
                sx={{
                    fontSize: '1.3rem' ,
                    fontWeight: 500,
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
                fontSize: '1rem',
                fontWeight: 600,
                width: '100%',
                maxWidth: '300px',
                height: '48px',
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
