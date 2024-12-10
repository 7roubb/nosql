import React from 'react';
import { motion } from 'framer-motion';
import { CharacteristicBar } from './CharacteristicBar';
import type { DatabaseResult as DatabaseResultType } from '../types/database';

interface DatabaseResultProps {
  result: DatabaseResultType;
}

export function DatabaseResultView({ result }: DatabaseResultProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.img 
          src={result.logo} 
          alt={result.type} 
          className="w-12 h-12 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{result.type}</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Characteristics</h4>
            <div className="space-y-2">
              {Object.entries(result.characteristics).map(([key, value]) => (
                <CharacteristicBar key={key} value={value} label={key} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Popular Examples</h4>
            <ul className="space-y-1">
              {result.examples.map((example, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {example}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Best For</h4>
            <ul className="space-y-1">
              {result.bestFor.map((use, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                  {use}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Limitations</h4>
            <ul className="space-y-1">
              {result.limitations.map((limitation, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {limitation}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}