import { Form, Button } from "react-bootstrap";

export default function Computadoras() {
  return (
    <Form
      style={{ width: "470px" }}
      className="container card mx-auto pt-2 pr-4 pl-4 mt-4"
    >
      <h2 style={{ width: "420px" }} className="mx-auto p-4 text-center mb-5">
        ¡Hola! Para continuar ingresá tu email y contraseña
      </h2>
      <Form.Group controlId="formBasicEmail" className="mb-4">
        <Form.Control type="email" placeholder="Escribe tu email" />
        <Form.Text className="text-muted">
          No compartas tu dirección con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Escribe tu contraseña" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ width: "300px" }}
        className="mx-auto mt-5 mb-5"
      >
        Entrar
      </Button>
    </Form>
  );
}
