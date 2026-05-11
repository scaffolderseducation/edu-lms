// src/Modules.js
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Modules = () => {
  // Example modules (later we’ll fetch from Firestore)
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Module 1: Basics of AI",
      description: "Introduction to Artificial Intelligence",
      progress: 40,
    },
    {
      id: 2,
      title: "Module 2: Machine Learning",
      description: "Supervised & Unsupervised Learning",
      progress: 75,
    },
    {
      id: 3,
      title: "Module 3: Deep Learning",
      description: "Neural networks and CNNs",
      progress: 10,
    },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Your Modules
      </Typography>
      <Grid container spacing={2}>
        {modules.map((module) => (
          <Grid item xs={12} sm={6} md={4} key={module.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{module.title}</Typography>
                <Typography color="textSecondary">
                  {module.description}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={module.progress}
                  sx={{ marginY: 2 }}
                />
                <Typography>{module.progress}% completed</Typography>

                {/* ✅ Go to Module button */}
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/module${module.id}`}
                  sx={{ marginTop: 2 }}
                >
                  Go to Module
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Modules;
