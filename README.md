# 🚀 Cogniva - Instant AI Learning Platform

> **Part of IB's Dev World Project Series**

An AI-powered learning companion that delivers personalized tutoring for any subject in 2-60 minute focused sessions. Perfect for students cramming before exams, professionals preparing for interviews, or anyone needing instant knowledge access.

## ✨ Key Features

- 🤖 **Custom AI Companions** - Create personalized tutors in 60 seconds
- 🎙️ **Voice-Powered Learning** - Natural conversations with AI tutors using Vapi
- ⚡ **Instant Access** - From 2-minute quick reviews to 60-minute deep dives
- 📚 **7 Core Subjects** - Interview, Coding, CS Fundamentals, Math, Science, Communication, ML
- 📈 **Progress Tracking** - Gamified learning journey with detailed analytics
- 💾 **Personal Library** - Your custom tutors available 24/7

## 🎯 Perfect For

- Students preparing for exams with limited time
- Job seekers needing quick interview preparation
- Professionals requiring focused skill refreshers
- Anyone wanting personalized learning on-demand

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: Vapi
- **Payments**: Stripe
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm/yarn/pnpm/bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cogniva.git
   cd cogniva
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Vapi Voice AI
   VAPI_API_KEY=your_vapi_api_key

   # Stripe
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### Creating Your First AI Companion

1. **Sign up/Login** using Clerk authentication
2. **Navigate to "Build & Personalize"** section
3. **Choose your subject** from 7 core categories
4. **Configure your tutor** - name, description, voice, teaching style
5. **Set session duration** (2-60 minutes)
6. **Click "Build Your Companion"** - ready in seconds!

### Starting a Learning Session

1. **Go to your Companion Library**
2. **Select any companion**
3. **Click "Launch Lesson"**
4. **Start voice conversation** with your AI tutor
5. **Learn naturally** through conversation

## 🎨 Project Structure

```
cogniva/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── companions/        # Companion management
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── lib/                 # Utility functions
├── public/              # Static assets
└── types/               # TypeScript definitions
```

## 💡 How It Works

1. **Authentication** - Secure login via Clerk
2. **Companion Creation** - AI generates personalized tutors based on your needs
3. **Voice Integration** - Vapi enables natural conversations with AI
4. **Progress Tracking** - Supabase stores learning history and analytics
5. **Subscription Management** - Stripe handles billing for premium features

## 📊 Subscription Plans

- **Cogniva Basic** (Free) - 3 companions, 10 sessions/month
- **Cogniva Power User** ($9.99/month) - 10 companions, unlimited sessions
- **Cogniva Premium** ($19.99/month) - Unlimited companions, advanced features

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub** repository
2. **Connect to Vercel** - [vercel.com/new](https://vercel.com/new)
3. **Add environment variables** in Vercel dashboard
4. **Deploy** - Automatic deployment on every push

### Alternative Deployment Options

- **Netlify**: Connect your repo and deploy
- **Railway**: Simple deployment with database included
- **Docker**: Use provided Dockerfile for containerization

## 🤝 Contributing

Contributions are welcome! This project is part of IB's Dev World series.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Clerk** for seamless authentication
- **Supabase** for the powerful backend
- **Vapi** for voice AI technology
- **Vercel** for hosting and deployment

## 📞 Contact & Support

- **Developer**: [Your Name] - Part of IB's Dev World
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **Twitter**: [@YourTwitter]

---

## 📈 Project Stats

- ⭐ **Built with**: Next.js 14, TypeScript, Supabase
- 🎯 **Focus**: Instant AI-powered learning
- ⚡ **Performance**: Sub-second companion creation
- 🌍 **Accessibility**: 24/7 available tutoring

---

*Built with ❤️ as part of IB's Dev World - Creating solutions for real-world problems*
