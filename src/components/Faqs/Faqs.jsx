import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
  return (
    <Box
      sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'start',
          px: 2,
          p: 8,
      }}
    >

        <Typography
          variant="h2"
          color="#2A2A2A"
          sx={{
            fontSize: '48px',
            fontWeight: 600,
            fontfamily: 'Roboto',
            mb: 4,
          }}
        >
          What Our Users are Saying
        </Typography>

        {/* FAQs Section */}
        <Box
         sx={{
                maxWidth:'900px',
                width: '100%',
                position: 'relative',
            }}
        >
            {/* vector on right side Decoration */}
            <Box
                component="img"
                src="./src/assets/FaqVector.png"
                alt="Bottom Right Decoration"
                sx={{
                position: 'absolute',
                left: '123.7%',
                }}
            />

          <Accordion
            sx={{
              width: '970px',
              boxShadow: '0 4px 4px rgba(114, 113, 113, 0.07)',
              border: 'none',
              '&::before': {
                display: 'none',
              },
              mb: 2,
              fontFamily: 'Roboto',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ width: '32px', height: '32px', color: '#2187D0' }} />}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#2A2A2A',
                  marginLeft: 3,
                }}
              >
                What chains do you support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'start',
                  color: '#747474',
                  marginLeft: 3,
                }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion
            sx={{
              width: '970px',
              boxShadow: '0 4px 4px rgba(114, 113, 113, 0.07)',
              border: 'none',
              '&::before': {
                display: 'none',
              },
              mb: 2,
              fontFamily: 'Roboto',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{width: '32px', height: '32px', color: '#2187D0'}}/>}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#2A2A2A',
                marginLeft: 3, 
              }}
              >
            Can I pay in crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
               fontSize: '16px',
                fontWeight:400,
                display:'flex',
                justifyContent:'start',
                alignItems:'start',
                color: '#747474',
                marginLeft:3, 
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
                
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: '970px',
              boxShadow: '0 4px 4px rgba(114, 113, 113, 0.07)',
              border: 'none',
              '&::before': {
                display: 'none',
              },
              mb: 2,
              fontFamily: 'Roboto',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{width: '32px', height: '32px', color: '#2187D0'}}/>}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#2A2A2A',
                marginLeft: 3, 
              }}
              >
            Will You raise the price?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '16px',
                fontWeight:400,
                display:'flex',
                justifyContent:'start',
                alignItems:'start',
                color: '#747474',
                marginLeft:3, 
                marginTop: -2,
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </Box>
      </Box>
  );
};

export default Faqs;
