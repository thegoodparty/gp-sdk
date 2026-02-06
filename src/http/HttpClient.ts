import { ofetch, FetchError } from 'ofetch'
import type { $Fetch } from 'ofetch'
import type { GoodPartyClientConfig } from '../GoodPartyClient'
import { SdkError } from '../types/result'

type JsonFetchOptions = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown>
}

const extractData = <T>(data: T | undefined): T => data!

export class HttpClient {
  private client: $Fetch

  constructor(config: GoodPartyClientConfig) {
    const { gpApiRootUrl, m2mToken } = config
    this.client = ofetch.create({
      baseURL: gpApiRootUrl,
      headers: {
        Authorization: `Bearer ${m2mToken}`,
      },
    })
  }

  request = async <T>(path: string, init?: JsonFetchOptions): Promise<T> => {
    try {
      const response = await this.client.raw<T>(path, init)
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
