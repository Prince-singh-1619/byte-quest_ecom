# Getting Started

A responsive **Next.js** application that fetches products from the [Fake Store API](https://fakestoreapi.com/) and displays them in a grid layout with images, prices, and actions.

---

## Features

- **Fetch data with Axios** from external API
- **Responsive product cards** using Tailwind CSS
- **External image support** using `next/image`
- **Add to cart and bookmark icons**
- **Lazy-loading and optimized images**
- Fully **mobile-friendly** layout

---

## Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Icons:** React Icons (`GoBookmark`)
- **Images:** Next.js Image Component

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/Prince-singh-1619/byte-quest_ecom.git

cd nextjs-product-listing

npm install
```

### 2. Configure Next.js for External Images
Update next.config.js to allow images from Fake Store API:

```bash
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
```
Restart the dev server after this change.

--- 

## Usage
Run the development server:
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

The app will fetch products and display them in a responsive grid.

---

## Folder Structure
```bash
/app
  /page.tsx       # Main product listing page
/assets            # Local assets like add-to-cart icon
/components        # Optional reusable components
/globals.css       # Tailwind and global styles
/next.config.js    # Next.js config for external images
```

--- 

### Notes
Product images are fetched from external API (https://fakestoreapi.com) and require configuration in next.config.js.

Tailwind breakpoints used: sm, md, lg for responsive cards.

All product cards are responsive and optimized using Next.js <Image />.

```