import React, { useState } from 'react';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormComp } from './components/FormComp'; // Import FormComp component

function App() {
  const [modalShow, setModalShow] = useState(false); // State to control modal visibility

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        {/* Button to open modal */}
        <Button
          variant="primary"
          onClick={handleModalToggle} // Toggle modal visibility when button is clicked
          className="mb-3"
        >
          Create User
        </Button>
        {/* Render FormComp modal with show and onHide props */}
        <FormComp show={modalShow} onHide={handleModalToggle} />
        {/* Other components */}
      </Container>
    </>
  );
}

export default App;
