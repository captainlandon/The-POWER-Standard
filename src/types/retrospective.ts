/**
 * POWER Retrospective: historical record contracts (RETRO-001).
 * Historical assertions are independent of modern officeholders and commitments.
 */
import type { ClaimType, DataStatus, EpistemicStatus, EvidentiaryStrength, SourceType } from './power';

export type DatePrecision = 'day' | 'month' | 'year' | 'range' | 'approximate' | 'unknown';
export type ReviewState = 'draft' | 'in-review' | 'approved' | 'rejected';
export type SourceRelation = 'supports' | 'contradicts' | 'contextualizes';
export type HistoricalRelationshipType =
  | 'amends' | 'supersedes' | 'implements' | 'authorizes'
  | 'administers' | 'precedes' | 'responds-to' | 'associated-with'
  | 'causally-influences';

export interface HistoricalDate {
  /** ISO 8601 day/month/year when known. Never invent missing precision. */
  value: string | null;
  precision: DatePrecision;
  endValue?: string | null;
  note?: string;
}

export interface HistoricalSource {
  id: string;
  title: string;
  issuingBody: string;
  sourceType: SourceType;
  canonicalUrl: string;
  published: HistoricalDate;
  retrievedAt: string;
  archiveIdentifier?: string;
  rightsOrAccessNotes?: string;
  /** Candidate source is not automatically verified evidence. */
  verificationState: ReviewState;
}

export interface HistoricalSourceLink {
  sourceId: string;
  relation: SourceRelation;
  /** Page, section, paragraph, table or archival folder identifier. */
  locator: string;
  excerpt?: string;
  establishes: string;
  doesNotEstablish: string[];
}

export interface HistoricalClaim {
  id: string;
  caseId: string;
  text: string;
  claimType: ClaimType;
  epistemicStatus: EpistemicStatus;
  evidentiaryStrength: EvidentiaryStrength;
  sourceLinks: HistoricalSourceLink[];
  temporalScope: HistoricalDate;
  geography: string;
  population?: string;
  limitations: string[];
  /** Causation requires explicit research design, not merely temporal association. */
  causalMethod?: string;
  confounders?: string[];
  reviewState: ReviewState;
  reviewedBy?: string;
  reviewedAt?: string;
  dataStatus: DataStatus;
}

export interface HistoricalEvent {
  id: string;
  caseId: string;
  title: string;
  summary: string;
  eventType: string;
  date: HistoricalDate;
  institutionIds: string[];
  claimIds: string[];
  sourceIds: string[];
}

export interface HistoricalPolicy {
  id: string;
  title: string;
  legalCitation?: string;
  enactment: HistoricalDate;
  effectivePeriod?: HistoricalDate;
  jurisdictions: string[];
  institutionIds: string[];
  caseIds: string[];
  sourceIds: string[];
}

export interface HistoricalRelationship {
  id: string;
  fromId: string;
  toId: string;
  relationshipType: HistoricalRelationshipType;
  supportingClaimIds: string[];
  interpretationStatus: EpistemicStatus;
}

export interface HistoricalOutcomeSeries {
  id: string;
  caseId: string;
  indicator: string;
  units: string;
  population: string;
  geography: string;
  geographyBoundaryVersion?: string;
  dataPoints: { period: string; value: number | null; uncertainty?: string }[];
  sourceIds: string[];
  comparabilityNotes: string;
  causalCaveat: string;
}

export interface HistoricalCase {
  id: string;
  slug: string;
  title: string;
  description: string;
  jurisdictions: string[];
  period: HistoricalDate;
  issueTags: string[];
  policyIds: string[];
  eventIds: string[];
  claimIds: string[];
  revision: number;
  reviewState: ReviewState;
  dataStatus: DataStatus;
  limitations: string[];
}

export interface RetrospectiveDataset {
  cases: HistoricalCase[];
  policies: HistoricalPolicy[];
  events: HistoricalEvent[];
  claims: HistoricalClaim[];
  sources: HistoricalSource[];
  relationships: HistoricalRelationship[];
  outcomes: HistoricalOutcomeSeries[];
}
