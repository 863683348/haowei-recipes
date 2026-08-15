/**
 * 本地类型桩：@neondatabase/serverless
 * 沙箱无法安装依赖，先用声明桩保证类型检查通过；
 * 环境解锁后 `npm i @neondatabase/serverless` 即可移除本文件。
 */
declare module "@neondatabase/serverless" {
  export interface NeonQueryFunction<R extends Record<string, unknown> = Record<string, unknown>> {
    (query: string, params?: unknown[]): Promise<R[]>;
  }
  export function neon(connectionString: string): NeonQueryFunction;
  export default neon;
}
