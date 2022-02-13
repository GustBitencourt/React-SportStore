import { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

const Contato = () => {
  const url = "http://localhost:5000/message";
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json();
    setMessages(data);
}, [])

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
        <TextField id="name" label="Name" fullWidth />
        <TextField id="message" label="Message" fullWidth />
      </Grid>
      <Button className="mt-2" variant="contained" color="primary">
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
