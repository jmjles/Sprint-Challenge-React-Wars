import React from 'react';
import People from './people'

import Container from '@material-ui/core/Container';

const PersonCard = ({people}) => {
    return(
        <section>
            <Container maxWidth="lg">
                <People people={people}/>
            </Container>
        </section>
        
    )
}
export default PersonCard;