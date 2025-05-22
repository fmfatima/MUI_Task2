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
                border: 'none',
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
                bottom: -10,
                left: '123.7%',
                // zIndex: -1,
                }}
            />

          <Accordion
            sx={{
                // p:2,
                // maxWidth:'900px',
                border: 'none',
                fontfamily: 'Roboto',
                mb: 2,
                '&::before': { display: 'none' }, 
                // width: '100%',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#2A2A2A'
              }}
              >
              What chains do you support?</Typography>
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
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
                // p:2,
                border: 'none',
                mb: 2,
                '&::before': { display: 'none' }, // remove default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '20px',
                fontWeight:500,
                color: '#2A2A2A'
              }}
              >
            Can I pay in crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                display:'flex',
                justifyContent:'start',
                alignItems:'start',
                color: '#747474',
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
                
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
                // p:2,
                border: 'none',
                mb: 2,
                '&::before': { display: 'none' }, // remove default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#2A2A2A'
              }}
              >
            Will You raise teh price?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                display:'flex',
                justifyContent:'start',
                alignItems:'start',
                color: '#747474',
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
                
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </Box>
      </Box>
  );
};

export default Faqs;
