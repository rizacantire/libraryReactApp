import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
             <Grid>
                 <Grid.Row >
                     <GridColumn  className="test" width={4}>1</GridColumn>
                     <GridColumn  className="test" width={4}>2</GridColumn>
                     <GridColumn width={4}>3</GridColumn>
                     <GridColumn width={4}>4</GridColumn>
                 </Grid.Row>
             </Grid>
        </div>
    )
}
