import './App.css';
import Arbitrage from './Screen/Arbitrage/Arbitrage';

console.log('hi');
console.log(process.env.REACT_APP_SECRET_NAME || 'Test env');
function App() {
  return (
    <div>
      <Arbitrage />
    </div>
  );
}

export default App;
