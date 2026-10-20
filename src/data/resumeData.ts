export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  category: 'rollout' | 'field' | 'management';
  sections?: {
    heading: string;
    bullets: string[];
  }[];
  highlights?: string[];
  additionalResponsibilities?: {
    title: string;
    period: string;
    bullets: string[];
  }[];
}

export interface SoftwareTool {
  id: string;
  number: number;
  name: string;
  screenshotUrl?: string;
  liveUrl?: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  company: string;
  contact: string;
}

export const RESUME_DATA = {
  personal: {
    fullName: "Engr. John Carlo Besas Rabanes, ECE",
    shortName: "Engr. John Carlo Rabanes",
    title: "Electronics Engineer | PRC No. 0073854",
    license: "PRC No. 0073854",
    boardExam: "Date Pass the Boards: May 2019",
    phone: "09669343065",
    email: "rabanes.johncarlo1994@gmail.com",
    address: "Zone 2, Igpit, Opol, Misamis Oriental",
    birthDate: "July 14, 1994 (32 yrs old)",
    birthPlace: "Guindulman, Bohol",
    maritalStatus: "Single",
    expectedSalary: "To be discussed during the interview",
    photoUrl: "/assets/john_carlo_photo.jpg",
    pdfUrl: "/assets/aistudio/John_Carlo_Rabanes_Resume_2026_d6dc425a.pdf",
    summary:
      "Electronics Engineer (ECE) with 6+ years of field experience in OLT installation, integration, and site acceptance for Globe Telecom projects. Proven track record in site surveys, power tapping, commissioning (Huawei/Fiberhome), NOC support, and OSP fiber works. Skilled in Globe processes including TSSR, MOP, ISDP, PrePAT, RLA, and ABDOcs. Additionally, a proactive developer of internal software tools (Android, Python, JavaScript) that automate MOP/TSSR generation, billing, and project management. Seeking to leverage hands-on telecom engineering experience and process automation skills as an OLT Roll-Out Engineer at Nokia to drive successful OLT deployments across Globe's network infrastructure."
  },

  metrics: [
    { label: "Field Telecom Experience", value: "6+ Years" },
    { label: "Internal Applications Developed", value: "9 Tools" },
    { label: "PRC Professional License", value: "No. 0073854" },
    { label: "ECE Board Exam Passed", value: "May 2019" }
  ],

  education: [
    {
      level: "College",
      institution: "Liceo De Cagayan University",
      period: "SY 2016-2017",
      degree: "BS in Electronics and Communication Engineering (ECE)",
      highlight: "Date Pass the Boards: May 2019"
    },
    {
      level: "Secondary",
      institution: "Opol National Secondary Technical School",
      period: "SY 2010 – 2011",
      degree: "NC2 in Electronics Technology",
      highlight: "TESDA NC2 Certified"
    }
  ],

  coreCompetencies: [
    {
      category: "OLT & Transport",
      items: [
        "OLT installation",
        "Integration",
        "Commissioning",
        "Power tapping",
        "Card migration",
        "NE profile creation"
      ]
    },
    {
      category: "Globe Processes",
      items: [
        "TSSR",
        "MOP",
        "ISDP",
        "PrePAT",
        "RLA",
        "ABDOcs (Asbuilt Plan & Pictures)"
      ]
    },
    {
      category: "NOC & Tools",
      items: [
        "UNM2000 NMS",
        "Citrix",
        "SecureCRT",
        "Packet Tracer",
        "Port assessment",
        "Remote fiber patching"
      ]
    },
    {
      category: "OSP & Fiber",
      items: [
        "Fiber splicing (NAP to household)",
        "OSP troubleshooting",
        "LCP",
        "FTP management"
      ]
    },
    {
      category: "Equipment",
      items: [
        "Huawei",
        "Fiberhome OLT",
        "DITO/Smart transport equipment",
        "Nokia OLT"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Field team supervision",
        "Budget management",
        "Escalation handling",
        "Globe coordinator liaison",
        "Training and mentoring new engineers",
        "Project coordination and negotiation"
      ]
    }
  ],

  projectManagementAndSoftSkills: [
    "Adept at addressing and resolving queries from supervisors, area managers, in-house, and subcontractor personnel.",
    "Strong communication and problem-solving abilities.",
    "Reporting site issues, managing documentation for site closure, and coordinating with Globe Telecom personnel.",
    "Capable of providing training to new technical engineers and presenting weekly schedules.",
    "Competency in project coordination, negotiation, management, and monitoring.",
    "Customer service acumen, technical support, and efficient project escalation management."
  ],

  softwareTools: [
    {
      id: "raawa",
      number: 1,
      name: "Raawa Generator",
      screenshotUrl: "/assets/raawa_generator_screenshot.png",
      liveUrl: "https://raawagen-kyypjzg7cy4jh97xcpnhee.streamlit.app/"
    },
    {
      id: "mop-power",
      number: 2,
      name: "MOP Powertapping Generator",
      screenshotUrl: "/assets/mop_powertapping_screenshot.png",
      liveUrl: "https://ptapmop-eadjbbxkw3rrbky7326jsm.streamlit.app/"
    },
    {
      id: "mop-integration",
      number: 3,
      name: "MOP Integration Generator",
      screenshotUrl: "/assets/mop_integration_screenshot.png",
      liveUrl: "https://mopintegrationgen.pages.dev/"
    },
    {
      id: "billing-grabber",
      number: 4,
      name: "Billing PO No. and Materials Grabber",
      screenshotUrl: "/assets/billing_grabber_screenshot.png",
      liveUrl: "https://pdfextract-6bk42cwxqnir7h7mdjjnms.streamlit.app/"
    },
    {
      id: "mrf-generator",
      number: 5,
      name: "MRF Generator",
      screenshotUrl: "/assets/mrf_generator_screenshot.png",
      liveUrl: "https://mrfgener2r.pages.dev/"
    },
    {
      id: "telecom-layout-studio",
      number: 6,
      name: "Telecom Layout Studio",
      screenshotUrl: "/assets/telecom_layout_studio_screenshot.png",
      liveUrl: "https://telecomlayoutstudio.pages.dev/"
    },
    {
      id: "prams",
      number: 7,
      name: "PRAMS (Project Rollout and Management System)",
      screenshotUrl: "/assets/prams_screenshot.png"
    },
    {
      id: "ericsson-nokia-tssr",
      number: 8,
      name: "Ericsson TSSR to Nokia TSSR Generator"
    },
    {
      id: "apw-reimbursement",
      number: 9,
      name: "APW Reimbursement App with Justification and MPR"
    }
  ],

  experiences: [
    {
      id: "nokia",
      role: "OLT Roll-Out Engineer",
      company: "Nokia Shanghai Bell",
      period: "May 2026 – Present",
      category: "rollout",
      sections: [
        {
          heading: "Deployment and Installation",
          bullets: [
            "Coordinate with clients and supervise subcontractors for the physical installation of OLT chassis, cards, and fiber cabling at central offices or remote cabinets.",
            "Oversee deployment activities to ensure sites are delivered on time and within budget."
          ]
        },
        {
          heading: "Commissioning, Integration, and Testing",
          bullets: [
            "Perform software installation, initial configuration, and integration of OLTs into the network management system.",
            "Conduct Preliminary Acceptance Tests (PAT) and Final Acceptance Tests (FAT) to ensure hardware and software meet quality standards before going live."
          ]
        },
        {
          heading: "Troubleshooting and Documentation",
          bullets: [
            "Identify, analyze, and resolve technical issues during the installation, commissioning, or integration phases.",
            "Maintain accurate records of installation configurations, site survey reports, and test results.",
            "Collaborate with project managers, field teams, and subcontractors to ensure smooth project coordination."
          ]
        },
        {
          heading: "Process Automation & Software Development",
          bullets: [
            "Independently developed and deployed 9 internal software applications using Android, Python, and JavaScript to streamline field operations and administrative workflows.",
            "Created automated tools including MOP (Powertapping & Integration) Generators, an Ericsson to Nokia TSSR Generator, a Billing/Materials Grabber, and PRAMS (Project Rollout and Management System) to reduce manual errors and save engineering hours."
          ]
        }
      ]
    },
    {
      id: "neo-tech",
      role: "Senior Technical Engineer",
      company: "Neo-Tech Asia Distribution",
      period: "December 20, 2025 – May 15, 2026",
      category: "field",
      highlights: [
        "Provide technical engineering support for distribution and field operations",
        "Troubleshoot and resolve equipment and system issues to ensure uptime",
        "Collaborate with cross-functional teams to meet project deliverables"
      ]
    },
    {
      id: "polymedic",
      role: "Network Engineer / IT Department Head",
      company: "Polymedic Medical Group",
      period: "April 18, 2024 – Sept. 15, 2025",
      category: "management",
      highlights: [
        "Managed IT infrastructure, network administration, and hospital information systems (HIS) in a healthcare environment",
        "Designed and implemented IT policies and procedures to enhance efficiency and compliance",
        "Led IT team to deliver technical support aligned with organizational goals"
      ]
    },
    {
      id: "fiberhome",
      role: "Senior Technical Engineer",
      company: "Fiberhome Technologies",
      period: "December 2020 – November 2022",
      category: "field",
      highlights: [
        "Conducted site surveys and authored Technical Site Survey Reports (TSSR) per Globe standards",
        "Installed, power-tapped, and integrated OLT equipment following approved Method of Procedures (MOPs)",
        "Used ISDP to complete PrePAT activities and prepared Asbuilt Plan & Picture documentation (ABDOcs)"
      ],
      additionalResponsibilities: [
        {
          title: "Acting Supervisor",
          period: "September 2022 – November 2022",
          bullets: [
            "Oversaw OLT projects for Northern Mindanao cluster.",
            "Presented weekly activities, managed technical engineers, and allocated budgets",
            "Provided remote and on-site support including site surveys, TSSR/MOP creation, installation, power tapping, commissioning, integration, NE profile creation, PrePAT, and technical query resolution."
          ]
        },
        {
          title: "NOC Support",
          period: "December 2020 – November 2022",
          bullets: [
            "Delivered remote support for card migration, card insertion, OLT integration, PrePAT, and RLA (Remote Live Acceptance) via NMS (UNM2000)",
            "Conducted port assessments via NMS to ensure port availability for new LCP insertions",
            "Supported external ODN teams with port assignments and supplied updated FTP as required",
            "Provided remote fiber patching support and performed Remote Auto Detect & Throughput testing for NAP"
          ]
        }
      ]
    },
    {
      id: "insystic",
      role: "Technical Engineer",
      company: "Insystic Corp.",
      period: "July 2020 – December 2020",
      category: "field",
      highlights: [
        "Conducted site surveys and created TSSRs for designated sites per Globe standards",
        "Led OLT installation, power tapping, and integration following approved MOPs",
        "Used ISDP for PrePAT activities and prepared ABDOcs documentation"
      ]
    },
    {
      id: "quintas",
      role: "Commissioning Engineer",
      company: "J’s Quintas Telecom Services",
      period: "September 2019 – June 2020",
      category: "rollout",
      highlights: [
        "Installed and commissioned Huawei transport equipment for Globe, Smart, and DITO sites",
        "Loaded scripts for system integration and conducted QC checks via ISDP QC",
        "Rectified Punch List (PL) issues to ensure optimal functionality"
      ]
    },
    {
      id: "intellisoft",
      role: "Systems Engineer",
      company: "Intellisoft Microcomputer Systems",
      period: "November 2017 – May 2018",
      category: "field",
      highlights: [
        "Generated work orders for PC, laptop, and printer check-ups; compiled daily progress reports",
        "Installed alarm systems and CCTV setups; performed LAN cabling and maintenance repairs"
      ]
    }
  ],

  references: [
    {
      name: "Engr. Niel Capistrano, ECE, ECT",
      contact: "09531790575",
      title: "Core Network and Facility Engineer",
      company: "Globe Telecom"
    },
    {
      name: "Engr. Rolando Tronco, ECE",
      contact: "09065870747",
      title: "Area Project Manager",
      company: "Fiberhome Technologies"
    },
    {
      name: "Kevin Colmo",
      contact: "0917176767747",
      title: "OLT Rollout Manager",
      company: "Nokia Shanghai Bell"
    }
  ]
};
