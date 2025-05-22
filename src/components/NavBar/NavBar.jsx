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
        // color: 'black',
        boxShadow: 'none',
        width: '100%', 
        padding: 0,
        }}
        >
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                paddingTop: 1,
            }}
        >
        <Toolbar
        disableGutters
        sx={{
            minHeight: { xs: '56px', sm: '64px' },
            // px: { xs: 2, sm: 4 },
            paddingLeft:3,
            paddingRight:3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // width: '100%',
        }}
        >
        
        {/* <Typography> */}
            <img src='./src/assets/logo1.png'  />
        {/* </Typography> */}

        
        <Box>
            <Button
            variant="contained"
            color="primary"
            sx={{
                borderRadius:'3px',
                fontSize: '0.9rem',
                fontWeight: 500,
                width:'200px',
                height: '50px',
                // border: 2,
                // px: 3,
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
