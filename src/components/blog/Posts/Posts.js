import React, { useState, useEffect } from "react";
import sanityClient from "../../../client";

import {
  PostContainer,
  PostWrapper,
  PostCard,
  PostImage,
  SectionTitle,
  PostTitle,
  PostDate,
  PostExcerpt,
  PostDescription,
} from "./PostsElements";

const Posts = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
            title,
            publishedAt,
            slug,
            excerpt,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <PostContainer id="services">
      <SectionTitle>Blog Posts</SectionTitle>
      <PostWrapper>
        {postData &&
          postData.map((post, index) => (
            <PostCard to={"/blog/" + post.slug.current}>
              <PostImage src={post.mainImage.asset.url}></PostImage>
              <PostDescription>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.publishedAt}</PostDate>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
              </PostDescription>
            </PostCard>
          ))}
      </PostWrapper>
    </PostContainer>
  );
};

export default Posts;
