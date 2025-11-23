export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  linkedin: string;
  highlights: string[];
  certifications?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Harish N G",
    role: "Co-Founder & Lead Engineer",
    bio: "Experienced Senior Software Engineer with 6+ years specializing in AWS Cloud Data Engineering, Python development, and scalable data pipelines. Led development of healthcare solutions and automated workflows using Airflow and RESTful APIs.",
    expertise: [
      "Python",
      "AWS",
      "Data Engineering",
      "Apache Airflow",
      "REST APIs",
      "FastAPI",
      "S3",
      "Jenkins CI/CD",
      "Robot Framework",
      "Git"
    ],
    image: "/images/team/harish-ng.svg",
    linkedin: "https://www.linkedin.com/in/harish-n-g/",
    highlights: [
      "6+ years in AWS Cloud & Python",
      "Automated data pipelines & workflows",
      "Healthcare software expertise"
    ],
    certifications: [
      "Google Certifications",
      "Python Object-Oriented Programming (LinkedIn)",
      "NumPy Essential Training",
      "REST APIs",
      "Generative AI (LinkedIn Learning)"
    ]
  },
  {
    name: "Sruthi N G",
    role: "Co-Founder & Technology Architect",
    bio: "Assistant Professor and technology expert with specialization in Big Data Analytics, Cloud Computing, Mobile Application Development, and Web Programming. Published multiple IEEE research papers on IoT, Cloud Security, and AI/ML applications.",
    expertise: [
      "Big Data Analytics",
      "Cloud Computing",
      "Mobile App Development",
      "Python",
      "Java",
      "HTML/CSS",
      "SQL",
      "Cyber Security",
      "IoT",
      "AIML"
    ],
    image: "/images/team/sruthi-ng.svg",
    linkedin: "https://www.linkedin.com/in/sruthi-ng/",
    highlights: [
      "5+ years academic & research experience",
      "IEEE papers on IoT & Cloud Security",
      "Certified in Python & Generative AI"
    ],
    certifications: [
      "Python Certified",
      "Cyber Security",
      "Generative AI Tools",
      "M.Tech Computer Science (VTU)"
    ]
  },
  {
    name: "Pawan Kumar Gopal",
    role: "Co-Founder & Enterprise Solutions Lead",
    bio: "PLM and CAD consultant with 12+ years of experience in automotive industry. Hands-on expertise in 3DExperience, Teamcenter, and international project management. Brings enterprise-grade solution architecture and automotive domain knowledge.",
    expertise: [
      "PLM Solutions",
      "3DExperience",
      "Teamcenter",
      "CAD Systems",
      "Enterprise Architecture",
      "Automotive Industry",
      "Project Management",
      "Solution Design",
      "International Projects"
    ],
    image: "/images/team/pawan-kumar.svg",
    linkedin: "https://www.linkedin.com/in/pawankumargopal/",
    highlights: [
      "12+ years automotive industry experience",
      "PLM functional expert",
      "International project leadership"
    ],
    certifications: [
      "PLM Functional Expert",
      "3DExperience Certified",
      "Teamcenter Specialist",
      "International Project Management"
    ]
  }
];
