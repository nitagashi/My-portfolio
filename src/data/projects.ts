export interface ProjectMedia {
  type: "image" | "video";
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  year: string;
  media?: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: "React-Native-Yoga-App",
    title: "React Native Yoga App",
    description:
      "A comprehensive yoga application offering guided sessions, progress tracking, and personalized recommendations.",
    longDescription:
      "A holistic yoga companion designed to help users achieve their wellness goals. Features include a library of guided sessions, real-time progress tracking, and personalized recommendations based on user preferences. The app is built with React Native for a seamless experience across iOS and Android.",
    tags: ["React Native", "Expo", "ASP.NET", "MSSQL", "Stripe API"],
    image: "assets/img/Yoga-admin.png",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Custom charts",
      "Real-time updates",
      "Export reports",
      "Team collaboration",
    ],
    year: "2024",
    media: [
      {
        type: "image",
        url: "assets/img/Yoga-admin-1.png",
        caption: "Dashboard view",
      },
      {
        type: "image",
        url: "assets/img/Yoga-admin-3.jpg",
        caption: "Dashboard view",
      },
      {
        type: "image",
        url: "assets/img/Yoga-admin-2.jpg",
        caption: "Dashboard view",
      },
      {
        type: "image",
        url: "assets/img/Yoga-admin-4.jpg",
        caption: "Dashboard view",
      },
      {
        type: "video",
        url: "3753Y3ZFHmc",
        caption: "Mobile App",
      },
      {
        type: "video",
        url: "k-PKCSrbCyM",
        caption: "Admin Dashboard",
      },
    ],
  },
  {
    id: "Pdf-merger",
    title: "Pdf Merger",
    description: "A simple and efficient tool for merging PDF files.",
    longDescription:
      "Easily merge multiple PDF files into a single document with this intuitive tool. Perfect for organizing and managing PDFs. Supports batch processing for efficiency.",
    tags: ["React Js", "Vite", "Electron", "PDFLib"],
    image: "assets/img/pdf-merger-1.png",
    liveUrl: "#",
    githubUrl: "https://github.com/nitagashi/Pdf-merger",
    features: [
      "Edit PDF File",
      "Remove Pages",
      "Reposition pages",
      "Merge multiple PDFs",
    ],
    year: "2024",
    media: [
      {
        type: "image",
        url: "assets/img/pdf-merger.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/pdf-merger-1.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/pdf-merger-2.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "fpq_sHh86MU",
        caption: "App video",
      },
    ],
  },

  {
    id: "Image-Reference-App",
    title: "Image Reference App",
    description:
      "A lightweight image reference viewer built with PyQt6, for everyone who need a simple way to view and organize reference images.",
    longDescription: `Key Features:
        \n• Drag & Drop Images – Easily add images by dragging and dropping them into the window.
        \n• Zoom & Pan – Scroll to zoom in/out and click-drag to pan around the canvas.
        \n• Minimalist UI – Clean, distraction-free interface with a dark theme.
        \n• Lock/Unlock UI – Toggle visibility of the menu bar while keeping the lock button accessible.
        \n• Frameless Mode – Option to hide window borders for a seamless workspace.
        \n• Movable Images – Reposition reference images freely on the canvas.`,
    tags: ["Python", "PySide6"],
    image: "assets/img/image-ref-1.png",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Smooth animations",
      "3D elements",
      "Dark mode",
      "Performance optimized",
    ],
    year: "2024",
    media: [
      {
        type: "image",
        url: "assets/img/image-ref.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/image-ref-1.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "xhFfIJyIlx0",
        caption: "App video",
      },
    ],
  },
  {
    id: "Background-Remover-App",
    title: "Background Remover App",
    description:
      "A simple and efficient tool for removing backgrounds from images.",
    longDescription:
      "Easily remove backgrounds from your images with this intuitive tool. Perfect for creating transparent PNGs, product photos, and more. Supports batch processing for efficiency.",
    tags: ["Python", "CustomTkinter"],
    image: "assets/img/bg-remover-1.png",
    liveUrl: "#",
    features: [
      "AI suggestions",
      "Tone analysis",
      "Grammar check",
      "Multiple languages",
    ],
    year: "2024",
    media: [
      {
        type: "image",
        url: "assets/img/bg-remover.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "PJNUg51Ivk4",
        caption: "App Video",
      },
    ],
  },
  {
    id: "streaming-platform",
    title: "Streaming Platform",
    description:
      "A scalable streaming platform with real-time content updates.",
    longDescription:
      "A high-performance streaming platform designed to handle large volumes of content and users. Features real-time updates, personalized recommendations, and a sleek user interface. Built with a microservices architecture for scalability and maintainability.",
    tags: ["React JS", "Node.js", "GraphQL"],
    image: "assets/img/streaming-platform.png",
    liveUrl: "#",
    githubUrl: "https://github.com/nitagashi/streaming-platform",
    features: [
      "Real-time inventory",
      "Secure payments",
      "Admin dashboard",
      "Analytics",
    ],
    year: "2024",
    media: [
      {
        type: "image",
        url: "assets/img/streaming-platform.png",
        caption: "Product catalog view",
      },
      {
        type: "image",
        url: "assets/img/streaming-platform-2.png",
        caption: "Checkout flow",
      },
      {
        type: "video",
        url: "mHS9iXclMWQ",
        caption: "Admin dashboard",
      },
    ],
  },
  {
    id: "E-Commerce",
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping experience with product management and payment integration.",
    longDescription:
      "A comprehensive e-commerce solution designed for modern retailers. Features include product catalog management, shopping cart functionality, secure payment processing, and analytics. Built for scalability and performance.",
    tags: ["Vue JS", "Node.js", "Stripe API", "Mongo DB", "Firebase"],
    image: "assets/img/e-commerce.png",
    liveUrl: "#",
    githubUrl: "https://dev.azure.com/ag52162-E-Commerce/_git/E-Commerce",
    features: [
      "Real-time sync",
      "Custom workflows",
      "Time tracking",
      "Integrations",
    ],
    year: "2023",
    media: [
      {
        type: "image",
        url: "assets/img/e-commerce.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/e-commerce-1.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "VE7NR9DbnAA",
        caption: "App Video",
      },
    ],
  },
  {
    id: "Food-delivery-project ",
    title: "Food Delivery App",
    description:
      "A modern food delivery application with real-time order tracking and restaurant discovery.",
    longDescription:
      "A seamless food delivery experience that connects users with their favorite restaurants. Features include real-time order tracking, restaurant filtering, and a streamlined checkout process. Built for performance and user satisfaction.",
    tags: [
      "React JS",
      "ASP.NET",
      "Stripe API",
      "PayPal API",
      "MSSQL",
      "Mongo DB",
    ],
    image: "assets/img/food-delivery-1.png",
    liveUrl: "#",
    githubUrl: "https://dev.azure.com/ag52162/_git/FoodDelivery",
    features: [
      "Workout tracking",
      "Nutrition log",
      "Progress charts",
      "Social features",
    ],
    year: "2023",
    media: [
      {
        type: "image",
        url: "assets/img/food-delivery-1.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/food-delivery.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/food-delivery-2.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/food-delivery-3.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "d_LWBrv8P_I",
        caption: "App Video",
      },
    ],
  },
  {
    id: "Finance-Tracker",
    title: "Finance Tracker",
    description:
      "A comprehensive finance management application for tracking expenses and income.",
    longDescription:
      "A powerful finance management tool designed to help users track their financial activities. Features include expense categorization, budgeting tools, and detailed reporting. Built for accuracy and user-friendly navigation.",
    tags: ["React JS", "Tauri 2.0", "Rust", "Android", "SQLite"],
    image: "assets/img/finance.png",
    liveUrl: "#",
    githubUrl: "",
    features: [
      "Workout tracking",
      "Nutrition log",
      "Progress charts",
      "Social features",
    ],
    year: "2023",
    media: [
      {
        type: "image",
        url: "assets/img/finance_1.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/finance_2.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/finance_3.png",
        caption: "App screenshot",
      },
      {
        type: "image",
        url: "assets/img/finance_4.png",
        caption: "App screenshot",
      },
      {
        type: "video",
        url: "Y06DOS2YoMo",
        caption: "Desktop App",
      },
      {
        type: "video",
        url: "Y3ZHFlZ2_X0",
        caption: "Mobile App",
      },
    ],
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort();
