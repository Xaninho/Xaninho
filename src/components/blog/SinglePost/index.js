import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {
  ImageWrapper,
  SinglePostContainer,
  SinglePostWrapper,
  SinglePostInfo,
  SinglePostDate,
  SinglePostExcerpt,
  SinglePostTitle,
  BlockContentWrapper,
} from "./SinglePostElements";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            excerpt,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <SinglePostContainer>
      <SinglePostWrapper>
        <ImageWrapper>
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
        </ImageWrapper>
        <SinglePostInfo>
          <SinglePostTitle>{singlePost.title}</SinglePostTitle>
          <SinglePostExcerpt>{singlePost.excerpt}</SinglePostExcerpt>
          <SinglePostDate>{singlePost.publishedAt}</SinglePostDate>
        </SinglePostInfo>
        <BlockContentWrapper>
          <div className="prose">
            <BlockContent
              blocks={singlePost.body}
              projectId="r99w5jgb"
              dataset="production"
            />
          </div>
        </BlockContentWrapper>
      </SinglePostWrapper>
    </SinglePostContainer>
  );
};

export default SinglePost;
