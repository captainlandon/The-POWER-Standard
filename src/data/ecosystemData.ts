import { 
  FlourishingDomain, 
  EthicsSignal, 
  MoneyInfluenceRecord, 
  CivicWireItem, 
  PoliticalParty, 
  CivicActionItem, 
  MandateLedgerEntry 
} from '../types/power';

/**
 * Flourishing Outcomes Layer (Business Plan v2.0 - Page 13)
 * 8 Domains with illustrative indicators, required interpretations, distribution metrics, and causal caveats.
 */
export const FLOURISHING_DOMAINS: FlourishingDomain[] = [
  {
    domain: 'Material security',
    description: 'Income security, housing affordability, food accessibility, and core municipal public services.',
    requiredInterpretation: 'Show distribution, baseline, source, lag, and policy reach. Never collapse into a single composite score.',
    indicators: [
      {
        name: 'Severe Housing Cost Burden (>50% income on housing)',
        currentValue: '21.4% of households',
        baselineValue: '19.8% (2019)',
        distributionMetric: 'By Ward: Ward 8 (38.2%) vs. Ward 3 (12.4%)',
        source: 'U.S. Census Bureau ACS 5-Year Estimates & DC Fiscal Policy Institute',
        causalConfidence: 'Macro Trend',
        equityNote: 'Extremely concentrated among renter households earning under 30% AMI ($42,000 for family of 4).',
        lagTime: '12-month data release lag'
      },
      {
        name: 'Household Food Insecurity Rate',
        currentValue: '13.1% of residents',
        baselineValue: '10.6% (2020)',
        distributionMetric: 'By Ward: Ward 7 & 8 (31.5%) vs. Ward 2 & 3 (4.2%)',
        source: 'Capital Area Food Bank Hunger Report',
        causalConfidence: 'Correlated',
        equityNote: 'Directly impacted by grocery square-footage disparities east of the Anacostia River.',
        lagTime: 'Annual survey'
      }
    ]
  },
  {
    domain: 'Health',
    description: 'Healthy life expectancy, preventable illness, mental health access, and environmental exposures.',
    requiredInterpretation: 'Separate access, output, outcome, and causal confidence. Distinguish local intervention from broader epidemiological trends.',
    indicators: [
      {
        name: 'Life Expectancy at Birth Disparity Gap',
        currentValue: '14.8 year gap',
        baselineValue: '15.4 year gap (2018)',
        distributionMetric: 'Ward 3 (85.2 years) vs. Ward 8 (70.4 years)',
        source: 'D.C. Department of Health (DC Health) Vital Statistics Report',
        causalConfidence: 'Macro Trend',
        equityNote: 'Reflects longitudinal multi-generational structural determinants of health and maternal care access.',
        lagTime: '24-month lag'
      },
      {
        name: 'Preventable Chronic Asthma Emergency Visits (Youth)',
        currentValue: '118 per 1,000 children',
        baselineValue: '132 per 1,000 (2021)',
        distributionMetric: 'Ward 8 (212 per 1,000) vs. Ward 3 (18 per 1,000)',
        source: 'Children’s National Hospital Community Health Needs Assessment',
        causalConfidence: 'Correlated',
        equityNote: 'Correlates with older housing stock, particulate emissions near transit corridors, and indoor allergen triggers.',
        lagTime: '6-month reporting lag'
      }
    ]
  },
  {
    domain: 'Education and capability',
    description: 'Academic attainment, early literacy, occupational skills, and digital public access.',
    requiredInterpretation: 'Disaggregate opportunity and outcome. Do not conflate school administrative outputs with broader socioeconomic capability.',
    indicators: [
      {
        name: 'Grade 3 Reading Proficiency (Structured Early Literacy Benchmark)',
        currentValue: '34.2% meeting or exceeding',
        baselineValue: '31.1% (2022)',
        distributionMetric: 'At-risk students (18.6%) vs. Non-at-risk (64.2%)',
        source: 'Office of the State Superintendent of Education (OSSE) DC CAPE Assessments',
        causalConfidence: 'Direct',
        equityNote: 'Reading proficiency in Grade 3 is a verified longitudinal predictor of high school graduation and lifelong earning.',
        lagTime: 'Annual school year cycle'
      },
      {
        name: 'High-Speed Residential Broadband Adoption',
        currentValue: '87.4% of households',
        baselineValue: '78.2% (2019)',
        distributionMetric: 'Wards 1-6 (94.1%) vs. Wards 7-8 (76.8%)',
        source: 'DC Office of the Chief Technology Officer (OCTO) Digital Equity Report',
        causalConfidence: 'Direct',
        equityNote: 'Affordable Connectivity Program (ACP) sunset created substantial renewal cliff risk.',
        lagTime: 'Quarterly audit'
      }
    ]
  },
  {
    domain: 'Safety and justice',
    description: 'Freedom from violence, victimization, community trust, due process, and conditions of confinement.',
    requiredInterpretation: 'Avoid single-metric claims. Record measurement bias, reporting thresholds, and national macroeconomic trends.',
    indicators: [
      {
        name: 'Citywide Homicide Rate (per 100,000)',
        currentValue: '28.4 per 100k (2024 YTD annualized)',
        baselineValue: '39.8 per 100k (2023)',
        distributionMetric: '72% of homicides concentrated in Wards 7 and 8',
        source: 'Metropolitan Police Department (MPD) Criminal Incident Portal',
        causalConfidence: 'Correlated',
        equityNote: 'Declines mirrored national 2024 urban trends; causal impact of Secure DC Act remains contested and methodologically disputed.',
        lagTime: 'Real-time updated weekly'
      },
      {
        name: 'Youth Diversion & Pretrial Supervised Success Rate',
        currentValue: '82.6% completed without rearrest',
        baselineValue: '79.1% (2022)',
        distributionMetric: 'Department of Youth Rehabilitation Services (DYRS) Community Cohorts',
        source: 'DYRS Annual Performance Oversight Hearing Records',
        causalConfidence: 'Supported',
        equityNote: 'Measures program participants; does not track youth processed through adult judicial transfer.',
        lagTime: 'Annual oversight hearing'
      }
    ]
  },
  {
    domain: 'Belonging and civic agency',
    description: 'Social trust, democratic participation, municipal representation, and grassroots community connection.',
    requiredInterpretation: 'Use transparent instruments and protect sensitive data. Track voter participation across primary and general cycles.',
    indicators: [
      {
        name: 'Advisory Neighborhood Commission (ANC) Voter Participation Rate',
        currentValue: '38.2% registered voter turnout',
        baselineValue: '34.6% (2020 cycle)',
        distributionMetric: 'Ward 3 (54.1%) vs. Ward 8 (22.8%)',
        source: 'District of Columbia Board of Elections (DCBOE) Certified Election Results',
        causalConfidence: 'Direct',
        equityNote: 'ANCs are the most localized elected statutory bodies in D.C. government; participation mirrors historic socio-economic lines.',
        lagTime: 'Biennial election certification'
      },
      {
        name: 'Public Comment Participation in Council Hearings',
        currentValue: '4,820 citizen testimonies filed',
        baselineValue: '3,210 (2021 pre-hybrid virtual)',
        distributionMetric: 'Virtual testimony expanded representation from working caregivers and hourly workers by 41%',
        source: 'Council of the District of Columbia Office of the Secretary',
        causalConfidence: 'Direct',
        equityNote: 'Hybrid hearing technology lowered procedural barriers to formal legislative participation.',
        lagTime: 'Monthly tally'
      }
    ]
  },
  {
    domain: 'Environment and place',
    description: 'Clean air and water, climate resilience, public transit equity, public realm quality, and urban canopy.',
    requiredInterpretation: 'Distinguish local regulatory control from regional or interstate airshed and watershed dynamics.',
    indicators: [
      {
        name: 'Urban Tree Canopy Coverage by Ward',
        currentValue: '37.2% citywide',
        baselineValue: '35.8% (2015)',
        distributionMetric: 'Ward 3 (54.8%) vs. Ward 5 (21.4%) and Ward 1 (24.2%)',
        source: 'District Department of Transportation (DDOT) Urban Forestry Division',
        causalConfidence: 'Direct',
        equityNote: 'Disproportionate tree canopy deficits correlate directly with urban heat island spikes (up to 8°F difference in summer).',
        lagTime: '3-year remote sensing LiDAR audit'
      },
      {
        name: 'Peak Public Bus Reliability (On-Time Performance on Priority Corridors)',
        currentValue: '78.4% on-time',
        baselineValue: '69.2% (2022 pre-bus lane)',
        distributionMetric: 'Corridors with red-painted dedicated lanes (86.1%) vs mixed traffic (68.9%)',
        source: 'Washington Metropolitan Area Transit Authority (WMATA) MetroBus Performance Dashboard',
        causalConfidence: 'Direct',
        equityNote: 'Essential transit-dependent riders are concentrated east of 16th Street and east of the river.',
        lagTime: 'Monthly automated vehicle location (AVL) data'
      }
    ]
  },
  {
    domain: 'Institutional dignity',
    description: 'Procedural fairness, transparency of agency decisions, administrative burden reduction, and citizen respect.',
    requiredInterpretation: 'Combine administrative processing timeliness data with lived user experience surveys.',
    indicators: [
      {
        name: 'Average Processing Time for Building Permit Plan Reviews',
        currentValue: '32 business days',
        baselineValue: '58 business days (2021)',
        distributionMetric: 'Standard residential (14 days) vs Commercial / Affordable Multi-family (68 days)',
        source: 'Department of Buildings (DOB) Quarterly Performance Metrics',
        causalConfidence: 'Direct',
        equityNote: 'Extended permit timelines disproportionately increase holding carrying costs for nonprofit affordable developers.',
        lagTime: 'Quarterly release'
      },
      {
        name: 'FOIA (Freedom of Information Act) Statutory Timeliness Compliance',
        currentValue: '61.4% answered within 15-day statutory deadline',
        baselineValue: '48.2% (2022)',
        distributionMetric: 'Agencies: MPD (34.2%) vs OCTO (88.4%)',
        source: 'Executive Office of the Mayor Annual FOIA Disclosure Report',
        causalConfidence: 'Direct',
        equityNote: 'Delayed public records requests directly obstruct journalistic and public oversight of executive governance.',
        lagTime: 'Annual release'
      }
    ]
  },
  {
    domain: 'Future capability',
    description: 'Fiscal stability, municipal debt sustainability, infrastructure state of good repair, and climate adaptation.',
    requiredInterpretation: 'Disclose economic forecasts, demographic uncertainty, revenue vulnerabilities, and intergenerational trade-offs.',
    indicators: [
      {
        name: 'Municipal General Fund Budget Stabilization Reserve',
        currentValue: '$1.42B (60 days of operating expenses)',
        baselineValue: '$1.28B (FY2022)',
        distributionMetric: 'Mandated by D.C. Official Code § 47-392.02',
        source: 'Office of the Chief Financial Officer (OCFO) Comprehensive Annual Financial Report (ACFR)',
        causalConfidence: 'Direct',
        equityNote: 'Safeguards city credit rating (Aaa/AA+) preventing debt servicing cost spikes.',
        lagTime: 'Annual certified audit'
      },
      {
        name: 'Commercial Property Tax Base Resilience (Remote Work Structural Shift)',
        currentValue: '$2.14B annual revenue (-18.2% from peak)',
        baselineValue: '$2.62B (FY2019)',
        distributionMetric: 'Downtown Commercial Core (Ward 2) vacancy rate at 22.4%',
        source: 'D.C. Council Budget Office Fiscal Analysis',
        causalConfidence: 'Direct',
        equityNote: 'Constrains local funding availability for discretionary social safety net and housing appropriations.',
        lagTime: 'Quarterly revenue estimate certification'
      }
    ]
  }
];

/**
 * Ethics Signals & Panoptica-Style Indicators (Business Plan v2.0 - Page 14)
 * Surface observable patterns consistent with known governance risks.
 * Built strictly as an evidence triage system, NOT a guilt engine.
 */
export const ETHICS_SIGNALS: EthicsSignal[] = [
  {
    id: 'sig-001',
    title: 'Sole-Source Procurement Pattern in Digital Justice Contract',
    category: 'Procurement Anomaly',
    signalDefinition: 'Issuance of three consecutive emergency sole-source contract extensions without competitive bidding, exceeding $5M total.',
    sourceSet: [
      'D.C. Office of Contracting and Procurement (OCP) Contract Awards Database',
      'D.C. Council Approval Resolution PR25-0412'
    ],
    thresholdMethod: 'Contracts over $1M extended without RFP more than twice within a 24-month window.',
    status: 'Under Review',
    explanation: 'The Office of the Chief Technology Officer renewed proprietary case management software under emergency sole-source determinations citing business continuity risks.',
    counterevidence: 'Agency filed an Emergency Justification Memo asserting that transition to an open system during active court integration would cause immediate disruption to public records.',
    reviewProcess: 'Independent editorial panel conducts review; agency was provided 14 business days for formal response before signal publication.',
    targetEntityName: 'Office of the Chief Technology Officer (OCTO)',
    targetEntityId: 'octo-dc',
    targetEntityType: 'Institution',
    dateFlagged: '2024-06-18',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'sig-002',
    title: 'Campaign Contribution Timing Relative to Housing Trust Fund Award',
    category: 'Campaign Finance / Lobbying Overlap',
    signalDefinition: 'Principals of a real estate development partnership contributed maximum allowable individual donations within 30 days of DHCD project underwriting approval.',
    sourceSet: [
      'Office of Campaign Finance (OCF) Periodic Contribution Filings',
      'Department of Housing and Community Development (DHCD) HPTF Award Notice Round 2023-B'
    ],
    thresholdMethod: 'Executive committee contribution timing matching capital project authorization within a 45-day window.',
    status: 'Explained',
    explanation: 'Four partners of an affordable housing developer made bundled contributions totaling $8,000 to an incumbent mayoral constituent service fund concurrent with HPTF selection.',
    counterevidence: 'Developer demonstrated that contributions occurred during a pre-scheduled annual civic breakfast attended by over 40 corporate entities; DHCD scoring was conducted by a third-party architectural advisory committee.',
    reviewProcess: 'Human editorial review verified scoring dates; status updated to Explained with full meeting notes cited.',
    targetEntityName: 'Department of Housing and Community Development (DHCD)',
    targetEntityId: 'dhcd',
    targetEntityType: 'Institution',
    dateFlagged: '2024-03-12',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'sig-003',
    title: 'Revolving-Door Transition: Agency Director to Transit Contractor',
    category: 'Revolving-Door Relationship',
    signalDefinition: 'A senior municipal transportation deputy joined a micromobility concessionaire within 6 months of the agency awarding a multi-year exclusive operating permit.',
    sourceSet: [
      'Board of Ethics and Government Accountability (BEGA) Post-Employment Disclosures',
      'District Department of Transportation (DDOT) Public Space Committee Orders'
    ],
    thresholdMethod: 'Executive transition to an entity regulated or contracted by the official’s former bureau within the 1-year statutory cooling period.',
    status: 'Substantiated Concern',
    explanation: 'Former deputy director registered as government affairs consultant for an electric scooter operator holding a District permit.',
    counterevidence: 'BEGA formal advisory opinion granted conditional clearance provided the individual abstains from direct DDOT lobbying for 12 months; complainant contends informal communications continue.',
    reviewProcess: 'Reviewed by standards panel; BEGA advisory opinion appended to public record.',
    targetEntityName: 'District Department of Transportation (DDOT)',
    targetEntityId: 'ddot',
    targetEntityType: 'Institution',
    dateFlagged: '2024-05-22',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'sig-004',
    title: 'Council Emergency Declaration Circumventing Second Reading',
    category: 'Unusual Procedural Change',
    signalDefinition: 'Substantive permanent policy enacted via sequential 90-day emergency and temporary acts over 18 months, avoiding mandatory public committee hearings.',
    sourceSet: [
      'D.C. Council Legislative Information System (LIMS)',
      'D.C. Home Rule Act § 412(a) Procedural Guidelines'
    ],
    thresholdMethod: 'Use of emergency legislation more than three consecutive times for policy containing ongoing fiscal expenditures.',
    status: 'Under Review',
    explanation: 'Council utilized emergency resolutions to amend commercial licensing standards three times, bypassing standard committee public hearings.',
    counterevidence: 'Legislative sponsors asserted that delay would cause catastrophic economic non-compliance for small vendors under shifting federal guidelines.',
    reviewProcess: 'Scheduled for periodic audit review; committee hearing transcripts examined.',
    targetEntityName: 'Council of the District of Columbia',
    targetEntityId: 'dc-council',
    targetEntityType: 'Institution',
    dateFlagged: '2024-07-08',
    dataStatus: 'Simulated Demonstration Record'
  }
];

/**
 * Money and Influence Layer (Business Plan v2.0 - Page 6 & 10)
 * Linking campaign contributions, lobbying, and contracts to plans.
 */
export const MONEY_INFLUENCE_RECORDS: MoneyInfluenceRecord[] = [
  {
    id: 'mi-001',
    donorOrEntity: 'Mid-Atlantic Transit Contractors Coalition PAC',
    recipientOfficeOrCandidate: 'Committee on Transportation & the Environment (Leadership)',
    amount: 12500,
    date: '2023-10-14',
    category: 'Campaign Contribution',
    relatedPlanOrProblemId: 'comm-bus-lanes',
    disclosureSource: 'DC Office of Campaign Finance (OCF) Filing No. 2023-C-114',
    officialRecordUrl: 'https://ocf.dc.gov/contributions/2023-C-114',
    caveatNote: 'Campaign contributions are constitutionally protected political participation; correlation with legislative committee assignments does not establish undue influence or quid-pro-quo.',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'mi-002',
    donorOrEntity: 'Capital Housing Development Group LLC',
    recipientOfficeOrCandidate: 'Executive Office of the Mayor (Inaugural / Constituent Fund)',
    amount: 25000,
    date: '2023-01-20',
    category: 'Independent Expenditure',
    relatedPlanOrProblemId: 'comm-housing-36k',
    disclosureSource: 'DC Board of Ethics and Government Accountability (BEGA) Constituent Fund Report',
    officialRecordUrl: 'https://bega.dc.gov/reports/inaugural-2023',
    caveatNote: 'Contributions were compliant with local statutory caps in place at time of filing.',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'mi-003',
    donorOrEntity: 'National Public Safety Technologies Inc.',
    recipientOfficeOrCandidate: 'Metropolitan Police Department (Contractor)',
    amount: 4200000,
    date: '2024-04-02',
    category: 'Municipal Vendor Contract',
    relatedPlanOrProblemId: 'comm-secure-dc',
    disclosureSource: 'D.C. Office of Contracting & Procurement Award CW89240',
    officialRecordUrl: 'https://ocp.dc.gov/awards/CW89240',
    caveatNote: 'Award was conducted under competitively solicited master procurement schedule.',
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'mi-004',
    donorOrEntity: 'Greater Washington Association of Realtors',
    recipientOfficeOrCandidate: 'D.C. Council At-Large Incumbent',
    amount: 5000,
    date: '2024-02-18',
    category: 'Lobbying Registration',
    relatedPlanOrProblemId: 'comm-housing-trust-fund',
    disclosureSource: 'BEGA Lobbyist Registration No. LR-2024-089',
    officialRecordUrl: 'https://bega.dc.gov/lobbying/LR-2024-089',
    caveatNote: 'Lobbying expenditures reflect disclosed operational fees for legislative advocacy on commercial property tax rates.',
    dataStatus: 'Simulated Demonstration Record'
  }
];

/**
 * Civic Wire (Business Plan v2.0 - Page 6)
 * Curated feeds connecting daily developments to stable plans and public records.
 */
export const CIVIC_WIRE_FEED: CivicWireItem[] = [
  {
    id: 'wire-001',
    timestamp: '2024-09-18 10:30 AM',
    title: 'DC Council Enacts Emergency Housing Trust Fund Oversight Resolution',
    summary: 'The Council passed PR25-0812 requiring DHCD to report unspent HPTF encumbrances within 30 days following an ODCA audit finding $48M in delayed pipeline disbursements.',
    feedSource: 'DC Council Legislative Information System',
    relatedProblemId: 'housing-affordability',
    relatedCommitmentId: 'comm-housing-trust-fund',
    officialDocUrl: 'https://lims.dccouncil.gov/Legislation/PR25-0812',
    epistemicStatus: 'Verified'
  },
  {
    id: 'wire-002',
    timestamp: '2024-09-15 02:15 PM',
    title: 'Mayor Orders Agency Pilot on Dedicated K Street Bus Rapid Transit Corridor',
    summary: 'Executive Order 2024-089 directs DDOT to install center-running bus priority dividers between 12th and 20th Streets NW by Spring 2025.',
    feedSource: 'Mayor Press Office',
    relatedProblemId: 'transit-reliability',
    relatedCommitmentId: 'comm-bus-lanes',
    officialDocUrl: 'https://mayor.dc.gov/release/executive-order-2024-089',
    epistemicStatus: 'Verified'
  },
  {
    id: 'wire-003',
    timestamp: '2024-09-10 09:00 AM',
    title: 'ODCA Releases Annual Audit of Pre-K and Elementary Literacy Curricula',
    summary: 'Auditor findings reveal that 74% of DCPS elementary campuses have completed transition to science-of-reading phonics benchmarks, up from 52% in 2023.',
    feedSource: 'Office of the District of Columbia Auditor (ODCA)',
    relatedProblemId: 'school-literacy',
    relatedCommitmentId: 'comm-early-literacy',
    officialDocUrl: 'https://dcauditor.org/report/literacy-curricula-2024',
    epistemicStatus: 'Verified'
  },
  {
    id: 'wire-004',
    timestamp: '2024-08-28 04:45 PM',
    title: 'DC Register Publishes Final Rulemaking for Permanent Supportive Housing Standards',
    summary: 'DHS and DCHA finalized Title 29 DCMR Chapter 25 amendments streamlining tenant criminal background review for housing voucher lease-up.',
    feedSource: 'DC Register',
    relatedProblemId: 'chronic-homelessness',
    relatedCommitmentId: 'comm-homelessness-end-chronic',
    officialDocUrl: 'https://dcregs.dc.gov/notice/N0112456',
    epistemicStatus: 'Verified'
  }
];

/**
 * Party Archive (Business Plan v2.0 - Page 6 & 16)
 * Neutral profiles, platforms, ballot status, and historical context of major and minor parties.
 * Nonpartisan educational resource without candidate endorsement.
 */
export const POLITICAL_PARTIES: PoliticalParty[] = [
  {
    id: 'party-dem',
    name: 'District of Columbia Democratic Party (DC Dems)',
    shortCode: 'DEM',
    ballotStatusDC: 'Major Party (Automatic Ballot Status)',
    historicalFounding: '1792 (National) / 1955 (Formal D.C. Democratic State Committee)',
    coreCivicPlatform: [
      'Advancing immediate D.C. Statehood (51st state - Washington, Douglass Commonwealth)',
      'Expansion of municipal investments in affordable housing covenants and rental vouchers',
      'Universal early childhood education and public school equity',
      'Restoration of complete local legislative autonomy free of Congressional Home Rule riders'
    ],
    localDCStructure: 'Governed by the 81-member D.C. Democratic State Committee with elected representatives from each of D.C.’s eight wards.',
    officialWebsite: 'https://dcdemocraticparty.org',
    neutralHistoricalNote: 'The Democratic Party has held the Mayoralty and an overwhelming majority of D.C. Council seats since the inception of the Home Rule Act of 1973.'
  },
  {
    id: 'party-rep',
    name: 'District of Columbia Republican Party (DCGOP)',
    shortCode: 'REP',
    ballotStatusDC: 'Major Party (Automatic Ballot Status)',
    historicalFounding: '1854 (National) / 1855 (D.C. Republican Committee)',
    coreCivicPlatform: [
      'Municipal fiscal discipline and reduction of commercial and personal tax rates',
      'Expansion of school choice vouchers (D.C. Opportunity Scholarship Program)',
      'Rigorous enforcement of criminal codes and support for federal law enforcement collaboration',
      'Deregulation of building codes and zoning hurdles to accelerate market housing construction'
    ],
    localDCStructure: 'Governed by the D.C. Republican State Committee with representation across all eight political wards.',
    officialWebsite: 'https://dcgop.com',
    neutralHistoricalNote: 'DCGOP maintains recognized major party ballot status in D.C. and regularly nominates candidates for local non-mayoral and delegate offices.'
  },
  {
    id: 'party-dcstatehood',
    name: 'D.C. Statehood Green Party',
    shortCode: 'STG',
    ballotStatusDC: 'Recognized Minor Party',
    historicalFounding: '1970 (Formed as D.C. Statehood Party by Julius Hobson; affiliated with Green Party in 1999)',
    coreCivicPlatform: [
      'Uncompromising constitutional statehood and full self-determination for District residents',
      'Ecological justice, public transit fare-free networks, and zero-carbon municipal buildings',
      'Municipal public banking and aggressive community land trust funding',
      'Workers’ rights, restorative justice, and community-controlled public safety'
    ],
    localDCStructure: 'Grassroots steering committee operating under consensus decision-making.',
    officialWebsite: 'https://dcstatehoodgreen.org',
    neutralHistoricalNote: 'Historically the second-largest vote-receiving party in several D.C. municipal elections, holding an influential legacy in D.C.’s statehood movement.'
  },
  {
    id: 'party-lib',
    name: 'Libertarian Party of the District of Columbia',
    shortCode: 'LIB',
    ballotStatusDC: 'Recognized Minor Party',
    historicalFounding: '1971 (National) / 1975 (D.C. Affiliate)',
    coreCivicPlatform: [
      'Elimination of occupational licensing barriers and commercial regulatory burdens',
      'Decriminalization of victimless offenses and complete civil liberties protection',
      'Privatization of municipal utility concessions and competitive transit bidding',
      'Protection of personal privacy against automated municipal surveillance'
    ],
    localDCStructure: 'Executive committee elected by registered Libertarian Party voters.',
    officialWebsite: 'https://dclp.org',
    neutralHistoricalNote: 'Consistently advocates for civil liberties, constitutional privacy, and reduction of the municipal regulatory footprint in District governance.'
  },
  {
    id: 'party-ind',
    name: 'Independent & Non-Affiliated Voters / Candidates',
    shortCode: 'IND',
    ballotStatusDC: 'Independent / Non-Affiliated',
    historicalFounding: 'Protected by the D.C. Home Rule Act Charter (Mandatory Minority Party / Independent Council Seats)',
    coreCivicPlatform: [
      'Nonpartisan civic accountability and evidence-based municipal performance',
      'Reform of party primary ballot access and establishment of ranked-choice voting (Initiative 83)',
      'Pragmatic constituent service delivery focused on agency responsiveness'
    ],
    localDCStructure: 'Not an organized party; individuals obtain ballot status via qualifying nominating petition signatures.',
    officialWebsite: 'https://dcboe.org',
    neutralHistoricalNote: 'Under the D.C. Home Rule Act, two of the four At-Large Council seats are legally reserved for non-majority party members, frequently won by registered Independents.'
  }
];

/**
 * Action Center - Procedural Civic Participation (Business Plan v2.0 - Page 6)
 * Valid procedural paths to participate in real government operations.
 */
export const CIVIC_ACTION_ITEMS: CivicActionItem[] = [
  {
    id: 'act-001',
    title: 'Testify at Council Public Oversight Hearing on Housing Production Trust Fund',
    type: 'Public Hearing Testimony',
    entity: 'Committee on Housing (Chair: Councilmember Robert White)',
    deadlineOrDate: 'October 24, 2024 at 10:00 AM',
    proceduralGuide: 'Register at least 24 hours in advance. Individuals receive 3 minutes of oral testimony. Written statements accepted up to 14 days following hearing close.',
    actionUrl: 'https://dccouncil.gov/council-hearings/',
    relatedProblemId: 'housing-affordability'
  },
  {
    id: 'act-002',
    title: 'Submit Formal Public Comment on DDOT Priority Bus Lane Rulemaking',
    type: 'Agency Rulemaking Comment',
    entity: 'District Department of Transportation (DDOT)',
    deadlineOrDate: 'November 15, 2024 at 5:00 PM',
    proceduralGuide: 'Submit comments referencing D.C. Register Notice of Proposed Rulemaking Vol. 71, No. 34. Must cite specific subsections of Title 18 DCMR.',
    actionUrl: 'https://dcregs.dc.gov/public/notice/comment',
    relatedProblemId: 'transit-reliability'
  },
  {
    id: 'act-003',
    title: 'Attend Monthly Advisory Neighborhood Commission (ANC) Meeting',
    type: 'Advisory Neighborhood Commission (ANC)',
    entity: 'Local Ward ANCs (ANCs 1A through 8F)',
    deadlineOrDate: 'Held second Tuesday of each month',
    proceduralGuide: 'ANCs give direct input to D.C. agencies on zoning variances, liquor licenses, and public space permits. Agencies are legally required to give "great weight" to ANC recommendations.',
    actionUrl: 'https://anc.dc.gov',
    relatedProblemId: 'housing-affordability'
  },
  {
    id: 'act-004',
    title: 'Register or Verify D.C. Voter Registration for Upcoming General Election',
    type: 'Voter Registration & Balloting',
    entity: 'District of Columbia Board of Elections (DCBOE)',
    deadlineOrDate: 'Registration closes 21 days before election; Same-day registration available with proof of residence',
    proceduralGuide: 'Verify your voting address to receive your official mail-in ballot. All registered D.C. voters are automatically mailed a ballot.',
    actionUrl: 'https://dcboe.org/voters/register-to-vote'
  }
];

/**
 * Mandate Ledger (Business Plan v2.0 - Page 5, 6, 15)
 * Post-election timeline connecting public plans to budgets, legislation, administration, blockers, and outcomes.
 */
export const MANDATE_LEDGER_ENTRIES: MandateLedgerEntry[] = [
  {
    id: 'man-001',
    planId: 'comm-housing-36k',
    planTitle: 'Produce 36,000 New Housing Units (12,000 Affordable) by 2025',
    electedActorName: 'Muriel Bowser',
    electedOffice: 'Mayor of the District of Columbia',
    electionYear: '2022 General Election Mandate',
    mandateStatus: 'Enacted & Active',
    actionMilestones: [
      {
        stage: 'Legislation Introduced',
        date: 'May 2019',
        details: 'Mayor issued Order 2019-036 mandating inter-agency housing production goals across all 10 planning areas.',
        sourceEvidenceId: 'ev-mayor-order-2019'
      },
      {
        stage: 'Budget Approved',
        date: 'June 2022',
        details: 'Council approved record $100M baseline appropriation for Housing Production Trust Fund.',
        sourceEvidenceId: 'ev-budget-act-2024'
      },
      {
        stage: 'Agency Rule Issued',
        date: 'November 2021',
        details: 'Zoning Commission enacted Inclusionary Zoning Plus (IZ+) expansion increasing affordable set-aside bonuses.',
        sourceEvidenceId: 'ev-dmped-housing-report'
      },
      {
        stage: 'Public Audit',
        date: 'August 2022',
        details: 'ODCA issued performance audit finding compliance issues in underwriting lower-income 30% AMI covenant units.',
        sourceEvidenceId: 'ev-odca-hptf-audit-2022',
        isBlocked: true,
        blockerReason: 'Institutional bottleneck: DHCD staffing shortages created 14-month loan execution delays.'
      }
    ],
    budgetRequested: 100000000,
    budgetAppropriated: 100000000,
    budgetExpended: 88400000,
    currencyUnit: 'USD',
    vetoPointsAndObstacles: [
      'High interest-rate environment increased private construction debt costs by 340 basis points',
      'Historic Preservation Review Board (HPRB) variances contested in Ward 2 and Ward 3',
      'DHCD underwriting staffing constraints documented in 2022 ODCA audit'
    ],
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'man-002',
    planId: 'comm-secure-dc',
    planTitle: 'Enact Secure DC Omnibus Crime Legislation & Judicial Pretrial Reforms',
    electedActorName: 'Brooke Pinto',
    electedOffice: 'Councilmember, Ward 2 & Committee on Judiciary and Public Safety Chair',
    electionYear: '2020 & 2024 Mandate',
    mandateStatus: 'Enacted & Funded',
    actionMilestones: [
      {
        stage: 'Legislation Introduced',
        date: 'October 2023',
        details: 'Introduced B25-0345 compiling over 10 prior emergency public safety provisions into unified permanent statute.',
        sourceEvidenceId: 'ev-council-secure-dc-act-2024'
      },
      {
        stage: 'Budget Approved',
        date: 'March 2024',
        details: 'Council allocated $18.2M implementation package for MPD crime scene investigators, forensic lab accreditation, and court tech.',
        sourceEvidenceId: 'ev-council-secure-dc-act-2024'
      },
      {
        stage: 'Agency Rule Issued',
        date: 'May 2024',
        details: 'MPD Chief issued Executive General Order on drug-free zone enforcement procedures and retail theft taskforces.',
        sourceEvidenceId: 'ev-mpd-crime-stats-2024'
      }
    ],
    budgetRequested: 18200000,
    budgetAppropriated: 18200000,
    budgetExpended: 11400000,
    currencyUnit: 'USD',
    vetoPointsAndObstacles: [
      'Home Rule Act restriction: Adult felony prosecution remains under federal executive authority (USAO-DC), outside municipal control',
      'D.C. Superior Court judicial vacancy backlog creates trial scheduling delays of up to 18 months',
      'Congressional House Committee on Oversight and Accountability legislative intervention threats'
    ],
    dataStatus: 'Simulated Demonstration Record'
  },
  {
    id: 'man-003',
    planId: 'comm-bus-lanes',
    planTitle: 'Construct 50 Miles of Dedicated Rapid Transit Bus Lanes by 2026',
    electedActorName: 'Charles Allen',
    electedOffice: 'Councilmember, Ward 6 & Transportation Committee',
    electionYear: '2022 Mandate',
    mandateStatus: 'Partially Funded',
    actionMilestones: [
      {
        stage: 'Legislation Introduced',
        date: 'January 2022',
        details: 'Council passed the Metro Emergency Service Support & Bus Priority Directive.',
        sourceEvidenceId: 'ev-ddot-bus-priority-eval'
      },
      {
        stage: 'Budget Approved',
        date: 'July 2023',
        details: 'FY24 Capital Improvements Plan allocated $42M over 4 years for automated bus lane camera enforcement and pavement marking.',
        sourceEvidenceId: 'ev-ddot-bus-priority-eval'
      },
      {
        stage: 'Procurement RFP',
        date: 'February 2024',
        details: 'Awarded camera enforcement hardware procurement contract to vendor.',
        sourceEvidenceId: 'ev-ddot-bus-priority-eval',
        isBlocked: true,
        blockerReason: 'Commercial resistance: Business Improvement District (BID) pushback on curbside commercial loading zones.'
      }
    ],
    budgetRequested: 42000000,
    budgetAppropriated: 36000000,
    budgetExpended: 18400000,
    currencyUnit: 'USD',
    vetoPointsAndObstacles: [
      'Curbside parking elimination resistance from neighborhood commercial merchant corridors',
      'Jurisdictional dispute with National Park Service (NPS) over federal parkway portions of roadway',
      'WMATA bus operator hiring constraints during post-pandemic recovery'
    ],
    dataStatus: 'Simulated Demonstration Record'
  }
];
