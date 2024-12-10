import React from 'react';
import { useSpring, animated } from 'react-spring';

interface CharacteristicBarProps {
  value: number;
  label: string;
}

export function CharacteristicBar({ value, label }: CharacteristicBarProps) {
  const props = useSpring({
    width: `${(value / 5) * 100}%`,
    from: { width: '0%' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
          {label.replace(/([A-Z])/g, ' $1').trim()}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {value}/5
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <animated.div
          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
          style={props}
        />
      </div>
    </div>
  );
}