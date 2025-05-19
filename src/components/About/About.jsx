import { Typography, Box, Container, Grid, Button } from "@mui/material";

const About = () => {
    return(
        <Box
            sx={{
            
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
                fontSize: { xs: '1rem', sm: '1.75rem', md: '2.5rem' },
                fontWeight: 700,
                fontfamily: 'roboto',
                mx:'3rem',
            }}
            >
            Your Edge In The Crypto Markets
            </Typography>
            <Typography
            variant="body1"
            sx={{
                mb: 4,
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            }}
            >
          See how to use our advanced blockchain analytics platform to cut through the noise and gain actionable insights into the crypto & NFT markets.
        </Typography>

        {/* grid here */}
        <Grid container spacing={2} alignItems="center" justifyContent="center" 
        
        sx={{ py: 1, px: 4, maxWidth: '100%', mx: 'auto',
            minHeight: '100vh',
         }}>

        {/* Section 1: */}
        <Grid item xs={12} md={6}>
            <Box
                sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
               
                maxWidth: { xs: '100%', md: '600px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // ALIGN TO START
                textAlign: 'left', // ENSURE TEXT IS LEFT-ALIGNED
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '1rem', sm: '1.75rem', md: '2.5rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    justifyContent:'felx-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                  Be Early
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  Discover hot Token & NFT projects as soon as they launch with our proprietary trending algorithm.
                </Typography>
                
            </Box>
        </Grid>

        {/* RIGHT: Image Section */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/frame.png"
                  alt="Quiz Section"
                  sx={{
                    width: '100%',
                    // height: 'auto',
                    // borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    // boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        {/* Section 2:  */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/frame.png"
                  alt="Quiz Section"
                  sx={{
                    width: '100%',
                    // height: 'auto',
                    // borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    // boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <Box
                sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
                maxWidth: { xs: '100%', md: '600px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // ALIGN TO START
                textAlign: 'left', // ENSURE TEXT IS LEFT-ALIGNED
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '1rem', sm: '1.75rem', md: '2.5rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    justifyContent:'felx-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                  Follow Big Money
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  Track activity of top labeled wallets on chain with our algorithmically curated segments to see what tokens they buy, hold, and sell.
                </Typography>
            </Box>
        </Grid>

        {/* Section 3: */}
        <Grid item xs={12} md={6}>
            <Box
                sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
                maxWidth: { xs: '100%', md: '600px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // ALIGN TO START
                textAlign: 'left', // ENSURE TEXT IS LEFT-ALIGNED
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '1rem', sm: '1.75rem', md: '2.5rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    justifyContent:'felx-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                    Gain Insight
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                    Access multiple analytics dashboards to track top crypto assets and every wallet on chain.
                </Typography>
                
            </Box>
        </Grid>

        {/* RIGHT: Image Section */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/frame.png"
                  alt="Quiz Section"
                  sx={{
                    width: '100%',
                    // height: 'auto',
                    // borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    // boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        {/* Section 4:  */}
        <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
                <Box
                  component="img"
                  src="./src/assets/frame.png"
                  alt="Quiz Section"
                  sx={{
                    width: '100%',
                    // height: 'auto',
                    // borderRadius: { xs: '12px', sm: '20px', md: '30px' },
                    objectFit: 'cover',
                    // boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
            </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <Box
                sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4 },
                maxWidth: { xs: '100%', md: '600px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // ALIGN TO START
                textAlign: 'left', // ENSURE TEXT IS LEFT-ALIGNED
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: ' black',
                    fontSize: { xs: '1rem', sm: '1.75rem', md: '2.5rem' },
                    fontWeight: 600,
                    lineHeight: 1.2,
                    justifyContent:'felx-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                    Never Miss an Opportunity
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                    Receive actionable alerts for on-chain activity. Customize them to track any wallet's activity for transactions, tokens, and NFTs.                </Typography>
            </Box>
        </Grid>

        </Grid>

    </Box>
    );
};

export default About
