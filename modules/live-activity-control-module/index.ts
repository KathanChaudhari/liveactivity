// Reexport the native module. On web, it will be resolved to LiveActivityControlModule.web.ts
// and on native platforms to LiveActivityControlModule.ts
export { default } from './src/LiveActivityControlModule';
export { default as LiveActivityControlModuleView } from './src/LiveActivityControlModuleView';
export * from  './src/LiveActivityControlModule.types';
