import Link from 'next/link';
import { Microscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Microscope className="w-6 h-6" />
              <span className="font-bold text-lg">ScienceLab</span>
            </div>
            <p className="text-muted-foreground">
              Advancing scientific knowledge through research and innovation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Quantum Physics</li>
              <li className="text-muted-foreground">Neuroscience</li>
              <li className="text-muted-foreground">Biotechnology</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic">
              123 Science Street<br />
              Research Park, CA 94025<br />
              contact@sciencelab.com<br />
              +1 (555) 123-4567
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lucas Araújo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}