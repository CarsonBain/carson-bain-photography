import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

const GalleriesPage = ({ data }) => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-12">
        {data.allContentfulGallery.nodes.map((node) => (
          <Link
            className="relative group"
            key={node.slug}
            to={`/galleries/${node.slug}`}
          >
            <div className="absolute h-full w-full bg-gray-600 opacity-10 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="absolute text-white text-2xl md:text-3xl font-semibold z-20 h-full w-full flex justify-center items-center transition-opacity group-hover:opacity-0 duration-300">
              {node.title}
            </div>
            <Img
              fluid={node.featureImage.fluid}
              key={node.featureImage.fluid.src}
              alt={node.featureImage.fileName}
              placeholderStyle={{ filter: `blur(1.5rem)` }}
            ></Img>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulGallery {
      nodes {
        slug
        title
        featureImage {
          fluid(maxWidth: 480) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

export default GalleriesPage;
