import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
             <Grid className="test">
                 <Grid.Row>
                     <GridColumn width={4}>1</GridColumn>
                     <GridColumn width={4}>2</GridColumn>
                     <GridColumn width={4}>3</GridColumn>
                     <GridColumn width={4}>4</GridColumn>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
