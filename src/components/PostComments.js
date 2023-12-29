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

import CommentForm from "./CommentForm";

import { addComment, setComments, filterComments  } from "../reducers/commentsReducer";

const PostComments = ({postId}) => {

  const dispatch = useDispatch();

  const commentsState = useSelector((state) => state.comments);


  const loadComments = async (postId) => {
    const commentsResponse = await axios.get(`/api/comments`);
    dispatch(setComments(commentsResponse.data))
    dispatch(filterComments(postId))
  };

  useEffect(() => {
    loadComments(postId)
    console.log(commentsState)
  }, []);

  return (
    <div>

      <Center flexDir="column">
          <Box>
            
            {
                commentsState &&

                <box>{commentsState.map((comment) => (
                    <div>
                        
                        <h6>{comment.userName} - {comment.commentContent}</h6>
                        
                    </div>
                  ))}</box>
            }

          </Box>
          
      </Center>

      <CommentForm postId={postId} />
    </div>
  );
};

export default PostComments;
