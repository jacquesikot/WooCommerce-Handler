import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import { Box, Text, theme } from '../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

interface UploadScreenProps {
  progress: number;
  visible: boolean;
  onDone: any;
}

const UploadScreen = ({
  onDone,
  progress = 0,
  visible = false,
}: UploadScreenProps) => {
  return (
    <Modal visible={visible}>
      <Box style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={theme.colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay={true}
            loop={false}
            style={styles.animation}
            source={require('../../assets/animations/done.json')}
          />
        )}
      </Box>
    </Modal>
  );
};

export default UploadScreen;
