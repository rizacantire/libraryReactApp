import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row>
                     <GridColumn width={4}/>
                     <GridColumn width={4}/>
                     <GridColumn width={4}/>
                     <GridColumn width={4}/>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
