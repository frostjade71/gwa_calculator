<div align="center">

# <img src="public/images/logo.svg" alt="GWA Calculator Logo" height="50" style="vertical-align: middle; margin-bottom: 5px;"> **GWA CALCULATOR**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![GitHub Stars](https://img.shields.io/github/stars/frostjade71/gwa_calculator?style=social)](https://github.com/frostjade71/gwa_calculator)

Built for lazy students

</div>

## Project Overview

The GWA Calculator helps college students easily track and calculate their General Weighted Average. Built for HCCCI College students and students everywhere, you can quickly calculate your grades for one semester or track your overall academic performance from your phone or computer. Your data stays private and secure since everything is saved directly in your browser, with no need for accounts or cloud storage.

> **Note**: This is a client-side only application - no data is ever sent to any server. Your academic information stays completely private on your device.

## Key Features

### Core Functionality

- **Dynamic Subject Management** - Add and remove subjects with ease
- **Live GWA Calculation** - Automatic recalculation as you type
- **Smart Validation** - Grade range (1.0-5.0) and units (≥1) validation
- **Show/Hide Results** - Toggle GWA results visibility with blur effect
- **Auto-Save** - localStorage persistence across sessions
- **Export Options** - Download as text file or screenshot (PNG)

## Quick Start

### <img src="https://skillicons.dev/icons?i=nodejs" height="30" style="vertical-align: middle;"> Local Development

```bash
git clone https://github.com/yourusername/gwa_calculator.git
cd gwa_calculator
npm install
npm run dev
```

Access the application:

- **Development Server**: http://localhost:3000

### <img src="https://skillicons.dev/icons?i=docker" height="30" style="vertical-align: middle;"> With Docker (Recommended)

```bash
docker build -t gwa-calculator .
docker run -p 3000:3000 gwa-calculator
```

Access the application:

- **Web Interface**: http://localhost:3000

## Technology Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind,docker,vercel" />
  </a>
</p>

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

## Docker Development

```bash
docker-compose -f docker-compose.dev.yml up
```

## **Developer**

**Jaderby Peñaranda**

[![Website](https://img.shields.io/badge/🌏-jaderbypenaranda.link-1e88e5)](https://gravatar.com/jaderbypenaranda) [![Email](https://img.shields.io/badge/📩-Contact-4caf50)](mailto:jaderbypenaranda@gmail.com)

---

**Version**: 1.0.0  
**Last Updated**: December 14, 2025

## 🚀 Next Update

For upcoming features, check out [What's Next.md](What's%20Next.md).
