import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'rebass';
import Layout from '../components/Layout';
import Title from '../components/Title';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Title />
    </Container>
  </Layout>
);

export default NotFoundPage;
