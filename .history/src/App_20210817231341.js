import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import LeftSide from './layouts/LeftSide'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Container stretched>
        <Navi/>
          <Grid stretched>
            <Grid.Row >
              <Grid.Column mobile={16} tablet={6} computer={4}>
                <LeftSide/>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={10} computer={12}>
                <Dashboard/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
