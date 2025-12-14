# GWA Calculator 🎓

A clean, student-friendly **GPA / GWA Calculator** built with Next.js, Tailwind CSS, and Framer Motion. Calculate your General Weighted Average easily with a beautiful, responsive interface.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)

## ✨ Features

- ✅ **Add/Remove Subjects** - Dynamically manage your subject list
- 📊 **Live GWA Calculation** - Automatic recalculation on input change
- ✔️ **Input Validation** - Grade range (1.0-5.0) and units (≥1) validation
- 💾 **Auto-Save** - localStorage persistence across sessions
- 📤 **Export as Text** - Copy or download formatted results as .txt
- 📸 **Export as Screenshot** - Download your results as PNG
- 🎨 **Smooth Animations** - Framer Motion for delightful interactions
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🚀 **Fast & Lightweight** - Client-side only, no backend required

## 🧮 GWA Formula

The calculator uses the standard weighted average formula:

```
For each subject:
  weightedGrade = grade × units

GWA = (sum of all weightedGrade) / (sum of all units)
```

**Example:**

- Math: 1.6 (3 units) → weighted = 4.8
- English: 2.0 (3 units) → weighted = 6.0
- **GWA = (4.8 + 6.0) / (3 + 3) = 1.80**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gwa_calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t gwa-calculator .
```

### Run Docker Container

```bash
docker run -p 3000:3000 gwa-calculator
```

Access the app at [http://localhost:3000](http://localhost:3000)

## ☁️ Deploy to Vercel

This app is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with one click - no configuration needed!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Screenshot Export:** html2canvas
- **Language:** TypeScript 5.7
- **Deployment:** Vercel / Docker

## 📁 Project Structure

```
gwa_calculator/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main calculator page
│   └── globals.css         # Global styles
├── components/
│   ├── SubjectRow.tsx      # Subject input component
│   ├── GwaResult.tsx       # GWA display component
│   └── ExportButtons.tsx   # Export functionality
├── types/
│   └── index.ts            # TypeScript definitions
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
└── package.json            # Dependencies
```

## 🎯 Usage

1. **Add Subjects** - Click "Add Subject" to create a new entry
2. **Enter Details** - Input subject name, grade (1.0-5.0), and units
3. **View GWA** - Your GWA updates automatically as you type
4. **Export Results** - Choose text or screenshot export
5. **Data Persists** - Your subjects are saved automatically

## 🔒 Privacy

- **100% Client-Side** - No data sent to any server
- **localStorage Only** - Data stored locally in your browser
- **No Tracking** - No analytics or third-party scripts

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Future Enhancements

- [ ] Dark mode toggle
- [ ] Multiple GWA calculation methods
- [ ] Semester/year organization
- [ ] Grade point scale customization
- [ ] PDF export option
- [ ] Share results via link

---

**Built with ❤️ for students**
