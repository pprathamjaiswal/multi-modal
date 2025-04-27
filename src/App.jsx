
import './App.css';
import MainEditor from './Components/Editor';
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      
       <h1> Multi-modal Content Writing Tool</h1>
      <div className="App">
        
        <MainEditor />
        
      </div>
    </Provider>
    
  );
}

export default App;
