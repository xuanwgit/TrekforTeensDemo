# Trek for Teens Website

A modern, responsive website for Trek for Teens Foundation, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast page loads with Next.js
- 🔒 Type-safe development with TypeScript
- 🎯 SEO optimized
- 📱 Mobile-first approach
- 🔄 Real-time updates
- 🔐 Secure authentication
- 💳 Integrated donation system
- 📊 Impact tracking
- 📧 Newsletter subscription

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/trekforteens.git
   cd trekforteens
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/trekforteens"
   JWT_SECRET="your-jwt-secret"
   NEXT_PUBLIC_API_URL="http://localhost:3000/api"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trekforteens/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions and shared logic
│   ├── styles/          # Global styles and Tailwind config
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── tests/              # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Trek for Teens Foundation - hello@trekforteens.com
