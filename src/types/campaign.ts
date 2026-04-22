import type { ReadCampaignOutput } from '@goodparty_org/contracts'

export type RaceTargetMetrics = {
  winNumber: number
  voterContactGoal: number
  projectedTurnout: number
}

export type CampaignWithLiveContext = ReadCampaignOutput & {
  positionName: string | null
  raceTargetMetrics: RaceTargetMetrics | null
}
