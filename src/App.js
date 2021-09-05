import './App.css';
import Card from './components/Card';
import {cards} from './components/cards'

function App() {
  return (
    <div className="App">
        <Card
        cardItems={cards}
        type="Generate Your Major Arcana Tarot Card"
        className="card"
      />

    </div>
  );
}

export default App;
