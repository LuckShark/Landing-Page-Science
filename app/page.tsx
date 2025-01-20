import Link from 'next/link';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { MainContent } from '@/components/main-content';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}