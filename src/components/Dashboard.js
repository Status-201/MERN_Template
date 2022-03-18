import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { logout } from "../redux/action/user";
import { saveLinks, getLinks } from "../redux/action/links";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const { links } = useSelector((state) => state.links);
  const [formData, setFormData] = useState({ linkName: "", link: "" });
  const [data, setData] = useState([]);

  console.log(links);

  const { linkName, link } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const logoutUser = () => {
    dispatch(logout());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(linkName, link);
    dispatch(saveLinks(linkName, link));
    
  };

  return user == null || loading ? (
    <div>hello</div>
  ) : (
    <div>
      <Typography variant="h6">{user.name}</Typography>
      <Avatar alt={user.name} src={user.pic} />
      {user.pic}
      <Link to="/profile"> Go </Link>
      <br /> <button onClick={logoutUser}>Logout</button>
      <div>
        <form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            name="linkName"
            value={linkName}
            onChange={onChange}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            name="link"
            value={link}
            onChange={onChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
        </form>
      </div>
      {links?.map((data, index) => (
        <div key={index}>
          {data.linkName}
          {data.link}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
