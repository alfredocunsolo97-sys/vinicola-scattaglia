import { motion } from 'framer-motion';

/*
 * DESIGN: Terroir Mediterraneo - Products Section
 * Showcase of wine and olive oil products with elegant imagery
 * Asymmetric layout with overlapping elements
 */

const products = [
  {
    image: '/images/wine-bottles.jpg',
    title: 'I Nostri Vini',
    subtitle: 'Primitivo & Negroamaro',
    description:
      'Vini rossi corposi e aromatici, espressione autentica del terroir pugliese. Il Primitivo di Gioia del Colle e il Negroamaro del Salento sono le nostre eccellenze.',
  },
  {
    image: '/images/olive-oil.jpg',
    title: 'Olio Extravergine',
    subtitle: 'Spremuto a Freddo',
    description:
      'Olio extra vergine di oliva prodotto dalle olive dei nostri uliveti secolari, con metodi tradizionali che preservano tutti i sapori e le proprietà benefiche.',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark relative overflow-hidden">
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
            Le Nostre Eccellenze
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Sapori della <span className="text-wine">Puglia</span>
          </motion.h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="font-body text-gold-dark text-sm tracking-widest uppercase mb-2">
                  {product.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Grapes Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img
              src="/images/grapes-harvest.jpg"
              alt="Uva Primitivo"
              className="w-full h-full object-cover rounded-full shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
