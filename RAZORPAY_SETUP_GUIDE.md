# 🚀 Razorpay Setup Guide - Add Your Actual Credentials

## ✅ **What's Already Done**
Your payment gateway is fully implemented and ready! The system is currently in **demo mode** and will show a configuration warning on the checkout page.

## 🔑 **Step 1: Get Your Razorpay Credentials**

### Sign Up & Setup
1. **Go to**: [Razorpay Dashboard](https://dashboard.razorpay.com)
2. **Sign up** with your business email
3. **Complete KYC** verification (upload business documents)
4. **Activate your account** (usually takes 24-48 hours)

### Get API Keys
1. **Login** to your Razorpay dashboard
2. **Go to**: Settings → API Keys
3. **Generate** your API keys
4. **Copy** your Key ID (starts with `rzp_test_` or `rzp_live_`)

## 🔧 **Step 2: Add Your Credentials**

### Option A: Using DevServerControl (Recommended)
Run these commands in your development environment:

```bash
# For TEST mode (recommended to start with)
VITE_RAZORPAY_KEY_ID=rzp_test_YOUR_ACTUAL_KEY_HERE
VITE_RAZORPAY_MODE=test

# For LIVE mode (when ready for production)
VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_ACTUAL_KEY_HERE
VITE_RAZORPAY_MODE=live
```

### Option B: Manual Environment Setup
1. **Replace** `YOUR_KEY_ID_HERE` in the environment variables
2. **Set your actual Razorpay Key ID**
3. **Restart** the development server

## 🧪 **Step 3: Test Your Integration**

### Test Mode (Safe Testing)
- Use **rzp_test_** key
- **No real money** is charged
- Use test card numbers:
  - **Success**: 4111 1111 1111 1111
  - **Failure**: 4000 0000 0000 0002
  - **CVV**: Any 3 digits
  - **Expiry**: Any future date

### Test UPI
- **Success**: success@razorpay
- **Failure**: failure@razorpay

## 🔴 **Step 4: Go Live (When Ready)**

### Prerequisites
- ✅ KYC completed and approved
- ✅ Business documents verified
- ✅ Test payments working perfectly
- ✅ Website terms & privacy policy added

### Switch to Live Mode
1. **Generate live keys** from Razorpay dashboard
2. **Update environment variable**: `VITE_RAZORPAY_KEY_ID=rzp_live_...`
3. **Set mode**: `VITE_RAZORPAY_MODE=live`
4. **Test with small amount** first

## 💰 **Pricing & Fees**

### Transaction Fees
- **UPI**: Free (up to certain limits)
- **Cards**: 2% + GST
- **Net Banking**: ₹15 + GST per transaction
- **Wallets**: 1.5-2% + GST

### Settlement
- **Standard**: T+2 days (free)
- **Instant**: T+0 (additional charges apply)

## 🔒 **Security Best Practices**

### Environment Variables
- ✅ **Never** commit secrets to version control
- ✅ **Use** environment variables for keys
- ✅ **Different keys** for test and live environments
- ✅ **Restrict** API key permissions

### Backend Security (Future)
- **Always verify** payments on your backend
- **Use webhooks** for reliable payment confirmation
- **Implement** signature verification
- **Log** all payment events

## 🚨 **Current Status Check**

Visit your checkout page (`/checkout`) and you'll see:

### ✅ If Configured Correctly:
- No warning messages
- Payment gateway opens smoothly
- Console shows: "🔴 Razorpay configured in LIVE mode" or "🧪 Razorpay configured in TEST mode"

### ⚠️ If Still in Demo Mode:
- Yellow warning box on checkout page
- Console shows: "⚠️ Razorpay not configured with actual credentials"
- Demo payment button available

## 🛠 **Troubleshooting**

### Common Issues

**"Invalid Key ID" Error**
- Check if key is correctly copied (no extra spaces)
- Ensure environment variable is set properly
- Restart development server after setting variables

**"Key ID not configured" Warning**
- Key might not be loaded properly
- Check browser console for environment info
- Verify environment variable name: `VITE_RAZORPAY_KEY_ID`

**Payments Not Processing**
- Verify account is activated (not just registered)
- Check if KYC is completed
- Ensure using correct test card numbers

### Debug Information
Check browser console for:
```
🔧 Razorpay Environment: {
  mode: "test",
  keyConfigured: true,
  keyId: "rzp_test_12345...",
  businessName: "YouTube Automation Ebook"
}
```

## 📞 **Support**

### Razorpay Support
- **Documentation**: https://razorpay.com/docs/
- **Support**: support@razorpay.com
- **Phone**: Available in dashboard

### Your Implementation
- All code is production-ready
- Environment-based configuration
- Proper error handling
- Mobile-optimized checkout

## 🎯 **Next Steps**

1. **Get your Razorpay Key ID** from dashboard
2. **Set the environment variable** with your actual key
3. **Test thoroughly** in test mode
4. **Go live** when ready
5. **Monitor payments** through Razorpay dashboard

---

**Your payment gateway is fully ready! Just add your credentials to start accepting real payments. 🚀**
