import { Divider, Box, Grid, Stack, Typography, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button } from "@mui/material";
import { useState } from "react";

export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    const projectOptions = ['Item 1', 'Item 2', 'Item 3'];
    const [open, setOpen] = useState(false);
    const [projectSelected, setProjectSelected] = useState(null);

    const handleOpen = (index) => {
        setOpen(true);
        setProjectSelected(index);
    }
    const handleClose = () => {
        setOpen(false);
        setProjectSelected(null);
    }

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
                    {projectOptions.map((text, index) => (
                    <Grid item key={index} size={colWidth} minHeight={160} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box
                            onClick={() => handleOpen(index)}
                            sx={{
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: 'grey.300',
                                boxShadow: 4,
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Typography sx={{ color: 'var(--primary-text)', fontSize: 14 }}>{text}</Typography>
                        </Box>
                         <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                            <DialogTitle>More Information</DialogTitle>
                            <DialogContent dividers>
                            <DialogContentText>
                                Here’s some detailed information about <strong>{projectOptions[projectSelected]}</strong>. You can include
                                descriptions, images, buttons, or even a form here.
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}