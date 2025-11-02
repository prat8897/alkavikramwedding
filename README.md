# Wedding Website Template

A beautiful, responsive wedding website template that reads all content from a JSON file for easy customization.

## Features

✨ **Beautiful Design**
- Elegant, romantic color scheme
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation
- Live countdown timer to the wedding day

📱 **Sections Included**
- Hero header with couple names and date
- Live countdown timer
- Your love story
- Wedding schedule/timeline
- Location with embedded Google Maps
- Hotel accommodations
- Gift registry links
- FAQ section
- RSVP information
- Contact information

🎨 **Easy Customization**
- All content controlled through `wedding-data.json`
- No coding required to update information
- Just edit the JSON file and you're done!

## Setup Instructions

### Option 1: GitHub Pages (Recommended - Free & Easy!)

#### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up for free.

#### Step 2: Create a New Repository
1. Click the **"+"** icon in the top right corner
2. Select **"New repository"**
3. Name it: `your-wedding-website` (or any name you like)
4. Make sure it's set to **Public**
5. Click **"Create repository"**

#### Step 3: Upload Your Files
1. Click **"uploading an existing file"** link on the repository page
2. Drag and drop these files:
   - `index.html`
   - `script.js`
   - `wedding-data.json`
3. Click **"Commit changes"**

#### Step 4: Enable GitHub Pages
1. Go to your repository **Settings** (gear icon)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"main"** branch
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

#### Step 5: Get Your Website URL
Your website will be available at:
```
https://YOUR-USERNAME.github.io/your-wedding-website/
```

For example: `https://johndoe.github.io/our-wedding/`

### Using a Custom Domain (Optional)

If you want a custom domain like `www.janeandjohn2026.com`:

1. Buy a domain from any domain registrar (Namecheap, Google Domains, GoDaddy, etc.)
2. In your GitHub repository settings, go to **Pages**
3. Under **"Custom domain"**, enter your domain name
4. In your domain registrar's settings, add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```

## Customizing Your Wedding Content

Edit the `wedding-data.json` file with your wedding information. Here's what each section does:

### Basic Wedding Info
```json
"wedding": {
  "coupleNames": "Your Names Here",
  "dateTime": "2026-06-15T15:00:00"  // Format: YYYY-MM-DDTHH:MM:SS
}
```

### Your Story
```json
"story": "Tell your love story here..."
```

### Schedule
Add/remove events as needed:
```json
"schedule": [
  {
    "title": "Event Name",
    "time": "3:00 PM",
    "description": "Description of the event",
    "location": "Location name"
  }
]
```

### Locations
For Google Maps integration:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click **"Share"** → **"Embed a map"**
4. Copy the URL from the iframe src attribute
5. Paste it in `googleMapsEmbedUrl`

### Hotels
Add as many hotels as you need:
```json
"hotels": [
  {
    "name": "Hotel Name",
    "address": "Full address",
    "distance": "Distance from venue",
    "phone": "(555) 123-4567",
    "bookingLink": "https://booking-url.com",
    "notes": "Special rates or instructions"
  }
]
```

### Registry
Update with your actual registry links:
```json
"links": [
  {
    "store": "Store Name",
    "url": "https://your-registry-link.com"
  }
]
```

### FAQ
Add/remove questions as needed:
```json
"faq": [
  {
    "question": "Your question?",
    "answer": "Your answer here."
  }
]
```

### RSVP
You can use:
- Google Forms (free)
- RSVPify
- Withjoy
- Any other RSVP service

Just paste the link in the `rsvp.link` field.

## Updating Your Website

After you've edited `wedding-data.json`:

1. Go to your GitHub repository
2. Click on `wedding-data.json`
3. Click the pencil icon (Edit)
4. Make your changes
5. Click **"Commit changes"**
6. Your website will update automatically in 1-2 minutes!

## Testing Locally (Optional)

If you want to preview changes before uploading:

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Edit `wedding-data.json` as needed
4. Refresh the browser to see changes

Note: Some browsers may block local file loading. Use a simple local server:
```bash
# If you have Python installed:
python -m http.server 8000

# Then open: http://localhost:8000
```

## Color Customization

Want to change colors? Edit these CSS variables in `index.html`:

```css
:root {
    --primary-color: #8B7355;     /* Main brown/taupe */
    --secondary-color: #D4AF37;   /* Gold accent */
    --accent-color: #F5E6D3;      /* Light cream */
    --text-dark: #2C2C2C;         /* Dark text */
    --text-light: #666;           /* Light text */
    --background: #FDFBF7;        /* Page background */
}
```

## Troubleshooting

**Website not showing up?**
- Wait 3-5 minutes after enabling GitHub Pages
- Check that you selected the correct branch in settings
- Make sure all files are in the root directory (not in a subfolder)

**Changes not appearing?**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Wait 1-2 minutes for GitHub to rebuild the site
- Clear your browser cache

**JSON errors?**
- Make sure all quotes are double quotes (`"`)
- Check for missing commas between items
- Use a JSON validator: [jsonlint.com](https://jsonlint.com)

## Support

Need help? Common resources:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [JSON Validator](https://jsonlint.com)
- Check that your `wedding-data.json` is valid JSON

## License

Feel free to use this template for your wedding! Share it with friends getting married too! ❤️

---

**Congratulations on your wedding! 🎉**
