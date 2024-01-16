import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";
import Tooltip from "@mui/material/Tooltip";

export default function NewPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handlePost = async () => {
    try {
      setLoading(true);
      setError(null);

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

      if (!response.ok) {
        throw new Error("Failed to create a new post");
      }

      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
      setPost("");
      navigate("/home");
    } catch (error) {
      setError("An error occurred while creating the post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="mx-auto bg-white  border dark:bg-gray-800 dark:border-gray-800 "
        style={{ height: "1000px" }}
      >
        <div className="max-w-full mx-auto p-8 border border-gray-300 dark:border-gray-700 rounded shadow relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold dark:text-white">
              Create a New Post
            </h2>
          </div>
          <textarea
            className="w-full p-3 resize-none max-row-3 text-sm text-gray-900 border border-gray-300 h-80 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What's on your mind..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <div className="flex justify-center ">
            {isImage && (
              <div className="mb-4 w-full max-h-100 border rounded">
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center flex-between gap-6">
            <Tooltip title="Add Image">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img className="w-10" src="/photo.svg"></img>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setIsImage(true);
                  setImage(e.target.files[0]);
                }}
              />
            </Tooltip>
            <Tooltip title="Add Video">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img className="w-10" src="/video.svg"></img>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setIsImage(true);
                  setImage(e.target.files[0]);
                }}
              />
            </Tooltip>
            <Tooltip title="Add Feeling">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img className="w-10" src="/feeling.svg"></img>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setIsImage(true);
                  setImage(e.target.files[0]);
                }}
              />
            </Tooltip>
            <Tooltip title="Go Live">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img className="w-10" src="/live.svg"></img>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setIsImage(true);
                  setImage(e.target.files[0]);
                }}
              />
            </Tooltip>
          </div>

          <button
            className="absolute top-8 right-8 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handlePost}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
