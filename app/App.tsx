import React from 'react';
import { Button, View } from 'react-native';
import LiveActivityControlModule from '../modules/live-activity-control-module';

const { startActivity, endActivity, areActivitiesEnabled } = LiveActivityControlModule;

export default function App() {
  const handleStart = () => {
    if (areActivitiesEnabled()) {
      startActivity({
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600 * 1000).toISOString(), // one hour later
        headline: 'Live Update',
        title: 'Activity Title',
        widgetUrl: 'yourapp://deepLink'
      });
    } else {
      console.log('Live Activities not supported on this device.');
    }
  };

  const handleEnd = () => {
    if (areActivitiesEnabled()) {
      endActivity({
        // parameters if needed
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Start Live Activity" onPress={handleStart} />
      <Button title="End Live Activity" onPress={handleEnd} />
    </View>
  );
}
