import { HttpClient } from './http/HttpClient'
import { UsersResource } from './resources/UsersResource'

export type GoodPartyClientConfig = {
  m2mToken: string
  gpApiRootUrl: string
}

export class GoodPartyClient {
  readonly users: UsersResource

  constructor(config: GoodPartyClientConfig) {
    const httpClient = new HttpClient(config)
    this.users = new UsersResource(httpClient)
  }
}
