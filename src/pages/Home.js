import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      {/* <HeroBanner /> */}
      {
        // Passing down the exercises and the default bodyPart value (all) and the setBodyPart so it can update the bodyPart
        //
        // Props drilling but we need to make the changes across the entire app components
      }
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
