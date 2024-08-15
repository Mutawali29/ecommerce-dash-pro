import React, { useState, useCallback } from 'react';
import { SketchPicker, ChromePicker } from 'react-color';
import { Container, Typography, Box, Grid } from '@mui/material';
import 'tailwindcss/tailwind.css';
import debounce from 'lodash.debounce';

const Color = () => {
  const [color, setColor] = useState('#ffffff');

  // Debounce the color change handler to limit the rate of updates
  const handleChangeComplete = useCallback(
    debounce((color) => {
      setColor(color.hex);
    }, 300),
    []
  );

  return (
    <Container className="p-6 bg-gray-200 min-h-screen">
      <div className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-gray-800'>
        Color Picker
      </div>

      <Box className="mb-8 text-center">
        <Typography variant="h6" className="text-gray-800 mb-2 font-semibold">
          Selected Color:
        </Typography>
        <Box
          className="mx-auto mb-2"
          style={{
            backgroundColor: color,
            border: '1px solid #ddd',
            borderRadius: '12px',
            width: '180px',
            height: '60px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
        />
        <Typography variant="body1" className="text-gray-600 mt-2">
          {color}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Inline Palette */}
        <Grid item xs={12} sm={6} md={4}>
          <Box className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
            <Typography variant="h6" className="mb-4 text-gray-800 font-semibold">
              Inline Palette
            </Typography>
            <Box className="w-full" style={{ maxWidth: '300px' }}>
              <SketchPicker
                color={color}
                onChangeComplete={handleChangeComplete}
                className="w-full"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Inline Picker */}
        <Grid item xs={12} sm={6} md={4}>
          <Box className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
            <Typography variant="h6" className="mb-4 text-gray-800 font-semibold">
              Inline Picker
            </Typography>
            <Box className="w-full" style={{ maxWidth: '300px', padding: '32px' }}>
              <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
                className="w-full"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Color;
