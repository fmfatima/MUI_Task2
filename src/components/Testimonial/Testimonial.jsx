import { Box, Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useRef } from 'react';

const testimonials = [
  { name: 'Jack K.', quote: 'I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through.' },
  { name: 'Izabella', quote: 'I found answers that finally made sense and felt relatable.I found answers that finally made sense and felt relatable.I found answers that finally made sense and felt relatable.I found answers that finally made sense and felt relatable.' },
  { name: 'Alice', quote: 'A breath of fresh air compared to generic advice elsewhere.I found answers that finally made sense and felt relatable.' },
  { name: 'Tina L.', quote: 'The platform gave me the reassurance I needed, quickly.' },
  { name: 'John', quote: 'I trust the community and the curated advice here.' },
  { name: 'Priya', quote: 'It saved me hours of Googling and confusion.I found answers that finally made sense and felt relatable.I found answers that finally made sense and felt relatable.' },
  { name: 'Wizard', quote: 'I appreciate the clarity and focus this platform brings.' }
];

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320; // Adjust based on card width

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box 
    sx={{ 
      py: { xs: 4, sm: 5, md: 6 }, 
      px: 0, 
      maxWidth: {xs: '430px', sm: '820px', md: '1020px', lg: '1520px', xl: '1520px'},
      mx: 'auto',
      // width: '100%', 
      // backgroundColor: 'grey'
    }}>

      {/* Header with Arrows */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // marginLeft:5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          // width: '100%',
        }}
      >
        <Typography
          variant="h2"
          color="black"
          sx={{
            fontSize: {xs: '2rem', sm: '2.5rem', md: '3rem'},
            fontWeight: 600,
            fontfamily: 'Roboto',
            color:'#2A2A2A',
          }}
        >
          What Our Users are Saying
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, }}>
          <IconButton onClick={() => scroll('left')} >
            <ArrowBackIos sx={{ color: '#2187D0' }} />
          </IconButton>
          <IconButton onClick={() => scroll('right')}>
            <ArrowForwardIos sx={{ color: '#2187D0' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Carousel Row */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {testimonials.map((item, i) => (
          <Card
            key={i}
            sx={{
                width: { xs: 260, sm: 280, md: 320 },     
                // height: { xs: 240, sm: 260, md: 300 },    
                flex: '0 0 auto',
                borderRadius: 2,
                boxShadow: '2px 4px 12px rgba(20, 20, 20, 0.18)',
                display: 'flex',
                alignItems: 'flex-start',
                transition: '0.3s',
                overflow: 'hidden',
                marginTop: 5,
                marginBottom: 4,
            }}
            >

            <CardContent
                sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
                overflow: 'hidden'
                }}
                >

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  // mb: 2,
                  fontSize: '16px semibold',
                  fontfamily: 'Urbanist',
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                    fontSize: '16px',
                    fontfamily:'Roboto',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: '#252525',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                }}
                >
                {item.quote}
                </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            mb: 3
        }}
      >
        <Button
            variant="contained"
          
            sx={{
                borderRadius:'4px',
                fontSize: '1rem',
                fontWeight: 600,
                width:'323px',
                height:'56px',
                mt:3,
                // px: 3,
                backgroundColorcolor : "#0264E1",
            }}
            >
            Join Now
        </Button>
        </Box>
    </Box>
  );
};

export default Testimonial;
