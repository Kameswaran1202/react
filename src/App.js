import logo from './logo.svg';
import './App.css';
import Currency from './Currency';
import Calculator from './calc';
import Crud  from './Crud';
import Table from './cart';
import Cart from './cart';


function App() {
  return (
    <div className='App'>

       <Cart/> 
      <br></br>
      <hr></hr>
       <Calculator/>
      <hr></hr>
      <Crud/>
      <hr></hr>
      <Table/> 
      {/* <Summa/> */}
    </div>
  );
}

export default App;
