import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'dark', icon: Moon },
    { value: 'system', icon: Monitor }
  ];

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2">
      {themes.map(({ value, icon: Icon }) => (
        <motion.button
          key={value}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
          className={`p-2 rounded-md transition-colors ${
            theme === value 
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Icon className="w-5 h-5" />
        </motion.button>
      ))}
    </div>
  );
}