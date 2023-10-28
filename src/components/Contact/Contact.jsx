import { Sheet, Typography } from "@mui/joy";

export default function Contact() {

    return (
        <section className="section" id="contact">
            <Typography fontSize="72px" lineHeight="80px"sx={{ color: 'var(--primary-text)'}}>Contact</Typography>
            <Sheet sx={{ borderRadius: '4px', width: '100%', height: '50vh'}}>Contact Sheet</Sheet>
        </section>
    );
}