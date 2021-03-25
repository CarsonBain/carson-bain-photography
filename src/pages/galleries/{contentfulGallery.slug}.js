import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../../components/layout';

export default function GalleryPage(props) {
  return (
    <Layout>
      <div className='space-y-6 md:space-y-16 flex-col'>
        {props.data.contentfulGallery.images.map((image, index) => (
          <GatsbyImage
            image={image.gatsbyImageData}
            key={index}
            alt={image.fileName}
            ></GatsbyImage>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulGallery(id: { eq: $id }) {
      images {
        gatsbyImageData(
          layout: CONSTRAINED
          formats: [AUTO, WEBP])
      }
    }
  }
`;
