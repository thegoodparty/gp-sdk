import type {
  PaginatedList,
  PathToVictory,
  ListPathsToVictoryPagination,
  UpdatePathToVictoryInput,
} from '@goodparty_org/contracts'
import { BaseResource } from './BaseResource'

export class PathsToVictoryResource extends BaseResource {
  protected readonly resourceBasePath = '/path-to-victory'

  list = (
    options?: ListPathsToVictoryPagination,
  ): Promise<PaginatedList<PathToVictory>> =>
    this.getRequest<PaginatedList<PathToVictory>>(
      `${this.resourceBasePath}/list`,
      options,
    )

  get = (id: number): Promise<PathToVictory> =>
    this.getRequest<PathToVictory>(`${this.resourceBasePath}/${id}`)

  update = (
    id: number,
    input: UpdatePathToVictoryInput,
  ): Promise<PathToVictory> =>
    this.putRequest<PathToVictory>(`${this.resourceBasePath}/${id}`, input)
}
