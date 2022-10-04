import Home from './pages/home'
import Provider from './context/provider'

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
