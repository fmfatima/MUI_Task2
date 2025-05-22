import { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

const CountdownTimer = () => {
  const targetTime = new Date(Date.now() + (25 * 24 * 60 * 60 + 15 * 60 * 60 + 41 * 60 + 20) * 1000);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const total = targetTime - now;

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeRemaining();
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 4 },
        position: 'relative',
        // width: 'fit-content',
        mx: 'auto',
        zIndex: 0,
      }}
    >
      {/* This is at top right vector */}
      <Box
      component="img"
      src="./src/assets/Vector3.png"
      alt="Top RIght Decoration"
      sx={{
        position: 'absolute',
        top: 10,
        left: '78%',
        zIndex: -1,
      }}
      />

      {/* This is at bottom left vector */}
      <Box
      component="img"
      src="./src/assets/Vector2.png"
      alt="bottom left Decoration"
      sx={{
        position: 'absolute',
        top: 190,
        left: '5.5%',
        width: '119',
        height: '87',
        zIndex: -1,
      }}
      /> 
      
      <Paper
        elevation={3}
        sx={{
          // px: { xs: 2, sm: 3, md:4 },
          py: { xs: 3, sm: 4, md:6 },
          backgroundColor: "#fff",
          textAlign: "center",
          width: '100%',
          maxWidth: '700px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1.5, sm: 2, md: 3 },
          }}
        >
          <TimeBlock label="Days" value={timeLeft.days} />
          <Colon />
          <TimeBlock label="Hours" value={timeLeft.hours} />
          <Colon />
          <TimeBlock label="Minutes" value={timeLeft.minutes} />
          <Colon />
          <TimeBlock label="Seconds" value={timeLeft.seconds} />
        </Box>
      </Paper>
    </Box>
  );
};

const TimeBlock = ({ label, value }) => (
  <Box sx={{ textAlign: "center", mx: 1 }}>
    <Typography
      sx={{
        fontSize: { xs: '1.90rem', sm: '2.75rem', md: '3.75rem' },
        fontWeight: 700,

      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography
      variant="body2"
      sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' } }}
    >
      {label}
    </Typography>
  </Box>
);

const Colon = () => (
  <Typography
    sx={{
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
      fontWeight: 'bold',
      color: 'gray',
      mt: 0.5,
    }}
  >
    :
  </Typography>
);

export default CountdownTimer;
