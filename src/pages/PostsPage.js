// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  Center,
  Card,
  CardBody,
  Text,
  Heading,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import PostForm from "../components/PostForm";

import { setPostsSlice } from "../reducers/postsReducer";

const PostsPage = () => {
  const dispatch = useDispatch();

  const postsState = useSelector((state) => state.posts);

  const loadPosts = async () => {
    const postsResponse = await axios.get("/api/posts");
    dispatch(setPostsSlice(postsResponse.data));
  };


  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h3>Posts Page</h3>

      <Center flexDir="column">
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            {postsState.map((post) => (
              <Card variant="elevated" border="black">
                <CardBody>
                  <Heading>{post.postTitle}</Heading>
                  <Text>{post.postContent}</Text>
                  <Link to={post.id}>Link</Link>
                </CardBody>
              </Card>
            ))}
          </Box>
          <Center>
          <PostForm />
          </Center>
        </SimpleGrid>
      </Center>
    </div>
  );
};

export default PostsPage;
