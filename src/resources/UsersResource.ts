import type { PaginatedList, PaginationOptions } from '../types/result'
import type { UpdatePasswordInput, User } from '../types/user'
import { BaseResource } from './BaseResource'

export class UsersResource extends BaseResource {
  list = async (options?: PaginationOptions): Promise<PaginatedList<User>> => {
    const params = new URLSearchParams()
    if (options?.page !== undefined) {
      params.set('page', String(options.page))
    }
    if (options?.limit !== undefined) {
      params.set('limit', String(options.limit))
    }
    const query = params.toString()
    const path = query ? `/users?${query}` : '/users'

    const result = await this.getRequest<{
      data: User[]
      meta: { page: number; limit: number; total: number; totalPages: number }
    }>(path)

    return {
      data: result.data,
      pagination: result.meta,
    }
  }

  get = (id: number): Promise<User> => this.getRequest<User>(`/users/${id}`)

  delete = (id: number): Promise<void> =>
    this.deleteRequest<void>(`/users/${id}`)

  updatePassword = (id: number, input: UpdatePasswordInput): Promise<void> =>
    this.putRequest<void>(`/users/${id}/password`, input)
}
