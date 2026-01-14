import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

/*
 * DESIGN: Terroir Mediterraneo - Hero Section
 * Full-screen hero with vineyard background, asymmetric text placement
 * Warm overlay gradient, elegant typography with Playfair Display
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-vineyard.jpg"
          alt="Vigneti pugliesi al tramonto"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Tradizione Vinicola dal 1920
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Vini Autentici
            <br />
            <span className="text-gold">della Terra Pugliese</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Da oltre un secolo, la famiglia Scattaglia coltiva con passione 
            le viti e gli ulivi della Puglia, producendo vini biologici e 
            olio extravergine di qualità superiore.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-wine hover:bg-wine-light text-white font-body font-semibold tracking-wide gap-2 px-8 py-6 text-base"
            >
              <a href="tel:+390804593500">
                <Phone className="w-5 h-5" />
                Chiamaci Ora
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-foreground font-body font-semibold tracking-wide gap-2 px-8 py-6 text-base bg-transparent"
            >
              <a
                href="https://maps.google.com/?q=SP133,+70010+Adelfia+BA,+Italia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                Vieni a Trovarci
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
