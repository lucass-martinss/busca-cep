import { Button } from "@mui/material";
import  SearchIcon  from "@mui/icons-material/Search"

export default function SearchButton(props) {
  return (
      
    <Button  variant="contained"  endIcon={<SearchIcon />} {...props}>
      Search
    </Button>
    
  );
}
