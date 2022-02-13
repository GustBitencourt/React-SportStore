import { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

const Contato = () => {
  const url = "http://localhost:5000/message";
  const [messages, setMessages] = useState([]);
  const [autor, setAutor] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMessages(data);
  }, []);

  const sendMessage = () => {
    setValidate(false);
    if (autor.length <= 0 || conteudo.length) {
      return setValidate(!validate);
    }

    const bodyForm = {
      email: autor,
      message: conteudo
    }
    /* Parametros dos post */
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyForm)
    })
  };

  /* useEffect(() => {
    async function loadApiInfo() {
      const response = fetch(url);
      const data = await response.json();
      setMessages(data);
    }
    loadApiInfo();
  }, []); */

  return (
    <>
      <Grid container direction="row">
        <TextField
          id="name"
          label="Name"
          value={autor}
          onChange={(event) => setAutor(event.target.value)}
          fullWidth
        />
        <TextField
          id="message"
          label="Message"
          value={conteudo}
          onChange={(event) => setConteudo(event.target.value)}
          fullWidth
        />

        {/* Spam para erro em tentativa de enviar mensagem com campo vazio */}
        {validate && (
          <div
            className="alert alert-warning alert-dismissible fade show mt-2"
            role="alert"
          >
            <strong>Por favor preencha todos os campos!</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </Grid>

      <Button
        onClick={sendMessage}
        className="mt-2"
        variant="contained"
        color="primary"
      >
        Sent
      </Button>

      {messages.map((message) => {
        return (
          <div className="card mt-2" key={message.id}>
            <div className="card-body">
              <h5 className="card-title">{message.email}</h5>
              <p className="card-text">{message.message}</p>
              <p className="card-text">
                <small className="text-muted">{message.created_at}</small>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Contato;
