import React from 'react';
import { Box, Card, Image } from 'rebass';

const NetEase = ({ ...props }) => (
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
        <a href="https://music.163.com/#/song?id=476428719">
          <Box
            ml={-1}
            css={{
              height: '30px',
              width: '90px',
              display: 'flex',
              justifycontent: 'space-between',
            }}
          >
            <Image
              m={10}
              p={10}
              src="https://github.com/Rezhe/Music-Marketing-Tools/blob/master/src/assets/NetEase.png?raw=true"
            />
          </Box>
        </a>
        <Box>
          <p>Children piping in the main square</p>
          <p>孩子们在主广场上吹口哨</p>
          <p>But no one's dancing</p>
          <p>但却无人起舞</p>
          <p>No one's dancing down there</p>
          <p>没人在那儿跳舞</p>
          <p>The river goes where the water flows</p>
          <p>河流奔向水流动的地方</p>
          <p>But no one knows when the Batcave closed</p>
          <p>但没人知道蝙蝠洞什么时候关闭</p>
          <p>The river goes where the water flows</p>
          <p>河流奔向水流动的地方</p>
          <p>But no one knows when the Batcave closed</p>
          <p>但没人知道蝙蝠洞什么时候关闭</p>
        </Box>
      </Box>
    </Card>
    <pre />
  </div>
);

export default NetEase;
