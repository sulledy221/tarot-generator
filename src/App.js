import './App.css';
import Card from './components/Card';
import * as card from './components/card'

function App() {
  return (
    <div className="App">
        <Card
        cardItems={card.theFool}
        type="Generate Your Major Arcana Tarot Card"
        className="movie-text"
      />
    </div>
  );
}

export default App;
