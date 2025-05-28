import React from 'react';
import { Briefcase, Building, Users, Edit3, Code, Shield, Home as HomeIcon, Aperture } from 'lucide-react'; // Added HomeIcon, Aperture

export const timelineData = [
  {
    id: "self-2016-present",
    company: "Self Employment at Karachi",
    period: "May, 2016 – Present",
    location: "Karachi, Pakistan",
    role: "Lead Architect / Principal Architect",
    description: "I am a registered (PCATP life Member) and the license Sindh Building Control Authority (SBCA) in Karachi, Pakistan. I have been working as a self-employed professional principal architect practice in Pakistan for the last 8 years, specializing in architectural design, standards, planning, techniques, and project coordination. My work primarily involves the management of residential, commercial and villa projects, including landscape design, interior design, and farmhouse design. I possess exceptional skills and extensive experience in various software tools such as AutoCAD, Photoshop, Revit, and 3D Max, ensuring material quality in accordance with specifications.",
    keyPoints: [
      "Registered PCATP Life Member & SBCA Licensed Architect.",
      "8 years of independent principal architect practice.",
      "Specialization in residential, commercial, villas, interiors, landscapes, farmhouses.",
      "Proficient in AutoCAD, Photoshop, Revit, 3D Max."
    ],
    icon: Briefcase,
    majorProjects: [
        { id: "self-residential-commercial", name: "Residential & Commercial Complexes", details: "Various Locations" },
        { id: "self-villas-landscape", name: "Villa Designs with Integrated Landscaping", details: "Karachi & Surroundings" }
    ],
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "alrabiah-2013-2015",
    company: "A. Alrabiah Consulting Engineering",
    period: "7 Nov, 2013 – 18 Dec, 2015",
    location: "Dammam, Saudi Arabia",
    role: "Technical Architect Engineer",
    description: "Worked in the Urban Planning Department of the Central Committee of Al Ahsa-Hofuf Municipality. Focused on redevelopment of heritage buildings and commercial areas. Prepared site development proposals using geographic imaging for landscape analysis and interpretation. Participated in weekly progress meetings with department heads and promoted geographic learning through visuals. Contributed to a productive work environment.",
    keyPoints: [
      "Urban Planning for Al Ahsa-Hofuf Municipality.",
      "Redevelopment of heritage buildings and commercial zones.",
      "Site proposals using geographic imaging.",
      "Weekly meetings with department heads."
    ],
    icon: Building,
    majorProjects: [
        { id: "alrabiah-heritage-redevelopment", name: "Heritage Buildings Redevelopment", details: "Hofuf" },
        { id: "alrabiah-commercial-areas", name: "Commercial Area Revitalization", details: "Hofuf" }
    ],
    heroImage: "https://images.unsplash.com/photo-1568624625941-3921980a9051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
  },
  {
    id: "rabya-2012-2013",
    company: "RABYA General Contractor",
    period: "14 Oct, 2012 – 14 Oct, 2013",
    location: "Jeddah, Saudi Arabia",
    role: "Architect Engineer",
    description: "Worked alongside engineers, project directors, site supervisors. Assisted in finishing works, created shop drawings, managed relationships with internal and external teams. Monitored quality plans and supervised draftsmen.",
    keyPoints: [
      "Collaboration with project directors and site supervisors.",
      "Assisted in finishing works and shop drawing creation.",
      "Managed internal/external team relationships.",
      "Monitored quality plans and supervised draftsmen."
    ],
    icon: Users,
    majorProjects: [
        { id: "rabya-finishing-works", name: "Finishing Works Supervision", details: "Various Projects" },
        { id: "rabya-shop-drawings", name: "Shop Drawing Management", details: "Multiple Sites" }
    ],
    heroImage: "https://images.unsplash.com/photo-1429497419816-9ca5cfb457e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "alterais-2010-2012",
    company: "Saudi AL-Terais Co.",
    period: "3 Oct, 2010 – 3 Oct, 2012",
    location: "Jeddah, Saudi Arabia",
    role: "Project Architect Engineer",
    description: "Collaborated with contractors and consultants to convert design concepts into architectural solutions. Led site visits, managed drawings, secured resources, and enforced quality standards. Supervised draft teams and attended progress reviews.",
    keyPoints: [
      "Converted design concepts into architectural solutions.",
      "Led site visits and managed drawings.",
      "Secured resources and enforced quality standards.",
      "Supervised draft teams and attended progress reviews."
    ],
    icon: Edit3,
    majorProjects: [
        { id: "alterais-design-conversion", name: "Design Concept to Architectural Solution", details: "Multiple Projects" },
        { id: "alterais-site-management", name: "Site & Quality Management", details: "Jeddah" }
    ],
    heroImage: "https://images.unsplash.com/photo-1511300636408-a67a4017a275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "enercon-2007-2009",
    company: "ENERCON – Ministry of Environment, Government of Pakistan",
    period: "30 Jun, 2007 – 30 Jun, 2009",
    location: "Islamabad, Pakistan",
    role: "Assistant Chief (Building)",
    description: "Reviewed and updated Pakistan's Building Energy Code. Conducted energy audits on: Enercon HQ, Islamabad; Ufone Lahore; Telephone House, Peshawar; RCOD Complex; Hydrocarbon Institute. Held seminars for stakeholders, ensured insulation and construction standards, and supervised site implementation.",
    keyPoints: [
      "Reviewed and updated Pakistan's Building Energy Code.",
      "Conducted energy audits on 5 major buildings.",
      "Held seminars for stakeholders.",
      "Ensured insulation/construction standards and supervised site implementation."
    ],
    icon: Code,
    majorProjects: [
        { id: "enercon-building-code", name: "Pakistan Building Energy Code Update" },
        { id: "enercon-audit-enerconhq", name: "Energy Audit: Enercon HQ", details: "Islamabad" },
        { id: "enercon-audit-ufone", name: "Energy Audit: Ufone Lahore" },
    ],
    heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "pepac-2007",
    company: "PePAC – Pakistan Environmental Planning & Architectural Consultants",
    period: "2007 (Freelance)",
    location: "Islamabad, Pakistan",
    role: "Freelance Senior Architect",
    description: "Projects: Supreme Court Ph-II Speakers’ Residential Block, Islamabad; 500-bed Hospitals at Mansehra & Palandari; Children’s Hospital, Peshawar; PMNH Ph-II, Islamabad; Special Education Centre, Mirpurkhas; PTV Broadcasting Stations (Noshiq, Khuzdar, Mirpurkhas).",
    keyPoints: [
        "Supreme Court Ph-II Speakers’ Residential Block, Islamabad.",
        "500-bed Hospitals at Mansehra & Palandari.",
        "Children’s Hospital, Peshawar.",
        "PMNH Ph-II, Islamabad.",
        "Special Education Centre, Mirpurkhas.",
        "PTV Broadcasting Stations (Noshiq, Khuzdar, Mirpurkhas)."
    ],
    icon: Shield,
    majorProjects: [
        { id: "pepac-supreme-court", name: "Supreme Court Ph-II Speakers’ Residential Block", details: "Islamabad" },
        { id: "pepac-hospitals", name: "500-bed Hospitals", details: "Mansehra & Palandari" }
    ],
    heroImage: "https://images.unsplash.com/photo-1586953208448-315013900c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "osmani-2004-2007",
    company: "Osmani & Company (Pvt.) Ltd.",
    period: "Jun, 2004 – May, 2007",
    location: "Karachi, Pakistan",
    role: "Senior Design Architect",
    description: "Projects: GHQ (Education Blocks), Islamabad; Malir Cantt Commercial Buildings; Cadet College Ghotki – full campus; QAU – National Centre for Bioinformatics; Private bungalow architecture and landscaping.",
    keyPoints: [
      "GHQ (Education Blocks), Islamabad.",
      "Malir Cantt Commercial Buildings.",
      "Cadet College Ghotki – full campus.",
      "QAU – National Centre for Bioinformatics.",
      "Private bungalow architecture and landscaping."
    ],
    icon: Aperture,
    majorProjects: [
        { id: "osmani-ghq", name: "GHQ (Education Blocks)", details: "Islamabad" },
        { id: "osmani-cadet-college", name: "Cadet College Ghotki – full campus" }
    ],
    heroImage: "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "environ-2002-2004",
    company: "Environ. Envision",
    period: "July 2002 – June 2004",
    location: "Karachi, Pakistan",
    role: "Assistant Architect",
    description: "Projects: Hot Shot Bowling Centre – DHA Lahore; PNSC – MCB Ground Floor Interior; Marriage Hall – Quetta; Multiple bungalows with landscape.",
    keyPoints: [
      "Hot Shot Bowling Centre – DHA Lahore.",
      "PNSC – MCB Ground Floor Interior.",
      "Marriage Hall – Quetta.",
      "Multiple bungalows with landscape."
    ],
    icon: HomeIcon,
    majorProjects: [
        { id: "environ-bowling", name: "Hot Shot Bowling Centre", details: "DHA Lahore" },
        { id: "environ-mcb", name: "PNSC – MCB Ground Floor Interior" }
    ],
    heroImage: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "tanveer-cezanne-1999-2002",
    company: "Tanveer & Cezanne Associates",
    period: "Sept. 1999 – June 2002",
    location: "Karachi, Pakistan",
    role: "Junior Architect",
    description: "Started career working on bungalows and landscapes, contributing to initial professional development.",
    keyPoints: [
      "Worked on bungalows and landscapes.",
      "Contributed to initial professional development."
    ],
    icon: HomeIcon,
    majorProjects: [
        { id: "tanveer-bungalows", name: "Bungalow Designs", details: "Various Locations" },
        { id: "tanveer-landscapes", name: "Landscape Projects", details: "Karachi" }
    ],
    heroImage: "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
  }
];