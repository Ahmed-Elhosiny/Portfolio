# Ahmed Elhosiny - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Software Engineer specializing in backend development and .NET technologies.

## 🚀 Features

- **Modern Design**: Clean, professional layout with custom color palette
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Dynamic Projects**: Auto-fetches latest GitHub repositories
- **Skills Showcase**: Interactive skills grid with appropriate icons
- **Contact Integration**: Direct email, resume download, and social links
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter Card support
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.2.3
- **Icons**: Bootstrap Icons
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Backend Skills**: C#, .NET, ASP.NET MVC, ASP.NET Web API, SQL Server
- **Additional**: Node.js, Express, MongoDB, WebSockets

## 📁 Project Structure

```
├── assets/
│   ├── profile.png          # Profile photo
│   ├── Ahmed_s_Resume.pdf   # Resume PDF
│   └── favicon.ico          # Site favicon
├── css/
│   └── styles.css           # Main stylesheet with custom theme
├── js/
│   └── scripts.js           # JavaScript for theme toggle and GitHub API
├── index.html               # Homepage
├── resume.html              # Resume page
├── projects.html            # Projects showcase
├── contact.html             # Contact form and links
└── README.md               # This file
```

## 🎨 Customization

### Color Palette
- **Primary**: Indigo (#4f46e5)
- **Secondary**: Cyan (#06b6d4)
- **Dark Mode**: Lighter variants with dark backgrounds

### Theme Variables
The site uses CSS custom properties for easy theming:
```css
:root {
  --color-primary: #4f46e5;
  --color-secondary: #06b6d4;
  --surface-0: #ffffff;
  --surface-1: #f6f7fb;
  --surface-2: #eef0f6;
}
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahmed-Elhosiny/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve .
     
     # PHP
     php -S localhost:8000
     ```

3. **Customize for your use**
   - Replace `assets/profile.png` with your photo
   - Update `assets/Ahmed_s_Resume.pdf` with your resume
   - Modify personal information in HTML files
   - Update GitHub username in `js/scripts.js`

## 📱 Pages

### Homepage (`index.html`)
- Hero section with personal branding
- About section with bio
- Social media links
- Call-to-action buttons

### Resume (`resume.html`)
- Professional experience timeline
- Education history
- Skills showcase with icons
- Download resume button

### Projects (`projects.html`)
- Dynamic GitHub repository grid
- Auto-fetches latest 9 repositories
- Hover effects and responsive cards

### Contact (`contact.html`)
- Contact form (requires backend integration)
- Direct email button
- Social media links
- Resume download

## 🔧 Customization Guide

### Personal Information
Update the following in each HTML file:
- Name and title in navigation
- Page titles and meta descriptions
- Social media links
- Bio and about text

### GitHub Integration
In `js/scripts.js`, update:
```javascript
var username = 'Your-GitHub-Username';
```

### Styling
Modify `css/styles.css`:
- Color variables in `:root` and `[data-theme="dark"]`
- Typography and spacing
- Component styles

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/` (root)
4. Deploy

### Vercel
1. Import GitHub repository
2. Framework preset: Other
3. Deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

**Ahmed Elhosiny**
- Email: [ahmed.elhosiny.dev@gmail.com](mailto:ahmed.elhosiny.dev@gmail.com)
- LinkedIn: [ahmed-elhosiny-657b301b6](https://www.linkedin.com/in/ahmed-elhosiny-657b301b6/)
- GitHub: [Ahmed-Elhosiny](https://github.com/Ahmed-Elhosiny)
- Twitter: [@ElHoS_1](https://x.com/ElHoS_1)

---

⭐ Star this repository if you found it helpful!
