import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/*
 * DESIGN: Terroir Mediterraneo - Reviews Section
 * Social proof with Google reviews, warm styling
 * Card-based layout with star ratings
 */

const reviews = [
  {
    name: 'Marco B.',
    rating: 5,
    text: 'Vini eccellenti, produzione artigianale di qualità superiore. Il Primitivo è straordinario, si sente la passione e la tradizione in ogni sorso. Consiglio vivamente!',
    date: '2 mesi fa',
  },
  {
    name: 'Lucia R.',
    rating: 5,
    text: 'Ottimo rapporto qualità-prezzo, personale cordiale e competente. L\'olio extravergine è fantastico, lo uso quotidianamente. Azienda storica che merita di essere conosciuta.',
    date: '1 mese fa',
  },
  {
    name: 'Giuseppe M.',
    rating: 5,
    text: 'Azienda storica, vini autentici del territorio pugliese. Ho acquistato diverse bottiglie di Negroamaro e sono rimasto entusiasta. Tornerò sicuramente!',
    date: '3 settimane fa',
  },
  {
    name: 'Anna T.',
    rating: 5,
    text: 'Una scoperta meravigliosa! Prodotti genuini e un\'accoglienza calorosa. Il signor Scattaglia ci ha fatto degustare i suoi vini con grande passione. Esperienza indimenticabile.',
    date: '1 settimana fa',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-gold text-gold' : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-wine relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Cosa Dicono di Noi
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Le Voci dei Nostri Clienti
          </motion.h2>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? 'fill-gold text-gold' : 'fill-gold/50 text-gold/50'
                  }`}
                />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-white">4,3</span>
            <span className="font-body text-white/70 text-sm">su Google (50 recensioni)</span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-lg p-8 shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-wine/10" />

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="font-body text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                    <span className="font-display font-bold text-wine">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      {review.date}
                    </p>
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5 opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
