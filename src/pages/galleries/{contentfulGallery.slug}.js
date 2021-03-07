import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

export default function GalleryPage(props) {
  console.log(props);
  return (
    <Layout>
      <div className="space-y-6 md:space-y-16 flex-col">
        {props.data.contentfulGallery.images.map((image) => (
          <Img
            fluid={image.fluid}
            key={image.fluid.src}
            alt={image.fileName}
            placeholderStyle={{ filter: `blur(1.5rem)` }}
          ></Img>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulGallery(id: { eq: $id }) {
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
