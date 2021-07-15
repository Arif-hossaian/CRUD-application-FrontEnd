import { useState, useEffect } from "react";
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
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "./../../Api/index";

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

const EditUser = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(initialValue);
  const { name, email, username, phone } = user;
  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loadUserInfo = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  useEffect(() => {
    loadUserInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const editUsersDetails = async () => {
    await editUser(id, user);
    history.push("/all");
  };
  return (
    <Card className={classes.container}>
      <CardContent>
        <FormGroup>
          <Typography variant="h4">Edit User</Typography>
          <FormControl required={true}>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              required
              value={name}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "25px" }}
              onClick={() => editUsersDetails()}
            >
              Edit User
            </Button>
          </FormControl>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default EditUser;
