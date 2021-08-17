import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import LeftSide from './layouts/LeftSide'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid,Divider } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Container>
        <Navi/>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <LeftSide/>
              </Grid.Column><Divider horizontal>asdasdasdsd</Divider>
              <Grid.Column mobile={16} tablet={8} computer={12}>
                <Dashboard/>
              </Grid.Column>
            </Grid.Row>
          </Grid><Divider vertical>Or</Divider>
      </Container>
    </div>
  );
}

export default App;
