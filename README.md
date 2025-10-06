# 🚀 Vishesh Panchal - Modern React Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/EmailJS-3.11.0-FF6B35?style=for-the-badge&logo=emailjs&logoColor=white" alt="EmailJS" />
</div>

<div align="center">
  <h3>🌟 A stunning, responsive portfolio showcasing modern web development skills</h3>
  <p><strong>Live Demo:</strong> <a href="http://vishesh.ct.ws">vishesh.ct.ws</a></p>
</div>

---

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Vibrant Gradients** - Eye-catching color schemes optimized for both themes
- **Glass Morphism Effects** - Modern UI with backdrop blur and transparency
- **Responsive Design** - Perfect experience across all devices and screen sizes

### 🚀 **Advanced Animations**
- **Framer Motion Integration** - Smooth, performant animations throughout
- **Typewriter Effect** - Dynamic text animation in hero section
- **Scroll Animations** - Elements animate as they come into view
- **Hover Effects** - Interactive micro-animations for better UX

### 💼 **Portfolio Sections**
- **Hero Section** - Engaging introduction with animated typewriter
- **About Me** - Personal story with animated skill progress bars
- **Skills Showcase** - Categorized skills with interactive tabs and progress indicators
- **Featured Projects** - 4 real projects with detailed descriptions and live demos
- **Contact Form** - Functional contact form with EmailJS integration

### 🛠️ **Technical Excellence**
- **Component-Based Architecture** - Clean, reusable React components
- **Performance Optimized** - Lightweight animations and efficient rendering
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with proper ARIA labels

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|----------|
| **React.js** | Frontend Framework | 18.2.0 |
| **Tailwind CSS** | Styling & Design System | 3.3.0 |
| **Framer Motion** | Animations & Transitions | 10.16.4 |
| **EmailJS** | Contact Form Integration | 3.11.0 |
| **Font Awesome** | Icons & Graphics | 6.4.0 |
| **PostCSS** | CSS Processing | 8.4.24 |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/visheshpanchal27/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
portfolio/
├── 📁 public/
│   └── index.html              # HTML template
├── 📁 src/
│   ├── 📁 components/          # React components
│   │   ├── Header.js           # Navigation with theme toggle
│   │   ├── Hero.js             # Landing section with typewriter
│   │   ├── About.js            # About section with stats
│   │   ├── Skills.js           # Skills showcase with tabs
│   │   ├── Projects.js         # Project gallery with filtering
│   │   ├── Contact.js          # Contact form with EmailJS
│   │   ├── Footer.js           # Footer with social links
│   │   └── LoadingScreen.js    # Loading animation
│   ├── App.js                  # Main app component
│   ├── index.js                # React DOM entry point
│   └── index.css               # Global styles & animations
├── 📄 package.json             # Dependencies & scripts
├── 📄 tailwind.config.js       # Tailwind configuration
├── 📄 postcss.config.js        # PostCSS configuration
└── 📄 README.md                # Project documentation
```

---

## 🎯 Featured Projects

### 🛒 **MERN E-Commerce Platform** (Flagship)
- **Tech:** React, Node.js, MongoDB, Express, PayPal Integration
- **Features:** JWT Authentication, Payment Processing, Admin Dashboard
- **Live:** [shopping-canter.netlify.app](https://shopping-canter.netlify.app)

### 🤖 **AI DeepFake Detector**
- **Tech:** Python, OpenCV, Machine Learning, Computer Vision
- **Features:** 79.2% Accuracy, Real-time Detection, Batch Processing
- **Achievement:** Advanced AI project with industry-level performance

### 🏪 **LV Shopping Center**
- **Tech:** Java, JSP, Servlets, MySQL
- **Features:** Complete e-commerce functionality with Java backend

### 🏦 **Banking Management System**
- **Tech:** Core Java, File Handling, OOP
- **Features:** Console-based banking operations with secure data handling

---

## 🎨 Customization Guide

### **Personal Information**
- Update name, bio, and contact details in respective components
- Replace social media links in `Footer.js` and `Contact.js`
- Modify the typewriter texts in `Hero.js`

### **Projects**
- Add new projects in the `projects` array in `Projects.js`
- Update project descriptions, technologies, and links
- Customize project categories and filtering

### **Skills**
- Modify skill categories and levels in `Skills.js`
- Add new technologies with appropriate icons and colors
- Update progress percentages based on proficiency

### **Styling**
- Customize colors in `tailwind.config.js`
- Modify gradients and animations in component files
- Update theme colors for consistent branding

---

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the service ID, template ID, and public key in `Contact.js`

---

## 🌟 Performance Features

- **Optimized Animations** - Reduced motion preferences respected
- **Lazy Loading** - Components load as needed
- **Efficient Rendering** - Minimal re-renders with proper React patterns
- **Compressed Assets** - Optimized images and fonts
- **SEO Optimized** - Meta tags and semantic HTML

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨💻 About the Developer

**Vishesh Panchal** - Full Stack Developer passionate about creating innovative digital solutions.

- 🌐 **Portfolio:** [vishesh.ct.ws](http://vishesh.ct.ws)
- 💼 **LinkedIn:** [vishesh-panchal-144281353](https://www.linkedin.com/in/vishesh-panchal-144281353)
- 🐱 **GitHub:** [visheshpanchal27](https://github.com/visheshpanchal27)
- 📧 **Email:** visheshpanchal864@gmail.com

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ and ⚛️ React</p>
</div>