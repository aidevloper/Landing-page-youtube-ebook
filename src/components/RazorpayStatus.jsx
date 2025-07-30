import React from 'react';
import Icon from './AppIcon';
import { getEnvironmentInfo, validateRazorpayConfig } from '../config/payment';

const RazorpayStatus = () => {
  const envInfo = getEnvironmentInfo();
  const isConfigured = validateRazorpayConfig();
  
  if (isConfigured) {
    return null; // Don't show anything if properly configured
  }
  
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
      <div className="flex items-start space-x-3">
        <Icon name="AlertTriangle" size={20} className="text-yellow-600 mt-0.5" />
        <div className="text-sm">
          <div className="font-semibold text-yellow-800 mb-1">
            ⚙️ Demo Mode - Razorpay Not Configured
          </div>
          <div className="text-yellow-700">
            You're using demo mode. To enable real payments:
            <ol className="list-decimal list-inside mt-2 space-y-1 text-xs">
              <li>Get your Razorpay Key ID from dashboard</li>
              <li>Set environment variable: VITE_RAZORPAY_KEY_ID</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorpayStatus;
