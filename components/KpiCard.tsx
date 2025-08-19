import React from 'react';
import Card from './Card';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: LucideIcon;
  color?: string;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  icon: Icon,
  change,
  changeType,
  color,
  className = ''
}) => {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? 'text-functional-gain' : 'text-functional-loss';
  const iconColorClass = color || (isPositive ? 'text-functional-gain' : 'text-functional-loss');

  return (
    <Card className={`flex flex-col justify-between min-h-[140px] ${className}`}>
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-text-muted">{title}</p>
        <div className="p-2 bg-accent/20 dark:bg-accent/10 rounded-lg transition-transform duration-200 hover:scale-110">
          <Icon className={`h-5 w-5 ${iconColorClass}`} />
        </div>
      </div>
      <div>
        <p className="text-2xl lg:text-3xl font-bold text-text-primary dark:text-text-primary-dark mt-1">{value}</p>
        {change && (
          <p className={`text-xs mt-1 ${changeColor}`}>
            {isPositive ? '▲' : '▼'} {change} vs last month
          </p>
        )}
      </div>
    </Card>
  );
};

export default KpiCard;