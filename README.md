# 🏢 AI Building Amenity Management Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Supabase](https://img.shields.io/badge/Database-Supabase-green)
![Prisma](https://img.shields.io/badge/ORM-Prisma-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

An **AI-powered Building Amenity Management Platform** that allows residents to easily **book, schedule, and manage shared building amenities** such as gyms, swimming pools, meeting rooms, and event halls.

The system provides **separate resident and admin interfaces**, enabling efficient **amenity scheduling, conflict prevention, and centralized management** using a modern full-stack architecture.

Built using **Next.js, Supabase, Prisma ORM, and PostgreSQL** for high scalability and performance.

---

# 🚀 Live Demo

[![Open App](https://img.shields.io/badge/Open%20Live%20App-Coming%20Soon-blue)](#)

Try the **AI-powered Building Amenity Booking Platform** here once deployed.

---

# 📸 Application Preview

## Resident Dashboard
<img src="results/resident-dashboard.png" width="800">

## Amenity Booking Interface
<img src="results/amenity-booking.png" width="800">

## Admin Amenity Management
<img src="results/admin-dashboard.png" width="800">

*(Replace these screenshots with real images from your `/results` folder)*

---

# ⚡ Key Features

### 🏢 Amenity Booking System
- Residents can book building amenities easily
- Prevents booking conflicts automatically
- Real-time availability tracking

### 👥 Role-Based Access
- **Resident Interface** → Book and manage amenities
- **Admin Dashboard** → Manage amenities and reservations

### 🗄️ Secure Database Integration
- Supabase PostgreSQL backend
- Prisma ORM for database queries
- Structured relational database design

### ⚡ Modern UI/UX
- Built with **Next.js App Router**
- Responsive design
- Smooth booking workflow

### 🔒 Authentication & Data Security
- Secure Supabase authentication
- Protected API routes
- Safe database operations

---

# 🧠 System Architecture
Frontend (Next.js App Router)
│
│ API Requests
▼
Backend Services (Next.js Server Actions)
│
│ Prisma ORM
▼
Supabase PostgreSQL Database


---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|--------|
| **Next.js 14** | Full-stack React framework |
| **Supabase** | Backend as a service |
| **PostgreSQL** | Relational database |
| **Prisma ORM** | Database access and migrations |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Modern UI styling |

---

# 📂 Project Structure
Building-Amenity-Platform
│
├── app/ # Next.js app directory (routes + API)
├── components/ # UI components
├── lib/ # Database & utility functions
├── prisma/ # Prisma schema
├── public/ # Static assets
├── results/ # Screenshots for README
└── README.md


---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/building-amenity-management-platform.git
cd building-amenity-management-platform
2️⃣ Install Dependencies

Using pnpm (recommended):

pnpm install

or

npm install
3️⃣ Configure Environment Variables

Create a .env.local file and add:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

DATABASE_URL=your_postgres_connection_string
DIRECT_URL=your_direct_database_url
4️⃣ Push Database Schema
npx prisma db push
5️⃣ Generate Prisma Client
npx prisma generate
6️⃣ Start Development Server
pnpm dev

Open in browser:

http://localhost:3000
🚀 Production Build
pnpm build
pnpm start
📊 Future Improvements

AI-powered amenity demand prediction

Smart booking recommendations

Resident notifications

Calendar integration

Payment integration for premium amenities

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new feature branch

Submit a Pull Request

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Apoorv Raj

AI Engineer | Full Stack Developer | Machine Learning Enthusiast

Building AI-powered real-world systems and scalable platforms.
