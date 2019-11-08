import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Font from '@material-ui/core/Typography';

const People = ({people}) => {
    return(
        <Grid container spacing={3}>
            {
                people.map(person => (
                    <Grid item xs={12} sm={6} key={person.name}>
                        <Card id="parentCard">
                            <Font variant='h2'>{person.name}</Font>
                            <Card>
                                <Font variant='h4'>Attributes</Font>
                                <Font variant='body1'>Gender: {person.gender}</Font>
                                <Font variant='body1'>Height: {person.height}</Font>
                                <Font variant='body1'>Hair: {person.hair_color}</Font>
                                <Font variant='body1'>Eyes: {person.eye_color}</Font>
                                <Font variant='body1'>Skin: {person.skin_color}</Font>
                            </Card>
                        </Card>
                    </Grid>
                ))
            }
            
        </Grid>
    )
}
export default People;