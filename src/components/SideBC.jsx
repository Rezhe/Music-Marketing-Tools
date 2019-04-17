import React from 'react';
import { Box, Card } from 'rebass';

const SideBC = ({ ...props }) => (
  <div>
    <Card
      fontSize={6}
      fontWeight="bold"
      height="150"
      width={[1, 1, 2 / 3]}
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
        <iframe
          title="bc"
          css={{ border: '0', width: '100%', height: '472px' }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2008614637/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/track=4273607906/transparent=true/"
          seamless
        >
          <a href="http://themountaingoats.bandcamp.com/album/goths">
            Goths by The Mountain Goats
          </a>
        </iframe>
      </Box>
    </Card>
    <pre />
  </div>
);

export default SideBC;
