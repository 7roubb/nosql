import React from 'react';
import { motion } from 'framer-motion';
import DecisionTree from './components/DecisionTree';
import { VectorDatabaseInfo } from './components/VectorDatabaseInfo';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      <ThemeSwitcher />
      
      <header className="py-12 px-4 mb-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-400 to-secondary-400">
            Database Selection Guide
          </h1>
          <p className="mt-2 text-gray-400">Find the perfect database for your use case</p>
        </motion.div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DecisionTree />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <VectorDatabaseInfo />
        </motion.div>
      </main>

      <footer className="mt-24 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
          <p>Made By Osama Alhroub</p>
        </div>
      </footer>
    </div>
  );
}

export default App;