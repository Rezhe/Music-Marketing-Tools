import React from 'react';
import { Container, Box, Flex, Image } from 'rebass';

import Layout from '../components/Layout';

import Title from '../components/Title';
import AppleMusic from '../components/AppleMusic';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import NetEase from '../components/NetEase';
import QQmusic from '../components/QQmusic';

const IndexPage = () => (
  <Layout>
    <Container>
      <Title />
      <Flex width={[1, 1, 1]} flexWrap="wrap">
        <Box width={[1, 1, 2.2 / 3]}>
          <AppleMusic />
          <BandCamp />
          <Spotify />
          <NetEase />
          <QQmusic />
        </Box>
      </Flex>
    </Container>
  </Layout>
);

export default IndexPage;
