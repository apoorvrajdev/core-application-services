# Building Amenity Management Platform

A modern, AI-powered platform for scheduling and booking building amenities. Built with Next.js, Prisma, and Supabase (PostgreSQL).

## Features
- Resident and admin interfaces
- Amenity management and booking
- Supabase PostgreSQL integration
- Modern UI components

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- Supabase project (PostgreSQL database)

### Setup
1. **Clone the repository**
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Configure environment variables:**
   - Copy `.env.local` and fill in your Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `DATABASE_URL` (Postgres connection string)
     - `DIRECT_URL` (optional, for migrations)
4. **Push the database schema:**
   ```sh
   npx prisma db push
   ```
5. **Generate Prisma client:**
   ```sh
   npx prisma generate
   ```
6. **Run the development server:**
   ```sh
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Production Build
```sh
pnpm run build
pnpm start
```

## Project Structure
- `app/` - Next.js app directory (routes, pages, API)
- `components/` - UI and feature components
- `lib/` - Prisma, Supabase, and utility libraries
- `prisma/` - Prisma schema and config

## License
MIT
