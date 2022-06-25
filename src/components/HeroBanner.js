import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
    }}
    position="relative"
    p="20px"
  >
    <Typography
      color="#FF2625"
      sx={{ textAlign: { lg: 'left', xs: 'center' } }}
      fontWeight="600"
      fontSize="26px"
    >
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '40px' },
        textAlign: { lg: 'left', xs: 'center' },
      }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      sx={{ textAlign: { lg: 'left', xs: 'center' } }}
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
    >
      Check out the most effective exercises personalized to you
    </Typography>
    {/* <Stack sx={{ m: { lg: '0', md: '0 40%', sm: '0 30%', xs: '0 20%' } }}> */}
    <Stack sx={{ mx: 'auto', width: 200 }}>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#FF2625',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', sm: 'none' }, // hide the image on small devices
        fontSize: { lg: '160px', xs: '70px' },
        textAlign: { lg: 'left', xs: 'center' },
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
