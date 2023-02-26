import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
            Navbar
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path="/video/:id" element={<videoDetail />} />
                <Route path="/channel/:id" element={<channelDetail />} />
                <Route path="/search/:searchTerm" element={<searchFeed />} />
            </Routes> 
        </Box>
    </BrowserRouter>
)

export default App