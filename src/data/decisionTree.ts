import { TreeNode } from '../types/database';

export const decisionTree: TreeNode = {
  question: "What is your primary data requirement?",
  options: [
    {
      text: "Structured data with relationships",
      next: {
        question: "What's your scalability requirement?",
        options: [
          {
            text: "Vertical scaling (single server)",
            next: {
              question: "How important is ACID compliance?",
              options: [
                {
                  text: "Critical - Need full ACID compliance",
                  result: {
                    type: "Traditional RDBMS",
                    logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
                    description: "Traditional SQL databases offering strong consistency and ACID compliance, perfect for applications requiring reliable transactions and complex queries.",
                    characteristics: {
                      scalability: 3,
                      consistency: 5,
                      availability: 4,
                      queryFlexibility: 5,
                      performance: 4,
                      maintenance: 3
                    },
                    examples: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"],
                    bestFor: [
                      "Financial transactions",
                      "Complex queries",
                      "Data integrity",
                      "Structured data",
                      "Complex joins"
                    ],
                    limitations: [
                      "Horizontal scaling challenges",
                      "Schema rigidity",
                      "Higher costs at scale",
                      "Limited support for unstructured data"
                    ]
                  }
                },
                {
                  text: "Moderate - Some flexibility needed",
                  next: {
                    question: "Do you need real-time capabilities?",
                    options: [
                      {
                        text: "Yes - Real-time processing required",
                        result: {
                          type: "In-Memory RDBMS",
                          logo: "https://redis.com/wp-content/themes/wpx/assets/images/logo-redis.svg",
                          description: "High-performance, in-memory databases that provide extremely fast data processing with optional persistence.",
                          characteristics: {
                            scalability: 4,
                            consistency: 4,
                            availability: 5,
                            queryFlexibility: 4,
                            performance: 5,
                            maintenance: 3
                          },
                          examples: ["Redis", "MemSQL", "VoltDB"],
                          bestFor: [
                            "Real-time analytics",
                            "Caching",
                            "Session management",
                            "Message queuing",
                            "Gaming leaderboards"
                          ],
                          limitations: [
                            "Limited by available memory",
                            "Data persistence overhead",
                            "Complex cluster management",
                            "Cost of memory"
                          ]
                        }
                      },
                      {
                        text: "No - Batch processing is sufficient",
                        result: {
                          type: "Embedded Database",
                          logo: "https://www.sqlite.org/images/sqlite370_banner.gif",
                          description: "Lightweight databases that run within the application process, perfect for local data storage and mobile applications.",
                          characteristics: {
                            scalability: 2,
                            consistency: 5,
                            availability: 3,
                            queryFlexibility: 4,
                            performance: 4,
                            maintenance: 5
                          },
                          examples: ["SQLite", "H2", "Berkeley DB"],
                          bestFor: [
                            "Mobile applications",
                            "Desktop applications",
                            "File format databases",
                            "Local caching",
                            "Testing environments"
                          ],
                          limitations: [
                            "Limited concurrent access",
                            "No client-server architecture",
                            "Size limitations",
                            "No user management"
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Horizontal scaling (distributed)",
            next: {
              question: "What's your consistency requirement?",
              options: [
                {
                  text: "Strong consistency required",
                  result: {
                    type: "NewSQL Database",
                    logo: "https://www.cockroachlabs.com/img/favicon.ico",
                    description: "Modern distributed SQL databases combining ACID compliance with horizontal scalability.",
                    characteristics: {
                      scalability: 5,
                      consistency: 5,
                      availability: 4,
                      queryFlexibility: 4,
                      performance: 4,
                      maintenance: 3
                    },
                    examples: ["CockroachDB", "Google Spanner", "YugabyteDB", "TiDB"],
                    bestFor: [
                      "Global applications",
                      "Cloud-native systems",
                      "High-scale ACID needs",
                      "Geographic distribution",
                      "Multi-region deployments"
                    ],
                    limitations: [
                      "Higher latency than traditional RDBMS",
                      "Complex operational requirements",
                      "Learning curve",
                      "Cost considerations"
                    ]
                  }
                },
                {
                  text: "Eventually consistent is acceptable",
                  next: {
                    question: "What type of data model do you prefer?",
                    options: [
                      {
                        text: "Column-oriented for analytics",
                        result: {
                          type: "Column-oriented Database",
                          logo: "https://clickhouse.com/favicon.ico",
                          description: "Databases optimized for analytical processing and big data queries.",
                          characteristics: {
                            scalability: 5,
                            consistency: 3,
                            availability: 4,
                            queryFlexibility: 4,
                            performance: 5,
                            maintenance: 3
                          },
                          examples: ["ClickHouse", "Apache Cassandra", "ScyllaDB", "Apache HBase"],
                          bestFor: [
                            "Big data analytics",
                            "Time-series data",
                            "Log analysis",
                            "Real-time analytics",
                            "IoT data storage"
                          ],
                          limitations: [
                            "Complex writes",
                            "Limited transaction support",
                            "Query flexibility",
                            "Storage overhead"
                          ]
                        }
                      },
                      {
                        text: "Document-oriented for flexibility",
                        result: {
                          type: "Document Database",
                          logo: "https://www.mongodb.com/assets/images/global/favicon.ico",
                          description: "Schema-flexible NoSQL databases optimized for JSON-like documents and rapid development.",
                          characteristics: {
                            scalability: 5,
                            consistency: 3,
                            availability: 5,
                            queryFlexibility: 4,
                            performance: 4,
                            maintenance: 4
                          },
                          examples: ["MongoDB", "CouchDB", "RavenDB", "Amazon DocumentDB"],
                          bestFor: [
                            "Content management",
                            "User profiles",
                            "Real-time data",
                            "Rapid prototyping",
                            "Catalog management"
                          ],
                          limitations: [
                            "Complex transactions",
                            "Join operations",
                            "Memory usage",
                            "Data consistency trade-offs"
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "Graph relationships",
      next: {
        question: "What's your primary use case?",
        options: [
          {
            text: "Social networks and recommendations",
            result: {
              type: "Native Graph Database",
              logo: "https://neo4j.com/wp-content/themes/neo4jweb/favicon.ico",
              description: "Purpose-built graph databases optimized for traversing relationships between entities.",
              characteristics: {
                scalability: 4,
                consistency: 4,
                availability: 4,
                queryFlexibility: 5,
                performance: 5,
                maintenance: 3
              },
              examples: ["Neo4j", "Amazon Neptune", "JanusGraph", "TigerGraph"],
              bestFor: [
                "Social networks",
                "Recommendation engines",
                "Fraud detection",
                "Knowledge graphs",
                "Identity and access management"
              ],
              limitations: [
                "Learning curve",
                "Complex scaling",
                "Query optimization challenges",
                "Limited use cases"
              ]
            }
          },
          {
            text: "Machine learning and AI",
            result: {
              type: "Vector Database",
              logo: "https://milvus.io/favicon.ico",
              description: "Specialized databases for storing and querying high-dimensional vectors for AI and ML applications.",
              characteristics: {
                scalability: 5,
                consistency: 3,
                availability: 4,
                queryFlexibility: 4,
                performance: 5,
                maintenance: 3
              },
              examples: ["Milvus", "Pinecone", "Weaviate", "Qdrant"],
              bestFor: [
                "Similarity search",
                "Recommendation systems",
                "Image recognition",
                "Natural language processing",
                "Anomaly detection"
              ],
              limitations: [
                "Specialized use cases",
                "Resource intensive",
                "Complex tuning",
                "Limited ACID support"
              ]
            }
          }
        ]
      }
    },
    {
      text: "Time-series data",
      next: {
        question: "What's your data volume and retention requirement?",
        options: [
          {
            text: "High volume with long retention",
            result: {
              type: "Distributed Time-Series Database",
              logo: "https://prometheus.io/assets/favicon.ico",
              description: "Scalable databases optimized for storing and analyzing time-series data across distributed systems.",
              characteristics: {
                scalability: 5,
                consistency: 4,
                availability: 5,
                queryFlexibility: 4,
                performance: 5,
                maintenance: 3
              },
              examples: ["TimescaleDB", "InfluxDB Enterprise", "OpenTSDB", "Prometheus"],
              bestFor: [
                "IoT sensor data",
                "System monitoring",
                "Financial market data",
                "Weather data",
                "Performance metrics"
              ],
              limitations: [
                "Complex setup",
                "Resource intensive",
                "Query complexity",
                "Storage costs"
              ]
            }
          },
          {
            text: "Moderate volume with real-time analytics",
            result: {
              type: "In-Memory Time-Series Database",
              logo: "https://redis.io/images/favicon/favicon-32x32.png",
              description: "High-performance time-series databases optimized for real-time analytics and monitoring.",
              characteristics: {
                scalability: 4,
                consistency: 5,
                availability: 4,
                queryFlexibility: 3,
                performance: 5,
                maintenance: 4
              },
              examples: ["Redis Time Series", "DolphinDB", "KairosDB"],
              bestFor: [
                "Real-time analytics",
                "Monitoring dashboards",
                "Gaming metrics",
                "Live streaming data",
                "Application metrics"
              ],
              limitations: [
                "Memory constraints",
                "Limited historical data",
                "Cost considerations",
                "Backup complexity"
              ]
            }
          }
        ]
      }
    }
  ]
};