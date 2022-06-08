import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

export default function CepCard(props) {
  const { index, address } = props;
 
  return (
    <Card sx={{ width: "357px", boxShadow: "none", overflow:"visible" }}>
      <CardMedia
        component="img"
        height="140"
        image={address.image}
        alt="green iguana"
      />
      <CardContent sx={{paddingBottom:"16px !important"}}>
        <Typography gutterBottom variant="h5" component="div">
          {address.localidade}-{address.uf}
        </Typography>
        <Stack  direction="row" alignItems="flex-end" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            <strong>Endereço:</strong> {address.logradouro}
            <br />
            <strong>Bairro:</strong> {address.bairro}
            <br />
            <strong>Cep:</strong> {address.cep}
            <br />
            <strong>Complemento: </strong>
            {address.complemento}
          </Typography>
          <IconButton onClick={() => props.deleteHandler(index)} aria-label="delete"  sx={{ float: "right", top:"0.4em", left:"1.1em" }} >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>
     
    </Card>
  );
}
