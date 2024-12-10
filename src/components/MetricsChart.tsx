import React from 'react';
import { motion } from 'framer-motion';

interface MetricsChartProps {
  metrics: Record<string, number>;
  className?: string;
}

export function MetricsChart({ metrics, className = '' }: MetricsChartProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Object.entries(metrics).map(([key, value], index) => (
        <div key={key} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span>{value}/5</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(value / 5) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full bg-primary-500 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}