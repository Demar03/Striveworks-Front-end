# 🖼️ Image CRUD SPA

A React + Vite + TypeScript single-page application for uploading, searching, listing, and deleting images. Built using TailwindCSS and json-server.

---

## 🚀 Features

- 📤 Upload images (only `.jpg`, `.png`, etc.)
- 🔍 Search images by name
- 🖼️ Display images in a responsive grid layout
- ❌ Delete individual images
- ✅ Clean UI with TailwindCSS
- ⚡ Fast dev experience with Vite

---

## 🧪 Tech Stack

- **React** (with Vite)
- **TypeScript**
- **TailwindCSS**
- **Axios**
- **json-server** (mock API)

---

## 📦 Installation & Running

```bash
npm install
npm run server     # starts json-server at http://localhost:5000
npm start        # starts Vite frontend at http://localhost:3000
```

---

Ensure db.json (or images.json) exists at src/data/images.json with the following structure:

{
"images": []
}

## 📝 Notes

✅ All functionality completed as requested in the assessment

- ⏱ Time taken: ~5 hours

🧹 If given more time:

- Add image preview before upload
- Add toast notifications (success/error)
- Add update (edit image name) functionality
