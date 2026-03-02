import {
  USER_ROLE_VALUES,
  type UserRole as UserRoleType,
  WHY_BROWSING_VALUES,
  type WhyBrowsing as WhyBrowsingType,
  CAMPAIGN_TIER_VALUES,
  type CampaignTier as CampaignTierType,
  P2V_STATUS_VALUES,
  type P2VStatus as P2VStatusType,
  P2V_SOURCE_VALUES,
  type P2VSource as P2VSourceType,
} from '@goodparty_org/contracts'

type EnumObject<T extends readonly string[]> = { [K in T[number]]: K }

const toEnumObject = <T extends readonly string[]>(values: T): EnumObject<T> =>
  Object.fromEntries(values.map((v) => [v, v])) as EnumObject<T>

export type UserRole = UserRoleType
export const UserRole = toEnumObject(USER_ROLE_VALUES)

export type WhyBrowsing = WhyBrowsingType
export const WhyBrowsing = toEnumObject(WHY_BROWSING_VALUES)

export type CampaignTier = CampaignTierType
export const CampaignTier = toEnumObject(CAMPAIGN_TIER_VALUES)

export type P2VStatus = P2VStatusType
export const P2VStatus = {
  ...toEnumObject(P2V_STATUS_VALUES),
  // Backward-compatible camelCase aliases (old TS enum used camelCase keys)
  complete: 'Complete',
  waiting: 'Waiting',
  failed: 'Failed',
  districtMatched: 'DistrictMatched',
} as const satisfies Record<string, P2VStatusType>

export type P2VSource = P2VSourceType
export const P2VSource = toEnumObject(P2V_SOURCE_VALUES)
