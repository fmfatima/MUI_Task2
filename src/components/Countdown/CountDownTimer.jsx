import React, { useEffect, useState } from "react";
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
        // minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "#fff",
          textAlign: "center",
          width: 'fit-content',
        }}
      >
        <Box 
         sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        fontSize: { xs: '1.5rem', md: '2rem' },
        fontWeight: 'bold',
      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography variant="body2">{label}</Typography>
  </Box>
);

const Colon = () => (
  <Typography
    sx={{
      fontSize: { xs: '1.5rem', md: '2rem' },
      fontWeight: 'bold',
      color: 'gray',
      mt: 0.5,
    }}
  >
    :
  </Typography>
);

export default CountdownTimer;
