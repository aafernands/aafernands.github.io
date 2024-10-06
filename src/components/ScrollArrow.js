import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, IconButton } from '@mui/material';

const ScrollArrow = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }}
    >
      <ScrollLink to="expertise" smooth={true} duration={500}>
        <IconButton color="primary">
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </ScrollLink>
    </Box>
  );
};

export default ScrollArrow;
