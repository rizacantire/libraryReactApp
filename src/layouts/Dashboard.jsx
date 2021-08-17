import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, GridColumn } from 'semantic-ui-react'
import AuthorList from '../pages/AuthorList'
import BookList from '../pages/BookList'


export default function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row>
                     <Route exact path="/" component={BookList} />
                     <Route exact path="/books" component={BookList} />
                     <Route exact path="/authors" component={AuthorList} />
                 </Grid.Row>
             </Grid>
        </div>
    )
}
