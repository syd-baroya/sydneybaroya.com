import {Grid, Typography, Card, CardContent, CardMedia, Stack, Link  } from "@mui/material";
import { motion } from 'framer-motion';

export default function ProjectCard({project, index, colWidth }) {

    return (
        <Grid item key={index} size={colWidth} sx={{aspectRatio: '1'}}>
           <Link href={project.link} underline='none'>
                <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                    aspectRatio: '1', 
                    cursor: 'pointer',
                    backgroundColor: 'var(--background-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
                >
                    <Stack direction="column" spacing={1} sx={{ alignItems: 'center', bottom: 0, position: 'absolute', p: 1}}>
                        <CardMedia
                            component="img"
                            sx={{ width: '70%', aspectRatio: '1 / 1', objectFit: 'contain'}}
                            image= {project.img[0]}
                            alt={project.cardTitle}
                        />
                        <CardContent
                            sx={{ width: '100%' }}>
                            <Typography textAlign="center" level="h1" 
                                sx={{
                                    fontWeight: 'lg',
                                    color: 'var(--primary-text)',
                                }}
                            >
                            {project.cardTitle}
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
            </Link>
        </Grid>
        
    );
}