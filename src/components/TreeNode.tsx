import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { TreeNode as TreeNodeType } from '../types/database';

interface TreeNodeProps {
  node: TreeNodeType;
  onSelect: (option: any, text: string) => void;
  depth: number;
  index: number;
  totalSiblings: number;
}

export function TreeNode({ node, onSelect, depth, index, totalSiblings }: TreeNodeProps) {
  const maxDepth = 3;
  const isVisible = depth < maxDepth;
  const nodeWidth = 250;
  const nodeHeight = 100;
  const horizontalGap = 40;
  const verticalGap = 80;

  return (
    <div className="relative" style={{ width: nodeWidth }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: depth * 0.1 }}
        className="absolute"
        style={{
          left: `${(index - totalSiblings / 2) * (nodeWidth + horizontalGap)}px`,
          top: depth * (nodeHeight + verticalGap)
        }}
      >
        <div className="relative">
          {depth > 0 && (
            <div
              className="absolute w-px bg-primary-300 dark:bg-primary-700 transform -translate-x-1/2 left-1/2"
              style={{
                height: verticalGap,
                top: -verticalGap
              }}
            />
          )}
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-primary-500 
                        hover:border-primary-600 transition-colors duration-300 w-[250px]">
            <h4 className="font-semibold text-gray-900 dark:text-white text-center">{node.question}</h4>
          </div>

          {isVisible && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
              <div className="grid gap-4" style={{ width: nodeWidth * node.options.length + horizontalGap * (node.options.length - 1) }}>
                {node.options.map((option, optIndex) => (
                  <div key={optIndex} className="relative">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onSelect(option, option.text)}
                      className="w-full bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 
                               dark:border-gray-700 hover:border-primary-500 transition-all text-sm
                               flex items-center justify-between gap-2"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
                      <ChevronRight className="w-4 h-4 text-primary-500" />
                    </motion.button>

                    {option.next && (
                      <TreeNode
                        node={option.next}
                        onSelect={onSelect}
                        depth={depth + 1}
                        index={optIndex}
                        totalSiblings={option.next.options.length}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}