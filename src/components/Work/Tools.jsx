import { Paper, Grid, Stack, Divider, Typography, List, ListItem, ListItemText, ListItemButton, Box } from "@mui/material";

export default function Tools() {
    return (
        <Stack id="tools" >
            {/* Header */}
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign="center" sx={{ color: 'var(--primary-text)' }}>
                Tools
            </Typography>

            {/* Grid Layout */}
            <Grid container direction="row" sx={(theme) => ({
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    width: '100%'})}>
                
                {/* Left column - visible md and up only */}
                <Grid
                item
                direction="column" 
                size={4}
                sx={{display: { xs: 'none', md: 'block' }}}
                >
                <Box sx={{ height: '100%', color: 'var(--primary-text)'}}>
                    <List disablePadding>
                    {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
                        <Box>
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                             <Divider component="li" />
                        </Box>
                    ))}
                    </List>
                </Box>
                </Grid>

                {/* Right column - always visible */}
                <Grid item size="grow">
                    <Box>
                        <div
                        style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#eee',
                        }}
                        >
                        </div>
                    </Box>
                </Grid>
            </Grid>
            </Stack>

    );
}