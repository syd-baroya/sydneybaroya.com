import { Button, ButtonGroup } from '@mui/joy';

import './Header.css';

export default function Header({items}) {

    return (
        <div className="header">
            <Button variant="plain" >Sydney Baroya</Button>

            <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                { items.map( item => {
                        return <Button key={item.name}>{ item.name }</Button>
                    }
                )}
            </ButtonGroup>

            <Button >Resume</Button>

        </div>
    );
}
