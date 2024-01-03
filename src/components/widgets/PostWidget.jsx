import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/index.js";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { addComment } from "../../state/index.js"; 

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments: initialComments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = likes ? Boolean(likes[loggedInUserId]) : false;
  const likeCount = likes ? Object.keys(likes).length : 0;
  const [comments, setComments] = useState(initialComments || []);

  const patchLike = async () => {
    const response = await fetch(`http://localhost:4000/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Don't submit empty comments
  
    const response = await fetch(
      `http://localhost:4000/posts/${postId}/comment`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId, text: commentText }),
      }
    );
  
    if (response.ok) {
      const newComment = await response.json();
      // Dispatch the addComment action to update the Redux store
      dispatch(addComment({ postId, comment: newComment }));
      console.log("New Comment:", newComment);
      // Clear the comment input
      setCommentText("");
     
    } else {
      // Handle error response from the server
      console.error("Failed to create a comment.");
    }
  };
  
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
        postId={postId}
      />
      <Typography sx={{ mt: "1rem" }}>{description}</Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:4000/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments ? comments.length : 0}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
       <Box mt="0.5rem">
       {comments.map((comment, i) => (
         <div key={`${comment.userId}-${i}`}>
           <Divider />
           <Typography sx={{ m: "0.5rem 0", pl: "1rem" }}>
             {comment.text}
           </Typography>
         </div>
       ))}
       <Divider />
       <Box display="flex" alignItems="center">
         <TextField
           label="Write a comment"
           variant="outlined"
           fullWidth
           value={commentText}
           onChange={(e) => setCommentText(e.target.value)}
         />
         <div
           onClick={handleCommentSubmit}
           style={{ marginLeft: "8px", cursor: "pointer" }}
         >
           <SendIcon />
         </div>
       </Box>
     </Box>
     
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
