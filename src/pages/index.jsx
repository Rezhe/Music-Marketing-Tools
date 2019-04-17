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
        <Box width={[1, 1, 2 / 3]}>
          <AppleMusic />
          <BandCamp />
          <Spotify />
          <NetEase />
          <QQmusic />
        </Box>
        <Box ml={18} width={[1, 1, 17 / 54]}>
          <a href="https://www.atlassian.com/software/jira/whats-new-overview?utm_source=buy-sell-ads&utm_medium=display&utm_campaign=jira_imc-newjira-19_all-eng_buy-sell-ads_carbon_dev-circle&utm_content=jira_imc-newjira-19_all-eng_buy-sell-ads_carbon_dev-circle_display_jira-logo-130x100-adcopy1_general_1x1&landingpage=general">
            <Image src="https://raw.githubusercontent.com/Rezhe/Music-Marketing-Tools/master/src/assets/carbonAd.png" />
          </a>
        </Box>
      </Flex>
    </Container>
  </Layout>
);

export default IndexPage;
