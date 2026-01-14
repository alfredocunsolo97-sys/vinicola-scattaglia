import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Heart, Award, Leaf, Users } from 'lucide-react';

/*
 * DESIGN: Terroir Mediterraneo - Chi Siamo Page
 * Storytelling page with company history and values
 * Warm, authentic tone with elegant imagery
 */

const values = [
  {
    icon: Heart,
    title: 'Passione',
    description: 'Ogni bottiglia nasce dalla passione per la nostra terra e per l\'arte della vinificazione.',
  },
  {
    icon: Award,
    title: 'Qualità',
    description: 'Selezioniamo solo le migliori uve e olive per garantire prodotti di eccellenza.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilità',
    description: 'Coltiviamo nel rispetto dell\'ambiente, preservando la biodiversità del nostro territorio.',
  },
  {
    icon: Users,
    title: 'Tradizione',
    description: 'Tramandiamo di generazione in generazione i segreti della produzione artigianale.',
  },
];

export default function ChiSiamo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/images/family-tradition.jpg"
              alt="Cantina storica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
                La Nostra Storia
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Chi Siamo
              </h1>
              <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed">
                Una storia di famiglia, passione e dedizione alla terra pugliese 
                che dura da oltre un secolo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/grapes-harvest.jpg"
                    alt="Vendemmia"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-wine/10 rounded-lg -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="font-body text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
                  Dal 1920
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Una Tradizione che
                  <br />
                  <span className="text-wine">Dura nel Tempo</span>
                </h2>

                <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                  <p>
                    La famiglia Scattaglia da oltre cento anni produce uva e vini nel cuore 
                    della Puglia, precisamente ad Adelfia, in provincia di Bari. Lontano dal 
                    frastuono mediatico delle degustazioni opulente, viviamo in semplicità il 
                    nostro legame con la terra.
                  </p>
                  <p>
                    Dal 1990, Saverio Scattaglia si occupa personalmente dell'azienda agraria 
                    e vinicola di famiglia, portando avanti con dedizione la tradizione nella 
                    produzione di uva da tavola e vini tipici del territorio pugliese.
                  </p>
                  <p>
                    I nostri vigneti, coltivati con metodi biologici, producono uve Primitivo 
                    e Negroamaro che vengono trasformate in vini dal carattere autentico. 
                    Accanto alla produzione vinicola, coltiviamo ulivi secolari dai quali 
                    ricaviamo un olio extravergine di oliva di qualità superiore.
                  </p>
                  <p>
                    Ogni bottiglia che esce dalla nostra cantina racconta la storia della 
                    nostra famiglia e del nostro territorio: il sole della Puglia, la terra 
                    rossa, il vento che accarezza i filari e la passione che mettiamo in 
                    ogni fase della produzione.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-display text-2xl text-wine italic">
                    "Il vino è poesia imbottigliata"
                  </p>
                  <p className="font-body text-muted-foreground mt-2">
                    — Famiglia Scattaglia
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-cream-dark">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-body text-gold-dark text-sm tracking-[0.3em] uppercase mb-4"
              >
                I Nostri Principi
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              >
                I Valori che ci <span className="text-wine">Guidano</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/hero-vineyard.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Vieni a Scoprire
                <br />
                <span className="text-gold">i Nostri Sapori</span>
              </h2>
              <p className="font-body text-white/80 text-lg leading-relaxed mb-10">
                Ti aspettiamo nella nostra cantina per farti degustare i nostri vini 
                e il nostro olio extravergine. Sarà un piacere condividere con te 
                la nostra passione.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-foreground font-body font-semibold gap-2 px-8"
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
                  className="border-2 border-white text-white hover:bg-white hover:text-wine font-body font-semibold px-8 bg-transparent"
                >
                  <a href="/#contatti">
                    Contattaci
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
