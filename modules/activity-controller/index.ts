// Reexport the native module. On web, it will be resolved to ActivityControllerModule.web.ts
// and on native platforms to ActivityControllerModule.ts
export * from "./src/ActivityController.types";
export * from "./src/ActivityControllerModule";