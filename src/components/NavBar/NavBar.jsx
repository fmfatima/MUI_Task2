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
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 3, md: 4, lg: 6 }, // Responsive padding (left and right)
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
        >
        {/* Logo */}
        <Box
            component="img"
            src="./src/assets/logo1.png"
            alt="Logo"
            sx={{
            height: { xs: 28, sm: 36, md: 40, lg: 44 }, // Responsive logo size
            objectFit: 'contain',
            }}
        />

        {/* Button */}
        <Box>
            <Button
            variant="contained"
            sx={{
                borderRadius: '3px',
                fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', },
                fontWeight: 600,
                width: { xs: '120px', sm: '140px', md: '160px', lg: '200px', },
                height: { xs: '40px', sm: '48px', md: '52px', lg: '56px', },
                backgroundColor: '#0264E1',
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
