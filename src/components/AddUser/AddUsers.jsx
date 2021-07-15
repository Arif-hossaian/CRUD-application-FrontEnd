import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddUsers = () => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <FormGroup>
          <Typography variant="h4">Add User</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <Button variant="outlined" color="primary" style={{marginTop: "20px"}}>
              Add User
            </Button>
          </FormControl>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default AddUsers;
