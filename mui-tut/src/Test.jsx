import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CustomizedTypograpghy =
    styled(Typography)
        ` 
    color: #000055;
    :hover {
    color: #75125c;
    background: #afafaf;
}
`;

function Test() {
    return (
        <Box>
            <CustomizedTypograpghy variant='h5'>
                Hello World
            </CustomizedTypograpghy>
        </Box>
    )
}

export default Test;