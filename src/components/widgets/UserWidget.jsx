import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider } from "@mui/material";
import UserImage from "../UserImage";
import FlexBetween from "../FlexBetween";
import WidgetWrapper from "../WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:4000/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper className="">
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              fontWeight="500"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography>
              <Typography>
                {friends.length === 1
                  ? "1 Expert in Touch"
                  : `${friends.length} Experts in Touch`}
              </Typography>
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" />
          <Typography>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" />
          <Typography>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography>Who's viewed your profile</Typography>
          <Typography fontWeight="500">{viewedProfile}</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography>Impressions of your post</Typography>
          <Typography fontWeight="500">{impressions}</Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
          <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            <Box>
              <Typography fontWeight="500">Facebook</Typography>
              <Typography>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>            <Box>
              <Typography fontWeight="500">Instagram</Typography>
              <Typography>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
