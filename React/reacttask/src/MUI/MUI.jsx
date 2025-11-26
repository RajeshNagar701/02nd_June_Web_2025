/*

Move faster
with intuitive React UI tools

https://mui.com/material-ui/getting-started/ 


Material UI is an open-source React component library that implements Google's Material Design. 
It's comprehensive and can be used in production out of the box.

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library.

Advantages of Material UI
Ship faster: 
Beautiful by default:
Customizability
Cross-team collaboration:

Installation : npm install @mui/material @emotion/react @emotion/styled

*/


import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { styled } from '@mui/material/styles';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function MUI() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const theme = useTheme();


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));


    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <hr />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            <hr />
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>

            <hr />

            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
            </Button>

            <hr />

            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://mui.com/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                />
            </Card>


            <hr />

            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default MUI