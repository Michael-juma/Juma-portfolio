export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  alt: string;
  technologies: string[];
  category: string;
  challenges?: string[];
  results?: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Mobile E-Commerce Application',
    description:
      'A modern mobile e-commerce application built with React Native, delivering a fast, intuitive shopping experience. The app improved user engagement by 40% and reduced checkout time significantly.',
    fullDescription:
      'This project is a fully featured mobile e-commerce application designed to solve common challenges faced by online shoppers, such as slow performance, complex navigation, and unreliable checkout flows. Built using React Native, the app provides a smooth cross-platform experience on both Android and iOS devices. The system includes product browsing, cart management, secure payments, and order tracking, all optimized for mobile users. The application emphasizes performance, usability, and scalability while ensuring a clean and modern UI.',
    image: 'https://i.pinimg.com/1200x/8c/5d/e3/8c5de3bd89db3accc935cf30c977ed38.jpg',
    alt: 'Mobile e-commerce application interface displaying product listings and shopping cart',
    technologies: [
      'React Native',
      'JavaScript',
      'Expo',
      'Firebase',
      'REST APIs',
      'Bootstrap (UI Design)',
    ],
    category: 'Mobile Application',
    challenges: [
      'Designing a responsive UI that works seamlessly across different screen sizes',
      'Managing application state efficiently for cart and user sessions',
      'Integrating secure mobile payment workflows',
      'Optimizing app performance for low-end devices',
    ],
    results: [
      '40% increase in user engagement',
      'Faster checkout process and improved user retention',
      'Stable performance across Android and iOS platforms',
      'Scalable architecture ready for future feature expansion',
    ],
    links: {
      github: 'https://github.com/Michael-juma/E-commers-system',
      live: 'https://e-commers-system-uhro.vercel.app/',
      demo: 'https://e-commers-system-uhro.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Enterprise IT & Security Solutions Dashboard',
    description:
      'Comprehensive IT management and security platform for businesses. Features real-time system monitoring, threat detection, and infrastructure analytics powered by React and TypeScript.',
    fullDescription:
      'A robust IT solutions dashboard designed for enterprise clients, combining system monitoring, cybersecurity, and operational analytics. The platform provides real-time visibility into IT infrastructure, detects security threats, and generates actionable insights to improve performance and resilience. It integrates multiple IT services into a single interface, enabling clients to manage their networks, applications, and security posture efficiently. Deployed for multiple businesses, it ensures high availability, secure data handling, and type-safe code with React and TypeScript.',
    image: 'https://i.pinimg.com/736x/c3/8b/5b/c38b5bc342544fc1ff59d92a958ee91f.jpg',
    alt: 'IT solutions dashboard showing network metrics, security alerts, and real-time system analytics on desktop monitor',
    technologies: [
      'React',
      'TypeScript',
      'HTML',
      'Bootstrap',
      'Node.js',
      'Cybersecurity Tools',
      'AWS',
    ],
    category: 'IT Solutions & Security',
    challenges: [
      'Ensuring secure multi-client access and data privacy',
      'Real-time monitoring of IT systems across multiple networks',
      'Integrating diverse IT services into a unified platform',
      'Scaling infrastructure to handle enterprise-level workloads',
      'Maintaining type safety and reliable code with React and TypeScript',
    ],
    results: [
      'Centralized IT management for multiple enterprises',
      'Enhanced network security and threat detection',
      'Real-time operational insights for IT administrators',
      'High availability and secure data handling',
      'Reliable and maintainable codebase with TypeScript',
    ],
    links: {
      github: 'https://github.com/Michael-juma/juma-tech.git',
      live: 'https://juma-tech-urkm.vercel.app/',
      demo: 'https://juma-tech-urkm.vercel.app/',
    },
  },
  {
    id: 3,
    title: 'Real Estate Listing & Property Management Platform',
    description:
      'A responsive real estate web application that helps users discover, explore, and inquire about properties for sale or rent. Built using HTML, JavaScript, and Bootstrap with a strong focus on usability and clean design.',
    fullDescription:
      'This real estate project was developed to simplify the process of finding and managing property listings online. The platform allows users to browse available houses, apartments, and commercial properties, view detailed property information, and make inquiries directly from the website. Built with HTML for structure, Bootstrap for responsive and modern UI design, and JavaScript for interactivity, the project delivers a smooth user experience across all devices. The system addresses common problems such as poor mobile responsiveness, cluttered property information, and difficult navigation by offering a clean layout, clear call-to-action buttons, and intuitive filtering features.',
    image: 'https://i.pinimg.com/1200x/9b/a3/c3/9ba3c366a32568e271318564b92adbd1.jpg',
    alt: 'Real estate website interface displaying property listings with images, prices, and location details',
    technologies: ['HTML5', 'JavaScript', 'Bootstrap 5'],
    category: 'Web Application',
    challenges: [
      'Designing a fully responsive layout for property listings across different screen sizes',
      'Structuring property data dynamically using JavaScript',
      'Creating an intuitive user interface that highlights key property details',
      'Ensuring fast load times while displaying multiple property images',
    ],
    results: [
      'Clean and responsive real estate listing interface',
      'Improved user navigation and property discovery experience',
      'Mobile-friendly design optimized for phones, tablets, and desktops',
      'Scalable front-end structure ready for backend integration',
    ],
    links: {
      github: 'https://github.com/Michael-juma/Real-estate.git',
      live: 'https://real-estate-gamma-green.vercel.app/',
      demo: 'https://real-estate-gamma-green.vercel.app/',
    },
  },
  {
    id: 4,
    title: 'Food Court Platform',
    description: 'Multi-vendor ordering and management platform for food courts and vendors.',
    fullDescription:
      'Food Court Platform is a multi-vendor ordering system that lets patrons browse vendor menus, place orders, and pick up from a centralized collection point. Vendors can manage menus, orders, and availability in real-time while admins monitor operations and analytics.',
    image: 'https://i.pinimg.com/736x/56/9a/61/569a616f5613606322db169c03280b4f.jpg',
    alt: 'Assorted dishes served in a food court setting',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Firebase'],
    category: 'Marketplace',
    challenges: [
      'Coordinating orders across multiple vendors',
      'Ensuring timely pickup and order accuracy',
      'Scaling to support peak meal times',
    ],
    results: [
      'Improved vendor order throughput',
      'Streamlined customer pickup experience',
      'Reduced average wait times during peak hours',
    ],
    links: {
      github: 'https://github.com/mercyk001/TheFoodCourt',
      live: 'https://the-food-court-lime.vercel.app/',
    },
  },
];

export default projects;
