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

import { addComment } from "../reducers/commentsReducer";


import axios from "axios";

const CommentForm = ({postId}) => {

  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const userState = useSelector((state) => state.customUser);

  const contentOnChange = (event) => setContent(event.target.value);

  const addPost = async (event) => {

    const newComment = {
      postId: postId,
      commentContent: content,
      userId: userState.userId,
      userName: userState.userName
    };

    await axios.post("/api/comments", newComment).then((postResponse) => {
        dispatch(addComment(postResponse.data))
    })
  };

  return (
    <Center>
      <Box>
        <SimpleGrid columns={1} spacing={10}>
         
          <textarea onChange={contentOnChange} placeholder="comment..." />
          <button onClick={addPost}>Submit Comment</button>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default CommentForm;
