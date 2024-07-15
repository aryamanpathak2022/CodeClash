# CodeClash

![home](image.png)

## Overview
**CodeClash** is a dynamic competitive programming platform where coders worldwide clash in thrilling problem-solving contests. Showcase your skills, rise through the ranks, and become the ultimate coding champion.

## Features
- **Contests**: Participate in live coding contests with other programmers.
- **Questions**: Solve a wide variety of coding problems.
- **Leaderboards**: View rankings for each contest.
- **Live Submissions**: Submit your solutions during live contests and get instant feedback.
- **Post-Contest Practice**: Work on contest problems individually after contests.

## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Code Execution**: [Judge0](https://judge0.com/) (running independent codes in independent Docker containers)
- **Monorepo**: [Turborepo](https://turborepo.org/)

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js
- PostgreSQL
- Docker

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/codeclash.git
   cd codeclash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/codeclash
   NEXT_PUBLIC_JUDGE0_API_URL=http://localhost:2358
   ```

4. **Run PostgreSQL**

   Ensure your PostgreSQL service is running. You can start it with:
   ```bash
   sudo service postgresql start
   ```

5. **Migrate the database**

   ```bash
   npx prisma migrate dev
   ```

6. **Run Docker Judge0**

   Pull and run the Judge0 Docker image:
   ```bash
   docker pull judge0/api
   docker run -d -p 2358:2358 judge0/api
   ```

7. **Start the development server**

   ```bash
   npm run dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Running Tests
To run tests, use the following command:
```bash
npm run test
```

## Using Turborepo
[Turborepo](https://turborepo.org/) is used for managing the monorepo, ensuring efficient builds and smooth development workflows.

### Setup

1. **Install Turborepo**
   ```bash
   npm install -g turbo
   ```

2. **Run Turborepo Commands**

   **Build all packages**
   ```bash
   turbo run build
   ```

   **Dev all packages**
   ```bash
   turbo run dev
   ```

   **Lint all packages**
   ```bash
   turbo run lint
   ```

   **Test all packages**
   ```bash
   turbo run test
   ```

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

## License
This project is licensed under the MIT License.


