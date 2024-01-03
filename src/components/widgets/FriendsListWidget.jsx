import { Box, Divider, Typography, useTheme } from "@mui/material";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index.js";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:4000/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Expert's List for you
      <Divider />
      </Typography>
      {friends && friends.length > 0 ? (
        <Box display="flex" flexDirection="column" gap="1.5rem">
          {friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="textSecondary">
          You havn't Subscribed to Experts Yet !
        </Typography>
      )}
    </WidgetWrapper>
  );
};

export default FriendListWidget;
