import { Sheet, Typography, FormControl, FormLabel, Input, Textarea, Button, Box } from "@mui/joy";

export default function Contact() {

    return (
        <section className="section" id="contact">
            <Typography fontSize="72px" lineHeight="80px"sx={{ color: 'var(--primary-text)'}}>Contact</Typography>
            <Sheet sx={{ borderRadius: '4px', width: '100%', height: '50vh'}}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Placeholder"/>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder="Placeholder"/>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        placeholder="Type something here…"
                        minRows={3}
                        endDecorator={
                        <Box
                            sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                            }}
                        >
                            <Button sx={{ ml: 'auto' }}>Send</Button>
                        </Box>
                        }
                        sx={[
                        {
                            minWidth: 300,
                        },
                        ]}
                    />
                </FormControl>
            </Sheet>
        </section>
    );
}