import React from 'react';
import { Box, Flex, Image, Caps } from 'rebass';

const Title = ({ ...props }) => (
  <div>
    <Flex {...props}>
      <Box
        css={{
          height: '25px',
          width: '28.5px',
          display: 'flex',
          justifycontent: 'space-between',
          right: '150px',
        }}
      >
        <Image
          m={10}
          p={10}
          src="https://raw.githubusercontent.com/Rezhe/Music-Marketing-Tool/master/src/assets/funsun.png"
        />
      </Box>
      <Box mr={10} />
      <Caps>Music Marketing Tools</Caps>
    </Flex>
    <hr />
    <pre />
  </div>
);

export default Title;
