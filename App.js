import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={true}
        style={{ width: 300, height: 300 }}
        useNativeControls={true}
      />
    </View>
  );
}
