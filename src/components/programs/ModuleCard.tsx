/**
 * Module Card Component - Expandable card for program modules
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu, Compass, MessageCircle, Briefcase, Trophy, Mail,
  LayoutDashboard, GraduationCap, ChevronDown, ChevronUp, Check
} from 'lucide-react';
import type { Module } from '@/types';

// Icon mapping for modules
const iconComponents: Record<string, any> = {
  cpu: Cpu,
  compass: Compass,
  messageCircle: MessageCircle,
  briefcase: Briefcase,
  trophy: Trophy,
  mail: Mail,
  layoutDashboard: LayoutDashboard,
  graduationCap: GraduationCap,
};

interface ModuleCardProps {
  module: Module;
  index: number;
}

/**
 * Module Detail Card Component
 * Expandable card showing full module details
 */
export function ModuleCard({ module, index }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconComponents[module.iconName];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden shadow-lg ${
        isEven ? 'bg-white' : 'bg-gradient-to-br from-primary-50 to-accent-50'
      }`}
    >
      {/* Header */}
      <div className="p-8">
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 ${
            isEven ? 'bg-primary-100' : 'bg-white'
          }`}>
            {module.icon}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-dark font-heading mb-2">
              Module {index + 1}: {module.name}
            </h3>
            <p className="text-primary font-semibold mb-4">{module.tagline}</p>
            <p className="text-gray-700 leading-relaxed">{module.description}</p>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Show less' : 'See topics covered'}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              See Topics Covered <ChevronDown className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      {/* Expanded Topics */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200"
        >
          <div className="p-8 bg-white">
            <h4 className="font-semibold text-dark mb-4">Topics Covered:</h4>
            <ul className="space-y-3">
              {module.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ModuleCard;
