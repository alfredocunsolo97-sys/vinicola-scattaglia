import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/#contatti', label: 'Contatti' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span
              className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-wine' : 'text-white'
              }`}
            >
              Scattaglia
            </span>
            <span
              className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold-dark' : 'text-gold'
              }`}
            >
              Vinicola
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative font-body text-sm tracking-wide uppercase transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-foreground' : 'text-white'
              } ${location === link.href ? 'font-semibold' : 'font-medium'}`}
            >
              {link.label}
              {location === link.href && (
                <motion.span
                  layoutId="underline"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    isScrolled ? 'bg-wine' : 'bg-gold'
                  }`}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className={`gap-2 font-body font-semibold tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'bg-wine hover:bg-wine-light text-white'
                : 'bg-gold hover:bg-gold-dark text-foreground'
            }`}
          >
            <a href="tel:+390804593500">
              <Phone className="w-4 h-4" />
              Chiamaci
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-lg text-foreground py-2 border-b border-border/50"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-wine hover:bg-wine-light text-white gap-2"
              >
                <a href="tel:+390804593500">
                  <Phone className="w-4 h-4" />
                  Chiamaci Ora
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
