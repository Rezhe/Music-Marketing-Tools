import React from 'react';
import { Box, Image, Card } from 'rebass';

const QQmusic = ({ ...props }) => (
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
        <Box
          css={{
            height: '25px',
            width: '54px',
            display: 'flex',
            justifycontent: 'space-between',
          }}
        >
          <Image
            m={10}
            p={10}
            src="https://globalrevgen.com/wp-content/uploads/2017/06/qq-music.png"
          />
        </Box>
        <p
          css={{
            color: 'gray',
            fontSize: '12px',
          }}
        >
          抱歉，应版权方要求，暂无法在当前国家或地区提供此歌曲服务
        </p>
      </Box>
    </Card>
    <pre />
  </div>
);

export default QQmusic;
