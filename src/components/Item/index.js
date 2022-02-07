import { ListItem, ListItemText } from "@material-ui/core/";

const Item = ({ name, quantidade }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={quantidade} />
    </ListItem>
  );
};

export default Item;
