import type { HttpClient } from '../http/HttpClient'

export abstract class BaseResource {
  protected httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  protected getRequest = <T>(path: string): Promise<T> =>
    this.httpClient.request<T>(path, { method: 'GET' })

  protected postRequest = <T>(
    path: string,
    body: Record<string, unknown>,
  ): Promise<T> => this.httpClient.request<T>(path, { method: 'POST', body })

  protected putRequest = <T>(
    path: string,
    body: Record<string, unknown>,
  ): Promise<T> => this.httpClient.request<T>(path, { method: 'PUT', body })

  protected deleteRequest = <T>(path: string): Promise<T> =>
    this.httpClient.request<T>(path, { method: 'DELETE' })
}
