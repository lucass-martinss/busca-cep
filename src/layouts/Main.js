import CepTextField from "../components/CepTextField";
import SearchButton from "../components/SearchButton";
import { Divider, Stack, Container, Paper } from "@mui/material";
import { useState } from "react";
import CepCard from "./CepCard";

export default function Main() {
  const [cep, setCep] = useState("");
  const [addressList, setAddressList] = useState([]);

  const handleChange = (event) => {
    setCep(event.target.value);
    console.log(cep);
  };

  const handleClick = async () => {
    console.log(`Buscar cep: ${cep}`);
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    const apiKey = "AIzaSyAuGnaUg-Tv-BVU-eaipXfdXArTIYV4BwY";
    json.image = `https://maps.googleapis.com/maps/api/streetview?size=408x544&location=${json.logradouro},${json.bairro}&key=${apiKey}`;
    const newAddressList = addressList === [] ? [json] : [json, ...addressList];
    setAddressList(newAddressList);
    console.log(json);
  };

  const handleDelete = (index) => {
    const newAddressList = [...addressList];
    newAddressList.splice(index, 1);
    setAddressList(newAddressList);
  };

  return (
    <Container className="main" maxWidth="xs">
      <Paper elevation={3}>
        <Stack direction="column" gap="10px" sx={{ alignItems: "center" }}>
          <h3>Search your address in Brazil</h3>
          <form
            id="my-form-id"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
              setCep("");
            }}
          >
            <Stack
              direction="row"
              divider={
                <Divider
                  orientation="vertical"
                  sx={{ height: "41px" }}
                  flexItem
                />
              }
              spacing={1}
            >
              <CepTextField
                helperText="Digite o CEP com 8 caracteres."
                value={cep}
                onChange={handleChange}
                error={cep.length !== 8 && cep.length !== 0}
              />
              <SearchButton type="submit" disabled={cep.length !== 8} />
            </Stack>
          </form>
          {Array.from(addressList.entries()).map(([index, address]) => (
            <CepCard
              key={index}
              index={index}
              address={address}
              deleteHandler={() => handleDelete(index)}
            />
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}
