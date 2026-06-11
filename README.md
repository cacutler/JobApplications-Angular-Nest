# Job Applications Dashboard

A full-stack job application tracker built with:

- **Backend:** NestJS 11, Prisma, MariaDB/MySQL, JWT authentication
- **Frontend:** Angular 19

Users can register and authenticate, then create, view, update, and delete their own job applications. The app enforces per-user ownership so one user cannot see or modify another user's data.

## Features

- User registration and login with JWT-based auth
- Secure user-specific job application CRUD
- Application fields include title, company, description, qualifications, status, stage, notes, URL, submission date, and last updated timestamp
- Prisma ORM for database access and migration support
- Angular frontend for a responsive dashboard experience

## Architecture

- `backend/` — NestJS API server
- `frontend/` — Angular client app
- `backend/prisma/` — Prisma schema and migrations
- `backend/src/` — Nest modules for applications, auth, users, and Prisma access

## Requirements

- Node.js 20+ or compatible runtime
- npm
- MariaDB or MySQL database

## Backend setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Configure environment variables:

Create a `.env` file in `backend/` with at least:

```bash
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
JWT_SECRET="your_jwt_secret"
PORT=3000
```

3. Generate Prisma client (runs automatically after install):

```bash
npm run postinstall
```

4. Run migrations if needed:

```bash
npx prisma migrate deploy
```

5. Start the backend:

```bash
npm run start:dev
```

The API listens by default on `http://localhost:3000`.

## Frontend setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the Angular development server:

```bash
npm run start
```

3. Open the app in your browser:

```text
http://localhost:4200
```

> The frontend can be configured to call the backend API on its own origin or a proxied endpoint if needed.

## Running tests

### Backend

```bash
cd backend
npm test
npm run test:e2e
npm run test:cov
```

### Frontend

```bash
cd frontend
npm test
```

## Database schema

### User model

- `id`
- `name`
- `username`
- `email`
- `password`
- `createdAt`
- `applications`

### Application model

- `id`
- `userId`
- `title`
- `company`
- `description`
- `qualifications`
- `status`
- `stage`
- `notes`
- `url`
- `submission`
- `updatedAt`

## Notes

- The backend uses `@nestjs/jwt` and Passport JWT guards to protect application endpoints.
- Prisma is configured with the `@prisma/adapter-mariadb` adapter and expects `DATABASE_URL` at runtime.
- Authentication data is stored in the `User` table and job application records belong to a specific user.

## Useful commands

```bash
# backend
cd backend && npm run build
cd backend && npm run lint

# frontend
cd frontend && npm run build
```