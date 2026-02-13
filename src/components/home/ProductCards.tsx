/**
 * Product cards section displaying OnliGrow's three main offerings
 * Free Demo, Quarterly Program, and Olympiad
 */

'use client';

import { motion } from 'framer-motion';
import { Presentation, GraduationCap, Trophy, ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { PRODUCTS } from '@/lib/constants';
import type { Product } from '@/types';

/**
 * Icon mapping for product types
 */
const iconMap = {
  presentation: Presentation,
  graduationCap: GraduationCap,
  trophy: Trophy,
};

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * Individual product card component
 */
function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const Icon = iconMap[product.icon as keyof typeof iconMap];

  return (
    <motion.div
      variants={cardVariants}
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        featured
          ? 'bg-primary text-white shadow-xl scale-105'
          : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark text-sm font-semibold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
          featured ? 'bg-white/20' : 'bg-primary/10'
        }`}
      >
        <Icon className={`w-7 h-7 ${featured ? 'text-white' : 'text-primary'}`} />
      </div>

      {/* Product name */}
      <h3
        className={`text-xl md:text-2xl font-bold font-heading mb-2 ${
          featured ? 'text-white' : 'text-dark'
        }`}
      >
        {product.name}
      </h3>

      {/* Duration & Price */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-sm ${featured ? 'text-white/80' : 'text-gray-500'}`}
        >
          {product.duration}
        </span>
        <span
          className={`w-1 h-1 rounded-full ${
            featured ? 'bg-white/50' : 'bg-gray-300'
          }`}
        />
        <span
          className={`font-semibold ${
            featured ? 'text-secondary' : 'text-primary'
          }`}
        >
          {product.price}
        </span>
      </div>

      {/* Description */}
      <p
        className={`mb-6 ${featured ? 'text-white/90' : 'text-gray-600'}`}
      >
        {product.description}
      </p>

      {/* CTA Button */}
      <Button
        href={product.href}
        variant={featured ? 'secondary' : 'primary'}
        size="md"
        rightIcon={<ArrowRight className="w-4 h-4" />}
        fullWidth
      >
        {product.cta}
      </Button>
    </motion.div>
  );
}

/**
 * ProductCards section component
 * Displays all three product offerings in a responsive grid
 */
export function ProductCards() {
  return (
    <SectionWrapper id="programs">
      <SectionHeader
        title="Programs That Fit Your School"
        subtitle="From free demo sessions to national competitions — choose what works best for your students."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        {PRODUCTS.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            featured={index === 1} // Middle card is featured
          />
        ))}
      </motion.div>

      {/* Additional info */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 mt-8"
      >
        All programs include certificates for students and are aligned with NEP 2020.
      </motion.p>
    </SectionWrapper>
  );
}

export default ProductCards;
