import { Button, ButtonGroup } from '@mui/joy';

import './NavBar.css';

export default function NavBar({items}) {

    return (
        <div className="header">
            <Button variant="plain" >Sydney Baroya</Button>

            <ButtonGroup variant="solid" spacing="0.5rem" aria-label="spacing button group">
                { items.map( item => {
                        return <Button key={item.name}>{ item.name }</Button>
                    }
                )}
            </ButtonGroup>

            <Button >Resume</Button>

        </div>
    );
}
