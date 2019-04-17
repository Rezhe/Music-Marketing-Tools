import React from 'react';
import { Box, Image, Card } from 'rebass';

const Spotify = ({ ...props }) => (
  <div>
    <Card
      fontSize={6}
      fontWeight="bold"
      height="150"
      width={[1, 1, 1]}
      css={{
        maxwidth: '660px',
        overflow: 'hidden',
        background: '#F8F8FA',
      }}
      m={1}
      frameBorder="1"
      borderRadius={12}
      boxShadow="0, 0, 0"
      {...props}
    >
      <Box m={15}>
        <a href="https://open.spotify.com/track/2LOWTScVheSB9L9Qe3Zrnm">
          <Box
            css={{
              height: '18px',
              width: '60px',
              display: 'flex',
              justifycontent: 'space-between',
            }}
          >
            <Image
              m={10}
              p={10}
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            />
          </Box>
        </a>
      </Box>
    </Card>
    <pre />
  </div>
);

export default Spotify;
