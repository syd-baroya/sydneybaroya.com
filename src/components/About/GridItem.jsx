import { Sheet, Typography, AspectRatio, Card, Box, CardContent } from "@mui/joy";

export default function GridItem({color, title, content, index}) {
    if(content.isA === "text") {
        return (
            <Card sx={{ 
                    border: "solid 2px",
                    borderColor: color,
                    borderRadius: '15px',
                    textAlign: 'center',
                    color: color,
                    height: 1,
                    boxSizing: 'border-box', 
                    padding: '10px',
                    width: 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column'
                }}
                elevation={3} 
            >
                <Typography level="h3" sx={{ color: color }}>{title}</Typography>
                <Typography level="body-md" sx={{ color: color }}>{content.guts}</Typography>
            </Card>
        );
    }
    else if(content.isA === "image") {
        return(
            <Box >
                <Card
                    orientation="horizontal"
                    sx={{
                    flexWrap: 'wrap',
                    [`& > *`]: {
                        '--stack-point': '400px',
                        minWidth:
                        'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                    },
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     border: "solid 2px",
                     borderColor: color,
                     borderRadius: '15px',
                    }}
                >
                    <AspectRatio flex ratio={content.ratio} maxHeight={400} sx={{ minWidth: 200 }}>
                    <img
                        src={content.guts} alt=""
                    />
                </AspectRatio>
                <CardContent>
                    <Typography level="h3" sx={{ color: color }}>{title}</Typography>
                </CardContent>
            </Card>
        </Box>
        );
    }
}