import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <Alert variant="warning">404 - Page not found!</Alert>
      <Button
        variant="success"
        onClick={() => {
          // window.location.assign('/') <-- funziona, ma fa un refresh per niente :(
          navigate("/"); // <-- funziona meglio, non aggiorna la pagina
        }}
      >
        Torna in homepage
      </Button>
    </div>
  );
};

export default NotFound;
