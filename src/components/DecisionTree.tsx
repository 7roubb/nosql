import React, { useState } from 'react';
import { Database, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TreeNode, DatabaseResult } from '../types/database';
import { decisionTree } from '../data/decisionTree';
import { DatabaseResultView } from './DatabaseResult';
import { DecisionPath } from './DecisionPath';
import { TreeVisualization } from './TreeVisualization';

function DecisionTree() {
  const [currentNode, setCurrentNode] = useState<TreeNode>(decisionTree);
  const [result, setResult] = useState<DatabaseResult | null>(null);
  const [path, setPath] = useState<string[]>([]);

  const handleOption = (option: typeof decisionTree.options[0], optionText: string) => {
    if (option.result) {
      setResult(option.result);
      setPath([...path, optionText]);
    } else if (option.next) {
      setCurrentNode(option.next);
      setPath([...path, optionText]);
    }
  };

  const resetTree = () => {
    setCurrentNode(decisionTree);
    setResult(null);
    setPath([]);
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={resetTree}
            className="text-primary-400 hover:text-primary-300 
                     flex items-center gap-1 transition-colors mb-6"
          >
            <GitBranch className="w-4 h-4" /> Start Over
          </button>
        </motion.div>

        <DecisionPath path={path} />

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="tree"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl
                        border border-gray-800"
            >
              <TreeVisualization
                node={currentNode}
                onSelect={handleOption}
              />
            </motion.div>
          ) : (
            <DatabaseResultView result={result} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DecisionTree;