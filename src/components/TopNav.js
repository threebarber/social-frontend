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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { Link, Navigate, Route, useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect } from "react";

import { myAuth } from "../auth/myFirebase";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { setUsername, setUserid } from "../reducers/customUserReducer";

import axios from "axios";


const TopNav = () => {
  const [user, loading] = useAuthState(myAuth);

  let navigate = useNavigate()

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.customUser);
  
  useEffect(() => {
    if (user) {
        axios.get(`/api/users/${user.uid}`).then((response) => {
            console.log(
                `Retrieved existing user info: ${JSON.stringify(
                  response.data.user
                )}`
              );
              dispatch(setUsername(response.data.user.userName));
              dispatch(setUserid(response.data.user.userId));
        });
    }else{
        return navigate("/")
    }
  }, [user]);

  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <Link to="/">home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="login">Login</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="posts">Posts</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default TopNav;
