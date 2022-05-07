import { Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../community/navbar-comm";
import Post from "../community/post";
import db from "../lib/firebase";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);

  if (isLoading) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxW="md" centerContent p={8}>
        <VStack spacing={8} w="100%">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default Community;