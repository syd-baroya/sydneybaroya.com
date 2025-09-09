import { Paper } from "@mui/material";

export const metadata = {
  title: 'Blog - Sydney Baroya',
  description: 'Read articles and insights from Sydney Baroya on creative development, coding, and technology.',
};

export default function Blog() {

    return (
        <section id="blog">
            <h1>Blog</h1>
            <Paper square={false}>Blog </Paper>
        </section>
    );
}