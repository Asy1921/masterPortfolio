/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhavya Malhotra",
  description:
    "Bhavya Malhotra is a trauma-informed therapist who views the practitioner-user relationship as a journey to explore safety, growth, and change. She completed her Master's in Applied Psychology in Clinical and Counseling Practice from Tata Institute of Social Sciences, Mumbai, in 2022.",
  og: {
    title: "Bhavya Malhotra Portfolio",
    type: "website",
    url: "https://www.bhavyamalhotra.com/",
  },
};

//Home Page
const greeting = {
  title: "Bhavya Malhotra",
  logo_name: "BhavyaMalhotra",
  nickname: "Bhavya",
  subTitle:
    "Bhavya Malhotra is a trauma-informed therapist who views the practitioner-user relationship as a journey to explore safety, growth, and change. She completed her Master's in Applied Psychology in Clinical and Counseling Practice from Tata Institute of Social Sciences, Mumbai, in 2022.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/malhotrabhavya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:bhavyawrites,info@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/bhavyawrites",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhavya/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Trauma-Informed Therapy",
      fileName: "TherapyImg",
      skills: [
        "⚡ Practicing trauma-informed therapy with focus on safety, growth, and change",
        "⚡ Master's in Applied Psychology in Clinical and Counseling Practice from TISS, Mumbai",
        "⚡ Specialized in creating safe therapeutic environments for healing and recovery",
      ],
      softwareSkills: [
        {
          skillName: "Psychology",
          fontAwesomeClassname: "fa-brain",
          style: {
            color: "#6A5ACD",
          },
        },
        {
          skillName: "Counseling",
          fontAwesomeClassname: "fa-comments",
          style: {
            color: "#20B2AA",
          },
        },
        {
          skillName: "Trauma Therapy",
          fontAwesomeClassname: "fa-heart",
          style: {
            color: "#DC143C",
          },
        },
        {
          skillName: "Mental Health",
          fontAwesomeClassname: "fa-leaf",
          style: {
            color: "#32CD32",
          },
        },
      ],
    },
    {
      title: "Mental Health Writing & Content Creation",
      fileName: "WritingImg",
      skills: [
        "⚡ 5+ years of freelance writing experience in mental health and wellness",
        "⚡ Creating jargon-free, scientifically-grounded content with lived experience perspective",
        "⚡ Specialized in topics like self-care, anxiety management, addiction, and trauma recovery",
      ],
      softwareSkills: [
        {
          skillName: "Content Writing",
          fontAwesomeClassname: "fa-pen-nib",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Blogging",
          fontAwesomeClassname: "fa-blog",
          style: {
            color: "#FF6347",
          },
        },
        {
          skillName: "Copywriting",
          fontAwesomeClassname: "fa-edit",
          style: {
            color: "#FF8C00",
          },
        },
        {
          skillName: "SEO Writing",
          fontAwesomeClassname: "fa-search",
          style: {
            color: "#008B8B",
          },
        },
      ],
    },
    {
      title: "Research & Academic Excellence",
      fileName: "ResearchImg",
      skills: [
        "⚡ Research experience with scientific literature and evidence-based practices",
        "⚡ Instructional design and educational content development",
        "⚡ ADHD lived experience informing research and therapeutic approaches",
      ],
      softwareSkills: [
        {
          skillName: "Research",
          fontAwesomeClassname: "fa-microscope",
          style: {
            color: "#4B0082",
          },
        },
        {
          skillName: "Academic Writing",
          fontAwesomeClassname: "fa-graduation-cap",
          style: {
            color: "#8B4513",
          },
        },
        {
          skillName: "Data Analysis",
          fontAwesomeClassname: "fa-chart-bar",
          style: {
            color: "#2E8B57",
          },
        },
        {
          skillName: "Literature Review",
          fontAwesomeClassname: "fa-book-open",
          style: {
            color: "#B22222",
          },
        },
      ],
    },
    {
      title: "Professional Collaboration & Recognition",
      fileName: "CollaborationImg",
      skills: [
        "⚡ Collaborated with organizations like Mave Health, Happiest Health, and Behr Psychology",
        "⚡ Shortlisted winner of Wingword Poetry Prize 2020",
        "⚡ Expert in creating non-judgmental, trauma-informed content that encourages help-seeking",
      ],
      softwareSkills: [
        {
          skillName: "Professional Writing",
          fontAwesomeClassname: "fa-briefcase",
          style: {
            color: "#2F4F4F",
          },
        },
        {
          skillName: "Client Relations",
          fontAwesomeClassname: "fa-handshake",
          style: {
            color: "#DAA520",
          },
        },
        {
          skillName: "Poetry",
          fontAwesomeClassname: "fa-feather",
          style: {
            color: "#9370DB",
          },
        },
        {
          skillName: "Healthcare Writing",
          fontAwesomeClassname: "fa-stethoscope",
          style: {
            color: "#CD5C5C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tata Institute of Social Sciences",
      subtitle:
        "Master's degree, Applied Psychology (Clinical and Counselling Practice)",
      logo_path: "iiitk_logo.png",
      alt_name: "TISS Mumbai",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Specialized in Applied Psychology with focus on Clinical and Counselling Practice",
        "⚡ Developed expertise in Qualitative Research methodologies and evidence-based therapeutic practices",
        "⚡ Gained comprehensive training in trauma-informed therapy and mental health interventions",
      ],
      website_link: "https://www.tiss.edu /",
    },
    {
      title: "Ambedkar University Delhi",
      subtitle: "Bachelor of Arts, Psychology",
      logo_path: "iu_logo.png",
      alt_name: "Ambedkar University Delhi",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Graduated with a CGPA of 8.08, demonstrating strong academic performance in Psychology",
        "⚡ Served as Councilor for the Psychology Department, representing student interests and facilitating academic activities",
        "⚡ Worked as Convenor of Wordsmiths, showcasing leadership skills and passion for writing and literature",
      ],
      website_link: "https://www.aud.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Therapy Practice, Research, and Mental Health Writing",
  description:
    "I am a trauma-informed therapist with extensive experience in mental health research, content creation, and therapeutic practice. My work spans private practice, research institutions, and freelance writing, always focused on making mental health resources more accessible and trauma-informed.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Psychotherapist in Private Practice",
          company: "Ordinary Beings (Self-employed)",
          company_url: "",
          logo_path: "tiktok_logo.png",
          duration: "Oct 2022 - Present",
          location: "Remote",
          description:
            "I am a trauma-informed therapist who identifies as neurodivergent. I do long-term work with clients using trauma lens and neuroscience-based models such as coherence therapy to work with clients' emotional wounds (relational and childhood). I'm eclectic, but have an inclination towards trauma-oriented models.",
          color: "#6A5ACD",
        },
        {
          title: "Freelance Writer",
          company: "Self-employed",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "Jan 2020 - Present",
          location: "Remote",
          description:
            "Freelance writing projects on Mental Health and wellness for clients across the globe. Specializing in content strategy, SEO copywriting, mental health advocacy, and blogging to make mental health information accessible.",
          color: "#4169E1",
        },
        {
          title: "Therapeutic Services and Research Manager",
          company: "AdagioVR",
          company_url: "",
          logo_path: "muffito_logo.png",
          duration: "Feb 2025 - Jul 2025",
          location: "Remote",
          description:
            "Managing therapeutic services and research initiatives using applied psychology, qualitative and quantitative research, stakeholder engagement, and trauma-informed care approaches in virtual reality therapeutic applications.",
          color: "#20B2AA",
        },
        {
          title: "Research Associate - Community Engagement",
          company: "Sangath India",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "Aug 2023 - Feb 2025",
          location: "Delhi, India (Hybrid)",
          description:
            "Conducted field visits to project beneficiaries, developed community engagement toolkits, coordinated user testing workshops across Delhi, Goa, and Sri Lanka. Engaged in capacity-building activities and trained health workers in delivering NAMASTE toolkit materials.",
          color: "#2E8B57",
        },
      ],
    },
    {
      title: "Writing & Content",
      experiences: [
        {
          title: "Mental Health Writer",
          company: "Happiest Health",
          company_url: "",
          logo_path: "tiktok_logo.png",
          duration: "Nov 2022 - Feb 2025",
          location: "Bengaluru, Karnataka, India",
          description:
            "Disseminating information from trusted sources for individuals to make informed decisions about Mental Health and therapy. Focus on qualitative research, web content writing, and stakeholder engagement.",
          color: "#FF6347",
        },
        {
          title: "Mental Health Blogger",
          company: "Overcomers Counseling",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "Apr 2022 - Aug 2023",
          location: "Remote",
          description:
            "Created trauma-informed mental health content focusing on web content writing, blog marketing, on-page SEO, and effective communication strategies for mental health awareness.",
          color: "#FF8C00",
        },
        {
          title: "Content Writer",
          company: "WittyPen",
          company_url: "",
          logo_path: "intel_logo.jpg",
          duration: "Feb 2020 - Jul 2022",
          location: "Remote",
          description:
            "Freelance content writing across various topics with focus on creating engaging, well-researched content for diverse client needs and maintaining high editorial standards.",
          color: "#008B8B",
        },
      ],
    },
    {
      title: "Clinical Experience & Training",
      experiences: [
        {
          title: "Trainee Psychologist",
          company: "Manas Foundation - Nirmal Chayya",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "Feb 2022 - Mar 2022",
          location: "Delhi, India",
          description:
            "Worked at a women and childcare Institute run by Government of Delhi. Observed intake sessions and follow-ups, formulated Group Therapy sessions with stabilization and self-soothing activities from a trauma-informed lens for residents aged 10-30 years.",
          color: "#32CD32",
        },
        {
          title: "Clinical Psychology Intern",
          company: "Manas Foundation",
          company_url: "",
          logo_path: "microsoft_logo.png",
          duration: "May 2021",
          location: "Remote",
          description:
            "Gained experience in Case History Taking and MSE. Participated in case discussion sessions, explored mental health/gender sensitization through advocacy, and curated literature for ongoing research projects.",
          color: "#9370DB",
        },
        {
          title: "Teaching Fellow",
          company: "Light Up (Emotions Matter Foundation)",
          company_url: "",
          logo_path: "mozilla_logo.png",
          duration: "Aug 2019 - Aug 2020",
          location: "Remote",
          description:
            "Worked with populations at higher risk for mental health concerns. Focused on capacity building in Emotional Intelligence and Social Emotional Learning, conducting workshops for the same.",
          color: "#DAA520",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
