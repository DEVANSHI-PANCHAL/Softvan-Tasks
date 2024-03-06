import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router

function App() {
  return (
    <Router> {/* Wrap your App component with Router */}
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
