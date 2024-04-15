import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const onHandleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className="w-full h-screen flex justify-center items-center z-[999]">
        <Button onClick={() => setModal((prev) => !prev)}>open modal </Button>
        <Modal isOpen={modal} onClose={onHandleModalClose}>
          <Modal.Header>
            <h3>this is modal header </h3>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>

          <h1>this is a modal</h1>
          <form>
            <input type="text" placeholder="please enter your name" />
          </form>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
