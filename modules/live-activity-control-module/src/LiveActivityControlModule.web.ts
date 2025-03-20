import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './LiveActivityControlModule.types';

type LiveActivityControlModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class LiveActivityControlModule extends NativeModule<LiveActivityControlModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(LiveActivityControlModule);
