import {
  USER_ROLE_VALUES,
  type UserRole as UserRoleType,
  WHY_BROWSING_VALUES,
  type WhyBrowsing as WhyBrowsingType,
  CAMPAIGN_TIER_VALUES,
  type CampaignTier as CampaignTierType,
  BALLOT_READY_POSITION_LEVEL_VALUES,
  type BallotReadyPositionLevel as BallotReadyPositionLevelType,
  ELECTION_LEVEL_VALUES,
  type ElectionLevel as ElectionLevelType,
  CAMPAIGN_CREATED_BY_VALUES,
  type CampaignCreatedBy as CampaignCreatedByType,
  CAMPAIGN_LAUNCH_STATUS_VALUES,
  type CampaignLaunchStatus as CampaignLaunchStatusType,
  ONBOARDING_STEP_VALUES,
  type OnboardingStep as OnboardingStepType,
  GENERATION_STATUS_VALUES,
  type GenerationStatus as GenerationStatusType,
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

export type BallotReadyPositionLevel = BallotReadyPositionLevelType
export const BallotReadyPositionLevel = toEnumObject(
  BALLOT_READY_POSITION_LEVEL_VALUES,
)

export type ElectionLevel = ElectionLevelType
export const ElectionLevel = toEnumObject(ELECTION_LEVEL_VALUES)

export type CampaignCreatedBy = CampaignCreatedByType
export const CampaignCreatedBy = toEnumObject(CAMPAIGN_CREATED_BY_VALUES)

export type CampaignLaunchStatus = CampaignLaunchStatusType
export const CampaignLaunchStatus = toEnumObject(CAMPAIGN_LAUNCH_STATUS_VALUES)

export type OnboardingStep = OnboardingStepType
export const OnboardingStep = toEnumObject(ONBOARDING_STEP_VALUES)

export type GenerationStatus = GenerationStatusType
export const GenerationStatus = toEnumObject(GENERATION_STATUS_VALUES)
