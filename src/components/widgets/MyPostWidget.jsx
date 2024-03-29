import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../UserImage";
import WidgetWrapper from "../WidgetWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index.js";
import Tooltip from "@mui/material";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:4000/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <>
      <div  className="px-5 mt-2 pt-5 bg-white dark:bg-gray-800 max-w-full border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  user-select-none">
        <div className="flex gap-x-1 pb-5 select-none">
          <UserImage image={picturePath} className={`select-none w-16 h-16`} />
          <input
          onClick={() =>  navigate("/newPost")}
            type="text"
            className="w-full rounded-full p-4 bg-gray-100 dark:bg-gray-700"
            placeholder="What's on your Mind..."
          ></input>
        </div>
        <hr className="border border-gray-300 dark:border-gray-700 "></hr>
        <div className="grid grid-cols-4 my-2 divide-x-4 divide-gray-300 dark:divide-gray-700 ">
          <div onClick={() =>  navigate("/newPost")} className="flex items-center justify-center dark:text-white p-2 text-xs md:text-lg md:p-4 cursor-pointer select-none">
            <img className="h-5 w-10 md:h-10 md:w-20" src="/live.svg" alt="Live Icon" />
            <span>Go Live</span>
          </div>

          <div onClick={() =>  navigate("/newPost")} className="flex items-center justify-center dark:text-white p-2 text-xs md:text-lg md:p-4 cursor-pointer select-none">
            <img className="h-5 w-10 md:h-10 md:w-20 " src="/photo.svg" alt="Photo Icon" />
            <span>Photo</span>
          </div>

          <div onClick={() =>  navigate("/newPost")} className="flex items-center justify-center dark:text-white p-2 text-xs md:text-lg md:p-4 cursor-pointer select-none">
            <img className="h-5 w-10 md:h-10 md:w-20 " src="/video.svg" alt="Video Icon" />
            <span>Video</span>
          </div>

          <div onClick={() =>  navigate("/newPost")} className="flex items-center justify-center dark:text-white p-2 text-xs md:text-lg md:p-4 cursor-pointer select-none">
            <img
              className="h-5 w-10 md:h-10 md:w-20 "
              src="/feeling.svg"
              alt="Feeling Icon"
            />
            <span>Feeling</span>
          </div>
        </div>
      </div>

      {/* <WidgetWrapper>
        <FlexBetween gap="1.5rem">
          <UserImage image={picturePath} />
          <InputBase
            placeholder="What's on your mind..."
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              width: "100%",
              backgroundColor: "#f0f4f8",
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
        </FlexBetween>
        {isImage && (
          <Box border={`1px solid`} borderRadius="5px" mt="1rem" p="1rem">
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <FlexBetween>
                  <Box
                    {...getRootProps()}
                    border={`2px dashed`}
                    p="1rem"
                    width="100%"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!image ? (
                      <p>Add Image Here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{image.name}</Typography>
                        <EditOutlined />
                      </FlexBetween>
                    )}
                  </Box>
                  {image && (
                    <IconButton
                      onClick={() => setImage(null)}
                      sx={{ width: "15%" }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  )}
                </FlexBetween>
              )}
            </Dropzone>
          </Box>
        )}

        <Divider sx={{ margin: "1.25rem 0" }} />

        <FlexBetween>
          <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
            <ImageOutlined />
            <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
              Image
            </Typography>
          </FlexBetween>

          {isNonMobileScreens ? (
            <>
              <FlexBetween gap="0.25rem">
                <GifBoxOutlined />
                <Typography>Clip</Typography>
              </FlexBetween>

              <FlexBetween gap="0.25rem">
                <AttachFileOutlined />
                <Typography>Attachment</Typography>
              </FlexBetween>

              <FlexBetween gap="0.25rem">
                <MicOutlined />
                <Typography>Audio</Typography>
              </FlexBetween>
            </>
          ) : (
            <FlexBetween gap="0.25rem">
              <MoreHorizOutlined />
            </FlexBetween>
          )}

          <Button
            disabled={!post}
            onClick={handlePost}
            sx={{
              borderRadius: "3rem",
              backgroundColor: "#3f51b5",
              "&:hover": {
                backgroundColor: "#3949ab",
              },
            }}
            className="text-white"
          >
            POST
          </Button>
        </FlexBetween>
      </WidgetWrapper> */}
    </>
  );
};

export default MyPostWidget;
