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
        }}
        >
            <Typography 
            variant="h2"
            color="black"
            gutterBottom
            sx={{
                fontSize: { xs: '1rem', sm: '1.75rem', md: '2.75rem' },
                fontWeight: 700,
                fontfamily: 'roboto',
                mx:'3rem',
            }}
            >
            Claim Your Discount Now!
            </Typography>
            <Typography
            variant="body1"
            sx={{
                mb: 4,
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
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
            px: 2,
            py: 0.5,
            // border: '1px solid #ccc',
            // borderRadius: '16px',
            fontWeight: 600,
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
            zIndex: 1,
        }}
        >
        Special 30% discount
        </Box>

        {/* Main content box */}
        <Box
        sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.09)',
            borderRadius: '2px',
            p: 5,
        }}
        >
        <Typography
            variant="body1"
            sx={{
            mb: 1,
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1.3rem' },
            }}
        >
            Launch Plan
        </Typography>
        <Typography
            variant="body1"
            sx={{
            mb: 4,
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1.3rem' },
            fontWeight: '500',
            }}
        >
            $99 per month
        </Typography>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
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
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1.3rem' },
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
            width: '90%',
            fontSize: '0.9rem',
            fontWeight: 600,
            px: 3,
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
