import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { TreeNode } from '../types/database';

interface TreeVisualizationProps {
  node: TreeNode;
  onSelect: (option: any, text: string) => void;
}

export function TreeVisualization({ node, onSelect }: TreeVisualizationProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-xl text-white mb-6">
          {node.question}
        </h3>
        
        <div className="space-y-2">
          {node.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(option, option.text)}
              className="w-full bg-gray-800/50 hover:bg-gray-700/50 
                         text-gray-300 hover:text-white
                         backdrop-blur-sm
                         p-4 rounded-lg
                         flex items-center justify-between
                         border border-gray-700/50 hover:border-primary-500/50
                         transition-all duration-300 ease-in-out
                         group"
            >
              <span className="text-left">{option.text}</span>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary-500 
                                     transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}