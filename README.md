# Touristic Monuments Website

A complete multi-page touristic website showcasing five of the world's most remarkable historical monuments. Built using only HTML, CSS, and vanilla JavaScript - no frameworks, no libraries, no backend.

## Project Summary

This website provides an interactive and informative experience for exploring historical monuments. It features detailed information pages, an image gallery with modal lightbox functionality, a feedback form with validation, and a fully responsive design that works seamlessly on desktop, tablet, and mobile devices.

## Project Structure

```
touristic-website/
├─ index.html              # Home page with intro and featured monuments
├─ gallery.html            # Image gallery with search functionality
├─ monument-1.html         # The Great Pyramid of Giza
├─ monument-2.html         # The Colosseum
├─ monument-3.html         # Taj Mahal
├─ monument-4.html         # Machu Picchu
├─ monument-5.html         # Stonehenge
├─ about.html              # About page with project information
├─ feedback.html           # Feedback form page
├─ css/
│  └─ styles.css          # Main stylesheet with responsive design
├─ js/
│  └─ main.js             # JavaScript functionality
├─ images/
│  ├─ monument1.jpg       # Full-size images (placeholders)
│  ├─ monument1-thumb.jpg # Thumbnail images (placeholders)
│  └─ ... (same for monuments 2-5)
└─ README.md              # This file
```

## Pages

### 1. Home Page (index.html)
- Welcome introduction section
- Two informative articles (100-200 words each) about monument preservation and architectural marvels
- Featured monuments section with links to individual monument pages
- Navigation to all other pages

### 2. Gallery Page (gallery.html)
- Grid layout displaying all monument thumbnails
- Search/filter functionality to find monuments by name
- Click on any thumbnail to open a modal lightbox with larger image
- Hover effects on gallery items

### 3. Monument Detail Pages (monument-1.html to monument-5.html)
Each monument page includes:
- Large main image
- Detailed history and description (150-300 words)
- Facts list with location, year built, and additional information
- Two-column layout on large screens, stacked on mobile
- Link back to gallery

**Featured Monuments:**
- **The Great Pyramid of Giza** - Ancient Egyptian wonder
- **The Colosseum** - Roman amphitheatre
- **Taj Mahal** - Mughal mausoleum
- **Machu Picchu** - Inca citadel
- **Stonehenge** - Prehistoric stone circle

### 4. About Page (about.html)
- Information about the student (Ibrahim Najem)
- Project purpose and goals
- List of tools and technologies used

### 5. Feedback Page (feedback.html)
- Contact form with name, email, and message fields
- Real-time validation with inline error messages
- Form data saved to browser localStorage
- Success message displayed upon submission

## CSS Features

### Responsive Design
The website is fully responsive with two main breakpoints:

- **768px (Tablet)**: 
  - Navigation switches to vertical layout
  - Two-column layouts become single column
  - Gallery adjusts to smaller grid
  - Reduced padding and font sizes

- **480px (Mobile)**:
  - Full-width single column layouts
  - Stacked navigation menu
  - Optimized spacing for small screens
  - Gallery displays one item per row

### Design Elements
- Clean, modern color palette (blues, grays, whites)
- Consistent header and footer across all pages
- Smooth transitions and hover effects
- Accessible focus states for keyboard navigation
- Good contrast ratios for readability
- Box shadows and rounded corners for depth

### Layout Techniques
- CSS Grid for gallery and article layouts
- Flexbox for navigation and featured lists
- Responsive images with `max-width: 100%` and `height: auto`
- Semantic HTML structure with proper heading hierarchy

## JavaScript Features

### 1. Active Navigation Indicator
- Automatically highlights the current page link in the navigation
- Adds `.active` class to the matching navigation link
- Works on all pages by detecting the current page URL

### 2. Gallery Modal/Lightbox
- Clicking a gallery thumbnail opens a modal with a larger image
- Modal displays the monument name
- Multiple ways to close:
  - Click the close button (×)
  - Click outside the modal
  - Press the ESC key
- Smooth animations for opening and closing
- Prevents body scrolling when modal is open

### 3. Feedback Form Validation
- **Name validation**: Ensures name field is not empty
- **Email validation**: Validates email format using regex pattern
- **Message validation**: Ensures message is at least 10 characters long
- Real-time validation on field blur
- Inline error messages appear below invalid fields
- Visual error indicators (red borders) on invalid fields
- Form submission blocked until all fields are valid

### 4. LocalStorage Integration
- Valid feedback submissions are saved to browser localStorage
- Each entry includes:
  - Name
  - Email
  - Message
  - Timestamp
- Data stored as JSON array
- Success message displayed after submission
- Form automatically resets after successful submission

### 5. Gallery Search/Filter
- Real-time search functionality
- Filters gallery items as you type
- Case-insensitive matching
- Hides non-matching items dynamically

## How to Run

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. All pages use relative links and will work correctly.

### Option 2: Using a Local Server (Recommended)
For the best experience, use a local development server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using VS Code Live Server:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` (or the port shown) in your browser.

## Browser Compatibility

The website works in all modern browsers that support:
- HTML5 semantic elements
- CSS3 (Grid, Flexbox, Media Queries)
- ES6 JavaScript (let, const, arrow functions)
- LocalStorage API

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Image Placeholders

The `images/` folder contains placeholder files for all monument images. In a production environment, these should be replaced with actual photographs of the monuments:

- `monument1.jpg` and `monument1-thumb.jpg` (Great Pyramid)
- `monument2.jpg` and `monument2-thumb.jpg` (Colosseum)
- `monument3.jpg` and `monument3-thumb.jpg` (Taj Mahal)
- `monument4.jpg` and `monument4-thumb.jpg` (Machu Picchu)
- `monument5.jpg` and `monument5-thumb.jpg` (Stonehenge)

**Note:** Currently, the image files are placeholder SVG files. Replace them with actual JPG/PNG images for the website to display images correctly.

## Known Issues

1. **Image Placeholders**: The current image files are SVG placeholders. Replace with actual JPG/PNG images for proper display.

2. **LocalStorage Limit**: Browser localStorage has a size limit (typically 5-10MB). If many feedback entries are saved, older entries may need to be cleared manually.

3. **No Backend**: Since this is a front-end only project, feedback data is stored locally in the browser and cannot be accessed from other devices or browsers.

## Future Enhancements (Optional)

- Add image lazy loading for better performance
- Implement pagination for gallery if more monuments are added
- Add print stylesheet for monument detail pages
- Create a feedback viewing page to display saved feedback entries
- Add smooth scroll behavior for better UX
- Implement image zoom functionality in modal

## Technologies Used

- **HTML5**: Semantic markup, forms, accessibility features
- **CSS3**: Grid, Flexbox, Media Queries, Animations, Transitions
- **Vanilla JavaScript**: DOM manipulation, Event handling, LocalStorage API
- **No Frameworks**: Pure, framework-free implementation

## Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (one `<h1>` per page)
- Alt text for all images
- Visible focus states for keyboard navigation
- Good color contrast ratios
- Form labels associated with inputs
- ARIA labels where appropriate

## License

This project is created for educational purposes.

---

**Created by:** Ibrahim Najem  
**Date:** 2025  
**Project Type:** Front-end Web Development (HTML/CSS/JavaScript)

