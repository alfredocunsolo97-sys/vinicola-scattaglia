import { motion } from 'framer-motion';
import { Wine, Leaf, Award, Users } from 'lucide-react';

/*
 * DESIGN: Terroir Mediterraneo - Services Section
 * 4 iconic boxes with warm colors, subtle animations
 * Asymmetric layout with generous spacing
 */

const services = [
  {
    icon: Wine,
    title: 'Vini Artigianali',
    description:
      'Primitivo, Negroamaro e vini tipici pugliesi prodotti con metodi tradizionali tramandati da generazioni.',
  },
  {
    icon: Leaf,
    title: 'Agricoltura Biologica',
    description:
      'Coltiviamo le nostre viti e i nostri ulivi nel rispetto della natura, senza pesticidi chimici.',
  },
  {
    icon: Award,
    title: 'Qualità Certificata',
    description:
      'Ogni bottiglia racconta la storia del nostro territorio e della nostra dedizione alla qualità.',
  },
  {
    icon: Users,
    title: 'Vendita Diretta',
    description:
      'Vieni a trovarci in cantina per degustare e acquistare direttamente i nostri prodotti.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden" id="prodotti">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream-dark/50 to-transparent pointer-events-none" />
      
      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-gold-dark text-sm tracking-[0.3em] uppercase mb-4"
          >
            I Nostri Punti di Forza
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Tradizione e Passione
            <br />
            <span className="text-wine">in Ogni Goccia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted-foreground text-lg leading-relaxed"
          >
            Produciamo vini locali e olio extra vergine di oliva con vendita 
            al dettaglio, mantenendo vive le tradizioni della nostra terra.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-wine/10 flex items-center justify-center mb-6 group-hover:bg-wine group-hover:scale-110 transition-all duration-500">
                <service.icon className="w-7 h-7 text-wine group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Number */}
              <span className="absolute top-6 right-6 font-display text-6xl font-bold text-wine/5 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
