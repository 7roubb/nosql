import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Cpu, GitMerge, Brain, Zap, Scale, Server, Cloud, Lock } from 'lucide-react';

const vectorTechnologies = [
  {
    name: "Pinecone",
    logo: "https://www.celigo.com/wp-content/uploads/2023/10/brandmark-logo-pinecone.svg",
    description: "Managed vector database optimized for machine learning applications with real-time updates and serverless scalability.",
    features: [
      "Hybrid search combining vector and metadata filtering",
      "Automatic sharding and replication",
      "Pod-based architecture for isolation",
      "Real-time vector updates",
      "Multi-region deployment"
    ],
    useCases: [
      "Semantic search engines",
      "Personalized recommendations",
      "Fraud detection systems",
      "Image similarity search",
      "Natural language processing"
    ],
    metrics: {
      querySpeed: 5,
      scalability: 5,
      maintenance: 4,
      costEfficiency: 3
    }
  },
  {
    name: "Milvus",
    logo: "https://milvus.io/favicon.ico",
    description: "Open-source vector database built for scalable similarity search and AI applications.",
    features: [
      "Multiple index types (IVF, HNSW, etc.)",
      "Hybrid search capabilities",
      "Schema-less data insertion",
      "Cloud-native architecture"
    ],
    useCases: [
      "Computer vision systems",
      "Audio recognition",
      "Recommendation engines",
      "Scientific data analysis"
    ],
    metrics: {
      querySpeed: 4,
      scalability: 5,
      maintenance: 3,
      costEfficiency: 5
    }
  },
  {
    name: "Weaviate",
    logo: "https://weaviate.io/img/favicon.ico",
    description: "Open-source vector search engine with built-in ML models and GraphQL API.",
    features: [
      "GraphQL and REST APIs",
      "Built-in vectorization modules",
      "Automatic schema inference",
      "Cross-references between objects"
    ],
    useCases: [
      "Content recommendation",
      "Semantic search",
      "Knowledge graphs",
      "Data classification"
    ],
    metrics: {
      querySpeed: 4,
      scalability: 4,
      maintenance: 4,
      costEfficiency: 4
    }
  }
];

const architectureFeatures = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Distributed architecture with automatic sharding and replication for high availability."
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Support for real-time vector updates and immediate consistency across clusters."
  },
  {
    icon: Lock,
    title: "Security",
    description: "End-to-end encryption, role-based access control, and secure API endpoints."
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Horizontal scaling with pod-based architecture and automatic load balancing."
  }
];

export function VectorDatabaseInfo() {
  return (
    
    <div className="space-y-12">
 <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
    <motion.h2
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Introduction to Vector Databases
    </motion.h2>
    
    <motion.div
      className="text-gray-600 dark:text-gray-300 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-xl font-semibold">1. What are Vector Databases?</h3>
      <p>
        Vector databases are specialized data storage systems designed to handle high-dimensional vector data. 
        These vectors, often generated by machine learning models, represent complex data such as text, images, 
        audio, or video in numerical form. Traditional databases struggle with this type of unstructured and 
        high-dimensional data, making vector databases a critical component in AI and modern applications.
      </p>
      
      <h3 className="text-xl font-semibold">2. Why are Vector Databases Important?</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Handling High-dimensional Data:</strong> 
          Unlike relational databases, vector databases efficiently manage embeddings created by neural networks.
        </li>
        <li>
          <strong>Fast Similarity Search:</strong> 
          Advanced indexing techniques enable quick retrieval of similar data points, essential for applications 
          like recommendation systems and fraud detection.
        </li>
        <li>
          <strong>AI Integration:</strong> 
          They are optimized for machine learning workloads, bridging the gap between raw data and actionable 
          insights.
        </li>
      </ul>

      <h3 className="text-xl font-semibold">3. Key Features of Vector Databases</h3>
      <ul className="list-disc ml-6">
        <li>Real-time updates and immediate consistency across distributed nodes.</li>
        <li>Support for hybrid search combining structured data with unstructured vector queries.</li>
        <li>Scalability through automatic sharding and replication.</li>
        <li>Advanced security features, including role-based access control and encryption.</li>
      </ul>
      
      <h3 className="text-xl font-semibold">4. Use Cases of Vector Databases</h3>
      <ul className="list-disc ml-6">
        <li><strong>Semantic Search:</strong> Powering search engines that understand meaning rather than keywords.</li>
        <li><strong>Recommendation Systems:</strong> Personalizing content, products, and services for users.</li>
        <li><strong>Image and Video Similarity:</strong> Identifying similar visual content in large datasets.</li>
        <li><strong>Fraud Detection:</strong> Analyzing patterns to detect anomalies in financial transactions.</li>
        <li><strong>Natural Language Processing:</strong> Enhancing chatbot and language generation systems.</li>
      </ul>

      <h3 className="text-xl font-semibold">5. What are the Challenges?</h3>
      <ul className="list-disc ml-6">
        <li><strong>High Cost:</strong> Running distributed systems at scale can be expensive.</li>
        <li><strong>Complexity:</strong> Setting up and managing vector databases requires specialized knowledge.</li>
        <li><strong>Latency:</strong> Despite optimization, real-time applications can face latency issues under heavy load.</li>
      </ul>

   
    </motion.div>
  </section>
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Vector Database Technologies
        </motion.h2>
        
        <div className="grid gap-8">
          {vectorTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">{tech.name}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tech.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary-500" />
                    Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {tech.useCases.map((useCase, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                        {useCase}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(tech.metrics).map(([key, value], i) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span>{value}/5</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(value / 5) * 100}%` }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="h-full bg-primary-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Architecture & Infrastructure
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {architectureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 
                       dark:from-gray-700 dark:to-gray-600"
            >
              <feature.icon className="w-8 h-8 mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}