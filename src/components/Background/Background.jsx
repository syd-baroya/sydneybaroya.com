import { Sheet } from "@mui/joy";

export default function Background() {

    return (
        <section className="section" id="background">
            <h1>Background</h1>
            <Sheet sx={{ borderRadius: '4px', width: '100%', height: '50vh'}}>Background Sheet</Sheet>
        </section>
    );
}