import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import LeftSide from './layouts/LeftSide'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Container>
        <Navi/>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <LeftSide/>
              </Grid.Column>
              <Grid.Column width={12}>
                <Dashboard/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
