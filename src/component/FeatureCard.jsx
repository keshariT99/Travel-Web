import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center max-w-sm">
      <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
}