import './App.css';
import Header from './components/Header';
import BuyButtons from './components/BuyButtons';
import PaymentDetails from './components/PaymentDetails';
import OrderSummary from './components/OrderSummary';
import { useState } from 'react';

function App() {
  const [miles, setMiles] = useState(0);
  const [cost, setCost] = useState(0);

  return (
    <div className="container">
      <Header />
      <BuyButtons setMiles={setMiles} setCost={setCost}/>
      <div className="main-content">
        <div className="left-content">
          <PaymentDetails />
        </div>
        <div className="right-content">
          <OrderSummary miles={miles} cost={cost}/>
        </div>
      </div>
    </div>
  );
}

export default App;
