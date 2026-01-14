import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

/*
 * DESIGN: Terroir Mediterraneo - Contact Section
 * Contact information with map embed, warm styling
 * Clear CTAs for phone and WhatsApp
 */

export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-cream" id="contatti">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-gold-dark text-sm tracking-[0.3em] uppercase mb-4"
          >
            Vieni a Trovarci
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Contatti e <span className="text-wine">Dove Siamo</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Vinicola Scattaglia Saverio
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">
                    Indirizzo
                  </h4>
                  <p className="font-body text-muted-foreground">
                    SP133, 70010 Adelfia (BA)<br />
                    Puglia, Italia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">
                    Telefono
                  </h4>
                  <a
                    href="tel:+390804593500"
                    className="font-body text-wine hover:text-wine-light transition-colors"
                  >
                    +39 080 459 3500
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">
                    Orari di Apertura
                  </h4>
                  <div className="font-body text-muted-foreground text-sm space-y-1">
                    <p><span className="font-medium text-foreground">Lun - Ven:</span> 08:00 - 19:00</p>
                    <p><span className="font-medium text-foreground">Sabato:</span> 09:00 - 13:00</p>
                    <p><span className="font-medium text-foreground">Domenica:</span> Chiuso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-wine hover:bg-wine-light text-white font-body font-semibold gap-2 flex-1"
              >
                <a href="tel:+390804593500">
                  <Phone className="w-5 h-5" />
                  Chiama Ora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-olive hover:bg-olive-light text-white font-body font-semibold gap-2 flex-1"
              >
                <a
                  href="https://wa.me/390804593500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5!2d16.868!3d41.002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzA3LjMiTiAxNsKwNTInMDQuOCJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Vinicola Scattaglia"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-wine/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
