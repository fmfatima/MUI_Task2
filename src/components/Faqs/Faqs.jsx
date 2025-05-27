import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useMediaQuery,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
  const isMobile = useMediaQuery('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth:'100%',

      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 600,
          fontfamily: 'Roboto',
          color: '#2A2A2A',
          mb: 4,
          textAlign: 'center',
        }}
      >
        What Our Users are Saying
      </Typography>

      {/* FAQ Container */}
      <Box
        sx={{
          // width: '100%',
          maxWidth: { xs: '100%', sm: '90%', md: '900px', lg: '970px' },
          position: 'relative',
        }}
      >
        {/* Decorative Image */}
        {isMobile ? '' : 
          <Box
            component="img"
            src="./src/assets/FaqVector.png"
            alt="Decoration"
            sx={{
              position: 'absolute',
              left: '105%',
              top: 0,
              maxWidth: '200px',
            }}
          />
        }

        {/* FAQs */}
        {[
          {
            title: 'What chains do you support?',
            content:
              'We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon.',
          },
          {
            title: 'Can I pay in crypto?',
            content:
              'We accept crypto payments on Ethereum mainnet and plan to support more chains soon.',
          },
          {
            title: 'Will You raise the price?',
            content:
              'Prices may increase in the future. Lock in your spot now to get early access at current rates.',
          },
        ].map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              width: '100%',
              boxShadow: '0 4px 4px rgba(114, 113, 113, 0.07)',
              border: 'none',
              '&::before': { display: 'none' },
              mb: 2,
              fontfamily: 'Roboto',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ width: 32, height: 32, color: '#2187D0' }}
                />
              }
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
                  fontWeight: 500,
                  color: '#2A2A2A',
                  ml: 1,
                }}
              >
                {faq.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#747474',
                  ml: 1,
                }}
              >
                {faq.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faqs;
