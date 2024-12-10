import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface DecisionPathProps {
  path: string[];
}

export function DecisionPath({ path }: DecisionPathProps) {
  if (path.length === 0) return null;

  return (
    <motion.div 
      className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {path.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ArrowRight className="w-4 h-4 text-gray-600" />}
          <span className="bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-lg 
                         border border-gray-700/50">
            {step}
          </span>
        </React.Fragment>
      ))}
    </motion.div>
  );
}