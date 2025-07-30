import React from 'react';
import { CASHFREE_CONFIG, PRODUCT_CONFIG } from '../config/cashfree';
import { validatePaymentConfig } from '../services/realCashfreeService';

const CashfreeConfigTest = () => {
  const validation = validatePaymentConfig();
  
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 m-4">
      <h3 className="font-bold text-blue-800 mb-2">🔧 Cashfree Configuration Test</h3>
      
      <div className="space-y-2 text-sm">
        <div>
          <strong>Environment Variables:</strong>
          <ul className="ml-4 mt-1">
            <li>VITE_CASHFREE_APP_ID: {import.meta.env.VITE_CASHFREE_APP_ID || 'NOT SET'}</li>
            <li>VITE_CASHFREE_MODE: {import.meta.env.VITE_CASHFREE_MODE || 'NOT SET'}</li>
          </ul>
        </div>
        
        <div>
          <strong>Configuration Object:</strong>
          <ul className="ml-4 mt-1">
            <li>App ID: {CASHFREE_CONFIG.app_id}</li>
            <li>Environment: {CASHFREE_CONFIG.environment}</li>
            <li>Base URL: {CASHFREE_CONFIG.base_url}</li>
          </ul>
        </div>
        
        <div>
          <strong>Product Config:</strong>
          <ul className="ml-4 mt-1">
            <li>Price: ₹{PRODUCT_CONFIG.price}</li>
            <li>Currency: {PRODUCT_CONFIG.currency}</li>
          </ul>
        </div>
        
        <div>
          <strong>Validation Status:</strong>
          <div className={`ml-4 mt-1 p-2 rounded ${validation.valid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {validation.valid ? '✅ Configuration Valid' : '❌ Configuration Issues'}
            {!validation.valid && (
              <ul className="mt-1 text-xs">
                {validation.issues.map((issue, index) => (
                  <li key={index}>• {issue}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashfreeConfigTest;
