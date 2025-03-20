import { NativeModule, requireNativeModule } from 'expo';

import { LiveActivityControlModuleEvents } from './LiveActivityControlModule.types';

declare class LiveActivityControlModule extends NativeModule<LiveActivityControlModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<LiveActivityControlModule>('LiveActivityControlModule');
