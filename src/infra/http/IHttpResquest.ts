export interface IHttpRequest<T = unknown> {
  params?: T;
  query?: T;
  body: T;
  headers?: T;
}
