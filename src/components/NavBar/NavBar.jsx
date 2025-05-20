import { AppBar, Button, Toolbar, Typography, Box, Container } from "@mui/material";
import Header from "../Header/Header.jsx";
import Countdown from "../Countdown/Countdown.jsx";
import About from "../About/About.jsx";
import Discount from "../Discount/Discount.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Qoute from "../Qoute/Qoute.jsx";
import Faqs from "../Faqs/Faqs.jsx";
import Qoute2 from "../Qoute2/Qoute2.jsx";


const NavBar = () => (
    <>
    <AppBar
        position="static" 
        sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        width: '100vw', 
        left: 0,
        }}
        >
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                px: { xs: 2, sm: 3, md: 4 },
                maxWidth: '100% !important', // Force full width
                // maxWidth: '100vw !important', // Force full width
                width: '100%',
            }}
            >
        <Toolbar
        disableGutters
        sx={{
            minHeight: { xs: '56px', sm: '64px' },
            px: { xs: 2, sm: 4 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        }}
        >
        
        <Typography
            variant="h6"
            sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            fontWeight: 700,
            color: 'black',
            }}
        >
            <img src='./src/assets/logo.png'  />
            BlockSight
        </Typography>

        
        <Box>
            <Button
            variant="contained"
            color="primary"
            sx={{
                fontSize: '0.9rem',
                fontWeight: 600,
                border: 2,
                px: 3,
            }}
            >
            Join Now
            </Button>
        </Box>
        </Toolbar>
        </Container>
    </AppBar> 
    <main>
        <Header />
        <Countdown />
        <About />
        <Discount />
        <Testimonial />
        <Qoute />
        <Faqs />
        <Qoute2 />
    </main>
    </>
);

export default NavBar;
