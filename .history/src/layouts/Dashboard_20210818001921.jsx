import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import BookList from '../pages/BookList'


export default function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row>
                     <BookList></BookList>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
