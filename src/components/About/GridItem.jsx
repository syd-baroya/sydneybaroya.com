import { Sheet, Typography } from "@mui/joy";

export default function GridItem({color, title, content}) {

    return (
        <Sheet sx={{ 
                border: "solid 2px",
                borderColor: color,
                borderRadius: '15px',
                textAlign: 'center',
                color: color,
                height: 1,
                boxSizing: 'border-box', 
                padding: '10px',
                width: 1,
            }}
            elevation={3} 
        >
        <Typography level="h3" sx={{ color: color }}>{title}</Typography>
        <Typography sx={{ color: color }}>{content}</Typography>
        </Sheet>
    );
}