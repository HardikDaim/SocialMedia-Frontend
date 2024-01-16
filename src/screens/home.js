import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserWidget from "../components/widgets/UserWidget";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import PostsWidget from "../components/widgets/PostsWidget";
import MyPostWidget from "../components/widgets/MyPostWidget";
import FriendListWidget from "../components/widgets/FriendsListWidget";

export default function Home() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 p-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block">
            {" "}
            <UserWidget userId={_id} picturePath={picturePath} />
          </div>
          <div className="col-span-1 lg:col-span-2">
            {" "}
            <MyPostWidget picturePath={picturePath} />
            <PostsWidget userId={_id} />
          </div>
          <div className="hidden lg:block">
            <FriendListWidget userId={_id} />
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 dark:bg-gray-800">
        <div className=" p-5 gap-x-4 right-0"></div>
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="1.5rem"
          justifyContent=""
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <MyPostWidget picturePath={picturePath} /> */}
      {/* To Show Posts */}
      {/* <PostsWidget userId={_id} />
          </Box>
          {isNonMobileScreens && (
            <Box flexBasis="26%" position="sticky" top="0">
              <Box />
              <FriendListWidget userId={_id} />
            </Box>
          )}
        </Box>
          </div>*/}
      <div>
        <Footer />
      </div>
    </>
  );
}
