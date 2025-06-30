# Portfolio Website

A beautiful, minimalist portfolio website showcasing both technical projects and creative work through Daedalus Studios. Built with HTML, CSS, and vanilla JavaScript, optimized for GitHub Pages.

## 🎨 Design Features

- **Warm Color Palette**: Ivory, Warm Beige, Sage Green, Moss Green, and Soft Charcoal
- **Typography**: EB Garamond serif font for elegant readability
- **Animations**: Smooth fade-in effects and hover transitions
- **Responsive Design**: Mobile-first approach with clean layouts
- **Updateable Blog**: JSON-based blog system for easy content updates

## 📁 Project Structure

```
Portfolio/
├── index.html              # Homepage with about section
├── projects.html           # Technical projects showcase
├── resume.html             # Professional resume
├── daedalus-studios.html   # Creative blog/shop page
├── contact.html            # Contact form and information
├── css/
│   ├── style.css          # Main styles with color system
│   └── animations.css     # Fade effects and transitions
├── js/
│   └── main.js           # Interactive functionality
├── data/
│   └── blog-posts.json   # Blog content (easily updateable)
└── images/              # Your photos and project screenshots
    ├── projects/        # Project images
    ├── blog/           # Blog post images
    └── profile/        # Personal photos
```

## 🚀 Quick Start

### 1. Customize Your Content

**Personal Information:**
- Replace `[Your Name]` throughout all HTML files
- Update email addresses and social media links
- Add your location in `contact.html`

**Projects (`projects.html`):**
- Replace project titles, descriptions, and technologies
- Update GitHub/live demo links
- Add project screenshots to `images/projects/`

**Resume (`resume.html`):**
- Update work experience, education, and skills
- Add link to your PDF resume
- Customize certifications and achievements

**About Section (`index.html`):**
- Write your personal bio and professional summary
- Add your profile photo to `images/profile/`

### 2. Update Daedalus Studios Blog

The blog uses a simple JSON system for easy updates:

**To add a new blog post:** Edit `data/blog-posts.json`

```json
{
  "id": 6,
  "title": "Your New Post Title",
  "date": "2024-01-20", 
  "excerpt": "Brief description...",
  "content": "Full post content...",
  "images": ["blog/new-post-image.jpg"],
  "tags": ["tag1", "tag2"]
}
```

**To update existing posts:** Modify the corresponding entry in the JSON file

### 3. Add Your Images

- **Profile Photo**: `images/profile/your-photo.jpg`
- **Project Screenshots**: `images/projects/project-name.jpg`
- **Blog Images**: `images/blog/post-image.jpg`
- **Studio Photos**: `images/studio/workspace.jpg`

Replace the `.image-placeholder` divs in HTML with:
```html
<img src="images/folder/your-image.jpg" alt="Description">
```

## 🌐 Deploy to GitHub Pages

### Option 1: Username Repository (Recommended)
1. Create a repository named `username.github.io` (replace with your GitHub username)
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Your site will be live at `https://username.github.io`

### Option 2: Project Repository
1. Create a repository with any name (e.g., "portfolio")
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Your site will be live at `https://username.github.io/repository-name`

## 🎨 Color Customization

The website uses CSS variables for easy color customization. Edit `css/style.css`:

```css
:root {
    --ivory: #F9F6EF;        /* Background */
    --warm-beige: #D8CBB5;    /* Cards/containers */
    --sage-green: #B7C3B2;   /* Buttons/accents */
    --moss-green: #8D9C87;   /* Secondary text */
    --soft-charcoal: #4A4A4A; /* Main text */
}
```

## 📱 Features

- **Responsive Navigation**: Hamburger menu on mobile
- **Smooth Animations**: Fade-in effects on scroll
- **Contact Form Ready**: Set up for Formspree or Netlify Forms
- **SEO Friendly**: Semantic HTML and meta tags
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **Accessible**: Proper focus states and semantic markup

## 🛠 Technical Details

- **No Build Process**: Pure HTML/CSS/JS for simplicity
- **Modern CSS**: Flexbox and Grid layouts
- **Vanilla JavaScript**: No framework dependencies
- **Web Fonts**: Google Fonts (EB Garamond)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📝 Customization Tips

**Fonts**: Replace EB Garamond in the Google Fonts link and CSS
**Layout**: Modify the CSS Grid and Flexbox properties in `style.css`
**Animations**: Adjust timing and effects in `animations.css`
**Sections**: Add or remove sections by copying the HTML structure

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you make improvements that others might benefit from, pull requests are welcome.

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to make it yours?** Start by replacing the placeholder content with your own information, add your images, and deploy to GitHub Pages! 