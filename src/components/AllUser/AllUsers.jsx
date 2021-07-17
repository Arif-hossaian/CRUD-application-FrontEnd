import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  TableBody,
  Button,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "./../../Api/index";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 16,
      // background: '#000000',
      // color: '#FFFFFF'
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const getAllUsers = async () => {
    const response = await getUsers();
    // console.log(response);
    setUsers(response.data);
  };
  //Delete user data
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  <CreateIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  onClick={() => deleteUserData(user._id)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
