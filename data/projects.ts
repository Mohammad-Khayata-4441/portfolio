import { PortfolioItem } from '@/types/PortfolioItem'
const projects: PortfolioItem[] = [






    {
        description: `Real Estate Landing Page Template Made with Next.js 13 and Tailwind`,
        client: "Freelance",
        id: '55',
        name: "JDM Contracts",
        primaryColor: "#EA5400",
        screenShots: ["cover.png",
        ],
        key: 'jdm',
        coverImage: '/projects/jdm/cover.png',
        status: 'in Progress',
        technologiesIcons: ['next.png', 'typescript.webp', 'tailwind.webp'],
        type: ['Dashboard'],
        workInformation: "I worked on this project as a freelancer for a close client in the city of Aleppo.",
        year: '2022',
        businessFeatures: [],
        gitRepo: "https://github.com/Mohammad-Khayata-4441/construction-templaet.git",
        promoVideo: "",
        teamMates: [],
        techFeatures: [],
        url: "https://jdm-construction.vercel.app/"
    },
    {
        key: 'carManagement',
        coverImage: "/projects/carManagement/cover.png",
        description: `A web application for managing data and sales for an auto parts trading company. It includes management of inventory, products, invoice generation, account reconciliation, as well as profit and debt management and customer information. Built using React and Mui 5, in addition to Tailwind CSS.`,
        client: "Freelance",
        id: '52',
        name: "Auto Parts Manager",
        primaryColor: "#3761E9",
        screenShots: [
            "car-management-add-car.png",
            "car-management-add-part.png",
            "car-parts-brands.png",
            "car-parts.png",
            "cars.png",
            "cover.png",
            "create-invoice.png",
        ],

        status: 'in Progress',
        technologiesIcons: ['react.webp', 'typescript.webp', 'tailwind.webp'],
        type: ['Dashboard'],
        workInformation: "I worked on this project as a freelancer for a close client in the city of Aleppo.",
        year: '2022',
        businessFeatures: [],
        gitRepo: "https://github.com/Mohammad-Khayata-4441/CarParts_Client.git",
        promoVideo: "",
        teamMates: [],
        techFeatures: [],
        url: "https://car-parts-client.vercel.app/"
    },
    {
        key: 'qrGermany',
        coverImage: "/projects/qrGermany/cover.png",

        "name": "Qr Code Germany",
        "client": "ELKOOD Company",
        "description": "Many companies use the QR code in their marketing and advertising campaigns, allowing various types of data to be added, such as: B. Website links, social media, account information, phone numbers, even coupons, opening hours, or a PDF file (with a list of product prices or the services you want to offer your customers).Here at QR Code Germany we have made sure that everything is easy and simple to use for the customer as you will find many simple and useful options that will help you a lot in providing useful and important information to your customers in the easiest and cheapest way to deliver way.",
        "id": "1",
        "screenShots": [
            "car.png",
            "cover.png",
            "generate-code.png",
            "home.png",
            "pricing.png",
            "qr-code.png",
            "Screenshot 2023-06-21 114252.png",
        ],
        "primaryColor": "#FDD636",

        "status": "in Progress",
        "type": [
            "Landing Page",
            "Web Application"
        ],
        "workInformation": "I Worked on this project for a german company at ELKOOD",
        "technologiesIcons": [
            "nuxt.svg",
            "typescript.webp",
            "tailwind.webp"
        ],
        "year": "2022",
        "url": "https://qrcodegermany.de/",
    },

    {
        key: 'flyOrder',
        coverImage: "/projects/flyOrder/cover.jpg",

        name: "Fly Order",
        "client": "ELKOOD Company",
        "description": "FlyOrder is an application for managing food delivery orders within the Damascus governorate. It is a Dashboard that includes many features, including management of areas and cities, management of stores and branches, management of products, processing orders created from the mobile application, processing invoices and sales and profit percentages for the stores and application management, management of notifications via WebSocket and Signal-R, and many other features.",
        "techFeatures": [
            "Single Page Application",
            "Responsive Design",
            "Powered With Typescript",
            "JWT Authentication",
            "Real Time Notification System Build With Microsoft Signal-R And Web Socket"
        ],
        "primaryColor": "#F8AD24",
        id: "10",
        screenShots: [
            "cover.jpg",
            "create-order.png",
            "edit-product.png",
            "login.png",
            "login2.jpg",
            "notifications.png",
            "order.png",
            "order2.jpg",
            "products.jpg",
            "shops.png",
            "subscriptions.jpg",
        ],

        status: "Finished",
        technologiesIcons: ["vue.webp", "typescript.webp", "tailwind.webp"],
        type: ['Dashboard'],
        "workInformation": "I Worked on it as Frontend Team Leader at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        year: "2022",
        businessFeatures: [
            "Managing Orders That Created By Mobile App Users",
            "Managing Customers , Employees , Drivers ",
            "Managing Products , Products Categories ",
            "Managing Cities , Areas , Streets ",
            "Managing Markets , Shops and Resturants",
            "Creating Orders Manually From Dashboard",
            "Sending Notifications For Mobile App Users",
            "Receiving Mobile Users Feedback",
            "Managing Prices And Discounts",
            "View financial statistics and bills ",
            "Controlling profits from stores and delivery"
        ],



    },
    {
        key: 'alElemNour',
        coverImage: "/projects/alElemNour/cover.png",

        "name": "Al E'lm Nour",
        "client": "Al Elem Nour Publishing House",
        "description": "Landing page for publishing house in aleppo syria",
        "techFeatures": [
            "Responsive Design",
            "High Quality Animations",
            "Single Page Application"
        ],
        "businessFeatures": [
            "Landing Page",
            "Contact Page",
            "Products Preview Page"
        ],
        "id": "3",
        "screenShots": [
            "cover.png"
        ],
        "primaryColor": "#FFD400",
        "status": "Finished",
        "type": [
            "Landing Page",
            "Web Application"
        ],
        "workInformation": "I Worked on it as a <a class='dark:text-white text-primary'>Freelancer</a> for publishing house in aleppo syria",
        "technologiesIcons": [
            "vue.webp",
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "https://www.alelmnour.com/"
    },
    {
        key: 'altinSaray',
        coverImage: "/projects/altinSaray/index.jpg",
        "name": "Altin Saray",
        "client": "ELKOOD Company",
        "teamMates": [
            {
                "name": "Hiba Beij",
                "url": "",
                "role": "Frontend Developer"
            },
            {
                "name": "Ghina Hammodeh",
                "url": "",
                "role": "Frontend Developer"
            },
            {
                "name": "Mohannad Shaban",
                "url": "",
                "role": "CTO"
            }
        ],
        "description": "WordPress Website Template for Turkish Real Estate Company ",
        "id": "3",
        "businessFeatures": [
            "Landing Page",
            "Contact Page",
            "Portfolio Page",
            "Project Details Page"
        ],
        "screenShots": [
            "cover.png"
        ],
        "primaryColor": "#153937",
        "status": "Finished",
        "type": [
            "Landing Page"
        ],
        "workInformation": "I Worked on it in some parts like index page and code reviews With elkood frontend team ",
        "technologiesIcons": [
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "https://altinsaraygrup.com/"
    },
    {
        key: 'awija',
        coverImage: "/projects/awija/cover.jpg",

        "name": "Awija Metal Industries",
        "client": "ELKOOD Company",
        "teamMates": [
            {
                "name": "Abdulaziz Shahrour",
                "role": "Frontend Team Leader",
                "url": ""
            },
            {
                "name": "Nizar Naasani",
                "role": "Frontend Developer",
                "url": ""
            },
            {
                "name": "Mohammad Khayata",
                "role": "Frontend Developer"
            },
            {
                "name": "Mohammad Abo Dan",
                "role": "Backend Developer"
            },
            {
                "name": "Osama Al Rashed",
                "role": "Backend Developer"
            },
            {
                "name": "Hozaifa Aseel",
                "role": "Backend Developer"
            }
        ],
        "description": "e-commerce website and content management dashboard for Awija Metal industries factory",
        "businessFeatures": [
            "Website for customers that provides them with the ability to register,  read articles and create orders",
            "The ability to display products in 3D and VR",
            "Dashboard for managing  employees , customers , articles , orders and products",
            "Support Multi Languages, Multi Currencies",
            "Display products prices based on the country in which you are registered"
        ],
        "techFeatures": [
            "Single Page Application",
            "Responsive Desgin",
            "Modern Ui Design",
            "User Friendly"
        ],
        "id": "4",
        "screenShots": [
            "cover.jpg"
        ],
        "primaryColor": "#1ac9fb",
        "status": "Finished",
        "type": [
            "eCommerce",
            "Website",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Developer at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "vue.webp",
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "https://www.awijatinplate.com/"
    },
    {
        key: 'broker',
        coverImage: "/projects/broker/cover.png",

        "name": "Broker Management",
        "client": "ELKOOD Company",
        description: "Broker Management is an application for automating the operations of a brokerage company electronically through various services, including human resource management, project and department management, document and correspondence management, and a file management system for storing files in the cloud via AWS. It also supports authentication for employees with different permissions.",
        "id": "5",
        screenShots: [
            "broker_employee_details.png",
            "broker_file_management.pdf.png",
            "broker_section.png",
            "cover.png",
            "employees.png",
            "fileManagement.png",
        ],
        "teamMates": [
            {
                "name": "Mohammad Khayata",
                "role": "Frontend Team Leader"
            },
            {
                "name": "Hiba Beij",
                "role": "Frontend Developer"
            },
            {
                "name": "Husein Haj Mohammad",
                "role": "Backend Developer"
            },
            {
                "name": "Joudy Dabbit",
                "role": "Backend Developer"
            }
        ],
        "primaryColor": "#D19D44",
        "status": "in Progress",
        "type": [
            "eCommerce",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Team Leader at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "vue.webp",
            "typescript.webp",
            "tailwind.webp"
        ],
        "businessFeatures": [
            "Managing and organizing the company's office and documents",
            "Managing Company Projects , and Projects Documents",
            "Managing the company's human and material resources",
            "Cloud file management and storage system",
            "Employees Authentication and Authorization with Multiple (Roles) "
        ],
        "techFeatures": [
            "JWT Authentication",
            "Single Page Application",
            "Powerd By Typescript",
            "Responsive Design"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": ""
    },
    {
        key: 'riviraPharma',
        coverImage: "/projects/riviraPharma/cover.jpg",

        "name": "Rivira Pharma",
        "businessFeatures": [
            "Website for customers that provides them with the ability to register, read articles and create orders",
            "Dashboard for managing  employees , customers , articles , orders and products",
            "Support Multi Languages"
        ],
        "client": "ELKOOD Company",
        "description": "Content Management System For Rivera Company for Pharmaceutical Industries and Food Supplements",
        "id": "6",
        "screenShots": [
            "cover.jpg"
        ],
        "teamMates": [
            {
                "name": "Abdulaziz Shahrour",
                "role": "Frontend Team Leader",
                "url": ""
            },
            {
                "name": "Nizar Naasani",
                "role": "Frontend Developer",
                "url": ""
            },
            {
                "name": "Mohammad Khayata",
                "role": "Frontend Developer"
            },
            {
                "name": "Mohammad Abo Dan",
                "role": "Backend Developer"
            },
            {
                "name": "Osama Al Rashed",
                "role": "Backend Developer"
            },
            {
                "name": "Hozaifa Aseel",
                "role": "Backend Developer"
            }
        ],
        "primaryColor": "#ffffff",
        "status": "in Progress",
        "type": [
            "eCommerce",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Developer at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "vue.webp",
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "https://www.rivierapharma-sy.com/",
        "techFeatures": [
            "Responsive Design",
            "Single Page Application",
            "JWT Authentication And Authorization"
        ]
    },
    {
        key: 'goldenWrap',
        coverImage: "/projects/goldenWrap/cover.jpg",

        "name": "Golden Wrap",
        "client": "ELKOOD Company",
        "description": "A simple menu display app for Golden Wrap Restaurant with a content dashboard",
        "id": "8",
        "screenShots": [
            "cover.jpg"
        ],
        "teamMates": [
            {
                "name": "Mohammad Khayata",
                "role": "Frontend Team Leader"
            },
            {
                "name": "Hiba Beij",
                "role": "Frontend Developer"
            },
            {
                "name": "Ghina Hammodeh",
                "role": "Frontend Developer"
            }
        ],
        "primaryColor": "#1f6b38",
        "status": "in Progress",
        "type": [
            "eCommerce",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Developer at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "vue.webp",
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "https://goldenwrap.elkood.com/"
    },
    {
        key: 'proMarketing',
        coverImage: "/projects/proMarketing/cover.jpg",

        "name": "Pro Marketing",
        "client": "ELKOOD Company",
        "description": "Landing Page For Marketing Company in Aleppo Syria",
        "techFeatures": [
            "Responsive Design",
            "Google reCaptcha",
            "Multi Languages",
            "smtp Mailing"
        ],
        "id": "9",
        "screenShots": [
            "about.png",
            "contact.png",
            "cover.jpg",
            "services.png"

        ],
        "primaryColor": "#F28003",
        "status": "in Progress",
        "type": [
            "eCommerce",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Developer at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": ""
    },
    {
        key: 'mrCourse',
        coverImage: "/projects/mrCourse/cover.jpg",
        "name": "MR Course",
        "client": "ELKOOD Company",
        "description": "Dashboard For E-learn Mobile Application Content Management",
        "id": "10",
        "screenShots": [
            "cover.jpg"
        ],
        "primaryColor": "#2ec4b6",
        "businessFeatures": [
            "Managing Mobile Application Courses",
            "Managing Students and Teachers Accounts",
            "Generating Register Codes For Mobile App",
            "Viewing Global Statistics"
        ],
        "status": "in Progress",
        "type": [
            "eCommerce",
            "Dashboard"
        ],
        "workInformation": "I Worked on it as Vue Developer at <span class='dark:text-white text-primary font-bold '> Elkood </span> frontend  team ",
        "technologiesIcons": [
            "vue.webp",
            "javascript.webp",
            "bootstrap.webp"
        ],
        "year": "2022",
        "gitRepo": "",
        "url": "",
        "techFeatures": [
            "Responsive Design",
            "Single Page Application",
            "JWT Authentication And Authorization"
        ]
    },

];


export default projects