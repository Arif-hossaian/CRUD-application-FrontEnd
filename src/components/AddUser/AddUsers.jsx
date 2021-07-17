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
import { addUsers } from "../../Api";

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
  const history = useHistory()
  const [user, setUser] = useState(initialValue);
  const { name, email, username, phone } = user;
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUsersDetails = async () => {
    await addUsers(user);
    history.push("/all")
  };
  return (
    <Card className={classes.container}>
      <CardContent>
        <FormGroup>
          <Typography variant="h4">Add User</Typography>
          <FormControl required={true}>
            <InputLabel htmlFor="my-inputone">Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              required
              value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-inputtwo">Username</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-inputthree">Email</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-inputfour">Phone</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              color="primary"
              style={{marginTop: "25px"}}
              onClick={() => addUsersDetails()}
            >
              Add User
            </Button>
          </FormControl>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default AddUsers;
