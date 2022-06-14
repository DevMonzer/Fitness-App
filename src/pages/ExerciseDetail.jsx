import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

import { exerciseOptions, fetchData } from "../utils/fetchData";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
    };
  }, [id]);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
