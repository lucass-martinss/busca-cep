import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CepCard(props) {
    const { address } = props;

  return (
    <Card sx={{ maxWidth: 357}}>
      
        <CardMedia
          component="img"
          height="140"
          image={address.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {address.localidade}-{address.uf}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         <strong>Endereço:</strong> {address.logradouro}
           <br/>
          <strong>Bairro:</strong> {address.bairro}
           <br/>
           <strong>Cep:</strong>   {address.cep}
           <br/>
           <strong>Complemento: </strong>{address.complemento}
           
           

          </Typography>
        </CardContent>
    </Card>
  );
}