import React from 'react';

import { Box, Text } from '../../components';

interface ErrorMsgProps {
  error: string;
  visible: boolean;
}

const ErrorMsg = ({ error, visible }: ErrorMsgProps) => {
  if (!visible || !error) return null;
  return (
    <Box>
      <Text variant="b3" color="red" marginBottom="s">
        {error}
      </Text>
    </Box>
  );
};

export default ErrorMsg;
