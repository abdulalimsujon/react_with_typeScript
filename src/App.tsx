import Container from "./components/ui/Container";
import { Form, FormSection, FormSubmit } from "./components/reuseableForm";

function App() {
  return (
    <Container>
      <Form>
        <FormSection></FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
