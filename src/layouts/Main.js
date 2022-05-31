import CepTextField from "../components/CepTextField";
import SearchButton from "../components/SearchButton";
import { Divider, Stack, Container   } from "@mui/material";
import { useState } from "react";
import CepCard from "./CepCard";

export default function Main() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');

    const handleChange = (event) => {
        setCep(event.target.value);
        console.log(cep);
    };

    const handleClick = async () => {
        console.log(`Buscar cep: ${cep}`)
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json()
        const apiKey = 'AIzaSyAuGnaUg-Tv-BVU-eaipXfdXArTIYV4BwY'
        json.image = `https://maps.googleapis.com/maps/api/streetview?size=408x544&location=${json.logradouro},${json.bairro}&key=${apiKey}`
        setAddress(json)
        console.log(json);

        
       
    };
    


  return (
     <Container className="main" maxWidth="xs" >
        <Stack direction="column" gap="10px">
            <h3>Search your address in Brazil</h3>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1}>
                <CepTextField  value={cep} onChange={handleChange} />
                <SearchButton onClick={() => {handleClick()}}/>
            </Stack>
            { address !== '' ? <CepCard address={address} /> : null }
        </Stack>
    </Container>
  );
}
