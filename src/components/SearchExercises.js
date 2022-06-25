import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const [bodyParts, setBodyParts] = useState([]);

  // Fetching the exercise categories from the exercise API
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    console.log(bodyParts);

    fetchExercisesData();
  }, []);

  // Here is the request to the exercises API to get data from
  const handleSearch = async e => {
    e.preventDefault();

    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      // Exercises search functionality and it targets the name, target, equipment, and bodyPart so if the search is equal to any one of these it'll return the exercise results
      const searchedExercises = exercisesData.filter(
        item =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      // Clearing the search field and updating the exercises array
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <form onSubmit={handleSearch}>
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
              width: { lg: '1170px', xs: '350px' },
              backgroundColor: '#fff',
              borderRadius: '40px',
            }}
            value={search}
            onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '173px', xs: '80px' },
              height: '56px',
              position: 'absolute',
              right: '0px',
              fontSize: { lg: '20px', xs: '14px' },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </form>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
