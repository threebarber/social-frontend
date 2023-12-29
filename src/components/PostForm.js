import React from "react";
import {
  Box,
  VStack,
  Heading,
  SimpleGrid,
  Textarea,
  Card,
  CardBody,
  CardHeader,
  Button,
  Center,
  Tag,
  TagLabel,
  Text,
  Tooltip,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { setPostsSlice, addPostSlice } from "../reducers/postsReducer";

import axios from "axios";

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const userState = useSelector((state) => state.customUser);

  const titleOnChange = (event) => setTitle(event.target.value);
  const contentOnChange = (event) => setContent(event.target.value);

  const addPost = async (event) => {

    const newPost = {
      postTitle: title,
      postContent: content,
      userId: userState.userId,
      userName: userState.userName
    };

    await axios.post("/api/posts", newPost).then((postResponse) => {
        dispatch(addPostSlice(postResponse.data))
    })
  };

  return (
    <Center>
      <Box>
        <SimpleGrid columns={1} spacing={10}>
          <input
            onChange={titleOnChange}
            type="text"
            placeholder="post title"
          />

          <textarea onChange={contentOnChange} placeholder="post body" />
          <button onClick={addPost}>Submit post</button>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default PostForm;
