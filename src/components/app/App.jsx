import { ThemeProvider } from '../../providers/ThemeProvider';
import Form from '../Form/Form';

function App() {

  return (
    <ThemeProvider>
      <div className='App'>
        <Form />
      </div>
    </ThemeProvider>

  );
}

export default App;
