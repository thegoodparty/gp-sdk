import { ofetch, FetchError } from 'ofetch'
import type { GoodPartyClientConfig } from '../GoodPartyClient'
import { SdkError } from '../types/result'

type JsonFetchOptions = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown>
}

const extractData = <T>(data: T | undefined): T => data!

export class HttpClient {
  private baseUrl: string
  private m2mToken: string

  constructor(config: GoodPartyClientConfig) {
    this.baseUrl = config.gpApiRootUrl
    this.m2mToken = config.m2mToken
  }

  request = async <T>(path: string, init?: JsonFetchOptions): Promise<T> => {
    try {
      const response = await ofetch.raw<T>(path, {
        baseURL: this.baseUrl,
        headers: {
          Authorization: `Bearer ${this.m2mToken}`,
        },
        ...init,
      })
      return extractData(response._data)
    } catch (error: unknown) {
      if (error instanceof FetchError) {
        throw new SdkError(error.statusCode ?? 0, error.message, error.response)
      }
      const message = error instanceof Error ? error.message : 'Unknown error'
      throw new SdkError(0, message)
    }
  }
}
