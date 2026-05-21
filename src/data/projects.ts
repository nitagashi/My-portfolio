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
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: "Story-planner",
    title: "Story Planner",
    description:
      "A visual-first writing application for novelists focused on story organisation, continuity, timelines, and relationship mapping.",
    longDescription:
      "Story Planner is a modern writing and worldbuilding application designed for authors who think visually. Instead of acting like a traditional text editor, the app functions as a complete story control centre with interactive graphs, relationship networks, plot boards, and continuity tracking. Writers can manage characters, organise chapters with drag-and-drop workflows, build timelines, map lore and locations, and visualise connections across the entire story. Built with a modular architecture using React, Tauri, Rust, and SQLite, the app is designed for both desktop and Android platforms while keeping all data stored locally.",
    tags: ["React JS", "Tauri 2.0", "Rust", "Android", "SQLite"],
    image: "assets/img/story-planner.png",
    // liveUrl: "#",
    // githubUrl: "#",
    features: [
      "Visual character management system with relationship graphs",
      "Interactive drag-and-drop plot board for chapter organisation",
      "Timeline and continuity tracking with event linking",
      "Worldbuilding and lore management with visual mapping",
      "Force-directed relationship network between characters",
      "Chapter editor with linked characters, locations, and events",
      "Zoomable and pannable graph views",
      "Dark and light mode support",
      "Local-first data storage using SQLite",
      "Cross-platform support for desktop and Android",
      "Modular architecture for future feature expansion",
      "Continuity issue highlighting and story flow tracking",
    ],
    year: "2026",
    media: [
      {
        type: "image",
        url: "assets/img/story-planner.png",
        caption: "Dashboard view",
      },
      {
        type: "image",
        url: "assets/img/story-planner-1.png",
        caption: "Character relationship graph",
      },
      {
        type: "image",
        url: "assets/img/story-planner-2.png",
        caption: "Timeline and plot organisation",
      },
      {
        type: "video",
        url: "CmLKmnPEeeo",
        caption: "Application showcase",
      },
    ],
    inProgress: true,
  },
  {
    id: "React-Native-Yoga-App",
    title: "React Native Yoga App",
    description:
      "A comprehensive yoga application offering guided sessions, progress tracking, and personalized recommendations.",
    longDescription:
      "A holistic yoga companion designed to help users achieve their wellness goals. Features include a library of guided sessions, real-time progress tracking, and personalized recommendations based on user preferences. The app is built with React Native for a seamless experience across iOS and Android.",
    tags: ["React Native", "Expo", "ASP.NET", "MSSQL", "Stripe API", "Android"],
    image: "assets/img/Yoga-admin.png",
    // liveUrl: "#",
    // githubUrl: "#",
    features: [
      "Yoga lessons",
      "Manage subscriptions",
      "User profiles",
      "Progress tracking",
      "Personalized recommendations",
      "Admin dashboard",
      "Payment integration",
    ],
    year: "2023",
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
    id: "OCR-Image-Text-Extractor",
    title: "OCR Image Text Extractor",
    description:
      "A modern OCR web application that extracts text from images using Tesseract.js.",
    longDescription:
      "An elegant and responsive OCR (Optical Character Recognition) application built with React and Tesseract.js. Users can upload images, preview them instantly, and extract readable text with real-time progress tracking. The app features a modern glassmorphism-inspired interface designed for a clean and intuitive user experience.",
    tags: ["React", "JavaScript", "Tesseract.js", "CSS3"],
    image: "assets/img/ocr-app-2.png",
    liveUrl: "https://nitagashi.github.io/text-extract-app/",
    githubUrl: "https://github.com/nitagashi/text-extract-app/",
    features: [
      "Image text extraction",
      "OCR processing with Tesseract.js",
      "Live extraction progress",
      "Image preview",
      "Responsive modern UI",
      "Glassmorphism design",
      "Multi-image format support",
    ],
    year: "2025",
    media: [
      {
        type: "image",
        url: "assets/img/ocr-app-1.png",
        caption: "Main application interface",
      },
      {
        type: "image",
        url: "assets/img/ocr-app-2.png",
        caption: "OCR extraction results",
      },
    ],
  },
  {
    id: "Text comparer App",
    title: "Text comparer App",
    description: "A simple and efficient tool for comparing two texts.",
    longDescription: "",
    tags: ["React Js", "Vite"],
    image: "assets/img/text-comparer.png",
    // liveUrl: "#",
    githubUrl: "https://github.com/nitagashi/text-comparer-app",
    features: [
      "Import files for comparing",
      "Word and Line level compare",
      "List of changes to track differences",
      "Copy text options",
      "Light and Dark mode",
      "Word counts for both texts",
    ],
    media: [
      {
        type: "image",
        url: "assets/img/text-comparer.png",
        caption: "Dashboard view",
      },
      {
        type: "image",
        url: "assets/img/text-comparer-1.png",
        caption: "Dashboard view",
      },
    ],
    year: "2026",
    liveUrl: "https://nitagashi.github.io/text-comparer-app/",
    inProgress: true,
  },

  {
    id: "Pdf-merger",
    title: "Pdf Merger",
    description: "A simple and efficient tool for merging PDF files.",
    longDescription:
      "Easily merge multiple PDF files into a single document with this intuitive tool. Perfect for organizing and managing PDFs. Supports batch processing for efficiency.",
    tags: ["React Js", "Vite", "Electron", "PDFLib"],
    image: "assets/img/pdf-merger-1.png",
    // liveUrl: "#",
    githubUrl: "https://github.com/nitagashi/Pdf-merger",
    features: [
      "Edit PDF File",
      "Remove Pages",
      "Reposition pages",
      "Merge multiple PDFs",
      "Export to PDF",
      "User-friendly interface",
      "Customizable settings",
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
    // liveUrl: "#",
    // githubUrl: "#",
    features: [
      "Drag & Drop Images",
      "Zoom & Pan ",
      "Frameless Mode",
      "Movable Images",
      "Minimalist UI",
      "Dark Theme",
      "Lightweight and Fast",
    ],
    year: "2026",
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
    // // liveUrl: "#",
    features: [
      "Remove backgrounds from images",
      "User-friendly interface with drag-and-drop support",
      "Preview results before saving",
      "Export to PNG with transparent background",
      "Customizable settings for different image types",
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
    // // liveUrl: "#",
    githubUrl: "https://github.com/nitagashi/streaming-platform",
    features: [
      "Personalized recommendations",
      "Responsive design for all devices",
      "Advanced search and filtering options",
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
    // liveUrl: "#",
    githubUrl: "https://dev.azure.com/ag52162-E-Commerce/_git/E-Commerce",
    features: [
      "Product catalog management",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order tracking and history",
      "Customer reviews and ratings",
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
    // liveUrl: "#",
    githubUrl: "https://dev.azure.com/ag52162/_git/FoodDelivery",
    features: [
      "Restaurant discovery",
      "User reviews and ratings",
      "Secure payment integration",
      "Personalized recommendations",
      "Promotions and discounts",
      "Admin dashboard for restaurant management",
    ],
    year: "2022",
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
    // liveUrl: "#",
    // githubUrl: "",
    features: [
      "Expense tracking and categorization",
      "Income tracking",
      "Budgeting tools",
      "Financial reporting and analytics",
      "Cross-platform support for desktop and mobile",
      "Customizable financial goals and alerts",
      "Data export and backup options",
    ],
    year: "2026",
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
    inProgress: true,
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort();
