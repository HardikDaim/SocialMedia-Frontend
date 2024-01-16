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
    <>
      <div className="p-5 bg-white sticky top-5 max-w-full border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-800 dark:hover:bg-gray-700 user-select-none">
        <div className="flex gap-x-1 pb-5 select-none">
          <div className="dark:text-white text-3xl font-semibold cursor-pointer select-none ">
            Your Friends List
          </div>
        </div>
        <hr className="border border-gray-300 dark:border-gray-600 "></hr>
        {friends && friends.length > 0 ? (
          <div className="flex flex-col gap-4 mt-4 dark:text-white select-none">
            {friends.map((friend) => (
              <Friend
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
             
              />
            ))}
          </div>
        ) : (
          <div>Your don't have any friend Yet!</div>
        )}
      </div>

      {/* <WidgetWrapper className="sticky top-0">
        <Typography variant="h5" fontWeight="500" sx={{ mb: "1.5rem" }}>
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
      </WidgetWrapper> */}
    </>
  );
};

export default FriendListWidget;
