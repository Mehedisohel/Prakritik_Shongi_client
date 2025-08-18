# Prakritik Shongi

Prakritik Shongi is a platform for artisans to showcase and manage their crafted items, featuring secure authentication and a dynamic, interactive user experience.

## Live Links

- **Frontend (Live Site):** [prakritik_shongi_frontend_live](https://prakritik-shongi-client.web.app)
- **Backend (API):** [prakritik_shongi_backend_live](https://prakritik-shongi-backend.vercel.app)

## Backend Repository

- [Prakritik_shongi_backend](https://github.com/Mehedisohel/Prakritik_shongi_backend)

## Features and Characteristics

- **User Authentication:** Register, log in, and securely access personalized content.
- **Craft Listing:** List and showcase crafted items to a wider audience.
- **Private Routes:** Pages like "My Crafts" and "Add Craft" are only accessible to authenticated users.
- **Data Loading:** Efficiently loads data from external APIs for crafts and subcategories.
- **Interactive UI Components:** Buttons, forms, and dropdowns for an intuitive user experience.
- **Feedback and Confirmation:** SweetAlert pop-ups confirm actions like adding or deleting craft items.

## Getting Started

### Prerequisites

- React
- React Router DOM
- Firebase Authentication
- Node.js
- Express.js

### Installation

- [React-Router Dom](https://reactrouter.com/)
- [Tailwind](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [React-icon](https://react-icons.github.io/react-icons/)
- [Swiper](https://swiperjs.com/react)


### Frontend File Structure
```
Prakritik_Shongi_client/
├── .eslintrc.cjs
├── .firebase
│   └── hosting.ZGlzdA.cache
├── .firebaserc
├── .gitignore
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── Screenshot 2024-04-30 220039.png
│   └── vite.svg
├── readme.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── Component
│   │   ├── Banner
│   │   │   └── Banner.jsx
│   │   ├── CraftCard
│   │   │   └── CraftCard.jsx
│   │   ├── Craftcategory
│   │   │   └── Craftcategory.jsx
│   │   ├── Craftitem
│   │   │   └── Craftitem.jsx
│   │   ├── Craftiteminfo
│   │   │   └── Craftiteminfo.jsx
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── Login
│   │   │   └── Login.jsx
│   │   ├── MyCraftinfo
│   │   │   └── MyCraftinfo.jsx
│   │   ├── Navbar
│   │   │   └── Navbar.jsx
│   │   ├── Newslatter
│   │   │   └── Newsletter.jsx
│   │   ├── Register
│   │   │   └── Register.jsx
│   │   ├── Review
│   │   │   └── Review.jsx
│   │   ├── SearchBar
│   │   │   └── SearchBar.jsx
│   │   └── Sociallogin
│   │       └── Sociallogin.jsx
│   ├── Firebase
│   │   └── firebase.config.js
│   ├── Page
│   │   ├── AddCraft
│   │   │   └── AddCraft.jsx
│   │   ├── AllCrafts
│   │   │   └── AllCrafts.jsx
│   │   ├── Craftdetails
│   │   │   └── Craftdetails.jsx
│   │   ├── Error
│   │   │   └── Error.jsx
│   │   ├── FirebaseProvider
│   │   │   └── FirebaseProvider.jsx
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   ├── MyCrafts
│   │   │   └── MyCrafts.jsx
│   │   ├── PrivateRoute
│   │   │   └── PrivateRoute.jsx
│   │   ├── Profile
│   │   │   └── Profile.jsx
│   │   ├── Subcategoryitem
│   │   │   └── Subcategoryitem.jsx
│   │   └── Updatecraftiteminfo
│   │       └── Updatecraftiteminfo.jsx
│   ├── Root
│   │   └── Root.jsx
│   ├── Router
│   │   └── Router.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

### Backend File Structure
```
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── vercel.json
```


#### Instructions

Install the following dependencies in your project:

```bash
npm install react-router-dom tailwindcss firebase react-icons swiper
```

Set up your `.env` files and configure Firebase authentication as needed.

---
