import {  Container, Stack } from '@mui/material'
import "@fontsource/nuosu-sil";

export default function Header(){
    return(
        <Container className="header" maxWidth="sm">
            <Stack direction="column" spacing={-3} >
                <h2>Lucas Cardoso</h2>
                <p>Web Developer</p>
            </Stack>
            <hr/>
        </Container>
    )
}