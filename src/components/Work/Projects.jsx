import { Divider, Box, Grid, Stack, Typography, Card, CardContent } from "@mui/material";

export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    return ( 
        <Stack id="projects" className="workSection">
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    sx={(theme) => ({
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    '& > div': {
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        ...Object.keys(colWidth).reduce(
                        (result, key) => ({
                            ...result,
                            [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                            [theme.breakpoints.only(key)]: {
                                borderRight: 'none',
                            },
                            },
                        }),
                        {},
                        ),
                    },
                    })}
                >
                    {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
                    <Grid item key={index} size={colWidth} minHeight={160} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box>
                            <Typography textAlign='center' sx={{ color: 'var(--primary-text)', fontSize: 14 }}>{text}</Typography>
                        </Box>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}