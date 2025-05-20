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
        px: 2,
        p: 8,
      }}
    >
      <Box
        sx={{
        //   p: { xs: 4, sm: 6, md: 10 },
        //   boxShadow: '0 2px 4px rgba(178, 176, 176, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        //   maxWidth: '800px',
        //   width: '100%',
        //   height: 'auto',
        //   mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          sx={{
            fontSize: { xs: '2rem', sm: '2.25rem', md: '2.625rem' },
            fontWeight: 600,
            mb: 4,
          }}
        >
          What Our Users are Saying
        </Typography>

        {/* FAQs Section */}
        <Box>
          <Accordion
            sx={{
                p:2,
                maxWidth:'900px',
                border: 'none',
                mb: 2,
                '&::before': { display: 'none' }, // remove default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem'},
                fontWeight:'500',
              }}
              >
              What chains do you support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem'},
                fontWeight:'400',
                display:'flex',
                justifyContent:'start',
                alignItems:'start'
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
                p:2,
                border: 'none',
                mb: 2,
                '&::before': { display: 'none' }, // remove default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem'},
                fontWeight:'500',
              }}
              >
            Can I pay in crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem'},
                fontWeight:'400',
                display:'flex',
                justifyContent:'start',
                alignItems:'start'
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            sx={{
                p:2,
                maxWidth:'800px',
                border: 'none',
                mb: 2,
                '&::before': { display: 'none' }, // remove default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem'},
                fontWeight:'500',
              }}
              >
                Will You Raise the Price?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
              variant='body1'
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem'},
                fontWeight:'400',
                display:'flex',
                justifyContent:'start',
                alignItems:'start'
              }}
              >
                We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Faqs;
