export type EpistemicStatus = 
  | 'Verified' 
  | 'Supported' 
  | 'Derived' 
  | 'Disputed' 
  | 'Unclear' 
  | 'Unknown';

export type SourceType = 
  | 'Primary' 
  | 'Secondary' 
  | 'Derived';

export type ClaimType =
  | 'Statement'
  | 'Authority'
  | 'Appropriation'
  | 'Expenditure'
  | 'Implementation'
  | 'Outcome'
  | 'Causal Claim'
  | 'Other';

export type EvidentiaryStrength =
  | 'Direct'
  | 'Strong'
  | 'Corroborative'
  | 'Limited'
  | 'Contested'
  | 'Insufficient'
  | 'Context Only';

export type DataStatus = 
  | 'Verified Real-World Record'
  | 'Simulated Demonstration Record'
  | 'Partially Verified Record';

export type AuthorityType = 
  | 'Legislative' 
  | 'Executive' 
  | 'Regulatory' 
  | 'Budgetary' 
  | 'Enforcement' 
  | 'Administrative' 
  | 'Oversight' 
  | 'Appointment' 
  | 'Advisory';

export type RecordStatus = 
  | 'Proposed' 
  | 'Announced' 
  | 'Pending' 
  | 'Introduced' 
  | 'Funded' 
  | 'Partially implemented' 
  | 'Implemented' 
  | 'Superseded' 
  | 'Expired' 
  | 'Insufficient evidence' 
  | 'Outcome measurement pending';

export type SpecificityLevel = 
  | 'General aspiration' 
  | 'Target without timeline' 
  | 'Specific implementation plan' 
  | 'Legislative draft / Rule proposal';

export interface EvidenceItem {
  id: string;
  title: string;
  sourceType: SourceType;
  claimType: ClaimType;
  evidentiaryStrength: EvidentiaryStrength;
  publisher: string;
  publicationDate: string;
  urlPlaceholder: string;
  excerpt: string;
  supportsClaim: string;
  establishes: string[];
  doesNotEstablish: string[];
  epistemicStatus: EpistemicStatus;
  methodologyNote?: string;
  dataStatus: DataStatus;
  isDemoData: boolean;
}

export type InstitutionRelationshipType =
  | 'Oversees'
  | 'Funds'
  | 'Appoints'
  | 'Confirms'
  | 'Regulates'
  | 'Administers'
  | 'Audits'
  | 'Contracts With'
  | 'Depends On'
  | 'Constrained By'
  | 'Coordinates With';

export interface InstitutionRelationship {
  id: string;
  sourceInstitutionId: string;
  targetInstitutionId: string;
  relationshipType: InstitutionRelationshipType;
  description: string;
  legalBasis: string;
  evidenceId: string;
  epistemicStatus: EpistemicStatus;
}

export interface AuthorityDetail {
  id: string;
  authorityType: AuthorityType;
  title: string;
  legalBasis: string; // e.g. "DC Official Code § 1-204.04 (Home Rule Act)"
  jurisdiction: string;
  relevantInstitutionId: string;
  whatItControls: string[];
  whatItDoesNotControl: string[]; // Crucial safeguard against simplistic blame attribution
  dependencies: string[];
  sourceEvidenceId: string;
}

export interface Indicator {
  name: string;
  baseline: { value: string | number; year: string };
  current: { value: string | number; year: string; unit?: string };
  trendDirection: 'increasing' | 'decreasing' | 'stable' | 'fluctuating';
  trendMeaning: 'favorable' | 'unfavorable' | 'neutral' | 'unspecified';
  sourceName: string;
  dataSeries: { year: string; value: number }[];
  methodologicalLimitation: string;
}

export interface PublicProblem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  geography: string;
  jurisdictionLevel: 'District' | 'Federal' | 'Regional' | 'Ward';
  affectedPopulation: string;
  trendSummary: string;
  indicators: Indicator[];
  institutionIds: string[];
  commitmentIds: string[];
  evidenceIds: string[];
  lastUpdated: string;
  dataStatus: DataStatus;
  isDemoData: boolean;
}

export interface Institution {
  id: string;
  name: string;
  abbreviation: string;
  institutionType: 'Legislative Body' | 'Executive Office' | 'Independent Agency' | 'Regional Authority' | 'Judicial / Prosecutorial' | 'Department';
  jurisdiction: string;
  mission: string;
  formalAuthoritySummary: string;
  legalBasis: string;
  keyResponsibilities: string[];
  jurisdictionalLimits: string[];
  authorities: AuthorityDetail[];
  leadershipActorIds: string[];
  relevantProblemIds: string[];
  evidenceIds: string[];
  dataStatus: DataStatus;
  isDemoData: boolean;
}

export interface PublicActor {
  id: string;
  name: string;
  office: string;
  institutionId: string;
  termDates: string;
  termStatus: 'Current' | 'Former';
  jurisdiction: string;
  officialWebsitePlaceholder: string;
  relevantAuthoritySummary: string;
  authorities: AuthorityDetail[];
  commitmentIds: string[];
  // Database descriptors (NOT political ratings)
  documentedCommitmentsCount: number;
  specificPlansCount: number;
  implementationRecordsCount: number;
  outcomeDataAvailableCount: number;
  insufficientEvidenceCount: number;
  evidenceIds: string[];
  dataStatus: DataStatus;
  isDemoData: boolean;
}

export interface ResourceBreakdown {
  label: string;
  proposedAmount?: number;
  authorizedAmount?: number;
  appropriatedAmount?: number;
  spentAmount?: number;
  currencyUnit: string;
  fiscalYear: string;
  notes: string;
  evidenceId: string;
}

export interface ImplementationEvent {
  id: string;
  date: string;
  eventType: 
    | 'Bill introduced' 
    | 'Bill enacted' 
    | 'Executive order issued' 
    | 'Regulation adopted' 
    | 'Agency program created' 
    | 'Funding appropriated' 
    | 'Contract awarded' 
    | 'Pilot launched' 
    | 'Program expanded' 
    | 'Program discontinued' 
    | 'Audit released';
  title: string;
  description: string;
  responsibleEntity: string;
  status: 'Completed' | 'In progress' | 'Halted' | 'Under review';
  evidenceId: string;
  epistemicStatus: EpistemicStatus;
}

export interface OutcomeMeasurement {
  id: string;
  metricName: string;
  baseline: { value: string; period: string };
  currentMeasurement: { value: string; period: string };
  timeframe: string;
  source: string;
  evidenceId: string;
  knownMethodologicalLimitations: string;
  causalCaveat: string; // "Correlation does not establish causation" reminder
  epistemicStatus: EpistemicStatus;
}

export interface ActionPlan {
  concreteActions: string[];
  responsibleAgencies: string[];
  implementationMechanism: string;
  timelineEstimate: string;
  budgetAllocatedOrRequired: string;
  legislativeRequirements: string[];
  regulatoryRequirements: string[];
  performanceIndicators: string[];
}

export interface Commitment {
  id: string;
  title: string;
  actorId: string;
  problemId: string;
  date: string;
  originalWordingOrParaphrase: string;
  sourceStatement: string;
  sourceEvidenceId: string;
  specificityLevel: SpecificityLevel;
  status: RecordStatus;
  authorityCheck: {
    canActorDirectlyExecute: boolean;
    requiredInstitutions: string[];
    legalPrerequisites: string[];
    dependencies: string[];
  };
  plan?: ActionPlan;
  resources: ResourceBreakdown[];
  implementationEvents: ImplementationEvent[];
  outcomes: OutcomeMeasurement[];
  unknowns: string[]; // "What we still don't know" panel
  evidenceIds: string[];
  lastVerifiedDate: string;
  dataStatus: DataStatus;
  isDemoData: boolean;
  // POWER Plan Object additions (Business Plan v2.0)
  version?: string;
  participationStatus?: ParticipationStatus;
  interventionSequence?: string[];
  vetoPoints?: string[];
  blockers?: string[];
  flourishingDomains?: FlourishingDomainName[];
  mandateStatus?: 'Campaign Proposal' | 'Active Mandate' | 'Council Stalled' | 'Enacted & Funded' | 'Vetoed / Blocked';
}

export type ParticipationStatus = 
  | 'Candidate-Submitted' 
  | 'Office-Verified' 
  | 'POWER-Compiled';

export type FlourishingDomainName =
  | 'Material security'
  | 'Health'
  | 'Education and capability'
  | 'Safety and justice'
  | 'Belonging and civic agency'
  | 'Environment and place'
  | 'Institutional dignity'
  | 'Future capability';

export interface FlourishingIndicator {
  name: string;
  currentValue: string;
  baselineValue: string;
  distributionMetric: string; // e.g. "By Ward: Ward 8 (56.8%) vs Ward 3 (36.2%)"
  source: string;
  causalConfidence: 'Direct' | 'Supported' | 'Correlated' | 'Macro Trend' | 'Unestablished';
  equityNote: string;
  lagTime: string;
}

export interface FlourishingDomain {
  domain: FlourishingDomainName;
  description: string;
  requiredInterpretation: string;
  indicators: FlourishingIndicator[];
}

export type EthicsSignalStatus = 
  | 'Unreviewed' 
  | 'Under Review' 
  | 'Explained' 
  | 'Corrected' 
  | 'Substantiated Concern' 
  | 'Insufficient Evidence';

export type EthicsSignalCategory =
  | 'Concentrated Control'
  | 'Procurement Anomaly'
  | 'Campaign Finance / Lobbying Overlap'
  | 'Revolving-Door Relationship'
  | 'Dark-Money Opacity'
  | 'Selective Enforcement'
  | 'Unusual Procedural Change'
  | 'Gerrymandering Risk';

export interface EthicsSignal {
  id: string;
  title: string;
  category: EthicsSignalCategory;
  signalDefinition: string;
  sourceSet: string[];
  thresholdMethod: string;
  status: EthicsSignalStatus;
  explanation: string;
  counterevidence: string;
  reviewProcess: string;
  targetEntityName: string;
  targetEntityId: string;
  targetEntityType: 'Official' | 'Institution' | 'Procurement Contract';
  dateFlagged: string;
  dataStatus: DataStatus;
}

export interface MoneyInfluenceRecord {
  id: string;
  donorOrEntity: string;
  recipientOfficeOrCandidate: string;
  amount: number;
  date: string;
  category: 'Campaign Contribution' | 'Lobbying Registration' | 'Independent Expenditure' | 'Municipal Vendor Contract';
  relatedPlanOrProblemId?: string;
  disclosureSource: string;
  officialRecordUrl: string;
  caveatNote: string;
  dataStatus: DataStatus;
}

export interface CivicWireItem {
  id: string;
  timestamp: string;
  title: string;
  summary: string;
  feedSource: 'DC Register' | 'DC Council Legislative Information System' | 'Mayor Press Office' | 'Office of the District of Columbia Auditor (ODCA)' | 'Public Service Commission';
  relatedProblemId?: string;
  relatedCommitmentId?: string;
  officialDocUrl: string;
  epistemicStatus: EpistemicStatus;
}

export interface PoliticalParty {
  id: string;
  name: string;
  shortCode: string;
  ballotStatusDC: 'Major Party (Automatic Ballot Status)' | 'Recognized Minor Party' | 'Independent / Non-Affiliated';
  historicalFounding: string;
  coreCivicPlatform: string[];
  localDCStructure: string;
  officialWebsite: string;
  neutralHistoricalNote: string;
}

export interface CivicActionItem {
  id: string;
  title: string;
  type: 'Public Hearing Testimony' | 'Agency Rulemaking Comment' | 'Advisory Neighborhood Commission (ANC)' | 'FOIA / Public Records Request' | 'Voter Registration & Balloting';
  entity: string;
  deadlineOrDate: string;
  proceduralGuide: string;
  actionUrl: string;
  relatedProblemId?: string;
}

export interface MandateLedgerEntry {
  id: string;
  planId: string;
  planTitle: string;
  electedActorName: string;
  electedOffice: string;
  electionYear: string;
  mandateStatus: 'Enacted & Active' | 'Enacted & Funded' | 'Partially Funded' | 'Veto Point Stalled' | 'Superseded / Modified';
  actionMilestones: {
    stage: 'Legislation Introduced' | 'Budget Approved' | 'Procurement RFP' | 'Agency Rule Issued' | 'Public Audit';
    date: string;
    details: string;
    sourceEvidenceId: string;
    isBlocked?: boolean;
    blockerReason?: string;
  }[];
  budgetRequested: number;
  budgetAppropriated: number;
  budgetExpended: number;
  currencyUnit: string;
  vetoPointsAndObstacles: string[];
  dataStatus: DataStatus;
}

export interface CorrectionSubmission {
  id: string;
  timestamp: string;
  recordType: 'Problem' | 'Institution' | 'Actor' | 'Commitment' | 'Evidence';
  recordId: string;
  recordTitle: string;
  issueType: 
    | 'Incorrect fact' 
    | 'Missing source' 
    | 'Outdated information' 
    | 'Misclassified authority' 
    | 'Missing implementation evidence' 
    | 'Unwarranted causal claim' 
    | 'Other';
  explanation: string;
  supportingSourceUrlOrDoc: string;
  submitterEmail?: string;
  documentName?: string;
  documentDataUrl?: string;
  status: 'Pending review' | 'Under investigation' | 'Resolved';
}

export interface FeedbackSubmission {
  id: string;
  timestamp: string;
  recordId: string;
  stageName: string;
  feedbackText: string;
  uploadedDocumentTitle?: string;
  verificationBadge: 'Community Submitted' | 'Pending Citation Check';
}
