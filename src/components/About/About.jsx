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
            mt: 10,
            mb: 3,
          }}
        >
            <Typography 
            variant="h2"
            color="black"
            gutterBottom
            sx={{
                fontSize: '48px' ,
                fontWeight: 600,
                fontfamily: 'Roboto',
                color: '#2A2A2A',
                mx:'3rem',
            }}
            >
            Your Edge In The Crypto Markets
            </Typography>
            <Typography
            variant="body1"
            sx={{
                mb: 4,
                fontSize: '16px',
                fontfamily: 'Roboto',
                fontWeight: 400,
                color: '#747474', 
                maxWidth:'700px',
            }}
            >
          See how to use our advanced blockchain analytics platform to cut through the noise and gain actionable insights into the crypto & NFT markets.
        </Typography>

        {/* grid here */}
        <Grid container spacing={2} alignItems="center" justifyContent="center" 
        
        sx={{ py: 1, px: 4, maxWidth: '100%', mx: 'auto',
            minHeight: '100vh',
            marginBottom: 8,
         }}>

        {/* Section 1: */}
        <Grid item xs={12} md={6}>
            <Box
                sx={{
                mx:{md: 20},
                maxWidth: '400px',
                height: '100%',
                display: 'flex',
                justifyContent:'center',
                flexDirection: 'column',
                alignItems: 'flex-start', 
                textAlign: 'start',

                position: 'relative',  
                zIndex: 0,
                }}
            >
                {/* This is a vector at left side */}
                <Box
                component="img"
                src="./src/assets/Vector4.png"
                alt="Top Left Decoration"
                sx={{
                position: 'absolute',
                top: 160,
                left: '-16.5%',
                zIndex: 0,
                }}
                />

                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: '#2A2A2A',
                    fontfamily: 'Roboto',
                    fontSize:'32px' ,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    justifyContent:'felx-start',
                    alignItems: 'start',
                    mb: 2,
                  }}
                >
                  Be Early
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: '1rem' ,
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
                mx:{md: 20},
                // px: { xs: 2, sm: 3, md: 4 },
                // py: { xs: 3, sm: 4 },
                // border:'1px solid black',
                maxWidth: '500px',
                height: '100%',
                display: 'flex',
                justifyContent:'center',
                flexDirection: 'column',
                alignItems: 'flex-start', 
                textAlign: 'start',
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: '#2A2A2A',
                    fontSize: '32px' ,
                    fontWeight: 600,
                    // lineHeight: 1.2,
                    justifyContent:'flex-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                  Follow Big Money
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize:  '1rem' ,
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
                mx:{md: 20},
                maxWidth: '400px',
                height: '100%',
                display: 'flex',
                justifyContent:'center',
                flexDirection: 'column',
                alignItems: 'flex-start', 
                textAlign: 'start',
                }}
            >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    fontfamily: 'Roboto',
                    fontSize:'32px' ,
                    fontWeight: 600,
                    color: '#2A2A2A',
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
                    fontSize: '1rem',
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
                px: { xs: 2, sm: 3, md: 4 },
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
                mx:{md: 20},
                maxWidth: '400px',
                height: '100%',
                display: 'flex',
                justifyContent:'center',
                flexDirection: 'column',
                alignItems: 'flex-start', 
                textAlign: 'start',

                position: 'relative',
                }}
            >
                 {/* This is a vector at right side */}
                <Box
                component="img"
                src="./src/assets/Vector.png"
                alt="Top Left Decoration"
                sx={{
                position: 'absolute',
                top: 230,
                right: '-48.5%',
                zIndex: 0,
                }}
                />
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ 
                    color: '#2A2A2A',
                    fontSize: '32px' ,
                    fontWeight: 600,
                    // lineHeight: 1.2,
                    justifyContent:'flex-start',
                    alignItems: 'start',
                    mb: { xs: 1, sm: 2 }
                  }}
                >
                    Never Miss an Opportunity
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    fontSize: '1rem' ,
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
