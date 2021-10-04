import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Product from './components/Product';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <div className="App">
          <List />
<br/>
<hr/>
      <div>
      <ApplicationForm />
      </div>
    <Product />
    </div>
  );
}

export default App;
