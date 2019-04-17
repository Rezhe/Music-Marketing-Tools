import React from 'react';
import { Box } from 'rebass';

const AppleMusic = ({ ...props }) => (
  <div>
    <Box width={[1, 1, 1]} {...props}>
      <iframe
        title="yes"
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="150"
        css={{
          width: '100%',
          maxwidth: '660px',
          overflow: 'hidden',
          background: 'transparent',
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/rain-in-soho/1207022390?i=1207022401&app=music"
      />
    </Box>
    <pre />
  </div>
);

export default AppleMusic;
