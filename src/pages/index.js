import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout';
import Draggable from 'react-draggable';

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="relative flex justify-center items-center -space-x-8">
        {data.contentfulHomePage.collageImages.map((image) => {
          return (
            <Draggable key={image} bounds="body">
              <div className="max-w-sm cursor-move w-full">
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={image.title}
                  draggable={false}>
                </GatsbyImage>
              </div>
            </Draggable>
          );
        })}
      </div>
      <div className="text-center mt-24 text-sm text-gray-700 flex justify-center items-center">
        Drag the images to rearrange
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulHomePage {
      collageImages {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 600
          formats: [AUTO, WEBP])
      }
    }
  }
`;

export default IndexPage;
