// ============================================================================
// THE POWER STANDARD — CIVIC CONTEXT & DEMOCRATIC NAVIGATION DATA
// "Who am I in this system, who has power over what, how does public action
// actually happen, and what lawful democratic tools are available to me?"
// ============================================================================

export type GovernmentLevel = 'federal' | 'state' | 'local';

export interface ProcessStage {
  id: string;
  number: number;
  name: string;
  simpleName: string;
  branch: 'Legislative' | 'Executive' | 'Judicial' | 'Citizen / Public' | 'Independent Watchdog';
  summary: string;
  simpleExplanation: string;
  normalFlow: string;
  vetoPoints: string[];
  discretionHolders: string;
  crossBranchRequirement: string;
  budgetRelevance: string;
  agencyRole: string;
  judicialRole: string;
  citizenParticipationGates: string[];
}

export interface GovernanceProcess {
  level: GovernmentLevel;
  title: string;
  subtitle: string;
  constitutionalBasis: string;
  description: string;
  stages: ProcessStage[];
}

export interface CivicOffice {
  id: string;
  title: string;
  branch: 'Legislative' | 'Executive' | 'Judicial' | 'Advisory / Community' | 'Oversight';
  level: 'Neighborhood' | 'Municipal / Ward' | 'Citywide' | 'State / Regional' | 'Federal';
  currentHolder?: string;
  whatItDoes: string;
  whatItDoesNotControl: string;
  selectionMethod: 'Direct Popular Election' | 'Executive Appointment with Legislative Confirmation' | 'Presidential Nomination with Senate Confirmation' | 'Merit Selection Commission' | 'Administrative Civil Service';
  isElectedByCitizen: boolean;
  appointingOrConfirmingAuthority: string;
  removalOrConstraintAuthority: string;
  keyDecisions: string[];
  whenToContact: string[];
}

export interface CivicContextProfile {
  jurisdictionId: string;
  name: string;
  type: string;
  zipCodes: string[];
  neighborhoodTitle: string;
  stateOrEquivalent: string;
  federalRepresentation: string;
  offices: CivicOffice[];
}

export interface CivicActionPathway {
  id: string;
  goal: string;
  category: string;
  targetAuthorities: string[];
  keyQuestion: string;
  informationTools: { title: string; action: string; citation: string }[];
  individualActions: { title: string; action: string; participationGate: string }[];
  collectiveActions: { title: string; action: string; coalitionType: string }[];
  institutionalMechanisms: { title: string; action: string; formalChannel: string }[];
  lawfulAssemblyRights: { title: string; guidance: string; permitRequirement: string };
}

// ----------------------------------------------------------------------------
// 1. HOW DEMOCRACY WORKS — PROCESS MODELS (Federal, State, Local)
// ----------------------------------------------------------------------------
export const GOVERNANCE_PROCESSES: Record<GovernmentLevel, GovernanceProcess> = {
  federal: {
    level: 'federal',
    title: 'The Federal Lawmaking & Governance Pathway',
    subtitle: 'United States Constitution: Article I (Congress), Article II (President), Article III (Courts)',
    constitutionalBasis: 'U.S. Const. art. I, § 7; art. II, § 3; art. III, § 2; Administrative Procedure Act (5 U.S.C. § 551 et seq.)',
    description: 'How a public problem traverses the bicameral Congress, executive agencies, Federal Register notice and comment, and judicial review.',
    stages: [
      {
        id: 'fed-1',
        number: 1,
        name: 'Public Problem & Grievance',
        simpleName: 'The Idea or Problem',
        branch: 'Citizen / Public',
        summary: 'Citizens, advocacy coalitions, and research institutions document a nationwide condition and petition Congress.',
        simpleExplanation: 'People identify a problem that affects the country and bring it to their elected representatives.',
        normalFlow: 'Citizens exercise First Amendment petition rights to request legislative introduction.',
        vetoPoints: ['Lack of congressional sponsorship; low constituent salience; competing national priorities.'],
        discretionHolders: 'Any Member of the U.S. House or Senate can introduce a bill.',
        crossBranchRequirement: 'None at this stage; purely within legislative initiation.',
        budgetRelevance: 'Congressional Budget Office (CBO) baseline begins preliminary cost estimation.',
        agencyRole: 'Federal departments may submit executive legislative proposals via the President.',
        judicialRole: 'None at inception.',
        citizenParticipationGates: ['First Amendment right to petition representatives; public town halls; coalition organizing.']
      },
      {
        id: 'fed-2',
        number: 2,
        name: 'Introduction & Committee Referral',
        simpleName: 'Referred to Committee',
        branch: 'Legislative',
        summary: 'The bill is formally introduced, assigned a number (e.g. H.R. 1234 or S. 567), and referred to the committee with jurisdiction.',
        simpleExplanation: 'The bill is given to a specialized group of lawmakers who focus on that topic.',
        normalFlow: 'Parliamentarian refers bill to standing committee (e.g. House Judiciary, Senate Finance).',
        vetoPoints: ['Committee Chair refuses to schedule hearings or markup ("pigeonholing"). Over 90% of bills die here.'],
        discretionHolders: 'Committee Chair holds absolute scheduling discretion under chamber rules.',
        crossBranchRequirement: 'Agencies provide official reports and executive witness testimony.',
        budgetRelevance: 'CBO issues official legislative score (direct spending, revenue, and deficit impact).',
        agencyRole: 'Cabinet Secretaries and agency heads testify on operational viability.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Submit written statements for committee hearing record; contact committee members.']
      },
      {
        id: 'fed-3',
        number: 3,
        name: 'Committee Markup & Report',
        simpleName: 'Editing & Voting in Committee',
        branch: 'Legislative',
        summary: 'Subcommittee and full committee debate amendments, vote on bill text, and publish an official Committee Report.',
        simpleExplanation: 'Lawmakers read the bill line by line, make changes, and vote whether to send it to the full chamber.',
        normalFlow: 'Committee votes by majority to report the bill favorably to the House or Senate floor.',
        vetoPoints: ['Committee vote fails; poison pill amendments; majority party decides not to report.'],
        discretionHolders: 'Committee majority members voting on roll call.',
        crossBranchRequirement: 'Executive Office of the President issues Statement of Administration Policy (SAP).',
        budgetRelevance: 'Budget Act enforcement: Pay-As-You-Go (PAYGO) points of order can be triggered.',
        agencyRole: 'Department legislative counsel assists with statutory drafting language.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Watch live public markup streams; inspect roll call votes in committee report.']
      },
      {
        id: 'fed-4',
        number: 4,
        name: 'Chamber Floor Debate & Passage',
        simpleName: 'Full Vote by Lawmakers',
        branch: 'Legislative',
        summary: 'The bill is scheduled for floor debate. In the House, under Rules Committee terms; in the Senate, subject to filibuster/cloture rules.',
        simpleExplanation: 'All elected Representatives or Senators debate and vote yes or no.',
        normalFlow: 'House passes by majority (218 votes). Senate requires cloture (60 votes) to end debate, then simple majority to pass.',
        vetoPoints: ['House Rules Committee blocks floor debate; Senate filibuster halts action; majority vote fails.'],
        discretionHolders: 'House Speaker / Majority Leader controls the calendar; individual Senators can filibuster.',
        crossBranchRequirement: 'None; strictly intra-chamber authority.',
        budgetRelevance: 'Floor amendments cannot exceed statutory budget caps without waiver votes.',
        agencyRole: 'Administration lobbies members directly.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Call/write your Member of Congress before the roll call; inspect Congressional Record.']
      },
      {
        id: 'fed-5',
        number: 5,
        name: 'Bicameral Concurrence or Conference',
        simpleName: 'Agreeing on One Version',
        branch: 'Legislative',
        summary: 'Both chambers must pass identical statutory text. Differences are reconciled via conference committee or amendment exchange.',
        simpleExplanation: 'Because the House and Senate may pass different versions, they must agree on the exact same words.',
        normalFlow: 'Conference report agreed to by both House and Senate in identical form.',
        vetoPoints: ['Conference committee reaches impasse; one chamber rejects conference report.'],
        discretionHolders: 'Appointed House-Senate conferees and chamber leadership.',
        crossBranchRequirement: 'Both chambers must concur before presenting to the President under Article I, § 7.',
        budgetRelevance: 'Final reconciled CBO cost estimate attached to enrolled bill.',
        agencyRole: 'Technical reviews of statutory definitions.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Public inspection of conference committee report and final enrolled text.']
      },
      {
        id: 'fed-6',
        number: 6,
        name: 'Executive Presentment & Action',
        simpleName: 'The President Signs or Vetoes',
        branch: 'Executive',
        summary: 'The enrolled bill is presented to the President, who has 10 days (excluding Sundays) to sign, veto, or allow it to become law without signature.',
        simpleExplanation: 'The President decides whether to approve the bill into law or reject it.',
        normalFlow: 'President signs the bill into Public Law (e.g. Pub. L. 118-42).',
        vetoPoints: ['Presidential Veto (requires 2/3 vote in both House and Senate to override); Pocket Veto if Congress adjourns.'],
        discretionHolders: 'The President of the United States holds sole constitutional veto power.',
        crossBranchRequirement: 'Congressional 2/3 override vote can defeat an executive veto.',
        budgetRelevance: 'Enactment triggers mandatory/discretionary budget obligations.',
        agencyRole: 'Office of Management and Budget (OMB) prepares enrolled bill memorandum for the President.',
        judicialRole: 'None yet.',
        citizenParticipationGates: ['White House comment line; public petition campaigns during 10-day review period.']
      },
      {
        id: 'fed-7',
        number: 7,
        name: 'Administrative Rulemaking & Procurement',
        simpleName: 'Agencies Write the Detailed Rules',
        branch: 'Executive',
        summary: 'Executive departments (e.g., DOT, HUD, EPA) promulgate binding regulations under the Administrative Procedure Act (APA).',
        simpleExplanation: 'Congress writes the law in broad terms, and federal agencies draft the specific day-to-day rules.',
        normalFlow: 'Agency publishes Notice of Proposed Rulemaking (NPRM) in Federal Register, reviews comments, issues Final Rule.',
        vetoPoints: ['OMB/OIRA review rejects rule; Congressional Review Act (CRA) joint resolution of disapproval.'],
        discretionHolders: 'Agency Head / Secretary within statutory authorization limits.',
        crossBranchRequirement: 'Congress can overturn rules within 60 legislative days via Congressional Review Act.',
        budgetRelevance: 'Agencies cannot disburse funds without matching appropriations enacted by Congress.',
        agencyRole: 'Agency career staff, economists, and legal counsel draft regulatory impact analyses.',
        judicialRole: 'Potential preliminary injunction if challenged under APA § 706.',
        citizenParticipationGates: ['Formal 30-to-90 day Public Comment Period on Regulations.gov; petitions for rulemaking.']
      },
      {
        id: 'fed-8',
        number: 8,
        name: 'Judicial Review & Constitutional Audit',
        simpleName: 'The Courts Check the Law',
        branch: 'Judicial',
        summary: 'Federal courts (District Court, Court of Appeals, Supreme Court) review statutes and regulations for constitutionality and statutory fidelity.',
        simpleExplanation: 'If someone is harmed by the law or regulation, they can ask independent judges to verify it follows the Constitution.',
        normalFlow: 'Courts uphold constitutional exercise of power and statutory alignment; or vacate arbitrary/capricious rules.',
        vetoPoints: ['Federal court issues nationwide injunction; Supreme Court strikes down statute under Article III review.'],
        discretionHolders: 'Federal judges appointed under Article III with lifetime tenure during good behavior.',
        crossBranchRequirement: 'Courts have no enforcement power ("neither force nor will"); depend on executive compliance.',
        budgetRelevance: 'Judgments can require restitution or prevent unlawful spending.',
        agencyRole: 'Department of Justice (DOJ) defends the federal law or regulation in court.',
        judicialRole: 'Sole authority to interpret federal law and the Constitution (Marbury v. Madison).',
        citizenParticipationGates: ['Litigation if standing exists; filing amicus curiae ("friend of the court") briefs; legal aid clinics.']
      }
    ]
  },
  state: {
    level: 'state',
    title: 'The State Legislative & Administrative Pathway',
    subtitle: 'State Constitutions: 10th Amendment Sovereign Powers, Governors, & State Courts',
    constitutionalBasis: 'U.S. Const. amend. X; State Constitutions; State Administrative Procedure Acts',
    description: 'How state laws and budgets govern public education, criminal justice, public health, professional licensing, and state infrastructure.',
    stages: [
      {
        id: 'state-1',
        number: 1,
        name: 'Community Problem & Legislative Drafting',
        simpleName: 'A State Issue Arises',
        branch: 'Citizen / Public',
        summary: 'Constituents, municipal leaders, or state agencies identify statewide statutory needs.',
        simpleExplanation: 'People across cities and counties ask their State Representative or Senator to act on a statewide issue.',
        normalFlow: 'State representative or senator requests draft from State Legislative Reference Bureau.',
        vetoPoints: ['Lack of state lawmaker sponsorship; short legislative sessions (some states meet only 60-90 days).'],
        discretionHolders: 'State legislators.',
        crossBranchRequirement: 'Governor may include proposals in State of the State address.',
        budgetRelevance: 'State fiscal note prepared to estimate revenue and local government cost impact.',
        agencyRole: 'State departments provide technical guidance on existing regulatory authority.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Attend local district office hours; contact state legislators before session convene.']
      },
      {
        id: 'state-2',
        number: 2,
        name: 'State Committee Review & Public Hearings',
        simpleName: 'State Committee Hearings',
        branch: 'Legislative',
        summary: 'Standing committees hold public hearings in the state capital with in-person citizen testimony.',
        simpleExplanation: 'Lawmakers in the state capitol invite regular citizens and experts to speak directly for or against the bill.',
        normalFlow: 'Committee votes to advance bill to floor with or without amendments.',
        vetoPoints: ['Committee chair tables the bill; committee deadline expires; unfunded mandate objections.'],
        discretionHolders: 'Committee Chair and legislative leadership.',
        crossBranchRequirement: 'State agencies submit fiscal and operational impact statements.',
        budgetRelevance: 'State Balanced Budget Amendment constraints (49 of 50 states require balanced operating budgets).',
        agencyRole: 'State department directors testify on enforcement feasibility.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Direct in-person or virtual testimony at state committee hearings; submit written comments.']
      },
      {
        id: 'state-3',
        number: 3,
        name: 'Floor Passage & Bicameral Approval',
        simpleName: 'State Assembly & Senate Votes',
        branch: 'Legislative',
        summary: 'Passage through State House/Assembly and State Senate (except Nebraska, which has a unicameral legislature).',
        simpleExplanation: 'State lawmakers debate and cast roll-call votes in both chambers.',
        normalFlow: 'Both chambers pass identical bill by majority vote.',
        vetoPoints: ['Chamber calendar runs out; majority party leadership declines to call bill for floor vote.'],
        discretionHolders: 'Speaker of the House, Senate President, and majority caucus.',
        crossBranchRequirement: 'Must reconcile into single text before transmission to Governor.',
        budgetRelevance: 'Appropriations bills must balance within official state revenue forecasts.',
        agencyRole: 'Governor legislative liaison monitors amendments.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Track roll-call votes on state legislative portal; call local state legislators.']
      },
      {
        id: 'state-4',
        number: 4,
        name: 'Gubernatorial Action & Line-Item Veto',
        simpleName: 'The Governor Decides',
        branch: 'Executive',
        summary: 'Governor signs, vetoes, or in 44 states exercises a Line-Item Veto over specific spending appropriations.',
        simpleExplanation: 'The Governor can sign the whole bill, veto it, or in many states cross out specific spending items.',
        normalFlow: 'Governor signs bill into state statute; or legislature overrides veto (usually 2/3 or 3/5 majority).',
        vetoPoints: ['Gubernatorial Veto; Line-item veto eliminates specific agency funding allocations.'],
        discretionHolders: 'The Governor of the State.',
        crossBranchRequirement: 'Legislative override required to enact over governor’s objection.',
        budgetRelevance: 'Line-item veto directly modifies the state treasury disbursements.',
        agencyRole: 'State cabinet advises governor on implementation costs.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Governor constituent affairs hotline; public advocacy for or against veto.']
      },
      {
        id: 'state-5',
        number: 5,
        name: 'State Agency Promulgation & County Implementation',
        simpleName: 'State & County Delivery',
        branch: 'Executive',
        summary: 'State administrative codes updated; programs implemented through state agencies and 3,143 county governments.',
        simpleExplanation: 'State agencies and local county officials put the law into effect across communities.',
        normalFlow: 'State agency publishes rules in state administrative bulletin; county commissioners/sheriffs implement.',
        vetoPoints: ['Lack of county enforcement; state agency rulemaking delay; budget shortfall triggers spending freeze.'],
        discretionHolders: 'State Agency Directors, County Commissioners, Sheriffs, and District Attorneys.',
        crossBranchRequirement: 'County governments implement state mandates under Dillon’s Rule or Home Rule.',
        budgetRelevance: 'State revenue shared with municipalities through intergovernmental transfers.',
        agencyRole: 'State civil service administers grants, licensing, and inspections.',
        judicialRole: 'State appellate court and state Supreme Court judicial review.',
        citizenParticipationGates: ['State public comment periods; county commissioner meetings; open public records requests.']
      }
    ]
  },
  local: {
    level: 'local',
    title: 'The Municipal & Home Rule Pathway',
    subtitle: 'Municipal Charters: DC Home Rule Act, City Councils, Mayors, & Neighborhood Councils',
    constitutionalBasis: 'D.C. Home Rule Act (Pub. L. 93-198; D.C. Code § 1-201); Municipal Charters; Sunshine Laws',
    description: 'How city ordinances, neighborhood zoning, police policy, housing funds, and municipal services are enacted and delivered.',
    stages: [
      {
        id: 'loc-1',
        number: 1,
        name: 'Neighborhood Grievance & ANC/Council Petition',
        simpleName: 'Neighborhood Issue Identified',
        branch: 'Citizen / Public',
        summary: 'Residents bring local safety, housing, or infrastructure issues to Advisory Neighborhood Commissions (ANCs) or Ward Councilmembers.',
        simpleExplanation: 'You and your neighbors notice a street safety hazard, housing shortage, or school problem and alert your local hyper-local officials.',
        normalFlow: 'ANC passes official resolution; Ward Councilmember agrees to introduce municipal bill.',
        vetoPoints: ['Lack of Ward or At-Large Councilmember sponsorship; jurisdictional confusion (e.g. federal parkway vs. city street).'],
        discretionHolders: 'Any Councilmember can introduce legislation.',
        crossBranchRequirement: 'Council staff cross-checks Home Rule Charter limits (e.g., D.C. cannot tax non-resident commuters).',
        budgetRelevance: 'Council Budget Office prepares preliminary Fiscal Impact Statement (FIS).',
        agencyRole: 'Executive agencies (DDOT, DHCD, MPD) attend ANC meetings to explain operational constraints.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Monthly public ANC meetings; direct constituent meetings with Ward Councilmember.']
      },
      {
        id: 'loc-2',
        number: 2,
        name: 'Council Committee Public Hearing',
        simpleName: 'Public Hearing at City Hall',
        branch: 'Legislative',
        summary: 'The Council committee with jurisdiction schedules a public hearing where every citizen has the statutory right to testify.',
        simpleExplanation: 'City Council opens the floor to the public. Any resident can sign up to speak for 3 minutes directly to lawmakers.',
        normalFlow: 'Committee hears public witnesses, government witnesses (Agency Director/Deputy Mayor), and holds markup.',
        vetoPoints: ['Committee Chair does not schedule hearing; Chief Financial Officer (CFO) issues negative Fiscal Impact Statement.'],
        discretionHolders: 'Committee Chair controls the hearing schedule and markup text.',
        crossBranchRequirement: 'D.C. Independent CFO must certify that funds exist before a bill can become law.',
        budgetRelevance: 'Negative CFO Fiscal Impact Statement ("funds not sufficient") blocks enactment unless funded.',
        agencyRole: 'Agency Director must answer council questions under oath on the record.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Sign up to testify in person or virtually; submit written testimony within 14 days of hearing.']
      },
      {
        id: 'loc-3',
        number: 3,
        name: 'Two Consecutive Legislative Readings',
        simpleName: 'Two Council Floor Votes',
        branch: 'Legislative',
        summary: 'Under Home Rule, municipal legislation must pass two separate Legislative Meetings at least 14 days apart.',
        simpleExplanation: 'To prevent rushed laws, the Council must debate and vote on the bill twice before it can go to the Mayor.',
        normalFlow: 'First Reading approved by majority; Second Reading approved at subsequent legislative session.',
        vetoPoints: ['Bill amended between readings; floor vote fails; council recess delays second reading.'],
        discretionHolders: 'Council of 13 members (Chairman, 4 At-Large, 8 Ward members).',
        crossBranchRequirement: 'Mayor can submit official executive views and proposed amendments.',
        budgetRelevance: 'Enacted in tandem with Local Budget Act (LBA) and Budget Support Act (BSA).',
        agencyRole: 'City Administrator advises Council on administrative timelines.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Attend open legislative meetings; track roll call votes on council legislative portal (LIMS).']
      },
      {
        id: 'loc-4',
        number: 4,
        name: 'Mayoral Review & Veto Period',
        simpleName: 'Mayor Signs or Vetoes',
        branch: 'Executive',
        summary: 'Enacted act transmitted to Mayor, who has 10 business days to sign, veto, or allow without signature.',
        simpleExplanation: 'The city’s chief executive decides whether to sign the bill or veto it.',
        normalFlow: 'Mayor signs act; Council can override veto with a two-thirds vote (9 of 13 members).',
        vetoPoints: ['Mayoral Veto; Council fails to assemble 9 override votes.'],
        discretionHolders: 'The Mayor.',
        crossBranchRequirement: 'Council veto override requires supermajority (9 votes).',
        budgetRelevance: 'Mayor controls executive agency budget reprogramming requests.',
        agencyRole: 'General Counsel to the Mayor reviews for legal sufficiency.',
        judicialRole: 'None.',
        citizenParticipationGates: ['Petition the Mayor’s Office of Policy; request meetings with Deputy Mayors.']
      },
      {
        id: 'loc-5',
        number: 5,
        name: 'Congressional Review Period & Municipal Delivery',
        simpleName: 'Federal Review & Agency Delivery',
        branch: 'Executive',
        summary: 'Under Home Rule, non-emergency civil acts undergo 30 congressional review days (60 days for criminal acts) before taking permanent effect.',
        simpleExplanation: 'In Washington, DC, Congress has a legal review window. Once passed, city agencies write rules, award contracts, and deliver services.',
        normalFlow: 'Act published in D.C. Register; city agencies issue regulations and contract RFPs.',
        vetoPoints: ['Congressional joint resolution of disapproval signed by President; lack of agency procurement budget.'],
        discretionHolders: 'U.S. Congress (joint resolution); City Agency Directors (operational execution).',
        crossBranchRequirement: 'Federal Home Rule oversight; intergovernmental coordination.',
        budgetRelevance: 'Office of the Chief Financial Officer (OCFO) monitors drawdowns and audit ledgers.',
        agencyRole: 'Career civil servants, municipal inspectors, and contracted vendors execute the work.',
        judicialRole: 'D.C. Superior Court and D.C. Court of Appeals review challenges.',
        citizenParticipationGates: ['D.C. Register 30-day public comment on rules; file FOIA requests; contact agency ombudsman.']
      }
    ]
  }
};

// ----------------------------------------------------------------------------
// 2. MY CIVIC CONTEXT — JURISDICTION PROFILES & CIVIC OFFICES
// ----------------------------------------------------------------------------
export const CIVIC_CONTEXT_PROFILES: Record<string, CivicContextProfile> = {
  'dc-ward1': {
    jurisdictionId: 'dc-ward1',
    name: 'District of Columbia — Ward 1 (Adams Morgan, Columbia Heights, Mt. Pleasant)',
    type: 'Municipal Home Rule District',
    zipCodes: ['20009', '20010'],
    neighborhoodTitle: 'Advisory Neighborhood Commissions (ANCs 1A, 1B, 1C, 1D, 1E)',
    stateOrEquivalent: 'District of Columbia (Home Rule Charter)',
    federalRepresentation: 'Delegate to U.S. House (non-voting on floor) & Shadow Senators (lobbying for statehood)',
    offices: [
      {
        id: 'off-anc',
        title: 'Advisory Neighborhood Commissioner (ANC)',
        branch: 'Advisory / Community',
        level: 'Neighborhood',
        currentHolder: 'Nonpartisan Single Member District (SMD) Commissioner',
        whatItDoes: 'Represents roughly 2,000 residents on hyper-local issues: zoning variances, liquor licenses, traffic calming, trash, and neighborhood development. By law, their recommendations are entitled to "great weight" from city agencies.',
        whatItDoesNotControl: 'Cannot legislate, cannot appropriate city tax funds, cannot hire city employees or direct police patrols.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Directly elected by neighborhood voters every 2 years in nonpartisan general election.',
        removalOrConstraintAuthority: 'Voters via biennial election; D.C. Board of Elections recall procedure.',
        keyDecisions: ['Zoning Board of Adjustment (BZA) variances', 'Alcoholic Beverage and Cannabis Board (ABCA) settlement agreements', 'Local traffic calming & bike lane endorsements'],
        whenToContact: [
          'A nearby bar or venue has noise or trash violations',
          'A developer wants a zoning exception on your block',
          'You want a speed bump, stop sign, or crosswalk on your residential street',
          'Public space permits for sidewalk cafes or street festivals'
        ]
      },
      {
        id: 'off-ward-council',
        title: 'Ward 1 Councilmember',
        branch: 'Legislative',
        level: 'Municipal / Ward',
        currentHolder: 'Brianne K. Nadeau',
        whatItDoes: 'Represents all ~85,000 Ward 1 residents on the 13-member D.C. Council. Introduces municipal bills, chairs committees, amends the city budget, conducts agency oversight hearings, and delivers constituent services.',
        whatItDoesNotControl: 'Does not manage daily city staff (e.g. cannot directly dispatch snow plows or order police arrests); cannot unilaterally spend money without full Council vote.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected by Ward 1 registered voters every 4 years in partisan municipal election.',
        removalOrConstraintAuthority: 'Voters via quadrennial election; Council censure/expulsion (2/3 vote); citizen recall.',
        keyDecisions: ['Annual citywide budget votes ($21B)', 'Enacting D.C. Official Code statutes', 'Confirming Mayoral agency director appointments', 'Legislative committee oversight of agencies'],
        whenToContact: [
          'A city agency (housing, transit, sanitation) is unresponsive to your service request',
          'You want to support, amend, or oppose a D.C. Council bill',
          'You want funding allocated for a local ward park, library, or school modernization',
          'You want to suggest new municipal legislation or consumer protection policies'
        ]
      },
      {
        id: 'off-atlarge-council',
        title: 'At-Large D.C. Councilmembers (4 Positions)',
        branch: 'Legislative',
        level: 'Citywide',
        currentHolder: 'Anita Bonds, Robert White, Christina Henderson, Kenyan McDuffie',
        whatItDoes: 'Represent all 700,000+ residents across all 8 Wards. Under the Home Rule Charter, no more than 3 At-Large seats can belong to the majority political party, protecting minority party/independent representation.',
        whatItDoesNotControl: 'Do not have singular Ward boundary accountability; share collective legislative power.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected citywide by all D.C. voters for staggered 4-year terms.',
        removalOrConstraintAuthority: 'Citywide voters at quadrennial elections; citizen recall.',
        keyDecisions: ['Citywide economic policy', 'Housing Production Trust Fund allocations', 'Public school system oversight', 'Criminal code and public safety omnibus bills'],
        whenToContact: [
          'Your issue affects multiple wards or the entire District',
          'Your Ward councilmember is unresponsive or recused',
          'You represent a citywide business, civic association, or nonprofit organization'
        ]
      },
      {
        id: 'off-mayor',
        title: 'Mayor of the District of Columbia',
        branch: 'Executive',
        level: 'Citywide',
        currentHolder: 'Muriel Bowser',
        whatItDoes: 'Chief Executive Officer of the municipal government. Directs 35,000+ career city employees, 60+ agencies (MPD, DDOT, DCPS, DHCD, FEMS), proposes the $21B annual budget, issues Mayor’s Orders, and signs or vetoes legislation.',
        whatItDoesNotControl: 'Cannot legislate without Council; cannot appropriate funds without Council enactment; cannot conduct adult felony prosecutions (handled by federal U.S. Attorney).',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected citywide every 4 years by all D.C. voters.',
        removalOrConstraintAuthority: 'Citywide voters at quadrennial election; citizen recall; Council override of vetoes.',
        keyDecisions: ['Executive budget formulation', 'Appointment of Police Chief, Schools Chancellor, & Agency Directors', 'Emergency executive declarations', 'Major city economic development deals'],
        whenToContact: [
          'Systemic city agency performance failures (police, schools, public works)',
          'Submitting comments on the Mayor’s proposed annual executive budget',
          'Emergency municipal response and public safety administration'
        ]
      },
      {
        id: 'off-cfo',
        title: 'Chief Financial Officer of the District of Columbia (OCFO)',
        branch: 'Oversight',
        level: 'Citywide',
        currentHolder: 'Glen Lee',
        whatItDoes: 'Independent constitutional officer responsible for managing city finances, collecting taxes, monitoring debt, and issuing mandatory Fiscal Impact Statements (FIS) for every bill. If the CFO says funds are not sufficient, a bill cannot take effect.',
        whatItDoesNotControl: 'Cannot decide political priorities; cannot refuse to disburse legally enacted and certified appropriations.',
        selectionMethod: 'Executive Appointment with Legislative Confirmation',
        isElectedByCitizen: false,
        appointingOrConfirmingAuthority: 'Appointed by Mayor, confirmed by Council, with independent 5-year statutory term created by Congress.',
        removalOrConstraintAuthority: 'Can only be removed for cause by Mayor with 2/3 Council approval and 30-day notice to Congress.',
        keyDecisions: ['Official revenue forecasts', 'Certification of annual balanced budget', 'Fiscal Impact Statements for all legislation', 'Municipal bond ratings'],
        whenToContact: [
          'Inquiring about D.C. tax assessments or property tax appeals',
          'Auditing whether an enacted council bill was certified as fiscally funded',
          'Researching the city’s Annual Comprehensive Financial Report (ACFR)'
        ]
      },
      {
        id: 'off-us-attorney',
        title: 'United States Attorney for the District of Columbia',
        branch: 'Executive',
        level: 'Federal',
        currentHolder: 'Matthew M. Graves',
        whatItDoes: 'Unique in the United States: this federal office prosecutes both federal crimes AND all local adult felony and misdemeanor offenses under the D.C. Official Code. Does not answer to the Mayor or D.C. Council.',
        whatItDoesNotControl: 'Does not prosecute juvenile offenses (handled by local elected Attorney General for D.C.); does not manage the Metropolitan Police Department.',
        selectionMethod: 'Presidential Nomination with Senate Confirmation',
        isElectedByCitizen: false,
        appointingOrConfirmingAuthority: 'Nominated by President of the United States; confirmed by U.S. Senate under Article II.',
        removalOrConstraintAuthority: 'Serves at the pleasure of the President of the United States.',
        keyDecisions: ['Prosecution charging decisions (papering rates) for adult arrests made by local police', 'Grand jury indictments', 'Plea agreements and sentencing recommendations'],
        whenToContact: [
          'Inquiring into why certain local adult arrest charges were or were not prosecuted in Superior Court',
          'Victim witness assistance programs for adult felony cases',
          'Civil rights or federal public corruption complaints'
        ]
      },
      {
        id: 'off-delegate',
        title: 'Delegate to the U.S. House of Representatives',
        branch: 'Legislative',
        level: 'Federal',
        currentHolder: 'Eleanor Holmes Norton',
        whatItDoes: 'Represents the District in the U.S. House. Has full voting rights in standing committees (can introduce bills, question witnesses, debate), but cannot cast final votes on the House floor under Article I constitutional interpretation.',
        whatItDoesNotControl: 'Cannot vote on final passage of federal laws on the House floor; cannot block federal legislation alone.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected by registered D.C. voters every 2 years in general election.',
        removalOrConstraintAuthority: 'Voters every 2 years; House expulsion (2/3 vote).',
        keyDecisions: ['Defending D.C. Home Rule against congressional rider interference', 'Securing federal highway and infrastructure funds', 'Federal agency constituent casework (USPS, IRS, Social Security, VA)'],
        whenToContact: [
          'You need assistance with a federal agency (Social Security, passport, veterans benefits, IRS)',
          'Federal legislation threatens local D.C. laws or budget autonomy',
          'Federal infrastructure grants for District transit or parkways'
        ]
      },
      {
        id: 'off-superior-judge',
        title: 'Judge, Superior Court of the District of Columbia',
        branch: 'Judicial',
        level: 'Municipal / Ward',
        currentHolder: 'Appointed Superior Court Jurist',
        whatItDoes: 'Trial court of general local jurisdiction. Resolves criminal trials, civil disputes, family law, probate, landlord-tenant disputes, and traffic violations under D.C. law.',
        whatItDoesNotControl: 'Cannot initiate cases (must wait for controversies to be filed); cannot write laws.',
        selectionMethod: 'Presidential Nomination with Senate Confirmation',
        isElectedByCitizen: false,
        appointingOrConfirmingAuthority: 'D.C. Judicial Nomination Commission screens candidates; President nominates; U.S. Senate confirms for 15-year terms.',
        removalOrConstraintAuthority: 'D.C. Commission on Judicial Disabilities and Tenure; federal impeachment.',
        keyDecisions: ['Bail and detention determinations', 'Trial verdicts and criminal sentencing', 'Eviction orders in Landlord & Tenant Branch', 'Civil damage awards'],
        whenToContact: [
          'You are summoned for jury service',
          'You are involved in a landlord-tenant dispute or civil small-claims suit',
          'You are seeking a protective order or civil restraining order'
        ]
      }
    ]
  },
  'dc-ward7': {
    jurisdictionId: 'dc-ward7',
    name: 'District of Columbia — Ward 7 (Deanwood, Benning, Fort Dupont, Hillcrest)',
    type: 'Municipal Home Rule District',
    zipCodes: ['20019', '20020'],
    neighborhoodTitle: 'Advisory Neighborhood Commissions (ANCs 7B, 7C, 7D, 7E, 7F)',
    stateOrEquivalent: 'District of Columbia (Home Rule Charter)',
    federalRepresentation: 'Delegate to U.S. House & Shadow Senators',
    offices: [
      {
        id: 'off-ward7-council',
        title: 'Ward 7 Councilmember',
        branch: 'Legislative',
        level: 'Municipal / Ward',
        currentHolder: 'Ward 7 Council Representative',
        whatItDoes: 'Represents all residents of Ward 7 east of the Anacostia River. Votes on citywide budgets, leads committee oversight, introduces legislation, and advocates for grocery equity, transit, and school capital investments.',
        whatItDoesNotControl: 'Does not manage police patrols or public works crews directly; cannot spend municipal funds unilaterally.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected every 4 years by Ward 7 voters.',
        removalOrConstraintAuthority: 'Voters at election; Council expulsion; recall.',
        keyDecisions: ['Capital budget appropriations for Ward 7 facilities', 'Food desert tax incentive laws', 'Public safety legislation'],
        whenToContact: [
          'Unresponsive city agency services in Ward 7',
          'Advocating for economic development, retail, and safe street infrastructure',
          'Testifying on Council bills impacting East of the River communities'
        ]
      }
    ]
  },
  'general-us-state': {
    jurisdictionId: 'general-us-state',
    name: 'Standard US State Jurisdiction (e.g., Maryland, Virginia, Texas, Ohio)',
    type: 'U.S. Constitutional State',
    zipCodes: ['General'],
    neighborhoodTitle: 'Town / Municipal Council & County Board of Commissioners',
    stateOrEquivalent: 'State Legislature (House & Senate) + Governor',
    federalRepresentation: '2 U.S. Senators + 1 U.S. Representative (full floor voting rights)',
    offices: [
      {
        id: 'off-us-senator',
        title: 'United States Senator (2 per State)',
        branch: 'Legislative',
        level: 'Federal',
        currentHolder: 'State U.S. Senator',
        whatItDoes: 'Represents the entire state in the 100-member upper chamber of the U.S. Congress. Votes on federal statutes, confirms federal judges (including Supreme Court) and Cabinet officers, and ratifies international treaties.',
        whatItDoesNotControl: 'Does not control local zoning, state highway repairs, municipal police, or property taxes.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected statewide for 6-year staggered terms (17th Amendment).',
        removalOrConstraintAuthority: 'State voters at 6-year general elections; Senate expulsion (2/3 vote).',
        keyDecisions: ['Federal judicial confirmations', 'Treaties and foreign policy', 'Federal budget appropriations & tax code', 'Filibuster votes on cloture'],
        whenToContact: [
          'Federal legislation pending before the U.S. Senate',
          'Federal judicial appointments and Supreme Court confirmation hearings',
          'Major federal agency casework (VA, State Department passports, IRS, military service academy nominations)'
        ]
      },
      {
        id: 'off-us-rep',
        title: 'United States Representative (Congressional District)',
        branch: 'Legislative',
        level: 'Federal',
        currentHolder: 'District U.S. Representative',
        whatItDoes: 'Represents roughly 760,000 residents in a specific congressional district. Introduces federal bills, initiates all revenue bills under Article I, and provides direct constituent casework.',
        whatItDoesNotControl: 'Does not vote on presidential treaties or judicial appointments (exclusive Senate power); cannot control state or city laws.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected by district voters every 2 years.',
        removalOrConstraintAuthority: 'District voters every 2 years; House expulsion (2/3 vote).',
        keyDecisions: ['Federal spending bills', 'Articles of impeachment', 'Federal regulatory authority acts'],
        whenToContact: [
          'Help resolving a problem with a federal government agency',
          'Sharing your view on a bill being debated in the House of Representatives',
          'Applying for a congressional nomination to a U.S. military academy'
        ]
      },
      {
        id: 'off-governor',
        title: 'Governor of the State',
        branch: 'Executive',
        level: 'State / Regional',
        currentHolder: 'State Governor',
        whatItDoes: 'Chief Executive of the state. Directs state departments (Transportation, Education, Corrections, Health), commands the State National Guard, proposes state budget, and signs/vetoes state bills.',
        whatItDoesNotControl: 'Cannot enact laws without state legislature; cannot violate federal constitution; cannot spend money without legislative appropriation.',
        selectionMethod: 'Direct Popular Election',
        isElectedByCitizen: true,
        appointingOrConfirmingAuthority: 'Elected statewide every 4 years.',
        removalOrConstraintAuthority: 'State voters; legislative impeachment; recall where allowed.',
        keyDecisions: ['State budget proposal', 'Executive line-item vetoes', 'Pardons and clemency', 'State emergency declarations'],
        whenToContact: [
          'State agency policies (state highways, state prisons, state universities)',
          'Urging a signature or veto on a bill passed by the state legislature'
        ]
      }
    ]
  }
};

// ----------------------------------------------------------------------------
// 3. WHAT CAN I DO? — OBJECTIVE-BASED DEMOCRATIC ACTION PATHWAYS
// ----------------------------------------------------------------------------
export const CIVIC_ACTION_PATHWAYS: CivicActionPathway[] = [
  {
    id: 'act-change-law',
    goal: 'Change, Enact, or Repeal a Local or State Law',
    category: 'Legislative & Policy Reform',
    targetAuthorities: ['City Council', 'State Legislature', 'Relevant Standing Committee'],
    keyQuestion: 'Does the city or state have statutory authority to pass this, or does it violate higher charters/constitutions?',
    informationTools: [
      {
        title: 'Inspect Existing Statutory Code',
        action: 'Search official D.C. Code or State Statutes to verify whether the policy already exists, what authority delegates it, and what penalty clauses apply.',
        citation: 'D.C. Official Code (code.dccouncil.gov) or State Legislative Portal'
      },
      {
        title: 'Review Committee Hearing Archives',
        action: 'Read hearing transcripts, witness testimony, and committee reports on previously introduced bills in this policy area.',
        citation: 'Legislative Information Management System (LIMS)'
      }
    ],
    individualActions: [
      {
        title: 'Schedule a Formal Constituent Meeting',
        action: 'Contact your Ward/District Councilmember’s legislative director. Bring a 1-page briefing sheet outlining the problem, affected constituents, and proposed statutory text.',
        participationGate: 'Direct constituent access rights under representative government.'
      },
      {
        title: 'Register to Testify at a Public Committee Hearing',
        action: 'Sign up through the Council Secretary at least 48 hours before the hearing. Prepare a 3-minute oral statement focused on empirical impacts.',
        participationGate: 'Statutory public hearing rights under Open Government and Home Rule rules.'
      }
    ],
    collectiveActions: [
      {
        title: 'Organize an ANC / Neighborhood Resolution',
        action: 'Present your draft proposal at your monthly public Advisory Neighborhood Commission meeting. Seek a formal resolution, which receives "great weight" from lawmakers.',
        coalitionType: 'Hyper-local civic body resolution.'
      },
      {
        title: 'Form a Citizen Coalition & Coordinate Hearing Witnesses',
        action: 'Bring together tenants, small business owners, educators, and subject-matter researchers to testify in coordinated sequence covering diverse angles (budget, health, equity).',
        coalitionType: 'Multi-stakeholder civic alliance.'
      }
    ],
    institutionalMechanisms: [
      {
        title: 'Submit Proposed Text for Official Plan Builder Review',
        action: 'Use The POWER Plan Builder to structure the proposal with identified authorities, budget offsets, and decision gates before presenting to legislative counsel.',
        formalChannel: 'Council Legislative Counsel & Committee Drafting Bureau.'
      },
      {
        title: 'Examine Chief Financial Officer Fiscal Feasibility',
        action: 'Identify whether the bill requires a new tax or spending reallocation to avoid being blocked by a negative Fiscal Impact Statement.',
        formalChannel: 'Office of the Chief Financial Officer (OCFO) Fiscal Note.'
      }
    ],
    lawfulAssemblyRights: {
      title: 'Lawful Petition, Assembly & Lobby Days',
      guidance: 'Citizens have the First Amendment right to peaceably assemble and petition at the Wilson Building or State Capitol. Groups under specific thresholds (often 25-50 people) generally do not require permits for standard sidewalk petitioning.',
      permitRequirement: 'Permits required for amplified sound, street closures, or large gatherings inside legislative rotundas.'
    }
  },
  {
    id: 'act-fix-infrastructure',
    goal: 'Fix a Broken Street, Dangerous Intersection, or Infrastructure Failure',
    category: 'Municipal Services & Public Safety',
    targetAuthorities: ['Department of Transportation (DDOT / State DOT)', 'Department of Public Works (DPW)', 'ANC'],
    keyQuestion: 'Who owns the road? (Municipal street vs. National Park Service parkway vs. State highway).',
    informationTools: [
      {
        title: 'Verify Street Jurisdiction & Ownership Map',
        action: 'Check whether the street is maintained by the local city DOT or federal National Park Service (e.g., Rock Creek Parkway, Constitution Ave NW).',
        citation: 'Municipal GIS Street Centerline Layer'
      },
      {
        title: 'Inspect 311 Open Data Service Records',
        action: 'Review average resolution time, pending work orders, and historical complaints logged on 311 for that specific block.',
        citation: 'City 311 Open Data Portal'
      }
    ],
    individualActions: [
      {
        title: 'File a Geotagged 311 Service Request',
        action: 'Submit photos, exact GPS coordinates, and safety hazard descriptions. Record the confirmation ticket number for official tracking.',
        participationGate: 'Municipal administrative complaint process.'
      },
      {
        title: 'Submit a Traffic Safety Investigation (TSI) Request',
        action: 'Formally request a municipal engineering review for traffic calming, speed tables, crosswalk beacons, or sidewalk repairs.',
        participationGate: 'Agency regulatory review petition.'
      }
    ],
    collectiveActions: [
      {
        title: 'Request an ANC Site Walk with Agency Engineers',
        action: 'Have your ANC Commissioner sponsor an official on-site walkthrough with city engineers during peak traffic hours.',
        coalitionType: 'Neighborhood commission site inspection.'
      },
      {
        title: 'Block Petition of Affected Neighbors',
        action: 'Gather signatures from at least 75% of residents on the block to formally demonstrate community consensus for speed bumps or permit parking.',
        coalitionType: 'Direct neighborhood petition.'
      }
    ],
    institutionalMechanisms: [
      {
        title: 'Testify at Agency Budget & Performance Oversight Hearings',
        action: 'Every February/March, Council holds annual oversight hearings on the Department of Transportation. Testify with photos and ticket numbers.',
        formalChannel: 'Council Committee on Transportation and the Environment.'
      },
      {
        title: 'Escalate to Mayor’s Office of Community Relations (MOCRS)',
        action: 'Contact the Ward liaison assigned to troubleshoot delayed municipal service delivery tickets.',
        formalChannel: 'Executive Office of the Mayor (MOCRS).'
      }
    ],
    lawfulAssemblyRights: {
      title: 'Pedestrian Safety & Block Rallies',
      guidance: 'Neighbors may lawfully assemble on public sidewalks to hold educational rallies or distribute safety literature without obstructing pedestrian flow or vehicle roadways.',
      permitRequirement: 'Block party or roadway closure permits required if stepping off sidewalk into vehicular lanes.'
    }
  },
  {
    id: 'act-audit-spending',
    goal: 'Audit Public Spending, Procurement Contracts, or Budget Waste',
    category: 'Public Integrity & Fiscal Oversight',
    targetAuthorities: ['Office of the D.C. Auditor (ODCA) / State Auditor', 'Inspector General (OIG)', 'Office of Contracting and Procurement'],
    keyQuestion: 'Was money legally appropriated, and does an audited paper trail verify goods/services were delivered?',
    informationTools: [
      {
        title: 'Inspect the Annual Comprehensive Financial Report (ACFR)',
        action: 'Review audited balance sheets, fund balances, and independent external auditor opinions on financial controls.',
        citation: 'Office of the Chief Financial Officer (OCFO) ACFR Archive'
      },
      {
        title: 'Search Public Procurement & Contract Database',
        action: 'Look up contract award amounts, sole-source justification letters, vendor names, and modification change orders.',
        citation: 'Contracts & Procurement Public Portal (contracts.dc.gov)'
      }
    ],
    individualActions: [
      {
        title: 'File a Freedom of Information Act (FOIA) Request',
        action: 'Submit a specific, reasonably described request for contract deliverables, evaluation scoring rubrics, or internal audit memos.',
        participationGate: 'Statutory FOIA rights (D.C. Code § 2-531 et seq. / 5 U.S.C. § 552).'
      },
      {
        title: 'Submit Counterevidence to The POWER Standard Challenge Log',
        action: 'Use the POWER "Challenge Record" feature to flag conflicting audit data or missing statutory appropriations for public peer review.',
        participationGate: 'Open civic audit standard.'
      }
    ],
    collectiveActions: [
      {
        title: 'Partner with Civic Watchdog Organizations',
        action: 'Collaborate with groups like the League of Women Voters, D.C. Fiscal Policy Institute, or investigative reporters to amplify findings.',
        coalitionType: 'Independent nonpartisan watchdog coalition.'
      }
    ],
    institutionalMechanisms: [
      {
        title: 'File a Formal Confidential Report with the Inspector General',
        action: 'If you possess evidence of fraud, waste, abuse, or conflict of interest in a city contract, submit via the OIG Hotline.',
        formalChannel: 'Office of the Inspector General (OIG) Fraud Hotline.'
      },
      {
        title: 'Petition the Auditor or Council Committee for a Special Audit',
        action: 'Write to the District Auditor (ODCA) requesting that a systemic procurement anomaly be included in the annual audit plan.',
        formalChannel: 'Statutory Independent Auditor Review.'
      }
    ],
    lawfulAssemblyRights: {
      title: 'Public Budget Hearing Participation',
      guidance: 'The public has the right to attend all open budget markups and oversight hearings. Citizen auditors frequently present charts and comparative data directly to committee members.',
      permitRequirement: 'None for attending open public legislative meetings.'
    }
  },
  {
    id: 'act-challenge-rule',
    goal: 'Challenge an Unfair Administrative Agency Regulation or Fining Practice',
    category: 'Administrative Law & Due Process',
    targetAuthorities: ['Office of Administrative Hearings (OAH)', 'Issuing Executive Agency', 'Council Oversight Committee'],
    keyQuestion: 'Did the agency follow statutory Notice and Comment under the APA, or did it exceed its legislative delegation?',
    informationTools: [
      {
        title: 'Inspect the D.C. Register / State Administrative Bulletin',
        action: 'Review the text of the proposed rule, the legal authority cited, the agency’s statement of basis, and the public comment deadline.',
        citation: 'Office of Documents and Administrative Issuances (ODAI)'
      },
      {
        title: 'Check Underlying Enabling Legislation',
        action: 'Verify whether the statute passed by Council actually gave the agency the power to levy this specific fine or restriction.',
        citation: 'D.C. Official Code Enabling Clause'
      }
    ],
    individualActions: [
      {
        title: 'Submit a Formal Public Comment During Rulemaking',
        action: 'Submit written feedback arguing why the rule is arbitrary, legally deficient, or practically unworkable. Agencies must review all substantive comments by law.',
        participationGate: 'Administrative Procedure Act (APA) 30-day notice period.'
      },
      {
        title: 'File an Appeal with the Office of Administrative Hearings (OAH)',
        action: 'If fined or penalized, request an independent hearing before an Administrative Law Judge (ALJ) who is independent of the agency.',
        participationGate: 'Due process hearing rights before an ALJ.'
      }
    ],
    collectiveActions: [
      {
        title: 'Mobilize Affected Businesses or Residents for Joint Comment',
        action: 'Coordinate dozens of substantive, non-duplicate comments citing empirical economic and operational data to create an undeniable administrative record.',
        coalitionType: 'Rulemaking comment mobilization.'
      }
    ],
    institutionalMechanisms: [
      {
        title: 'Request Council Legislative Override or Regulatory Disapproval',
        action: 'Ask Councilmembers to introduce a resolution of disapproval or a clarifying bill restricting agency regulatory reach.',
        formalChannel: 'Council Committee with Jurisdiction.'
      },
      {
        title: 'Seek Judicial Review in D.C. Court of Appeals',
        action: 'If administrative remedies are exhausted, appeal the agency’s final decision under APA standards (arbitrary and capricious / unsupported by substantial evidence).',
        formalChannel: 'D.C. Court of Appeals.'
      }
    ],
    lawfulAssemblyRights: {
      title: 'First Amendment Rights in Administrative Proceedings',
      guidance: 'Citizens have the right to attend agency board hearings, record public proceedings under Open Meetings legislation, and peacefully assemble outside agency headquarters.',
      permitRequirement: 'Standard public sidewalk guidelines.'
    }
  }
];
