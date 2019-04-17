import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Provider as RebassProvider, Text } from 'rebass';
import { injectGlobal } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Favicons = props => (
  <Helmet {...props}>
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="https://raw.githubusercontent.com/Rezhe/Music-Marketing-Tool/master/src/assets/websun.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="https://raw.githubusercontent.com/Rezhe/Music-Marketing-Tool/master/src/assets/websun.png"
    />
  </Helmet>
);

const Layout = ({ children }) => (
  <RebassProvider is={Flex} flexDirection="column" css={{ minHeight: '100vh' }}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          >
            <html lang={data.site.siteMetadata.language} />
          </Helmet>
          <Favicons />
        </div>
      )}
    />

    <Header brand={<h1>Title</h1>} />

    <Box is="main" flex={1}>
      {children}
    </Box>

    <Footer>
      <Text align="center" />
      <pre />
    </Footer>
  </RebassProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
