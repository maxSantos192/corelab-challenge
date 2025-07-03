# CoreNotes

This is a React app for managing Notes.

## Technologies Used

### Frontend

- **Vite + React + TypeScript**: Modern development environment for fast and efficient frontend building.
- **Axios**: For API requests.
- **TailwindCSS**: For styling the components.

### Backend

- **Express + TypeScript**: A minimalist and modern web framework for building fast and scalable APIs with static typing support.
- **Prisma ORM**: A next-generation ORM for intuitive, type-safe, and performant database access.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn or pnpm installed

### Installation Backend

1. Clone the repository

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate prisma client:
   ```bash
   npx prisma generate
   ```
5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

### Installation Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

⚠️ The Frontend application will be available at http://localhost:5173.
Make sure your API server (backend) is running at http://localhost:3333, or update the API base URL in .env file if necessary.
