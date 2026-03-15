# 🏢 AI Building Amenity Management Platform

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Supabase](https://img.shields.io/badge/Database-Supabase-green)
![Prisma](https://img.shields.io/badge/ORM-Prisma-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

</p>

<p align="center">
A modern <b>AI-powered Building Amenity Management Platform</b> that allows residents to <b>book, schedule, and manage shared building amenities</b> such as gyms, swimming pools, meeting rooms, and event halls.
</p>

<p align="center">
Built using <b>Next.js • Supabase • Prisma • PostgreSQL</b> for scalability and performance.
</p>

---

# 📑 Table of Contents

- 🚀 Live Demo  
- 📸 Application Preview  
- ⚡ Key Features  
- 🧠 System Architecture  
- 🛠 Tech Stack  
- 📂 Project Structure  
- ⚙️ Installation & Setup  
- 🚀 Production Build  
- 📊 Future Improvements  
- 🤝 Contributing  
- 📜 License  
- 👨‍💻 Author  

---

# 🚀 Live Demo

[![Open App](https://img.shields.io/badge/Open%20Live%20App-Coming%20Soon-blue)](#)

Try the **AI-powered Building Amenity Booking Platform** once deployed.

---

# 📸 Application Preview

### Resident Dashboard

<img src="results/resident-dashboard.png" width="900">

---

### Amenity Booking Interface

<img src="results/amenity-booking.png" width="900">

---

### Admin Amenity Management

<img src="results/admin-dashboard.png" width="900">

---

# ⚡ Key Features

### 🏢 Amenity Booking System
- Residents can easily book building amenities
- Automatic booking conflict prevention
- Real-time availability tracking

### 👥 Role-Based Access
- **Resident Dashboard** → Book and manage amenities
- **Admin Panel** → Manage amenities and reservations

### 🗄️ Secure Database Integration
- Supabase PostgreSQL backend
- Prisma ORM for database access
- Structured relational schema

### ⚡ Modern UI/UX
- Built with **Next.js App Router**
- Responsive and clean design
- Fast booking workflow

### 🔒 Authentication & Security
- Secure Supabase authentication
- Protected API routes
- Safe database operations

---

# 🧠 System Architecture

```
                ┌──────────────────────┐
                │      Frontend        │
                │      Next.js App     │
                └──────────┬───────────┘
                           │
                           │ API Requests
                           ▼
                ┌──────────────────────┐
                │     Backend Logic    │
                │   Next.js Server     │
                │      Actions/API     │
                └──────────┬───────────┘
                           │
                           │ Prisma ORM
                           ▼
                ┌──────────────────────┐
                │  Supabase PostgreSQL │
                │      Database        │
                └──────────────────────┘
```

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|--------|
| **Next.js 14** | Full-stack React framework |
| **Supabase** | Backend as a Service |
| **PostgreSQL** | Relational database |
| **Prisma ORM** | Database queries & migrations |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Modern UI styling |

---

# 📂 Project Structure

```
Building-Amenity-Platform
│
├── app/              # Next.js routes and API
├── components/       # Reusable UI components
├── lib/              # Database and utility logic
├── prisma/           # Prisma schema
├── public/           # Static assets
├── results/          # Screenshots for README
└── README.md
```

---

# ⚙️ Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/building-amenity-management-platform.git
cd building-amenity-management-platform
```

---

### 2️⃣ Install Dependencies

Using **pnpm (recommended)**

```bash
pnpm install
```

or

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env.local` file

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

DATABASE_URL=your_postgres_connection_string
DIRECT_URL=your_direct_database_url
```

---

### 4️⃣ Push Database Schema

```bash
npx prisma db push
```

---

### 5️⃣ Generate Prisma Client

```bash
npx prisma generate
```

---

### 6️⃣ Start Development Server

```bash
pnpm dev
```

Open in browser:

```
http://localhost:3000
```

</details>

---

# 🚀 Production Build

```bash
pnpm build
pnpm start
```

---

# 📊 Future Improvements

- 🤖 AI-powered amenity demand prediction  
- 📅 Smart booking recommendations  
- 🔔 Resident notifications  
- 📆 Google Calendar integration  
- 💳 Payment system for premium amenities  

---

# 🤝 Contributing

Contributions are welcome!

1️⃣ Fork the repository  
2️⃣ Create a feature branch  
3️⃣ Commit your changes  
4️⃣ Submit a Pull Request  

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Apoorv Raj**

AI Engineer • Full Stack Developer • Machine Learning Enthusiast

Building **AI-powered real-world systems and scalable platforms**.
---

⭐ If you found this project useful, consider giving it a **star on GitHub**.
