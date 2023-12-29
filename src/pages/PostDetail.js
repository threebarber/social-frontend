// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useAuthState } from "react-firebase-hooks/auth";
import { myAuth } from "../auth/myFirebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  Center,
  Card,
  CardBody,
  Text,
  SimpleGrid,
  Box,
  Heading,
} from "@chakra-ui/react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import PostComments from "../components/PostComments";

const PostDetail = () => {
  let { postId } = useParams();

  const loadPost = async () => {
    const postResponse = await axios.get(`/api/posts/${postId}`);
    setPost(postResponse.data);
  };

  const [postDetails, setPost] = useState({});

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div>
      <h3>Post Details</h3>

      <Center flexDir="column">
        <SimpleGrid columns={2} spacing="30vw">
          <Box>
            <h3>{postDetails.postTitle}</h3>
            <p>{postDetails.postContent}</p>
          </Box>

          <Box style={{border: "5px solid blue"}}>
            <Heading textAlign="center">Comments</Heading>
            <PostComments postId={postId} />
          </Box>
        </SimpleGrid>
      </Center>
    </div>
  );
};

export default PostDetail;
