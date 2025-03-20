import * as React from 'react';

import { LiveActivityControlModuleViewProps } from './LiveActivityControlModule.types';

export default function LiveActivityControlModuleView(props: LiveActivityControlModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
