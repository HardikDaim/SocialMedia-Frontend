import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserWidget from "../components/widgets/UserWidget";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import PostsWidget from "../components/widgets/PostsWidget";
import MyPostWidget from '../components/widgets/MyPostWidget';
import FriendListWidget from "../components/widgets/FriendsListWidget";

export default function Home() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  // const backgroundImageStyle = {
  //   backgroundImage:
  //     'url("https://www.transparenttextures.com/patterns/black-thread-light.png")',
  //   /* Add other background properties here if needed */
  //   backgroundColor: "#f0f4f8",
  // };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-50">
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="1.5rem"
          justifyContent=""
        >
          <Box
            flexBasis={isNonMobileScreens ? "26%" : undefined}
         
          >
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <MyPostWidget picturePath={picturePath} />
            {/* To Show Posts */}
            <PostsWidget userId={_id} />
          </Box>
          {isNonMobileScreens && (
            <Box
              flexBasis="26%"
              position="sticky"
              top="0"
            >
              <Box />
              <FriendListWidget userId={_id} />
            </Box>
          )}
        </Box>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
