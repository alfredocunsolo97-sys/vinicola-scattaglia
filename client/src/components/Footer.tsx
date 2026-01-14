import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wine text-white/90">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Scattaglia
              </h3>
              <p className="text-gold text-sm tracking-[0.3em] uppercase">
                Vinicola
              </p>
            </div>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
              Da oltre un secolo, la famiglia Scattaglia produce vini e olio 
              extravergine di oliva nel cuore della Puglia, preservando 
              tradizioni autentiche e sapori genuini.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cantine_scattaglia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">
              Navigazione
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="font-body text-white/70 hover:text-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chi-siamo"
                  className="font-body text-white/70 hover:text-gold transition-colors duration-300"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <a
                  href="/#prodotti"
                  className="font-body text-white/70 hover:text-gold transition-colors duration-300"
                >
                  I Nostri Prodotti
                </a>
              </li>
              <li>
                <a
                  href="/#contatti"
                  className="font-body text-white/70 hover:text-gold transition-colors duration-300"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/70 text-sm">
                  SP133, 70010<br />Adelfia (BA), Italia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+390804593500"
                  className="font-body text-white/70 text-sm hover:text-gold transition-colors"
                >
                  +39 080 459 3500
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@scattaglia.it"
                  className="font-body text-white/70 text-sm hover:text-gold transition-colors"
                >
                  info@scattaglia.it
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">
              Orari di Apertura
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="font-body text-white/70 text-sm">
                  <p className="font-medium text-white/90">Lunedì - Venerdì</p>
                  <p>08:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 ml-8">
                <div className="font-body text-white/70 text-sm">
                  <p className="font-medium text-white/90">Sabato</p>
                  <p>09:00 - 13:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 ml-8">
                <div className="font-body text-white/70 text-sm">
                  <p className="font-medium text-white/90">Domenica</p>
                  <p>Chiuso</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/50 text-sm text-center md:text-left">
            © {currentYear} Vinicola Scattaglia Saverio. Tutti i diritti riservati.
          </p>
          <p className="font-body text-white/50 text-sm">
            P.IVA: 04843910722
          </p>
        </div>
      </div>
    </footer>
  );
}
