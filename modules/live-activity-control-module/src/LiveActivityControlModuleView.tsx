import { requireNativeView } from 'expo';
import * as React from 'react';

import { LiveActivityControlModuleViewProps } from './LiveActivityControlModule.types';

const NativeView: React.ComponentType<LiveActivityControlModuleViewProps> =
  requireNativeView('LiveActivityControlModule');

export default function LiveActivityControlModuleView(props: LiveActivityControlModuleViewProps) {
  return <NativeView {...props} />;
}
