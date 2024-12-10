import React from 'react';
import { Network, Brain, Scale, Server, Zap, Database, Search, Cpu, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

// ... (previous vectorDatabases array remains the same)

const vectorFeatures = [
  {
    title: "High-Dimensional Space",
    icon: Cpu,
    description: "Efficiently store and query vectors with hundreds or thousands of dimensions"
  },
  {
    title: "Approximate Nearest Neighbor",
    icon: GitMerge,
    description: "Fast similarity search using algorithms like HNSW, IVF, and LSH"
  },
  {
    title: "Multi-Modal Support",
    icon: Database,
    description: "Handle different types of vectors: text, image, audio, and more"
  },
  {
    title: "Filtering & Metadata",
    icon: Search,
    description: "Combine vector similarity with traditional metadata filtering"
  }
];

const useCaseExamples = [
  {
    title: "Semantic Search",
    description: "Convert text to vectors for meaning-based search beyond keywords",
    example: "Finding similar legal documents or research papers"
  },
  {
    title: "Image Recognition",
    description: "Store image embeddings for visual similarity search",
    example: "Reverse image search or product recommendations"
  },
  {
    title: "Recommendation Systems",
    description: "Match user preferences with item characteristics",
    example: "Content recommendations based on viewing history"
  },
  {
    title: "Anomaly Detection",
    description: "Identify unusual patterns in high-dimensional data",
    example: "Fraud detection in financial transactions"
  }
];

function VectorDatabase() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12">
      {/* Previous content remains the same */}
      
      {/* New Sections */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-primary-500" />
          Core Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vectorFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 
                       dark:from-gray-700 dark:to-gray-600"
            >
              <feature.icon className="w-8 h-8 mb-4 text-primary-500" />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary-500" />
          Use Case Examples
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {useCaseExamples.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
              <div className="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Example:</strong> {useCase.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  );
}

export default VectorDatabase;