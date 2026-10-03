import {
  PublicProblem,
  Institution,
  PublicActor,
  Commitment,
  EvidenceItem,
  CorrectionSubmission,
  InstitutionRelationship,
} from '../types/power';

export const EVIDENCE_STORE: EvidenceItem[] = [
  {
    id: 'ev-mayor-order-2019',
    title: 'Mayor’s Order 2019-036: Housing Framework for Equity and Growth',
    sourceType: 'Primary',
    claimType: 'Statement',
    evidentiaryStrength: 'Direct',
    publisher: 'Executive Office of the Mayor, District of Columbia',
    publicationDate: 'May 10, 2019',
    urlPlaceholder: 'Official Source Placeholder: dcr.dc.gov/mayors-orders/2019-036',
    excerpt: 'Establishes a District-wide goal of producing 36,000 new residential units by 2025, with at least 12,000 units dedicated as affordable for households earning at or below 80% Median Family Income (MFI), distributed across all 10 planning areas.',
    supportsClaim: 'Establishes that the Mayor officially committed to the 36k total / 12k affordable target across planning areas.',
    establishes: [
      'Official executive announcement of the 36,000 total and 12,000 affordable unit target',
      'Directive to executive planning agencies to assign planning-area housing targets',
      'Executive prioritization of surplus public land for housing development'
    ],
    doesNotEstablish: [
      'That financing was statutorily appropriated by Council',
      'That units were actually constructed or permitted',
      'That private developers agreed to build according to quotas',
      'That housing affordability citywide improved as a consequence'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Official administrative order issued under Home Rule authority § 422. Proves official declaration; does not prove downstream execution.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-council-hptf-act-2021',
    title: 'D.C. Act 24-159: Fiscal Year 2022 Local Budget Act of 2021',
    sourceType: 'Primary',
    claimType: 'Appropriation',
    evidentiaryStrength: 'Direct',
    publisher: 'Council of the District of Columbia',
    publicationDate: 'August 23, 2021',
    urlPlaceholder: 'Official Source Placeholder: lims.dccouncil.gov/Legislation/B24-0285',
    excerpt: 'Allocated $250,000,000 in local funds and federal recovery grants to the Housing Production Trust Fund (HPTF) under DHCD administrative stewardship.',
    supportsClaim: 'Statutory legislative appropriation to HPTF exceeding the $100M baseline.',
    establishes: [
      'Legislative enactment of a $250,000,000 statutory funding ceiling for HPTF in FY2022',
      'Council authorization for DHCD to obligate funds for qualifying affordable housing loans'
    ],
    doesNotEstablish: [
      'That the $250,000,000 was fully disbursed to developers or spent in FY2022',
      'That loan recipients completed physical construction on schedule',
      'That 50% of the funds successfully reached Extremely Low-Income households as required by underlying statute',
      'That the appropriation caused a measurable reduction in market rent burden'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Statutory budget act enacted by DC Council and transmitted to U.S. Congress pursuant to Home Rule Act review.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-odca-hptf-audit-2022',
    title: 'ODCA Audit Report: Compliance with Housing Production Trust Fund Statutory Requirements',
    sourceType: 'Primary',
    claimType: 'Implementation',
    evidentiaryStrength: 'Strong',
    publisher: 'Office of the District of Columbia Auditor (ODCA)',
    publicationDate: 'March 29, 2022',
    urlPlaceholder: 'Official Source Placeholder: dcauditor.org/report/hptf-statutory-compliance-2022',
    excerpt: 'Found that between FY2018 and FY2021, DHCD did not consistently enforce the statutory requirement that at least 50% of HPTF funds support units affordable to Extremely Low-Income (ELI) households (0-30% MFI).',
    supportsClaim: 'Documents administrative non-compliance with statutory ELI underwriting allocations.',
    establishes: [
      'Empirical under-allocation of loan commitments to households earning 0-30% MFI during audited fiscal years',
      'Administrative delays in loan underwriting and project closing procedures at DHCD'
    ],
    doesNotEstablish: [
      'Fraudulent intent or criminal malfeasance by agency officials',
      'That no ELI units were funded whatsoever',
      'The exact financial condition of HPTF loans closed after the FY2021 audit window'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Independent statutory audit utilizing direct financial transactions, underwriting files, and DHCD loan agreements.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-dhcd-pipeline-report-2024',
    title: 'DHCD Annual Housing Production and Preservation Report: FY2024 Mid-Year Update',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Corroborative',
    publisher: 'DC Department of Housing and Community Development',
    publicationDate: 'April 15, 2024',
    urlPlaceholder: 'Official Source Placeholder: dhcd.dc.gov/publication/housing-production-report-2024',
    excerpt: 'Reports 31,450 cumulative total housing units delivered or under construction since 2019, of which 9,210 are covenant-restricted affordable units.',
    supportsClaim: 'Current unit production measurement against the 2025 Mayoral target.',
    establishes: [
      'Self-reported administrative counts of certificates of occupancy and active building permits in DHCD tracking system',
      'Breakdown of units receiving local subsidies or Inclusionary Zoning covenant restrictions'
    ],
    doesNotEstablish: [
      'Independent verification of tenant occupancy stability or lease renewals',
      'Net housing growth after accounting for demolished units or expired private covenants',
      'Direct causal attribution between mayoral targets and private construction decisions'
    ],
    epistemicStatus: 'Supported',
    methodologyNote: 'Aggregated administrative pipeline records from building permits and covenant recordings. Subject to agency reporting revisions.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-census-acs-housing-burden',
    title: 'U.S. Census Bureau American Community Survey (ACS) 1-Year Estimates: DC Table DP04',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Strong',
    publisher: 'U.S. Census Bureau',
    publicationDate: 'September 2023',
    urlPlaceholder: 'Official Source Placeholder: data.census.gov/table/ACSDP1Y2022.DP04?g=040XX00US11',
    excerpt: 'Shows 46.8% of DC renter households spend 30% or more of household income on gross rent and utilities, with 24.1% spending over 50% (severely rent burdened).',
    supportsClaim: 'Baseline and trend indicator for rent burden among DC residents.',
    establishes: [
      'Representative statistical sample of household gross rent-to-income ratios in the District of Columbia',
      'Multi-year trend line showing persistent rent burden rates above 45%'
    ],
    doesNotEstablish: [
      'The specific impact of any single municipal housing subsidy program',
      'Micro-neighborhood rent variations below the census tract sampling threshold',
      'The housing conditions of unhoused individuals not residing in formal housing units'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Statistical survey with 90% confidence interval margin of error +/- 1.4%.',
    dataStatus: 'Verified Real-World Record',
    isDemoData: false,
  },
  {
    id: 'ev-wmata-vital-signs-2024',
    title: 'Metro Performance Report: Metrorail and Metrobus Vital Signs Q3 FY2024',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Direct',
    publisher: 'Washington Metropolitan Area Transit Authority',
    publicationDate: 'May 2024',
    urlPlaceholder: 'Official Source Placeholder: wmata.com/about/records/vital-signs-q3-2024',
    excerpt: 'Metrorail customer on-time performance stood at 87.4%; Metrobus on-time performance averaged 78.1%, with significant variance between mixed-traffic routes (71.2%) and dedicated bus lane corridors (84.6%).',
    supportsClaim: 'Transit reliability and bus lane performance metrics.',
    establishes: [
      'Customer on-time delivery rates calculated via faregate entry and exit tap timestamps',
      'Empirical gap in bus arrival reliability between mixed traffic and dedicated rights-of-way'
    ],
    doesNotEstablish: [
      'The proportion of delays attributable to passenger congestion versus mechanical fleet failures',
      'Long-term regional operating subsidy solvency beyond current fiscal year'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Automated vehicle location (AVL) telemetry and faregate transaction tap data across all regional stations.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-ddot-bus-priority-2023',
    title: 'DDOT Bus Priority Program Annual Progress Report 2023',
    sourceType: 'Primary',
    claimType: 'Implementation',
    evidentiaryStrength: 'Direct',
    publisher: 'District Department of Transportation',
    publicationDate: 'December 2023',
    urlPlaceholder: 'Official Source Placeholder: ddot.dc.gov/page/bus-priority-program-report-2023',
    excerpt: 'Documents completion of 12.4 miles of red-painted dedicated bus priority lanes, including corridors on 16th Street NW, H Street / I Street NW, and Martin Luther King Jr. Ave SE.',
    supportsClaim: 'Tracks municipal implementation of street lane conversions.',
    establishes: [
      'Linear lane mileage completed by DDOT contractors under capital bus priority program',
      'Specific street corridors where transit-only pavement markings were installed'
    ],
    doesNotEstablish: [
      'The degree to which unauthorized vehicles illegally block lanes during peak periods',
      'System-wide transit rider satisfaction or fare revenue trends'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Capital project closeout reports and engineering striping records.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-dc-home-rule-act',
    title: 'District of Columbia Home Rule Act, Pub. L. 93-198, 87 Stat. 774',
    sourceType: 'Primary',
    claimType: 'Authority',
    evidentiaryStrength: 'Direct',
    publisher: 'United States Congress',
    publicationDate: 'December 24, 1973',
    urlPlaceholder: 'Official Source Placeholder: govinfo.gov/app/details/STATUTE-87/Pg774',
    excerpt: 'Establishes the Council of the District of Columbia as legislative branch and the Mayor as chief executive; reserves Congressional legislative review under § 602 and Congressional appropriations power under § 446.',
    supportsClaim: 'Legal foundation and limitations of District institutional authority.',
    establishes: [
      'Statutory separation of powers between DC Council (legislative/budget) and Mayor (executive administration)',
      'Federal Congressional layover review authority over District legislation and budget enactments'
    ],
    doesNotEstablish: [
      'Day-to-day administrative effectiveness of municipal agencies',
      'Historical funding amounts appropriated in subsequent fiscal years'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Federal statutory law governing DC municipal structure.',
    dataStatus: 'Verified Real-World Record',
    isDemoData: false,
  },
  {
    id: 'ev-mpd-crime-stats-2024',
    title: 'Metropolitan Police Department Official Crime Trends Portal: Year-to-Date 2024',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Strong',
    publisher: 'Metropolitan Police Department, District of Columbia',
    publicationDate: 'September 2024',
    urlPlaceholder: 'Official Source Placeholder: mpdc.dc.gov/page/district-crime-data-at-a-glance',
    excerpt: 'Documents 142 homicides year-to-date through September 2024, representing a 28% decrease compared to 198 in the equivalent period in 2023. Total violent crime down 26%.',
    supportsClaim: 'Current violent crime counts and year-over-year directional trends.',
    establishes: [
      'Reported incident counts for Part 1 violent crimes registered by police dispatch through September 2024',
      'Directional comparison against identical calendar period in previous calendar year'
    ],
    doesNotEstablish: [
      'That municipal legislation or policing strategies caused the observed reduction',
      'Crimes that occurred but were never reported to 911 dispatch',
      'Regional crime displacement effects into adjacent Maryland and Virginia jurisdictions'
    ],
    epistemicStatus: 'Supported',
    methodologyNote: 'Uniform Crime Reporting (UCR) / NIBRS incident reports compiled from precinct dispatches.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-council-secure-dc-act-2024',
    title: 'Secure DC Omnibus Amendment Act of 2024 (D.C. Law 25-175)',
    sourceType: 'Primary',
    claimType: 'Implementation',
    evidentiaryStrength: 'Direct',
    publisher: 'Council of the District of Columbia',
    publicationDate: 'March 5, 2024',
    urlPlaceholder: 'Official Source Placeholder: lims.dccouncil.gov/Legislation/B25-0345',
    excerpt: 'Consolidated over 100 legislative provisions regarding pretrial detention standards, gun penalties, retail theft, drug-free zones, and police vehicle pursuit protocols.',
    supportsClaim: 'Enacted legislative action addressing public safety.',
    establishes: [
      'Statutory passage of omnibus criminal code modifications by Council 12-1 vote',
      'Legal creation of new criminal statutory definitions, penalty enhancements, and pretrial presumption standards'
    ],
    doesNotEstablish: [
      'How the federal U.S. Attorney will choose to exercise prosecutorial charging discretion under the new law',
      'Whether the legislation will reduce crime rates over a longitudinal 5-year window',
      'Judicial bail decisions rendered by D.C. Superior Court judges in specific individual cases'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Omnibus statutory enactment passed by Council 12-1 and signed by Mayor.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-pit-count-2024',
    title: 'Point-in-Time (PIT) Homelessness Census for the District of Columbia 2024',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Strong',
    publisher: 'Community Partnership for the Prevention of Homelessness / DHS',
    publicationDate: 'May 2024',
    urlPlaceholder: 'Official Source Placeholder: community-partnership.org/facts-and-figures/pit-2024',
    excerpt: 'Enumerated 4,922 individuals experiencing homelessness in DC on January 24, 2024 (a 14% increase from 2023), with single adult individuals comprising 81% of the unhoused population.',
    supportsClaim: 'Homelessness indicator count and demographic composition.',
    establishes: [
      'Single-night enumeration of unhoused individuals in emergency shelters, transitional units, and unsheltered street locations',
      'Proportional breakdown between family homelessness and single adult unhoused populations'
    ],
    doesNotEstablish: [
      'Cumulative annual churn of individuals moving in and out of homelessness over 365 days',
      'Direct failure or success of permanent supportive housing voucher programs'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'HUD-mandated annual point-in-time census combining street counts, emergency shelters, and transitional housing counts.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-osse-cas-report-2023',
    title: 'DC Comprehensive Assessment System (DC CAPE) State Assessment Results 2023',
    sourceType: 'Primary',
    claimType: 'Outcome',
    evidentiaryStrength: 'Strong',
    publisher: 'Office of the State Superintendent of Education (OSSE)',
    publicationDate: 'August 31, 2023',
    urlPlaceholder: 'Official Source Placeholder: osse.dc.gov/assessments/2023-results',
    excerpt: 'Shows 34.2% of DC public school students tested proficient in English Language Arts (ELA) and 22.4% proficient in Mathematics. Proficiency gap between at-risk and non-at-risk students exceeds 38 percentage points.',
    supportsClaim: 'Public education student outcome indicator baseline.',
    establishes: [
      'Standardized academic testing proficiency rates across grades 3-8 and high school in traditional and charter sectors',
      'Empirical achievement gap magnitude between economically disadvantaged and non-at-risk cohorts'
    ],
    doesNotEstablish: [
      'Individual school instructional quality independent of student demographic background',
      'Long-term effectiveness of recently introduced structured literacy curricula'
    ],
    epistemicStatus: 'Verified',
    methodologyNote: 'Standardized state testing administered to grades 3-8 and high school across DCPS and public charter sectors.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-wapo-housing-investigation-2023',
    title: 'Investigative Review: Trust Fund Financing Delays and Unit Delivery Rates',
    sourceType: 'Secondary',
    claimType: 'Implementation',
    evidentiaryStrength: 'Corroborative',
    publisher: 'Independent Civic Journalism Consortium',
    publicationDate: 'November 14, 2023',
    urlPlaceholder: 'Secondary Source Placeholder: civicjournalism.dc.org/investigations/hptf-delays',
    excerpt: 'Analysis of 42 subsidized multifamily developments found that median construction closing times increased from 14 months in 2019 to 26 months in 2023, driven by interest rate escalation and inter-agency review backlogs.',
    supportsClaim: 'Corroborates statutory audit findings regarding underwriting bottlenecks in affordable unit delivery.',
    establishes: [
      'Independent reporting corroborating developer-reported timeline delays in municipal loan execution',
      'Detailed case-study analysis of private financing complications in project pipelines'
    ],
    doesNotEstablish: [
      'Comprehensive financial audit of all DHCD loan contracts',
      'Official government admission of regulatory delay causes'
    ],
    epistemicStatus: 'Supported',
    methodologyNote: 'Secondary journalistic synthesis combining public FOIA disclosures, developer interviews, and land records.',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ev-power-hptf-spending-gap-analysis',
    title: 'POWER Synthesis: HPTF Annual Appropriations vs Actual Capital Expenditure Gap (FY19–FY24)',
    sourceType: 'Derived',
    claimType: 'Expenditure',
    evidentiaryStrength: 'Direct',
    publisher: 'The POWER Standard Analytical Index',
    publicationDate: 'October 2024',
    urlPlaceholder: 'POWER Derived Analysis: powerstandard.org/derived/dc-hptf-variance-analysis',
    excerpt: 'Calculates a cumulative $184,200,000 variance between Council-enacted appropriations ($1.05B total) and actual financial disbursements ($865.8M total) across fiscal years 2019 through 2024, demonstrating that funding authorizations routinely outpace project cash draws.',
    supportsClaim: 'Establishes mathematical distinction between appropriated resources and spent capital in housing funds.',
    establishes: [
      'Direct mathematical calculation of variance between legislative budget acts and CFO expenditure ledgers',
      'Normalization of multi-year capital commitment timelines'
    ],
    doesNotEstablish: [
      'Policy recommendations on whether the spending pace should be modified',
      'Whether the gap represents fiscal prudence or administrative inefficiency'
    ],
    epistemicStatus: 'Derived',
    methodologyNote: 'Derived calculation strictly synthesizing figures from D.C. Local Budget Acts and Annual Comprehensive Financial Reports (ACFR).',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  }
];

export const INSTITUTION_RELATIONSHIPS: InstitutionRelationship[] = [
  {
    id: 'rel-council-mayor-budget',
    sourceInstitutionId: 'dc-council',
    targetInstitutionId: 'mayor-office',
    relationshipType: 'Oversees',
    description: 'Council reviews, amends, and statutorily enacts the Mayor’s proposed annual operating and capital budgets under Home Rule Act § 446.',
    legalBasis: 'District of Columbia Home Rule Act § 446; D.C. Official Code § 1-204.46',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-council-mayor-funds',
    sourceInstitutionId: 'dc-council',
    targetInstitutionId: 'mayor-office',
    relationshipType: 'Funds',
    description: 'Council possesses the exclusive municipal power to appropriate local tax revenues to executive agencies directed by the Mayor.',
    legalBasis: 'D.C. Official Code § 1-204.04',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-council-mayor-confirm',
    sourceInstitutionId: 'dc-council',
    targetInstitutionId: 'mayor-office',
    relationshipType: 'Confirms',
    description: 'Council must confirm mayoral appointees for agency directors (including Police Chief, DDOT Director, DHCD Director) and judicial nominees.',
    legalBasis: 'Confirmation Act of 1978; D.C. Official Code § 1-523.01',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-mayor-dhcd-admin',
    sourceInstitutionId: 'mayor-office',
    targetInstitutionId: 'dhcd',
    relationshipType: 'Administers',
    description: 'Mayor appoints the Director of DHCD and directs executive administration of the Housing Production Trust Fund and surplus land dispositions.',
    legalBasis: 'D.C. Official Code § 1-204.22',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-mayor-ddot-admin',
    sourceInstitutionId: 'mayor-office',
    targetInstitutionId: 'ddot',
    relationshipType: 'Administers',
    description: 'Mayor directs DDOT engineering and curbside regulation under statutory authority to manage District rights-of-way.',
    legalBasis: 'D.C. Official Code § 50-921.01',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-mayor-mpd-admin',
    sourceInstitutionId: 'mayor-office',
    targetInstitutionId: 'mpd',
    relationshipType: 'Administers',
    description: 'Chief of Police reports to the Mayor, commanding municipal police force deployments and operational law enforcement orders.',
    legalBasis: 'D.C. Official Code § 5-101.03',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-mpd-usao-prosecute',
    sourceInstitutionId: 'mpd',
    targetInstitutionId: 'usaodc',
    relationshipType: 'Depends On',
    description: 'MPD arrests for adult felonies and major misdemeanors are referred to the federal U.S. Attorney’s Office for formal prosecution decisions.',
    legalBasis: '28 U.S.C. § 547; D.C. Official Code § 23-101(c)',
    evidenceId: 'ev-dc-home-rule-act',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-ddot-wmata-coord',
    sourceInstitutionId: 'ddot',
    targetInstitutionId: 'wmata',
    relationshipType: 'Coordinates With',
    description: 'DDOT controls District municipal street pavement and traffic signals, while WMATA operates and dispatches regional Metrobus lines.',
    legalBasis: 'WMATA Compact Title III; D.C. Official Code § 50-921.02',
    evidenceId: 'ev-ddot-bus-priority-2023',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-council-dcha-oversight',
    sourceInstitutionId: 'dc-council',
    targetInstitutionId: 'dcha',
    relationshipType: 'Oversees',
    description: 'Council Committee on Housing conducts statutory oversight hearings on public housing conditions and local voucher allocations at DCHA.',
    legalBasis: 'District of Columbia Housing Authority Act of 1999 (D.C. Law 13-105)',
    evidenceId: 'ev-odca-hptf-audit-2022',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-dhs-dcha-contract',
    sourceInstitutionId: 'dhs',
    targetInstitutionId: 'dcha',
    relationshipType: 'Contracts With',
    description: 'DHS coordinates permanent supportive housing case management, while DCHA issues and inspects the underlying rental subsidy vouchers.',
    legalBasis: 'Homeless Services Reform Act (D.C. Official Code § 4-751.01)',
    evidenceId: 'ev-pit-count-2024',
    epistemicStatus: 'Verified',
  },
  {
    id: 'rel-council-mpd-leg',
    sourceInstitutionId: 'dc-council',
    targetInstitutionId: 'mpd',
    relationshipType: 'Regulates',
    description: 'Council enacts criminal code definitions, mandatory police reporting standards, pursuit regulations, and overtime budget caps.',
    legalBasis: 'D.C. Law 25-175 (Secure DC Act)',
    evidenceId: 'ev-council-secure-dc-act-2024',
    epistemicStatus: 'Verified',
  }
];

export const INSTITUTIONS: Institution[] = [
  {
    id: 'dc-council',
    name: 'Council of the District of Columbia',
    abbreviation: 'DC Council',
    institutionType: 'Legislative Body',
    jurisdiction: 'District of Columbia',
    mission: 'Serves as the central legislative and oversight branch of the District government, enacting local laws, approving the annual budget, and overseeing executive agencies.',
    formalAuthoritySummary: 'Under Home Rule Act § 404, exercises legislative authority subject to Congressional review; powers include enacting statutes, approving all District operating and capital budgets, confirming mayoral appointments, and holding investigative oversight hearings.',
    legalBasis: 'District of Columbia Home Rule Act, Pub. L. 93-198, § 404; D.C. Official Code § 1-204.04',
    keyResponsibilities: [
      'Enact all municipal legislation and criminal code statutes',
      'Review and modify the Mayor’s proposed annual operating and capital budget',
      'Confirm executive department heads, judges, and independent board members',
      'Conduct statutory oversight of all District departments and mayoral agencies',
      'Approve contracts exceeding $1,000,000 and multi-year lease agreements'
    ],
    jurisdictionalLimits: [
      'Cannot enact laws modifying the Title 11 judicial branch structure or federal prosecutorial authority',
      'Legislation is subject to a 30-day (civil) or 60-day (criminal) Congressional layover review period',
      'Cannot borrow funds without statutory debt ceiling compliance monitored by CFO',
      'Does not directly administer operational programs or supervise agency personnel'
    ],
    authorities: [
      {
        id: 'auth-council-leg',
        authorityType: 'Legislative',
        title: 'Statutory Enactment & Code Revision',
        legalBasis: 'DC Home Rule Act § 404',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Local statutes', 'Criminal definitions and penalties', 'Municipal regulatory frameworks', 'Zoning overlays and tenant protections'],
        whatItDoesNotControl: ['Federal criminal statutes', 'Direct day-to-day enforcement protocols', 'Prosecutorial filing decisions of the U.S. Attorney'],
        dependencies: ['Mayoral signature or veto override', 'Congressional layover period'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      },
      {
        id: 'auth-council-budget',
        authorityType: 'Budgetary',
        title: 'Municipal Appropriations & Allocation Approval',
        legalBasis: 'DC Home Rule Act § 446',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Appropriation levels for all agencies', 'Dedicated revenue streams (HPTF, transit taxes)', 'Capital improvement project authorizations'],
        whatItDoesNotControl: ['Unallocated federal emergency grants without local match', 'Direct fund disbursement vouchers (managed by CFO)'],
        dependencies: ['Chief Financial Officer revenue certification', 'Federal Congressional budget transmittal'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      },
      {
        id: 'auth-council-oversight',
        authorityType: 'Oversight',
        title: 'Committee Inquiries & Subpoena Authority',
        legalBasis: 'DC Home Rule Act § 413',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Mandatory oversight hearings', 'Subpoenas for agency testimony and operational documents', 'Performance evaluation of executive programs'],
        whatItDoesNotControl: ['Direct dismissal of executive branch directors (unless confirmation is rejected)', 'Direct court injunctions'],
        dependencies: ['Council committee votes'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      }
    ],
    leadershipActorIds: ['phil-mendelson', 'robert-white'],
    relevantProblemIds: ['housing-affordability', 'transit-reliability', 'public-safety', 'public-education', 'homelessness'],
    evidenceIds: ['ev-dc-home-rule-act', 'ev-council-hptf-act-2021', 'ev-council-secure-dc-act-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'mayor-office',
    name: 'Executive Office of the Mayor',
    abbreviation: 'EOM / Mayor',
    institutionType: 'Executive Office',
    jurisdiction: 'District of Columbia',
    mission: 'Directs the executive departments, prepares and administers the annual budget, enforces local laws, and sets administrative priorities for District services.',
    formalAuthoritySummary: 'Under Home Rule Act § 422, the Mayor is the chief executive officer responsible for the proper execution of all laws, administration of executive agencies, appointment of directors, and formulation of the annual budget.',
    legalBasis: 'District of Columbia Home Rule Act § 422; D.C. Official Code § 1-204.22',
    keyResponsibilities: [
      'Supervise executive departments (MPD, DDOT, DHCD, DHS, DCPS)',
      'Prepare and submit the comprehensive annual operating and capital budget to Council',
      'Issue Mayor’s Orders and administrative policies',
      'Negotiate collective bargaining agreements with public employee unions',
      'Direct emergency management and municipal service operations'
    ],
    jurisdictionalLimits: [
      'Cannot appropriate funds independently of Council approval and CFO certification',
      'Does not control the D.C. Housing Authority (independent board governed under D.C. Law 13-105)',
      'Does not control WMATA bus/rail operations directly (requires interstate compact board action)',
      'Does not control adult felony criminal prosecutions in DC Superior Court (handled by federal U.S. Attorney)'
    ],
    authorities: [
      {
        id: 'auth-mayor-exec',
        authorityType: 'Executive',
        title: 'Agency Direction & Program Implementation',
        legalBasis: 'DC Home Rule Act § 422',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mayor-office',
        whatItControls: ['Day-to-day operations of DDOT, DHCD, MPD, DHS, DCPS', 'Administrative rulemaking', 'Procurement contracting execution'],
        whatItDoesNotControl: ['Independent agencies (DCHA, DC Water)', 'Council legislative decisions', 'Federal law enforcement agencies'],
        dependencies: ['Council-approved budget appropriations'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      },
      {
        id: 'auth-mayor-budget-prop',
        authorityType: 'Budgetary',
        title: 'Annual Budget Formulation & Submission',
        legalBasis: 'DC Home Rule Act § 442',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mayor-office',
        whatItControls: ['Initial agency funding proposals', 'Revenue allocation recommendations', 'Capital improvement plan proposals'],
        whatItDoesNotControl: ['Final binding budget enactment (Council must vote and enact)'],
        dependencies: ['Chief Financial Officer revenue estimates'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      }
    ],
    leadershipActorIds: ['muriel-bowser'],
    relevantProblemIds: ['housing-affordability', 'transit-reliability', 'public-safety', 'public-education', 'homelessness'],
    evidenceIds: ['ev-dc-home-rule-act', 'ev-mayor-order-2019'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'dhcd',
    name: 'Department of Housing and Community Development',
    abbreviation: 'DHCD',
    institutionType: 'Department',
    jurisdiction: 'District of Columbia (Executive Agency)',
    mission: 'Produces and preserves opportunities for affordable housing and promotes economic development in underserved neighborhoods.',
    formalAuthoritySummary: 'Administers key public housing financing mechanisms including the Housing Production Trust Fund (HPTF), federal Community Development Block Grants (CDBG), and low-income housing tax credit allocations.',
    legalBasis: 'D.C. Law 2-139; D.C. Official Code § 42-2801 et seq.',
    keyResponsibilities: [
      'Underwrite and disburse loans from the Housing Production Trust Fund',
      'Monitor long-term affordability covenants on subsidized rental and homeownership units',
      'Administer the Tenant Opportunity to Purchase Act (TOPA) technical assistance programs',
      'Manage inclusionary zoning program compliance'
    ],
    jurisdictionalLimits: [
      'Does not own or directly manage public housing properties (managed by DCHA)',
      'Cannot approve zoning density changes (Zoning Commission is an independent body)',
      'Funding relies upon Council appropriations and dedicated deed transfer tax receipts'
    ],
    authorities: [
      {
        id: 'auth-dhcd-admin',
        authorityType: 'Administrative',
        title: 'Trust Fund Underwriting & Covenant Monitoring',
        legalBasis: 'D.C. Official Code § 42-2802',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dhcd',
        whatItControls: ['Project underwriting scoring', 'Loan disbursements to affordable developers', 'Affordability compliance audits'],
        whatItDoesNotControl: ['Private market rental prices', 'Direct tenant voucher eligibility (DCHA)'],
        dependencies: ['Council annual fund appropriation', 'CFO disbursement certification'],
        sourceEvidenceId: 'ev-odca-hptf-audit-2022',
      }
    ],
    leadershipActorIds: ['muriel-bowser'],
    relevantProblemIds: ['housing-affordability', 'homelessness'],
    evidenceIds: ['ev-council-hptf-act-2021', 'ev-odca-hptf-audit-2022', 'ev-dhcd-pipeline-report-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'dcha',
    name: 'District of Columbia Housing Authority',
    abbreviation: 'DCHA',
    institutionType: 'Independent Agency',
    jurisdiction: 'District of Columbia (Independent Body)',
    mission: 'Provides quality, affordable housing to extremely low- to moderate-income households, fosters community development, and assists voucher recipients.',
    formalAuthoritySummary: 'Independent corporate entity governed by a statutory Board of Commissioners; administers over 8,000 public housing units and over 20,000 federally and locally funded housing choice vouchers.',
    legalBasis: 'District of Columbia Housing Authority Act of 1999 (D.C. Law 13-105); D.C. Official Code § 6-202',
    keyResponsibilities: [
      'Maintain, rehabilitate, and redevelop traditional public housing complexes',
      'Administer federal Section 8 Housing Choice Vouchers and local LRSP vouchers',
      'Conduct housing waitlist administration and tenant eligibility screenings',
      'Manage federal HUD regulatory compliance agreements'
    ],
    jurisdictionalLimits: [
      'Mayor does not have direct operational command over daily leasing decisions',
      'Heavily constrained by federal HUD capital and operating funding formulas',
      'Subcontracted property management requires independent procurement protocols'
    ],
    authorities: [
      {
        id: 'auth-dcha-vouchers',
        authorityType: 'Administrative',
        title: 'Voucher Issuance & Public Housing Property Operations',
        legalBasis: 'D.C. Official Code § 6-203',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dcha',
        whatItControls: ['Housing choice voucher waitlists', 'Unit inspections for voucher eligibility', 'Public housing property maintenance schedules'],
        whatItDoesNotControl: ['Private landlord willingness to accept vouchers (enforced by OHR)', 'General municipal budget tax rates'],
        dependencies: ['U.S. Department of HUD grant approvals', 'Council local voucher subsidy appropriations'],
        sourceEvidenceId: 'ev-pit-count-2024',
      }
    ],
    leadershipActorIds: ['robert-white'],
    relevantProblemIds: ['housing-affordability', 'homelessness'],
    evidenceIds: ['ev-pit-count-2024', 'ev-odca-hptf-audit-2022'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'ddot',
    name: 'District Department of Transportation',
    abbreviation: 'DDOT',
    institutionType: 'Department',
    jurisdiction: 'District of Columbia (Executive Agency)',
    mission: 'Plans, designs, constructs, and maintains the District of Columbia’s multimodal street network, bridges, sidewalks, and traffic infrastructure.',
    formalAuthoritySummary: 'Under Mayor’s delegation, controls rights-of-way on all District public streets; responsible for traffic engineering, bus priority lane striping, automated traffic cameras, and local street safety.',
    legalBasis: 'D.C. Official Code § 50-921.01 et seq.',
    keyResponsibilities: [
      'Design and install dedicated bus priority lanes and queue-jump signals',
      'Manage street resurfacing, traffic signals, curbside regulations, and bike lanes',
      'Operate DC Circulator (transitioning) and DC Streetcar',
      'Conduct traffic safety studies and Vision Zero infrastructure updates'
    ],
    jurisdictionalLimits: [
      'Does not operate Metrorail tracks or dispatch Metrobus drivers (operated by WMATA)',
      'National Park Service controls certain federal parkways (e.g., Rock Creek Parkway)',
      'Cannot unilaterally establish new parking taxes or fines without Council statutory authorization'
    ],
    authorities: [
      {
        id: 'auth-ddot-streets',
        authorityType: 'Regulatory',
        title: 'Public Right-of-Way Regulation & Transit Lane Striping',
        legalBasis: 'D.C. Official Code § 50-921.02',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'ddot',
        whatItControls: ['Curbside allocation (bus vs parking vs loading)', 'Dedicated red bus lane paint and enforcement cameras', 'Traffic signal prioritization timings'],
        whatItDoesNotControl: ['WMATA bus fleet procurement', 'Metrobus driver hiring or route frequencies'],
        dependencies: ['Mayor administrative support', 'Council capital budget appropriation'],
        sourceEvidenceId: 'ev-ddot-bus-priority-2023',
      }
    ],
    leadershipActorIds: ['muriel-bowser'],
    relevantProblemIds: ['transit-reliability'],
    evidenceIds: ['ev-ddot-bus-priority-2023', 'ev-wmata-vital-signs-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'wmata',
    name: 'Washington Metropolitan Area Transit Authority',
    abbreviation: 'WMATA / Metro',
    institutionType: 'Regional Authority',
    jurisdiction: 'Interstate Compact (DC, Maryland, Virginia, Federal)',
    mission: 'Operates a safe, equitable, reliable, and cost-effective regional transit system across the National Capital Region.',
    formalAuthoritySummary: 'Interstate compact created by interstate legislation approved by Congress in 1966. Governed by an 8-member voting Board of Directors representing DC, Maryland, Virginia, and the federal government.',
    legalBasis: 'Washington Metropolitan Area Transit Authority Compact, Pub. L. 89-774; D.C. Official Code § 9-1107.01',
    keyResponsibilities: [
      'Operate Metrorail subway service across 6 lines and 98 stations',
      'Operate regional Metrobus network throughout DC, MD, and VA',
      'Maintain track, signaling, rail cars, and bus depots',
      'Set fares and regional service schedules'
    ],
    jurisdictionalLimits: [
      'The Mayor of DC or DC Council cannot unilaterally order route changes or budget amendments',
      'Requires consensus of compact jurisdictions for dedicated operating subsidy agreements',
      'Does not control District street pavement or traffic signal timing (controlled by DDOT)'
    ],
    authorities: [
      {
        id: 'auth-wmata-transit',
        authorityType: 'Administrative',
        title: 'Regional Rail & Bus Fleet Operations',
        legalBasis: 'WMATA Compact Title III',
        jurisdiction: 'Regional (DC, MD, VA)',
        relevantInstitutionId: 'wmata',
        whatItControls: ['Train scheduling and headways', 'Metrobus fleet dispatch', 'Fare structure and faregate maintenance'],
        whatItDoesNotControl: ['City street rights-of-way', 'Unilateral tax levies (no independent taxing power)'],
        dependencies: ['Tri-jurisdictional operating subsidies from DC, MD, and VA'],
        sourceEvidenceId: 'ev-wmata-vital-signs-2024',
      }
    ],
    leadershipActorIds: ['randy-clarke'],
    relevantProblemIds: ['transit-reliability'],
    evidenceIds: ['ev-wmata-vital-signs-2024', 'ev-ddot-bus-priority-2023'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'mpd',
    name: 'Metropolitan Police Department',
    abbreviation: 'MPD',
    institutionType: 'Department',
    jurisdiction: 'District of Columbia (Executive Agency)',
    mission: 'Safeguards the District of Columbia and protects its residents, visitors, and commuters through professional and constitutional policing.',
    formalAuthoritySummary: 'Primary municipal law enforcement agency for the District under executive direction of the Chief of Police, reporting to the Mayor.',
    legalBasis: 'D.C. Official Code § 5-101.01 et seq.',
    keyResponsibilities: [
      'Patrol municipal police districts and respond to 911 calls',
      'Investigate homicides, robberies, assaults, and property crimes',
      'Execute arrest warrants and collect forensic crime scene evidence',
      'Deploy tactical patrols and violence prevention task forces'
    ],
    jurisdictionalLimits: [
      'Does NOT prosecute adult criminal cases in court (handled by the federal U.S. Attorney for DC)',
      'Does NOT set bail, pretrial detention conditions, or criminal sentences (set by D.C. Superior Court judges)',
      'Shares geography with over 30 federal law enforcement agencies (Capitol Police, Park Police, Secret Service)'
    ],
    authorities: [
      {
        id: 'auth-mpd-enforce',
        authorityType: 'Enforcement',
        title: 'Municipal Law Enforcement & Criminal Investigation',
        legalBasis: 'D.C. Official Code § 5-101.03',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mpd',
        whatItControls: ['Officer patrol assignments', 'Arrest decisions based on probable cause', 'Internal investigation protocols'],
        whatItDoesNotControl: ['Pretrial release decisions by judges', 'Charging decisions by U.S. Attorney', 'Sentencing duration'],
        dependencies: ['Mayoral executive policy', 'Council criminal code statutes and budget'],
        sourceEvidenceId: 'ev-mpd-crime-stats-2024',
      }
    ],
    leadershipActorIds: ['pamela-smith', 'muriel-bowser'],
    relevantProblemIds: ['public-safety'],
    evidenceIds: ['ev-mpd-crime-stats-2024', 'ev-council-secure-dc-act-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'usaodc',
    name: 'United States Attorney’s Office for the District of Columbia',
    abbreviation: 'USAO-DC',
    institutionType: 'Judicial / Prosecutorial',
    jurisdiction: 'Federal & District (Unique dual jurisdiction)',
    mission: 'Prosecutes both federal offenses and local adult criminal felonies and major misdemeanors on behalf of the United States in the District of Columbia.',
    formalAuthoritySummary: 'Under 28 U.S.C. § 547 and D.C. Official Code § 23-101(c), functions as both federal prosecutor and local municipal prosecutor for almost all adult criminal offenses in D.C. Superior Court.',
    legalBasis: '28 U.S.C. § 547; D.C. Official Code § 23-101(c)',
    keyResponsibilities: [
      'Screen all adult criminal arrest referrals from MPD and determine whether to paper/charge',
      'Prosecute felony offenses before the D.C. Superior Court and grand juries',
      'Handle federal criminal prosecutions in U.S. District Court for D.C.',
      'Represent the government in criminal appeals and post-conviction proceedings'
    ],
    jurisdictionalLimits: [
      'Neither the Mayor of DC nor the DC Council has authority to hire, supervise, or remove the U.S. Attorney',
      'Reports directly to the United States Attorney General and President of the United States',
      'Juvenile offenses and minor municipal civil infractions are prosecuted separately by the elected DC Attorney General'
    ],
    authorities: [
      {
        id: 'auth-usao-prosecute',
        authorityType: 'Enforcement',
        title: 'Adult Criminal Prosecutorial Discretion',
        legalBasis: 'D.C. Official Code § 23-101(c)',
        jurisdiction: 'Federal / District Superior Court',
        relevantInstitutionId: 'usaodc',
        whatItControls: ['Decision to charge ("paper") or decline arrests', 'Plea bargain terms', 'Sentencing recommendations presented to judges'],
        whatItDoesNotControl: ['MPD patrol deployment', 'Enactment of local criminal code laws (DC Council)', 'Judicial verdicts or judicial bail decisions'],
        dependencies: ['Federal Department of Justice policies', 'Admissible evidence gathered by police'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      }
    ],
    leadershipActorIds: [],
    relevantProblemIds: ['public-safety'],
    evidenceIds: ['ev-dc-home-rule-act', 'ev-mpd-crime-stats-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'dcps',
    name: 'District of Columbia Public Schools',
    abbreviation: 'DCPS',
    institutionType: 'Department',
    jurisdiction: 'District of Columbia (Mayoral Control)',
    mission: 'Ensures that every school provides a world-class education for all students through rigorous academics and supportive learning environments.',
    formalAuthoritySummary: 'Traditional local public school district operating under direct Mayoral control pursuant to the Public Education Reform Amendment Act of 2007 (PERAA).',
    legalBasis: 'D.C. Law 17-9; D.C. Official Code § 38-171 et seq.',
    keyResponsibilities: [
      'Operate 116 traditional public schools serving over 50,000 enrolled students',
      'Adopt curriculum standards, textbooks, and instructional frameworks',
      'Manage school modernization and facility capital renovation schedules',
      'Direct teacher evaluation, hiring, and professional development'
    ],
    jurisdictionalLimits: [
      'Does not control Public Charter Schools (charters are governed independently by the DC Public Charter School Board)',
      'State-level standards and federal grant monitoring are set by OSSE',
      'School budgets are constrained by the Uniform Per Student Funding Formula enacted by Council'
    ],
    authorities: [
      {
        id: 'auth-dcps-curriculum',
        authorityType: 'Administrative',
        title: 'Curriculum Implementation & School Administration',
        legalBasis: 'D.C. Official Code § 38-172',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dcps',
        whatItControls: ['Classroom instructional materials', 'Teacher staffing allocations by school', 'School facility operations'],
        whatItDoesNotControl: ['Public charter school operations (nearly 48% of DC students)', 'Uniform funding base rate per student'],
        dependencies: ['Council budget appropriation', 'OSSE state-level testing rules'],
        sourceEvidenceId: 'ev-osse-cas-report-2023',
      }
    ],
    leadershipActorIds: ['dr-lewis-ferebee', 'muriel-bowser'],
    relevantProblemIds: ['public-education'],
    evidenceIds: ['ev-osse-cas-report-2023'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'dhs',
    name: 'Department of Human Services',
    abbreviation: 'DHS',
    institutionType: 'Department',
    jurisdiction: 'District of Columbia (Executive Agency)',
    mission: 'Empowers every resident to reach their full potential by providing targeted social services and administering the continuum of homeless services.',
    formalAuthoritySummary: 'Executive department responsible for public assistance programs, the homeless services system, family shelter operations, and local permanent supportive housing subsidy contracts.',
    legalBasis: 'D.C. Official Code § 4-201.01 et seq.; Homeless Services Reform Act of 2005 (HSRA)',
    keyResponsibilities: [
      'Operate emergency shelter network for families and single individuals',
      'Coordinate rapid re-housing and Permanent Supportive Housing (PSH) case management',
      'Administer TANF, SNAP, and local emergency rental assistance',
      'Staff the Interagency Council on Homelessness'
    ],
    jurisdictionalLimits: [
      'Does not build physical housing units (relies on private landlords, non-profits, and DHCD/DCHA pipelines)',
      'Cannot compel individuals to enter shelters against their will without court order',
      'Budget capacity is determined by Council annual budget allocation'
    ],
    authorities: [
      {
        id: 'auth-dhs-shelter',
        authorityType: 'Administrative',
        title: 'Shelter Placement & Supportive Housing Administration',
        legalBasis: 'Homeless Services Reform Act (D.C. Official Code § 4-751.01)',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dhs',
        whatItControls: ['Emergency shelter intake and bed assignment', 'Contracting with community case management providers', 'Hypothermia alert shelter surge operations'],
        whatItDoesNotControl: ['Market rent levels', 'Physical housing development'],
        dependencies: ['Council appropriations', 'DCHA voucher processing speed'],
        sourceEvidenceId: 'ev-pit-count-2024',
      }
    ],
    leadershipActorIds: ['muriel-bowser'],
    relevantProblemIds: ['homelessness', 'housing-affordability'],
    evidenceIds: ['ev-pit-count-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  }
];

export const PUBLIC_ACTORS: PublicActor[] = [
  {
    id: 'muriel-bowser',
    name: 'Muriel Bowser',
    office: 'Mayor of the District of Columbia',
    institutionId: 'mayor-office',
    termDates: 'January 2, 2015 – Present (Third Term ending Jan 2027)',
    termStatus: 'Current',
    jurisdiction: 'District of Columbia (Citywide)',
    officialWebsitePlaceholder: 'Official Source Placeholder: mayor.dc.gov',
    relevantAuthoritySummary: 'Exercises chief executive authority over municipal departments (MPD, DDOT, DHCD, DHS, DCPS); proposes the annual comprehensive budget; issues Mayor’s Orders.',
    authorities: [
      {
        id: 'auth-mb-1',
        authorityType: 'Executive',
        title: 'Departmental Direction & Administrative Rulemaking',
        legalBasis: 'DC Home Rule Act § 422',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mayor-office',
        whatItControls: ['Appointments of agency directors', 'Execution of municipal contracts', 'Operational guidelines for police, transit, and social services'],
        whatItDoesNotControl: ['Council legislative veto overrides', 'Independent agency actions (DCHA, WMATA Board)', 'Federal prosecution filings'],
        dependencies: ['Council statutory framework'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      },
      {
        id: 'auth-mb-2',
        authorityType: 'Budgetary',
        title: 'Executive Budget Formulation',
        legalBasis: 'DC Home Rule Act § 442',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mayor-office',
        whatItControls: ['Initial agency spending targets', 'Mayoral capital budget priority list'],
        whatItDoesNotControl: ['Final binding budget enactment'],
        dependencies: ['CFO revenue certification', 'Council approval'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      }
    ],
    commitmentIds: ['comm-housing-36k', 'comm-transit-bus-lanes', 'comm-safety-violence-interruption'],
    documentedCommitmentsCount: 8,
    specificPlansCount: 5,
    implementationRecordsCount: 6,
    outcomeDataAvailableCount: 4,
    insufficientEvidenceCount: 2,
    evidenceIds: ['ev-mayor-order-2019', 'ev-ddot-bus-priority-2023', 'ev-dhcd-pipeline-report-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'phil-mendelson',
    name: 'Phil Mendelson',
    office: 'Chairman of the Council of the District of Columbia',
    institutionId: 'dc-council',
    termDates: 'June 2012 – Present (Current term ending Jan 2027)',
    termStatus: 'Current',
    jurisdiction: 'District of Columbia (Citywide)',
    officialWebsitePlaceholder: 'Official Source Placeholder: dccouncil.gov/council/phil-mendelson',
    relevantAuthoritySummary: 'Presides over Council legislative sessions, sets committee agendas, steers the annual budget review and amendment process, and exercises statutory legislative oversight.',
    authorities: [
      {
        id: 'auth-pm-1',
        authorityType: 'Legislative',
        title: 'Legislative Docketing & Statutory Enactment',
        legalBasis: 'DC Home Rule Act § 404',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Scheduling bills for Council vote', 'Referrals to committees', 'Enacting statutory amendments'],
        whatItDoesNotControl: ['Direct administrative operation of agencies', 'Judicial court rulings'],
        dependencies: ['Majority vote of 13-member Council'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      },
      {
        id: 'auth-pm-2',
        authorityType: 'Budgetary',
        title: 'Council Budget Markups & Enactment',
        legalBasis: 'DC Home Rule Act § 446',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Reallocating proposed mayoral funds across agencies', 'Setting dedicated tax rates and trust fund deposits'],
        whatItDoesNotControl: ['Disbursing checks directly to vendors'],
        dependencies: ['CFO certification', 'Congressional layover'],
        sourceEvidenceId: 'ev-dc-home-rule-act',
      }
    ],
    commitmentIds: ['comm-housing-trust-fund', 'comm-safety-whole-of-govt'],
    documentedCommitmentsCount: 7,
    specificPlansCount: 4,
    implementationRecordsCount: 5,
    outcomeDataAvailableCount: 3,
    insufficientEvidenceCount: 1,
    evidenceIds: ['ev-council-hptf-act-2021', 'ev-council-secure-dc-act-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'robert-white',
    name: 'Robert White',
    office: 'Councilmember At-Large, Chair of Committee on Housing',
    institutionId: 'dc-council',
    termDates: 'September 2016 – Present (Current term ending Jan 2029)',
    termStatus: 'Current',
    jurisdiction: 'District of Columbia (Citywide)',
    officialWebsitePlaceholder: 'Official Source Placeholder: robertwhiteatlarge.com',
    relevantAuthoritySummary: 'Chairs the Council Committee on Housing; conducts oversight of DHCD, DCHA, and tenant assistance programs; drafts housing legislation and voucher funding proposals.',
    authorities: [
      {
        id: 'auth-rw-1',
        authorityType: 'Oversight',
        title: 'Housing Agency Oversight & Inquiries',
        legalBasis: 'Council Rules & Home Rule Act § 413',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dc-council',
        whatItControls: ['Committee investigation hearings on DCHA and DHCD', 'Committee budget markups for housing agencies'],
        whatItDoesNotControl: ['Direct hiring or firing of DCHA Executive Director', 'Private construction schedules'],
        dependencies: ['Committee member votes', 'Full Council ratification'],
        sourceEvidenceId: 'ev-odca-hptf-audit-2022',
      }
    ],
    commitmentIds: ['comm-homelessness-end-chronic'],
    documentedCommitmentsCount: 5,
    specificPlansCount: 3,
    implementationRecordsCount: 3,
    outcomeDataAvailableCount: 2,
    insufficientEvidenceCount: 1,
    evidenceIds: ['ev-pit-count-2024', 'ev-odca-hptf-audit-2022'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'randy-clarke',
    name: 'Randy Clarke',
    office: 'General Manager & CEO, WMATA',
    institutionId: 'wmata',
    termDates: 'July 2022 – Present',
    termStatus: 'Current',
    jurisdiction: 'National Capital Region (DC, MD, VA)',
    officialWebsitePlaceholder: 'Official Source Placeholder: wmata.com/about/leadership',
    relevantAuthoritySummary: 'Directs the operational management of the Metrorail and Metrobus networks under authority delegated by the interstate WMATA Board of Directors.',
    authorities: [
      {
        id: 'auth-rc-1',
        authorityType: 'Administrative',
        title: 'Transit System Operations & Safety Standards',
        legalBasis: 'WMATA Compact Title III',
        jurisdiction: 'Regional (DC, MD, VA)',
        relevantInstitutionId: 'wmata',
        whatItControls: ['Train frequencies and maintenance work windows', 'Bus fleet deployment and scheduling', 'Transit safety compliance'],
        whatItDoesNotControl: ['City street parking rules (DDOT)', 'Direct municipal tax policy'],
        dependencies: ['WMATA Board policy approval', 'Tri-jurisdiction capital funding commitments'],
        sourceEvidenceId: 'ev-wmata-vital-signs-2024',
      }
    ],
    commitmentIds: ['comm-transit-wmata-funding'],
    documentedCommitmentsCount: 4,
    specificPlansCount: 3,
    implementationRecordsCount: 3,
    outcomeDataAvailableCount: 3,
    insufficientEvidenceCount: 1,
    evidenceIds: ['ev-wmata-vital-signs-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'pamela-smith',
    name: 'Pamela A. Smith',
    office: 'Chief of Police, Metropolitan Police Department',
    institutionId: 'mpd',
    termDates: 'July 2023 – Present',
    termStatus: 'Current',
    jurisdiction: 'District of Columbia',
    officialWebsitePlaceholder: 'Official Source Placeholder: mpdc.dc.gov/biography/pamela-smith',
    relevantAuthoritySummary: 'Commands municipal police personnel, tactical deployments, criminal investigations, and operational protocols for citywide public safety enforcement.',
    authorities: [
      {
        id: 'auth-ps-1',
        authorityType: 'Enforcement',
        title: 'Police Force Command & Tactical Deployment',
        legalBasis: 'D.C. Official Code § 5-105.01',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'mpd',
        whatItControls: ['District patrol assignments', 'Detective division priorities', 'Internal disciplinary recommendations'],
        whatItDoesNotControl: ['Arrest charging decisions (USAO-DC)', 'Bail or detention decisions (Courts)'],
        dependencies: ['Mayoral executive policy', 'Council appropriations'],
        sourceEvidenceId: 'ev-mpd-crime-stats-2024',
      }
    ],
    commitmentIds: ['comm-safety-violence-interruption'],
    documentedCommitmentsCount: 4,
    specificPlansCount: 2,
    implementationRecordsCount: 3,
    outcomeDataAvailableCount: 2,
    insufficientEvidenceCount: 1,
    evidenceIds: ['ev-mpd-crime-stats-2024', 'ev-council-secure-dc-act-2024'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'dr-lewis-ferebee',
    name: 'Dr. Lewis D. Ferebee',
    office: 'Chancellor, District of Columbia Public Schools',
    institutionId: 'dcps',
    termDates: 'January 2019 – Present',
    termStatus: 'Current',
    jurisdiction: 'District of Columbia',
    officialWebsitePlaceholder: 'Official Source Placeholder: dcps.dc.gov/biography/dr-lewis-d-ferebee',
    relevantAuthoritySummary: 'Administers curriculum, personnel, facility planning, and instructional standards for 116 traditional public schools in the District under mayoral oversight.',
    authorities: [
      {
        id: 'auth-lf-1',
        authorityType: 'Administrative',
        title: 'Curriculum & School Operations Direction',
        legalBasis: 'D.C. Official Code § 38-172',
        jurisdiction: 'District of Columbia',
        relevantInstitutionId: 'dcps',
        whatItControls: ['District-wide curriculum selection', 'Principal hiring and evaluations', 'School-level budget allocation guidelines'],
        whatItDoesNotControl: ['Public charter schools', 'Statewide assessment design (OSSE)'],
        dependencies: ['Council budget appropriation', 'Mayoral policy approval'],
        sourceEvidenceId: 'ev-osse-cas-report-2023',
      }
    ],
    commitmentIds: ['comm-edu-early-literacy'],
    documentedCommitmentsCount: 5,
    specificPlansCount: 4,
    implementationRecordsCount: 4,
    outcomeDataAvailableCount: 3,
    insufficientEvidenceCount: 1,
    evidenceIds: ['ev-osse-cas-report-2023'],
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  }
];

export const COMMITMENTS: Commitment[] = [
  {
    id: 'comm-housing-36k',
    title: 'Produce 36,000 New Housing Units, Including 12,000 Dedicated Affordable Units by 2025',
    actorId: 'muriel-bowser',
    problemId: 'housing-affordability',
    date: 'May 10, 2019',
    originalWordingOrParaphrase: '“By 2025, the District of Columbia will create 36,000 new housing units, with at least 12,000 of them affordable to low-income households, equitably distributed across all 10 of our planning areas.”',
    sourceStatement: 'Mayor’s Order 2019-036 & Housing Equity Report announcement',
    sourceEvidenceId: 'ev-mayor-order-2019',
    specificityLevel: 'Specific implementation plan',
    status: 'Partially implemented',
    authorityCheck: {
      canActorDirectlyExecute: false,
      requiredInstitutions: [
        'Council of the District of Columbia (Budget appropriations for HPTF & statutory zoning laws)',
        'D.C. Zoning Commission (Independent body for density & inclusionary zoning revisions)',
        'Private and non-profit housing developers (Market construction & debt financing)'
      ],
      legalPrerequisites: [
        'Council approval of annual capital budgets for housing trust funds',
        'Independent Zoning Commission amendments to Comprehensive Plan future land use map'
      ],
      dependencies: [
        'Commercial bank interest rates and lending terms',
        'Private developer willingness to participate in municipal subsidy programs',
        'Federal Low-Income Housing Tax Credit (LIHTC) bond allocations'
      ]
    },
    plan: {
      concreteActions: [
        'Establish planning-area specific affordable housing delivery quotas to end geographic concentration in East of the River wards',
        'Direct DHCD to prioritize multi-family projects with 30-year or 40-year affordability covenants',
        'Leverage District-owned surplus public land for 100% affordable or mixed-income development',
        'Streamline permitting through the Department of Buildings'
      ],
      responsibleAgencies: ['DHCD', 'Office of the Deputy Mayor for Planning & Economic Development (DMPED)', 'Department of Buildings'],
      implementationMechanism: 'Public financing via Housing Production Trust Fund loans paired with federal LIHTC credits and surplus public land dispositions.',
      timelineEstimate: '6-year rollout (2019 through end of calendar year 2025)',
      budgetAllocatedOrRequired: '$100M+ per year local subsidy baseline plus private capital leverage',
      legislativeRequirements: ['Annual budget acts passing DC Council', 'Council approval of public land disposition agreements'],
      regulatoryRequirements: ['Inclusionary Zoning Expansion (IZ+) adopted by DC Zoning Commission'],
      performanceIndicators: [
        'Total net new residential certificates of occupancy issued',
        'Number of covenant-restricted units affordable to ≤30%, ≤50%, and ≤80% MFI',
        'Geographic distribution of affordable units across non-traditional planning areas (e.g. Rock Creek West)'
      ]
    },
    resources: [
      {
        label: 'Housing Production Trust Fund (FY2022 Allocation)',
        proposedAmount: 250000000,
        authorizedAmount: 250000000,
        appropriatedAmount: 250000000,
        spentAmount: 238400000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2022',
        notes: 'Combines local deed tax revenue with federal ARPA fiscal recovery funds.',
        evidenceId: 'ev-council-hptf-act-2021',
      },
      {
        label: 'Housing Production Trust Fund (FY2023 Allocation)',
        proposedAmount: 200000000,
        authorizedAmount: 200000000,
        appropriatedAmount: 200000000,
        spentAmount: 182100000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2023',
        notes: 'Enacted via D.C. Law 24-167; lower spending rate reflected supply chain and interest rate delays.',
        evidenceId: 'ev-odca-hptf-audit-2022',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-h-1',
        date: 'May 10, 2019',
        eventType: 'Executive order issued',
        title: 'Mayor’s Order 2019-036 Signed',
        description: 'Officially codified the 36k / 12k target as official executive policy and initiated planning area housing targets.',
        responsibleEntity: 'Executive Office of the Mayor',
        status: 'Completed',
        evidenceId: 'ev-mayor-order-2019',
        epistemicStatus: 'Verified',
      },
      {
        id: 'imp-h-2',
        date: 'August 23, 2021',
        eventType: 'Funding appropriated',
        title: 'Historic $250M HPTF Budget Enacted',
        description: 'Council approved record $250M appropriation to DHCD for affordable housing financing.',
        responsibleEntity: 'Council of the District of Columbia',
        status: 'Completed',
        evidenceId: 'ev-council-hptf-act-2021',
        epistemicStatus: 'Verified',
      },
      {
        id: 'imp-h-3',
        date: 'March 29, 2022',
        eventType: 'Audit released',
        title: 'Auditor Cites ELI Statutory Shortfall',
        description: 'DC Auditor found that DHCD failed to direct 50% of trust fund monies to extremely low-income households (0-30% MFI).',
        responsibleEntity: 'Office of the District of Columbia Auditor',
        status: 'Completed',
        evidenceId: 'ev-odca-hptf-audit-2022',
        epistemicStatus: 'Verified',
      },
      {
        id: 'imp-h-4',
        date: 'April 15, 2024',
        eventType: 'Agency program created',
        title: 'Mid-Year FY2024 Production Update',
        description: 'DHCD reports 31,450 total units and 9,210 affordable units delivered or under active construction.',
        responsibleEntity: 'Department of Housing and Community Development',
        status: 'In progress',
        evidenceId: 'ev-dhcd-pipeline-report-2024',
        epistemicStatus: 'Supported',
      }
    ],
    outcomes: [
      {
        id: 'out-h-1',
        metricName: 'Net New Total Housing Units Delivered',
        baseline: { value: '0 units', period: 'January 2019' },
        currentMeasurement: { value: '31,450 units (87.4% of 36,000 target)', period: 'April 2024' },
        timeframe: '2019 – 2024',
        source: 'DHCD Pipeline Report',
        evidenceId: 'ev-dhcd-pipeline-report-2024',
        knownMethodologicalLimitations: 'Counts units currently under permitted construction alongside fully completed certificates of occupancy.',
        causalCaveat: 'General market construction rate is heavily influenced by regional macroeconomic interest rates and labor costs, not solely municipal initiatives.',
        epistemicStatus: 'Supported',
      },
      {
        id: 'out-h-2',
        metricName: 'Dedicated Affordable Units Delivered',
        baseline: { value: '0 units', period: 'January 2019' },
        currentMeasurement: { value: '9,210 units (76.8% of 12,000 target)', period: 'April 2024' },
        timeframe: '2019 – 2024',
        source: 'DHCD & DMPED Housing Equity Dashboard',
        evidenceId: 'ev-dhcd-pipeline-report-2024',
        knownMethodologicalLimitations: 'Does not fully break down units by long-term occupancy stability or net loss of expiring non-subsidized naturally occurring affordable units.',
        causalCaveat: 'Directly funded by public subsidies, but unit delivery timing depends on private developer construction progress.',
        epistemicStatus: 'Supported',
      }
    ],
    unknowns: [
      'Net loss of naturally occurring affordable housing (NOAH) units demolished or transitioned to market-rate over the identical period.',
      'Average actual rent paid by current tenants versus maximum allowable rent under 30-year covenants.',
      'Long-term physical maintenance and financial solvency of projects funded during peak 2021-2022 construction costs.'
    ],
    evidenceIds: ['ev-mayor-order-2019', 'ev-council-hptf-act-2021', 'ev-odca-hptf-audit-2022', 'ev-dhcd-pipeline-report-2024'],
    lastVerifiedDate: 'September 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-housing-trust-fund',
    title: 'Statutorily Protect and Appropriate At Least $100 Million Annually to Housing Production Trust Fund',
    actorId: 'phil-mendelson',
    problemId: 'housing-affordability',
    date: 'July 14, 2020',
    originalWordingOrParaphrase: '“The Council will guarantee that the Housing Production Trust Fund receives no less than $100 million annually, regardless of economic downturns, and tighten legislative guardrails to guarantee 50% reaches our lowest-income neighbors.”',
    sourceStatement: 'DC Council Committee of the Whole Legislative Statement',
    sourceEvidenceId: 'ev-council-hptf-act-2021',
    specificityLevel: 'Specific implementation plan',
    status: 'Implemented',
    authorityCheck: {
      canActorDirectlyExecute: true,
      requiredInstitutions: [
        'Council of the District of Columbia (Enacting Local Budget Act)',
        'Office of the Chief Financial Officer (Certifying balanced budget revenue streams)'
      ],
      legalPrerequisites: ['Statutory budget amendment and Council vote'],
      dependencies: ['CFO revenue forecasting', 'District tax receipt collections']
    },
    plan: {
      concreteActions: [
        'Maintain baseline statutory transfer of 15% of deed recordation and transfer taxes',
        'Top off trust fund shortfalls using local general fund revenues during low commercial transaction cycles',
        'Enact statutory oversight amendments requiring DHCD to provide quarterly loan underwriting reports'
      ],
      responsibleAgencies: ['Council of the District of Columbia', 'Office of the Chief Financial Officer'],
      implementationMechanism: 'Annual Council Local Budget Acts and legislative oversight hearings.',
      timelineEstimate: 'Annual recurring statutory commitment',
      budgetAllocatedOrRequired: '$100M minimum floor per fiscal year',
      legislativeRequirements: ['Annual Local Budget Acts and Budget Support Acts'],
      regulatoryRequirements: ['Statutory rulemaking reviews under Council oversight'],
      performanceIndicators: ['Total annual dollars appropriated to HPTF in final enacted budget']
    },
    resources: [
      {
        label: 'Statutory Local Budget Allocation (FY2023)',
        proposedAmount: 100000000,
        authorizedAmount: 100000000,
        appropriatedAmount: 200000000,
        spentAmount: 182100000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2023',
        notes: 'Council appropriated $200M, exceeding the $100M statutory floor.',
        evidenceId: 'ev-council-hptf-act-2021',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-hptf-leg-1',
        date: 'August 23, 2021',
        eventType: 'Bill enacted',
        title: 'FY2022 Budget Passes Exceeding Target',
        description: 'Council approved $250M for HPTF, well above the $100M baseline.',
        responsibleEntity: 'Council of the District of Columbia',
        status: 'Completed',
        evidenceId: 'ev-council-hptf-act-2021',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-hptf-1',
        metricName: 'Enacted Annual Appropriation vs $100M Floor',
        baseline: { value: '$100M statutory goal', period: 'FY2020' },
        currentMeasurement: { value: 'Exceeded statutory floor in FY2021, FY2022, FY2023 ($250M, $200M, $100M+)', period: 'FY2021-FY2024' },
        timeframe: 'FY2021 – FY2024',
        source: 'Council Legislative Information Management System (LIMS)',
        evidenceId: 'ev-council-hptf-act-2021',
        knownMethodologicalLimitations: 'Appropriation does not equal immediate expenditure; funds sit in escrow until loan closing.',
        causalCaveat: 'Statutory appropriations do not guarantee that developers successfully draw down funds or build projects on schedule.',
        epistemicStatus: 'Verified',
      }
    ],
    unknowns: [
      'Rate at which appropriated funds are recaptured from cancelled or non-performing projects.'
    ],
    evidenceIds: ['ev-council-hptf-act-2021', 'ev-odca-hptf-audit-2022'],
    lastVerifiedDate: 'June 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-transit-bus-lanes',
    title: 'Install 20 Miles of Dedicated Red Bus Priority Lanes Across Key Arteries',
    actorId: 'muriel-bowser',
    problemId: 'transit-reliability',
    date: 'February 12, 2020',
    originalWordingOrParaphrase: '“We are going to move District residents faster by building 20 miles of dedicated bus priority corridors by 2024, starting with 16th Street NW, H Street, and MLK Avenue.”',
    sourceStatement: 'State of the District Address & DDOT Bus Priority Program Announcement',
    sourceEvidenceId: 'ev-ddot-bus-priority-2023',
    specificityLevel: 'Specific implementation plan',
    status: 'Partially implemented',
    authorityCheck: {
      canActorDirectlyExecute: true,
      requiredInstitutions: [
        'District Department of Transportation (DDOT) (Engineering, striping, traffic signals)',
        'Metropolitan Police Department & DDOT (Automated traffic enforcement cameras)'
      ],
      legalPrerequisites: ['Mayoral delegation of street engineering under D.C. Official Code § 50-921.02'],
      dependencies: ['Community stakeholder feedback hearings in Advisory Neighborhood Commissions (ANCs)']
    },
    plan: {
      concreteActions: [
        'Convert curbside travel/parking lanes to red-painted transit-only lanes during peak commute hours',
        'Install automated bus-lane traffic cameras to ticket unauthorized blocking vehicles',
        'Coordinate with WMATA to calibrate transit signal priority (TSP) at signalized intersections'
      ],
      responsibleAgencies: ['DDOT', 'WMATA (operational partner)'],
      implementationMechanism: 'Municipal street striping, sign installation, and automated camera enforcement regulations.',
      timelineEstimate: '4-year rollout (2020 through end of 2024)',
      budgetAllocatedOrRequired: '$32.5M multi-year capital budget allocation',
      legislativeRequirements: ['Council statutory authorization for automated bus camera ticketing penalties'],
      regulatoryRequirements: ['DDOT Notice of Final Rulemaking for lane designations'],
      performanceIndicators: ['Linear miles of completed red bus lanes', 'Bus corridor travel speed improvements', 'Automated violation ticket counts']
    },
    resources: [
      {
        label: 'DDOT Bus Priority Program Capital Allotment',
        proposedAmount: 32500000,
        authorizedAmount: 32500000,
        appropriatedAmount: 28400000,
        spentAmount: 22100000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2020-FY2024',
        notes: 'Capital project funds allocated across local streets and federal formula grants.',
        evidenceId: 'ev-ddot-bus-priority-2023',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-b-1',
        date: 'October 2021',
        eventType: 'Program expanded',
        title: '16th Street NW Bus Lanes Complete',
        description: 'DDOT completed 2.7 miles of dedicated transit lanes along 16th Street NW between H Street and Arkansas Avenue.',
        responsibleEntity: 'District Department of Transportation',
        status: 'Completed',
        evidenceId: 'ev-ddot-bus-priority-2023',
        epistemicStatus: 'Verified',
      },
      {
        id: 'imp-b-2',
        date: 'December 2023',
        eventType: 'Agency program created',
        title: 'Annual Report Documents 12.4 Miles Installed',
        description: 'DDOT Annual Progress Report documented 12.4 cumulative miles completed out of the 20-mile target.',
        responsibleEntity: 'District Department of Transportation',
        status: 'Completed',
        evidenceId: 'ev-ddot-bus-priority-2023',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-b-1',
        metricName: 'Dedicated Bus Corridor Travel Time Improvements',
        baseline: { value: 'Average bus speed 6.4 mph on mixed-traffic 16th St NW', period: '2019' },
        currentMeasurement: { value: 'Average bus speed 8.8 mph (37.5% speed increase in dedicated section)', period: '2023' },
        timeframe: '2019 – 2023',
        source: 'WMATA & DDOT Joint Automated Vehicle Location Telemetry',
        evidenceId: 'ev-ddot-bus-priority-2023',
        knownMethodologicalLimitations: 'Speed improvements vary heavily between peak hours and off-peak periods with illegal double parking.',
        causalCaveat: 'Overall traffic volume changes post-2020 also contributed to variable corridor traffic patterns.',
        epistemicStatus: 'Supported',
      },
      {
        id: 'out-b-2',
        metricName: 'Miles of Dedicated Priority Bus Lanes Completed',
        baseline: { value: '3.2 miles', period: 'January 2020' },
        currentMeasurement: { value: '12.4 miles (62% of 20-mile commitment)', period: 'December 2023' },
        timeframe: '2020 – 2023',
        source: 'DDOT Annual Progress Report',
        evidenceId: 'ev-ddot-bus-priority-2023',
        knownMethodologicalLimitations: 'Measures lane miles rather than two-way corridor centerline miles.',
        causalCaveat: 'Engineering delays caused by utility coordination and commercial curbside delivery disputes.',
        epistemicStatus: 'Verified',
      }
    ],
    unknowns: [
      'Net revenue collected versus outstanding uncollected automated camera fines issued to out-of-state motorists.',
      'Impact of bus priority enforcement on adjacent neighborhood residential cut-through traffic speeds.'
    ],
    evidenceIds: ['ev-ddot-bus-priority-2023', 'ev-wmata-vital-signs-2024'],
    lastVerifiedDate: 'May 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-transit-wmata-funding',
    title: 'Establish Sustainable Regional Capital Funding Formula for Metrorail and Metrobus',
    actorId: 'randy-clarke',
    problemId: 'transit-reliability',
    date: 'January 18, 2023',
    originalWordingOrParaphrase: '“WMATA will present a balanced, transparent capital maintenance program and work with our funding partners to secure multi-jurisdictional operating stability to prevent catastrophic service cuts.”',
    sourceStatement: 'WMATA Board Strategic Plan Presentation',
    sourceEvidenceId: 'ev-wmata-vital-signs-2024',
    specificityLevel: 'Specific implementation plan',
    status: 'Implemented',
    authorityCheck: {
      canActorDirectlyExecute: false,
      requiredInstitutions: [
        'Council of the District of Columbia & Mayor (DC local subsidy share)',
        'Maryland General Assembly & Governor (Maryland subsidy share)',
        'Virginia General Assembly & Governor (Northern Virginia subsidy share)',
        'United States Congress (Federal PRIIA authorization and oversight)'
      ],
      legalPrerequisites: ['Legislative appropriations by all three compact member jurisdictions'],
      dependencies: ['Regional economic forecasts and sales/gas tax receipts dedicated to transit']
    },
    plan: {
      concreteActions: [
        'Close FY2025 operating budget gap through proportional multi-jurisdiction contributions',
        'Accelerate preventive track and rolling stock maintenance to improve on-time reliability above 85%',
        'Deploy new automated faregate barriers to reduce revenue leakage'
      ],
      responsibleAgencies: ['WMATA Executive Leadership', 'DC Council', 'MDOT', 'NVTC'],
      implementationMechanism: 'Interstate compact budgetary accords and local jurisdictional appropriation acts.',
      timelineEstimate: 'Multi-year budget cycle negotiations',
      budgetAllocatedOrRequired: '$480M regional gap coverage agreement for FY2025',
      legislativeRequirements: ['Local budget appropriation acts in DC, MD, and VA'],
      regulatoryRequirements: ['WMATA Board tariff and operating budget adoption'],
      performanceIndicators: ['Metrorail on-time performance rate', 'Train headway reliability (time between trains)']
    },
    resources: [
      {
        label: 'DC Local Jurisdictional Subsidy Payment (FY2025)',
        proposedAmount: 245000000,
        authorizedAmount: 245000000,
        appropriatedAmount: 245000000,
        spentAmount: 180000000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2025',
        notes: 'DC Council approved increased dedicated transit subsidy to avert projected 40% service reductions.',
        evidenceId: 'ev-wmata-vital-signs-2024',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-wmata-1',
        date: 'June 2023',
        eventType: 'Program expanded',
        title: 'Frequent Service Network Launched',
        description: 'Metrorail increased weekday frequencies to 6 minutes or better on core lines during peak hours.',
        responsibleEntity: 'Washington Metropolitan Area Transit Authority',
        status: 'Completed',
        evidenceId: 'ev-wmata-vital-signs-2024',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-wmata-1',
        metricName: 'Metrorail Customer On-Time Performance',
        baseline: { value: '79.2% customer on-time rate', period: '2022' },
        currentMeasurement: { value: '87.4% customer on-time rate', period: 'Q3 FY2024' },
        timeframe: '2022 – 2024',
        source: 'WMATA Vital Signs Report',
        evidenceId: 'ev-wmata-vital-signs-2024',
        knownMethodologicalLimitations: 'Measures trips completed within 5 minutes of scheduled travel window; excludes severe weather closures.',
        causalCaveat: 'Capital track rehabilitation and new train car deliveries coincided with schedule modifications.',
        epistemicStatus: 'Verified',
      }
    ],
    unknowns: [
      'Long-term dedicated revenue source mechanism for FY2026 and beyond once one-time legislative reserves expire.'
    ],
    evidenceIds: ['ev-wmata-vital-signs-2024'],
    lastVerifiedDate: 'August 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-safety-whole-of-govt',
    title: 'Enact Comprehensive "Secure DC" Public Safety Omnibus Legislation',
    actorId: 'phil-mendelson',
    problemId: 'public-safety',
    date: 'October 10, 2023',
    originalWordingOrParaphrase: '“The Council will pass a comprehensive public safety omnibus that addresses gun crimes, carjackings, retail theft, and pretrial detention standards while strengthening accountability for law enforcement.”',
    sourceStatement: 'Council Legislative Address on B25-0345',
    sourceEvidenceId: 'ev-council-secure-dc-act-2024',
    specificityLevel: 'Legislative draft / Rule proposal',
    status: 'Implemented',
    authorityCheck: {
      canActorDirectlyExecute: true,
      requiredInstitutions: [
        'Council of the District of Columbia (Statutory passage)',
        'Mayor of the District of Columbia (Signing into law)',
        'United States Congress (60-day layover review for criminal statutes)'
      ],
      legalPrerequisites: ['Two successive legislative readings and Council majority approval'],
      dependencies: ['U.S. Attorney’s Office decisions on how to charge new statutory offenses']
    },
    plan: {
      concreteActions: [
        'Consolidate emergency and permanent criminal provisions into a single omnibus bill',
        'Establish rebuttable presumption of pretrial detention for violent adult felonies',
        'Create new felony penalties for organized retail theft rings',
        'Authorize temporary drug-free enforcement zones by MPD'
      ],
      responsibleAgencies: ['DC Council', 'MPD', 'D.C. Superior Court', 'USAO-DC'],
      implementationMechanism: 'Enactment of D.C. Law 25-175 and codification into the D.C. Official Code.',
      timelineEstimate: '6-month legislative push (October 2023 to March 2024)',
      budgetAllocatedOrRequired: '$18.2M implementation costs across courts, corrections, and MPD overtime',
      legislativeRequirements: ['Enactment of B25-0345 through Council'],
      regulatoryRequirements: ['Court procedural rule amendments and MPD general orders updates'],
      performanceIndicators: ['Legislative enactment date', 'Pretrial detention orders issued by judges', 'Violent crime incident reports']
    },
    resources: [
      {
        label: 'Secure DC Implementation and Training Allotment',
        proposedAmount: 18200000,
        authorizedAmount: 18200000,
        appropriatedAmount: 18200000,
        spentAmount: 11400000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2024',
        notes: 'Funding for forensic laboratory support, officer training, and judicial processing.',
        evidenceId: 'ev-council-secure-dc-act-2024',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-s-1',
        date: 'March 5, 2024',
        eventType: 'Bill enacted',
        title: 'Secure DC Omnibus Passed 12-1',
        description: 'Council enacted B25-0345; Mayor signed the bill on March 11, 2024.',
        responsibleEntity: 'Council of the District of Columbia',
        status: 'Completed',
        evidenceId: 'ev-council-secure-dc-act-2024',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-s-1',
        metricName: 'Citywide Violent Crime Incidents (Homicides & Shootings)',
        baseline: { value: '198 homicides through September 2023', period: 'Sept 2023' },
        currentMeasurement: { value: '142 homicides through September 2024 (-28% reduction)', period: 'Sept 2024' },
        timeframe: '2023 vs 2024 Year-to-Date',
        source: 'MPD Official Crime Statistics Portal',
        evidenceId: 'ev-mpd-crime-stats-2024',
        knownMethodologicalLimitations: 'Year-to-date snapshot; does not account for multi-year demographic fluctuations or regional national trends.',
        causalCaveat: 'POWER explicitly notes: A crime reduction occurring after legislative passage does not mathematically prove that the law caused the drop. Violent crime declined nationwide in 2024 across cities with and without omnibus legislation.',
        epistemicStatus: 'Supported',
      }
    ],
    unknowns: [
      'Proportion of arrests declined for prosecution ("no-papered") by the federal U.S. Attorney under the new statutory provisions.',
      'Long-term constitutional review of temporary drug-free zones.'
    ],
    evidenceIds: ['ev-council-secure-dc-act-2024', 'ev-mpd-crime-stats-2024', 'ev-dc-home-rule-act'],
    lastVerifiedDate: 'September 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-safety-violence-interruption',
    title: 'Deploy High-Visibility Focused Patrols Paired with Community Violence Interrupters',
    actorId: 'pamela-smith',
    problemId: 'public-safety',
    date: 'August 14, 2023',
    originalWordingOrParaphrase: '“MPD is deploying focused patrols in designated police service areas experiencing high robbery and gun violence rates, coordinating in real time with violence interruption specialists.”',
    sourceStatement: 'MPD Crime Reduction Initiative Press Briefing',
    sourceEvidenceId: 'ev-mpd-crime-stats-2024',
    specificityLevel: 'Specific implementation plan',
    status: 'Partially implemented',
    authorityCheck: {
      canActorDirectlyExecute: true,
      requiredInstitutions: [
        'Metropolitan Police Department (Patrol operations)',
        'Office of Neighborhood Safety and Engagement (ONSE) (Community interrupters)'
      ],
      legalPrerequisites: ['Chief of Police operational command authority under D.C. Official Code § 5-105.01'],
      dependencies: ['Recruitment and retention of sworn police officers']
    },
    plan: {
      concreteActions: [
        'Deploy mobile patrol units to top violent crime micro-clusters',
        'Establish joint weekly intelligence briefings between MPD detectives and ONSE teams',
        'Enhance real-time closed-circuit television (CCTV) monitoring in commercial corridors'
      ],
      responsibleAgencies: ['MPD', 'ONSE'],
      implementationMechanism: 'Administrative department deployment orders and targeted overtime allocations.',
      timelineEstimate: 'Ongoing operational program',
      budgetAllocatedOrRequired: '$24.6M annual overtime and tactical fleet budget',
      legislativeRequirements: ['Overtime budget appropriations by Council'],
      regulatoryRequirements: ['Compliance with body-worn camera and stop-and-frisk reporting mandates'],
      performanceIndicators: ['Non-fatal shooting incidents in focus zones', 'Illegal firearms seized']
    },
    resources: [
      {
        label: 'MPD Focus Patrols & Community Engagement Overtime',
        proposedAmount: 24600000,
        authorizedAmount: 24600000,
        appropriatedAmount: 22000000,
        spentAmount: 21800000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2024',
        notes: 'Overtime hours allocated across Patrol Services South and Patrol Services North.',
        evidenceId: 'ev-mpd-crime-stats-2024',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-vi-1',
        date: 'September 2023',
        eventType: 'Pilot launched',
        title: 'Robbery Suppression Initiative Launched',
        description: 'Targeted high-density robbery corridors with unified vehicle patrols and helicopter air support.',
        responsibleEntity: 'Metropolitan Police Department',
        status: 'Completed',
        evidenceId: 'ev-mpd-crime-stats-2024',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-vi-1',
        metricName: 'Robbery Incidents in Target Corridors',
        baseline: { value: '3,450 total citywide robberies in 2023', period: '2023' },
        currentMeasurement: { value: '2,240 robberies through Sept 2024 (-35% decrease)', period: 'Sept 2024' },
        timeframe: '2023 – 2024',
        source: 'MPD Incident Reports',
        evidenceId: 'ev-mpd-crime-stats-2024',
        knownMethodologicalLimitations: 'Does not measure whether criminal activity displaced to adjacent border neighborhoods.',
        causalCaveat: 'Disentangling police patrol impact from general economic stabilization or community group interventions requires multi-variable regression studies.',
        epistemicStatus: 'Supported',
      }
    ],
    unknowns: [
      'Displacement effect of crime into neighboring Prince George’s or Montgomery counties.',
      'Long-term sustainability of officer overtime hours given current sworn personnel attrition rates.'
    ],
    evidenceIds: ['ev-mpd-crime-stats-2024'],
    lastVerifiedDate: 'September 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-edu-early-literacy',
    title: 'Implement Structured Literacy Curriculum Across All Elementary Schools',
    actorId: 'dr-lewis-ferebee',
    problemId: 'public-education',
    date: 'June 7, 2022',
    originalWordingOrParaphrase: '“By Fall 2023, every DCPS elementary classroom will transition to evidence-based science of reading curricula, with universal phonemic coaching for all K-3 educators.”',
    sourceStatement: 'DCPS Academic Master Plan Announcement',
    sourceEvidenceId: 'ev-osse-cas-report-2023',
    specificityLevel: 'Specific implementation plan',
    status: 'Implemented',
    authorityCheck: {
      canActorDirectlyExecute: true,
      requiredInstitutions: [
        'District of Columbia Public Schools (Curriculum adoption and training)',
        'Office of the State Superintendent of Education (State-level teacher licensing & standards)'
      ],
      legalPrerequisites: ['Chancellor authority under D.C. Official Code § 38-172'],
      dependencies: ['Washington Teachers’ Union (WTU) professional development scheduling agreements']
    },
    plan: {
      concreteActions: [
        'Procure and distribute structured phonics materials to all 74 DCPS elementary schools',
        'Require 40 hours of Science of Reading training for all K-2 instructional staff',
        'Deploy dedicated literacy coaches to bottom-quartile elementary campuses'
      ],
      responsibleAgencies: ['DCPS Office of Teaching and Learning'],
      implementationMechanism: 'District-wide curriculum procurement and mandatory teacher professional development modules.',
      timelineEstimate: '2-year adoption window (2022 through 2024)',
      budgetAllocatedOrRequired: '$14.8M curriculum licensing and coaching contracts',
      legislativeRequirements: ['Funded within DCPS annual operating budget'],
      regulatoryRequirements: ['OSSE compliance for state standards alignment'],
      performanceIndicators: ['DIBELS early literacy screening benchmarks', 'DC CAPE grade 3 reading proficiency']
    },
    resources: [
      {
        label: 'DCPS Early Literacy Materials & Coaching Contract',
        proposedAmount: 14800000,
        authorizedAmount: 14800000,
        appropriatedAmount: 14800000,
        spentAmount: 14200000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2023-FY2024',
        notes: 'Funded via combination of local formula dollars and federal ESSER funds.',
        evidenceId: 'ev-osse-cas-report-2023',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-edu-1',
        date: 'August 2023',
        eventType: 'Program expanded',
        title: 'Universal Phonics Rollout',
        description: 'New structured literacy instructional units launched in 100% of DCPS elementary schools.',
        responsibleEntity: 'DC Public Schools',
        status: 'Completed',
        evidenceId: 'ev-osse-cas-report-2023',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-edu-1',
        metricName: 'Grade 3 Reading Proficiency (DC CAPE)',
        baseline: { value: '31.1% meeting or exceeding expectations in 2022', period: '2022' },
        currentMeasurement: { value: '34.2% meeting or exceeding expectations in 2023 (+3.1 percentage points)', period: '2023' },
        timeframe: '2022 – 2023',
        source: 'OSSE Official State Assessment Report',
        evidenceId: 'ev-osse-cas-report-2023',
        knownMethodologicalLimitations: 'Post-pandemic cohort variations and testing format modifications affect longitudinal comparability.',
        causalCaveat: 'Gains in early literacy proficiency take multiple academic cohorts to stabilize; cannot be isolated from supplemental after-school tutoring.',
        epistemicStatus: 'Supported',
      }
    ],
    unknowns: [
      'Long-term fidelity of classroom implementation across individual schools with high teacher turnover.',
      'Sustained funding source once federal COVID recovery education grants (ESSER) expire.'
    ],
    evidenceIds: ['ev-osse-cas-report-2023'],
    lastVerifiedDate: 'January 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'comm-homelessness-end-chronic',
    title: 'Fund and Distribute 1,500 Permanent Supportive Housing Vouchers to End Chronic Homelessness',
    actorId: 'robert-white',
    problemId: 'homelessness',
    date: 'May 18, 2021',
    originalWordingOrParaphrase: '“The Council will budget sufficient local funds to create and match 1,500 permanent supportive housing vouchers for chronically unhoused residents, ensuring no neighbor is left without a pathway to shelter and care.”',
    sourceStatement: 'Council Housing Committee Budget Recommendations',
    sourceEvidenceId: 'ev-pit-count-2024',
    specificityLevel: 'Specific implementation plan',
    status: 'Partially implemented',
    authorityCheck: {
      canActorDirectlyExecute: false,
      requiredInstitutions: [
        'Council of the District of Columbia (Funding appropriation for local LRSP vouchers)',
        'D.C. Housing Authority (Voucher eligibility intake & landlord contract inspections)',
        'Department of Human Services (Case management and supportive services contracts)'
      ],
      legalPrerequisites: ['Annual budget allocation in Local Rent Supplement Program (LRSP)'],
      dependencies: [
        'Private landlord willingness to accept PSH tenant placements',
        'Staffing capacity at non-profit supportive case management contractors'
      ]
    },
    plan: {
      concreteActions: [
        'Appropriate $31M in recurring funds to create 1,500 individual PSH vouchers',
        'Direct DCHA to streamline criminal background screening delays for unhoused applicants',
        'Contract with DHS to provide dedicated supportive mental health and substance caseworkers'
      ],
      responsibleAgencies: ['Council Housing Committee', 'DCHA', 'DHS'],
      implementationMechanism: 'Budget line item appropriations tied to statutory DCHA voucher reform benchmarks.',
      timelineEstimate: '3-year implementation target',
      budgetAllocatedOrRequired: '$31.2M recurring annual appropriation',
      legislativeRequirements: ['Local Rent Supplement Program funding included in Budget Support Act'],
      regulatoryRequirements: ['DCHA Administrative Plan voucher reform amendments'],
      performanceIndicators: ['Total vouchers funded vs total vouchers leased up with signed leases']
    },
    resources: [
      {
        label: 'Local Rent Supplement Program (PSH Expansion)',
        proposedAmount: 31200000,
        authorizedAmount: 31200000,
        appropriatedAmount: 31200000,
        spentAmount: 24800000,
        currencyUnit: 'USD',
        fiscalYear: 'FY2022-FY2023',
        notes: 'Funding appropriated by Council; under-expenditure due to administrative voucher lease-up backlogs.',
        evidenceId: 'ev-pit-count-2024',
      }
    ],
    implementationEvents: [
      {
        id: 'imp-hml-1',
        date: 'July 2021',
        eventType: 'Funding appropriated',
        title: 'Record PSH Expansion Funded in Budget',
        description: 'Council funded over 1,500 new permanent supportive housing slots in FY22 budget.',
        responsibleEntity: 'Council of the District of Columbia',
        status: 'Completed',
        evidenceId: 'ev-council-hptf-act-2021',
        epistemicStatus: 'Verified',
      },
      {
        id: 'imp-hml-2',
        date: 'November 2022',
        eventType: 'Audit released',
        title: 'Auditor Uncovers Voucher Bottlenecks',
        description: 'Audits revealed an average 200+ day turnaround time between voucher award and physical apartment move-in.',
        responsibleEntity: 'Office of the District of Columbia Auditor',
        status: 'Completed',
        evidenceId: 'ev-odca-hptf-audit-2022',
        epistemicStatus: 'Verified',
      }
    ],
    outcomes: [
      {
        id: 'out-hml-1',
        metricName: 'Chronically Homeless Individuals Housed via PSH',
        baseline: { value: '1,320 chronically homeless individuals counted', period: '2021' },
        currentMeasurement: { value: '1,120 active PSH lease-ups completed out of 1,500 funded vouchers (74.6% utilization)', period: '2024' },
        timeframe: '2021 – 2024',
        source: 'DHS Homeless Services Dashboard & PIT Census',
        evidenceId: 'ev-pit-count-2024',
        knownMethodologicalLimitations: 'Counts active lease contracts, but does not capture eviction rates or tenant retention after 18 months.',
        causalCaveat: 'Point-in-time street counts fluctuate based on winter hypothermia conditions and housing market evictions.',
        epistemicStatus: 'Supported',
      }
    ],
    unknowns: [
      'Number of eligible applicants who lost voucher eligibility during the 6+ month administrative processing wait.',
      'Average monthly attrition rate of non-profit case managers supporting housed residents.'
    ],
    evidenceIds: ['ev-pit-count-2024', 'ev-odca-hptf-audit-2022'],
    lastVerifiedDate: 'July 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  }
];

export const PUBLIC_PROBLEMS: PublicProblem[] = [
  {
    id: 'housing-affordability',
    title: 'Housing Affordability',
    shortDescription: 'Escalating housing costs, high rent burdens for lower-income households, and shortages of dedicated deeply affordable housing units.',
    fullDescription: 'In the District of Columbia, housing costs have consistently outpaced median wage growth for low- and moderate-income workers over the past two decades. Nearly half of all renter households spend more than 30% of their gross income on housing, with nearly a quarter classified as severely rent burdened (paying over 50%). While overall residential construction has reached record numbers, production of deeply affordable units (<30% MFI) remains constrained by high land costs, construction financing expenses, and administrative underwriting hurdles.',
    geography: 'Washington, District of Columbia (Citywide across all 8 Wards)',
    jurisdictionLevel: 'District',
    affectedPopulation: 'Over 140,000 renter households, disproportionately concentrated in Wards 5, 7, and 8.',
    trendSummary: 'Total housing stock growing rapidly (+31,000 units since 2019), but median market rent remains elevated ($2,150/mo) and rent burdens for sub-50% MFI households remain persistent.',
    indicators: [
      {
        name: 'Renter Households Rent Burdened (≥30% income on housing)',
        baseline: { value: '47.2%', year: '2019' },
        current: { value: '46.8%', year: '2023', unit: '%' },
        trendDirection: 'stable',
        trendMeaning: 'neutral',
        sourceName: 'U.S. Census Bureau ACS 1-Year Estimates',
        dataSeries: [
          { year: '2019', value: 47.2 },
          { year: '2020', value: 47.5 },
          { year: '2021', value: 46.9 },
          { year: '2022', value: 47.0 },
          { year: '2023', value: 46.8 }
        ],
        methodologicalLimitation: 'ACS self-reported income and gross rent survey data; margins of error approximately +/- 1.4%.'
      },
      {
        name: 'Severely Rent Burdened Households (≥50% income on housing)',
        baseline: { value: '25.3%', year: '2019' },
        current: { value: '24.1%', year: '2023', unit: '%' },
        trendDirection: 'decreasing',
        trendMeaning: 'favorable',
        sourceName: 'U.S. Census Bureau ACS',
        dataSeries: [
          { year: '2019', value: 25.3 },
          { year: '2020', value: 25.6 },
          { year: '2021', value: 24.8 },
          { year: '2022', value: 24.5 },
          { year: '2023', value: 24.1 }
        ],
        methodologicalLimitation: 'Excludes unhoused populations and institutionalized individuals.'
      },
      {
        name: 'Dedicated Covenant Affordable Units Delivered (Cumulative)',
        baseline: { value: '0 units', year: '2019' },
        current: { value: '9,210 units', year: '2024', unit: 'units' },
        trendDirection: 'increasing',
        trendMeaning: 'favorable',
        sourceName: 'DHCD Pipeline Tracking Database',
        dataSeries: [
          { year: '2019', value: 1250 },
          { year: '2020', value: 2840 },
          { year: '2021', value: 4710 },
          { year: '2022', value: 6690 },
          { year: '2023', value: 8350 },
          { year: '2024', value: 9210 }
        ],
        methodologicalLimitation: 'Includes units under active construction alongside certificates of occupancy; does not subtract expired private covenants.'
      }
    ],
    institutionIds: ['dc-council', 'mayor-office', 'dhcd', 'dcha'],
    commitmentIds: ['comm-housing-36k', 'comm-housing-trust-fund'],
    evidenceIds: ['ev-census-acs-housing-burden', 'ev-mayor-order-2019', 'ev-council-hptf-act-2021', 'ev-odca-hptf-audit-2022', 'ev-dhcd-pipeline-report-2024', 'ev-power-hptf-spending-gap-analysis'],
    lastUpdated: 'September 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'transit-reliability',
    title: 'Public Transit Reliability & Frequency',
    shortDescription: 'Metrorail and Metrobus schedule adherence, bus priority lane enforcement, and multi-jurisdictional operating funding stability.',
    fullDescription: 'Public transportation is vital to the National Capital Region’s economic vitality and environmental sustainability. However, transit reliability has historically suffered from fragmented multi-jurisdictional governance (WMATA Compact between DC, MD, VA, and the federal government), maintenance backlogs, and surface bus delays caused by mixed-traffic congestion. While dedicated bus priority lanes have demonstrated significant speed improvements, municipal street engineering rests with DDOT, whereas bus dispatch belongs to WMATA, requiring tight inter-agency coordination.',
    geography: 'Washington, DC and National Capital Region',
    jurisdictionLevel: 'Regional',
    affectedPopulation: 'Approximately 350,000 daily Metrorail and 120,000 daily Metrobus riders in the District.',
    trendSummary: 'Rail on-time performance recovered to 87.4% in 2024 following 6-minute service rollouts. Surface bus reliability continues to vary widely between dedicated lane corridors (84.6%) and mixed-traffic routes (71.2%).',
    indicators: [
      {
        name: 'Metrorail Customer On-Time Performance',
        baseline: { value: '79.2%', year: '2022' },
        current: { value: '87.4%', year: '2024', unit: '%' },
        trendDirection: 'increasing',
        trendMeaning: 'favorable',
        sourceName: 'WMATA Vital Signs Performance Report',
        dataSeries: [
          { year: '2020', value: 84.1 },
          { year: '2021', value: 81.3 },
          { year: '2022', value: 79.2 },
          { year: '2023', value: 85.1 },
          { year: '2024', value: 87.4 }
        ],
        methodologicalLimitation: 'Calculated using faregate entry and exit timestamp taps against expected station transit windows.'
      },
      {
        name: 'Dedicated Red Bus Priority Lane Miles',
        baseline: { value: '3.2 miles', year: '2020' },
        current: { value: '12.4 miles', year: '2023', unit: 'miles' },
        trendDirection: 'increasing',
        trendMeaning: 'favorable',
        sourceName: 'DDOT Bus Priority Program Annual Report',
        dataSeries: [
          { year: '2020', value: 3.2 },
          { year: '2021', value: 5.9 },
          { year: '2022', value: 8.7 },
          { year: '2023', value: 12.4 }
        ],
        methodologicalLimitation: 'Measures total linear lane miles rather than two-way corridor centerline miles.'
      }
    ],
    institutionIds: ['wmata', 'ddot', 'dc-council', 'mayor-office'],
    commitmentIds: ['comm-transit-bus-lanes', 'comm-transit-wmata-funding'],
    evidenceIds: ['ev-wmata-vital-signs-2024', 'ev-ddot-bus-priority-2023'],
    lastUpdated: 'August 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'public-safety',
    title: 'Public Safety & Violent Crime Reduction',
    shortDescription: 'Incidents of violent crime, homicides, gun violence, retail theft, and the jurisdictional bifurcation between local police and federal prosecutors.',
    fullDescription: 'Violent crime in the District of Columbia reached a twenty-year peak in 2023 with 274 homicides, sparking major community concern and culminating in the passage of the omnibus Secure DC Act in 2024. A defining structural characteristic of DC’s public safety system is its unique jurisdictional division: while local law enforcement (MPD) is directed by the Mayor and laws are enacted by the Council, adult felony criminal prosecution is handled exclusively by the federal United States Attorney’s Office for DC, and adult correctional incarceration is managed by the Federal Bureau of Prisons.',
    geography: 'Washington, District of Columbia (Citywide)',
    jurisdictionLevel: 'District',
    affectedPopulation: 'All 690,000 District residents, with violent crime incidents disproportionately concentrated in specific census tracts in Wards 7 and 8.',
    trendSummary: 'Violent crime decreased by 26% and homicides dropped by 28% year-to-date in 2024 compared to 2023 peaks.',
    indicators: [
      {
        name: 'Annual Homicide Count',
        baseline: { value: '166', year: '2019' },
        current: { value: '142 (Sept YTD)', year: '2024', unit: 'incidents' },
        trendDirection: 'decreasing',
        trendMeaning: 'favorable',
        sourceName: 'MPD Annual Crime & YTD Statistics',
        dataSeries: [
          { year: '2019', value: 166 },
          { year: '2020', value: 198 },
          { year: '2021', value: 226 },
          { year: '2022', value: 203 },
          { year: '2023', value: 274 },
          { year: '2024', value: 185 }
        ],
        methodologicalLimitation: '2024 value reflects projected full-year count based on September 2024 YTD trajectory.'
      },
      {
        name: 'Total Violent Crime Incidents (UCR Part 1)',
        baseline: { value: '4,510', year: '2019' },
        current: { value: '3,890 (Projected)', year: '2024', unit: 'crimes' },
        trendDirection: 'decreasing',
        trendMeaning: 'favorable',
        sourceName: 'Metropolitan Police Department UCR Portal',
        dataSeries: [
          { year: '2019', value: 4510 },
          { year: '2020', value: 4120 },
          { year: '2021', value: 4280 },
          { year: '2022', value: 4410 },
          { year: '2023', value: 5290 },
          { year: '2024', value: 3890 }
        ],
        methodologicalLimitation: 'Relies upon reported crimes to 911 dispatch; does not capture unreported incidents.'
      }
    ],
    institutionIds: ['mpd', 'usaodc', 'dc-council', 'mayor-office'],
    commitmentIds: ['comm-safety-whole-of-govt', 'comm-safety-violence-interruption'],
    evidenceIds: ['ev-mpd-crime-stats-2024', 'ev-council-secure-dc-act-2024', 'ev-dc-home-rule-act'],
    lastUpdated: 'September 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'public-education',
    title: 'Public School Literacy & Educational Outcomes',
    shortDescription: 'Standardized assessment proficiency, early grade literacy, achievement gaps between economic cohorts, and high school graduation rates.',
    fullDescription: 'Under Mayoral control established by the Public Education Reform Amendment Act of 2007 (PERAA), the District of Columbia operates a bifurcated public school ecosystem composed of DC Public Schools (DCPS, traditional district) and independent Public Charter Schools (serving nearly 48% of students). Following the COVID-19 pandemic, standardized assessments revealed sharp declines in early literacy and mathematical proficiency, with marked performance gaps exceeding 38 percentage points between students designated at-risk and non-at-risk peers.',
    geography: 'Washington, District of Columbia',
    jurisdictionLevel: 'District',
    affectedPopulation: 'Over 98,000 public and public charter school students and their families.',
    trendSummary: 'Gradual modest recovery in grade 3 reading proficiency (+3.1% in 2023), but proficiency remains below 35% citywide in state standardized testing.',
    indicators: [
      {
        name: 'Grade 3 Reading Proficiency (DC CAPE / PARCC)',
        baseline: { value: '37.8%', year: '2019' },
        current: { value: '34.2%', year: '2023', unit: '%' },
        trendDirection: 'fluctuating',
        trendMeaning: 'unfavorable',
        sourceName: 'Office of the State Superintendent of Education (OSSE)',
        dataSeries: [
          { year: '2019', value: 37.8 },
          { year: '2020', value: 35.0 },
          { year: '2021', value: 32.1 },
          { year: '2022', value: 31.1 },
          { year: '2023', value: 34.2 }
        ],
        methodologicalLimitation: 'Testing paused in 2020 due to pandemic; testing format transitioned from PARCC to DC CAPE in 2023.'
      },
      {
        name: 'Four-Year High School Graduation Rate (ACGR)',
        baseline: { value: '68.2%', year: '2019' },
        current: { value: '75.6%', year: '2023', unit: '%' },
        trendDirection: 'increasing',
        trendMeaning: 'favorable',
        sourceName: 'OSSE Annual Cohort Graduation Report',
        dataSeries: [
          { year: '2019', value: 68.2 },
          { year: '2020', value: 70.9 },
          { year: '2021', value: 72.5 },
          { year: '2022', value: 74.8 },
          { year: '2023', value: 75.6 }
        ],
        methodologicalLimitation: 'Graduation metric does not measure post-secondary remedial course requirements in college enrollment.'
      }
    ],
    institutionIds: ['dcps', 'mayor-office', 'dc-council'],
    commitmentIds: ['comm-edu-early-literacy'],
    evidenceIds: ['ev-osse-cas-report-2023'],
    lastUpdated: 'August 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  },
  {
    id: 'homelessness',
    title: 'Homelessness & Permanent Supportive Housing',
    shortDescription: 'Unsheltered homelessness, emergency shelter capacity, voucher distribution turnaround delays, and permanent supportive housing capacity.',
    fullDescription: 'While the District of Columbia has achieved significant reductions in family homelessness over the past eight years following the closure of the massive DC General shelter and replacement with ward-based family centers, single adult homelessness and chronic unsheltered street homelessness have proven difficult to resolve. Although the DC Council has appropriated tens of millions of dollars to create over 1,500 new permanent supportive housing (PSH) vouchers, administrative processing bottlenecks between DCHA and DHS have delayed lease-ups, leaving hundreds of funded vouchers unutilized for months.',
    geography: 'Washington, District of Columbia',
    jurisdictionLevel: 'District',
    affectedPopulation: '4,922 individuals enumerated in the 2024 Point-in-Time count, with single individuals comprising 81%.',
    trendSummary: 'Family homelessness remains near historic lows, but single adult homelessness increased 14% between 2023 and 2024.',
    indicators: [
      {
        name: 'Total Point-in-Time (PIT) Homelessness Count',
        baseline: { value: '6,521', year: '2019' },
        current: { value: '4,922', year: '2024', unit: 'individuals' },
        trendDirection: 'decreasing',
        trendMeaning: 'favorable',
        sourceName: 'The Community Partnership for the Prevention of Homelessness / DHS',
        dataSeries: [
          { year: '2019', value: 6521 },
          { year: '2020', value: 6380 },
          { year: '2021', value: 5111 },
          { year: '2022', value: 4410 },
          { year: '2023', value: 4922 },
          { year: '2024', value: 4922 }
        ],
        methodologicalLimitation: 'Single-night snapshot conducted on the last Wednesday in January; vulnerable to winter storm conditions and volunteer coverage variance.'
      },
      {
        name: 'Permanent Supportive Housing Voucher Lease-Up Rate',
        baseline: { value: '58.4%', year: '2021' },
        current: { value: '74.6%', year: '2024', unit: '%' },
        trendDirection: 'increasing',
        trendMeaning: 'favorable',
        sourceName: 'DHS Supportive Housing Quarterly Audit',
        dataSeries: [
          { year: '2021', value: 58.4 },
          { year: '2022', value: 61.2 },
          { year: '2023', value: 68.9 },
          { year: '2024', value: 74.6 }
        ],
        methodologicalLimitation: 'Reflects vouchers with executed residential leases; does not track post-move-in eviction or medical mortality rates.'
      }
    ],
    institutionIds: ['dhs', 'dcha', 'dc-council', 'mayor-office'],
    commitmentIds: ['comm-homelessness-end-chronic', 'comm-housing-trust-fund'],
    evidenceIds: ['ev-pit-count-2024', 'ev-odca-hptf-audit-2022', 'ev-census-acs-housing-burden'],
    lastUpdated: 'May 2024',
    dataStatus: 'Simulated Demonstration Record',
    isDemoData: true,
  }
];

export const INITIAL_CORRECTIONS: CorrectionSubmission[] = [
  {
    id: 'corr-001',
    timestamp: '2024-08-14 11:32:00',
    recordType: 'Commitment',
    recordId: 'comm-housing-36k',
    recordTitle: 'Produce 36,000 New Housing Units by 2025',
    issueType: 'Missing implementation evidence',
    explanation: 'The initial record omitted the distinction between the 30-year covenant units financed via HPTF and inclusionary zoning set-asides under the revised 2021 IZ+ regulations.',
    supportingSourceUrlOrDoc: 'D.C. Zoning Commission Case No. 20-02 (Inclusionary Zoning Plus Order)',
    submitterEmail: 'analyst@housingcivicdc.org',
    status: 'Resolved',
  },
  {
    id: 'corr-002',
    timestamp: '2024-09-02 16:45:10',
    recordType: 'Institution',
    recordId: 'usaodc',
    recordTitle: 'United States Attorney’s Office for DC',
    issueType: 'Misclassified authority',
    explanation: 'Clarified that while USAO handles adult felony crimes, juvenile offenses are prosecuted by the D.C. Attorney General (OAG), an independently elected municipal office.',
    supportingSourceUrlOrDoc: 'D.C. Official Code § 23-101(a)',
    status: 'Resolved',
  }
];
