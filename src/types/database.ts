export interface Characteristics {
  scalability: number;
  consistency: number;
  availability: number;
  queryFlexibility: number;
  performance: number;
  maintenance: number;
}

export interface DatabaseResult {
  type: string;
  logo: string;
  description: string;
  characteristics: Characteristics;
  examples: string[];
  bestFor: string[];
  limitations: string[];
}

export interface TreeNode {
  question: string;
  options: {
    text: string;
    result?: DatabaseResult;
    next?: TreeNode;
  }[];
}