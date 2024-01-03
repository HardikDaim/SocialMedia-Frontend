import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends, deletePost } from "../state/index.js";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import Modal from "@mui/material/Modal";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px", // Rounded borders
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow
  p: 4,
};

const Friend = ({ friendId, name, subtitle, userPicturePath, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === friendId);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:4000/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:4000/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(deletePost({ _id: postId }));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <FlexBetween>
      <FlexBetween
        onClick={() => {
          navigate(`/profile/${friendId}`);
          navigate(0);
        }}
        gap="1rem"
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography fontSize="0.75rem">{subtitle}</Typography>
        </Box>
      </FlexBetween>

      <Box display="flex" alignItems="center" gap={0}>
        {friendId !== _id ? (
          <IconButton onClick={() => patchFriend()}>
            {isFriend ? (
              <PersonRemoveOutlinedIcon />
            ) : (
              <PersonAddOutlinedIcon />
            )}
          </IconButton>
        ) : null}

        <IconButton onClick={handleMenuClick}>
          <MoreVertOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleOpen}>
            <DeleteIcon />
            Delete
          </MenuItem>
          <Modal
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to{" "}
                <strong className="text-red-500">Delete</strong> this Post?
              </Typography>
              <div
                onClick={handleDelete}
                type="button"
                className="position-relative justify-center border-indigo-600 border-1 rounded-md  px-3 my-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Yes, Delete
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </div>
              <div
                onClick={handleClose}
                type="button"
                className="position-relative justify-center border-indigo-600 border-1 rounded-md  px-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </div>
            </Box>
          </Modal>
          <MenuItem>
            <ErrorIcon />
            Report an Error
          </MenuItem>
        </Menu>
      </Box>
    </FlexBetween>
  );
};

export default Friend;
