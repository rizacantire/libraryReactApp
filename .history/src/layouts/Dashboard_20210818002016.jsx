import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, GridColumn } from 'semantic-ui-react'
import BookList from '../pages/BookList'


export default function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row>
                     <Route path="/" component={BookList} />
                 </Grid.Row>
             </Grid>
        </div>
    )
}
