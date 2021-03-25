import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

const WallpapersPage = ({ data }) => {
  return (
    <Layout>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-12'>
        {data.contentfulWallpaperPage.wallpaperImage.map((image) => (
          <div>
            <Img
              fluid={image.fluid}
              key={image.fluid.src}
              alt={image.fileName}
              placeholderStyle={{ filter: `blur(1.5rem)` }}
              className='rounded-xl shadow-lg'
            ></Img>
            <div className='mt-4 flex flex-col items-center'>
              <span className='text-gray-600 text-xs md:text-sm'>IPhone</span>
              <span className='text-gray-600 text-xs md:text-sm'>
                1356 X 2934
              </span>
              <a
                className='bg-green-50 text-green-900 hover:bg-green-100 transition-colors px-4 py-2 rounded text-sm mt-3'
                rel='noreferrer'
                href={image.file.url}
                target='_blank'
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulWallpaperPage {
      wallpaperImage {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          url
        }
      }
    }
  }
`;

export default WallpapersPage;
