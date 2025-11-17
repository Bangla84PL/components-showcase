"use client";

import { motion } from "framer-motion";
import { Mail, Lock, User, Search, Send, Eye, EyeOff, Phone, MapPin, Calendar, CreditCard, Upload, Check } from "lucide-react";
import { useState } from "react";

// 1. Login Form with Glass Effect
export function FormLoginGlass() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
      <form className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="email" placeholder="Email" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Sign In
        </button>
      </form>
    </div>
  );
}

// 2. Signup Form with Animated Labels
export function FormSignupAnimated() {
  const [focused, setFocused] = useState("");

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
      <form className="space-y-6">
        <div className="relative">
          <motion.label
            className="absolute left-3 text-white/60 pointer-events-none"
            animate={{ top: focused === "name" ? "0.5rem" : "50%", y: focused === "name" ? 0 : "-50%", fontSize: focused === "name" ? "0.75rem" : "1rem" }}
          >
            Full Name
          </motion.label>
          <input
            type="text"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
            className="w-full px-3 pt-6 pb-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400"
          />
        </div>
        <div className="relative">
          <motion.label
            className="absolute left-3 text-white/60 pointer-events-none"
            animate={{ top: focused === "email" ? "0.5rem" : "50%", y: focused === "email" ? 0 : "-50%", fontSize: focused === "email" ? "0.75rem" : "1rem" }}
          >
            Email Address
          </motion.label>
          <input
            type="email"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            className="w-full px-3 pt-6 pb-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400"
          />
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
}

// 3. Contact Form with Validation
export function FormContact() {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
      <form className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <input type="text" placeholder="Last Name" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <input type="email" placeholder="Email" className="col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <textarea placeholder="Your Message" rows={4} className="col-span-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400 resize-none" />
        <button type="submit" className="col-span-2 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center justify-center gap-2">
          <Send className="w-5 h-5" /> Send Message
        </button>
      </form>
    </div>
  );
}

// 4. Search Form with Suggestions
export function FormSearch() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
        <input
          type="text"
          placeholder="Search components..."
          className="w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-lg placeholder:text-white/60 focus:outline-none focus:border-emerald-400"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition">
          Search
        </button>
      </div>
    </div>
  );
}

// 5. Newsletter Subscription Form
export function FormNewsletter() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto text-center">
      <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
      <p className="text-white/70 mb-6">Subscribe to our newsletter for the latest updates</p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400"
        />
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
          Subscribe Now
        </button>
      </form>
    </div>
  );
}

// 6. Password Toggle Form
export function FormPasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Secure Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}

// 7. Multi-Step Form
export function FormMultiStep() {
  const [step, setStep] = useState(1);

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex-1 h-2 rounded-full ${s <= step ? "bg-emerald-500" : "bg-white/20"}`} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-white mb-6">Step {step} of 3</h2>
      <div className="space-y-4">
        {step === 1 && <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />}
        {step === 2 && <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />}
        {step === 3 && <input type="password" placeholder="Your Password" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />}
        <div className="flex gap-3">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="flex-1 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition">
              Back
            </button>
          )}
          <button onClick={() => setStep(Math.min(step + 1, 3))} className="flex-1 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

// 8. Phone Input Form
export function FormPhone() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Number</h2>
      <form className="space-y-4">
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Verify
        </button>
      </form>
    </div>
  );
}

// 9. Address Form
export function FormAddress() {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
      <form className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="text" placeholder="Street Address" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="City" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
          <input type="text" placeholder="ZIP Code" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Save Address
        </button>
      </form>
    </div>
  );
}

// 10. Date Picker Form
export function FormDatePicker() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Schedule Appointment</h2>
      <form className="space-y-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="date" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400" />
        </div>
        <input type="time" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400" />
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Book Now
        </button>
      </form>
    </div>
  );
}

// 11. Payment Form
export function FormPayment() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
      <form className="space-y-4">
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input type="text" placeholder="Card Number" className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="MM/YY" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
          <input type="text" placeholder="CVV" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Pay Now
        </button>
      </form>
    </div>
  );
}

// 12. File Upload Form
export function FormFileUpload() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Upload Files</h2>
      <form className="space-y-4">
        <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-emerald-400 transition cursor-pointer">
          <Upload className="w-12 h-12 text-white/60 mx-auto mb-3" />
          <p className="text-white mb-2">Drag & drop files here</p>
          <p className="text-white/60 text-sm">or click to browse</p>
          <input type="file" className="hidden" />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Upload
        </button>
      </form>
    </div>
  );
}

// 13. Checkbox Form
export function FormCheckbox() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Preferences</h2>
      <form className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/10 checked:bg-emerald-500" />
          <span className="text-white group-hover:text-emerald-300 transition">Email notifications</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/10 checked:bg-emerald-500" />
          <span className="text-white group-hover:text-emerald-300 transition">SMS notifications</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/10 checked:bg-emerald-500" />
          <span className="text-white group-hover:text-emerald-300 transition">Newsletter subscription</span>
        </label>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition mt-6">
          Save Preferences
        </button>
      </form>
    </div>
  );
}

// 14. Radio Button Form
export function FormRadio() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Choose Plan</h2>
      <form className="space-y-4">
        <label className="flex items-center gap-3 p-4 rounded-lg border border-white/20 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="plan" className="w-5 h-5" />
          <div>
            <div className="text-white font-semibold">Basic</div>
            <div className="text-white/60 text-sm">$9/month</div>
          </div>
        </label>
        <label className="flex items-center gap-3 p-4 rounded-lg border border-white/20 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="plan" className="w-5 h-5" />
          <div>
            <div className="text-white font-semibold">Pro</div>
            <div className="text-white/60 text-sm">$29/month</div>
          </div>
        </label>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition mt-6">
          Continue
        </button>
      </form>
    </div>
  );
}

// 15. Select Dropdown Form
export function FormSelect() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Support</h2>
      <form className="space-y-4">
        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400">
          <option value="">Select Category</option>
          <option value="technical">Technical Support</option>
          <option value="billing">Billing</option>
          <option value="general">General Inquiry</option>
        </select>
        <textarea placeholder="Describe your issue..." rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400 resize-none" />
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Submit Ticket
        </button>
      </form>
    </div>
  );
}

// 16. Range Slider Form
export function FormRange() {
  const [value, setValue] = useState(50);

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Set Budget</h2>
      <form className="space-y-6">
        <div>
          <label className="text-white mb-3 block">Budget: ${value}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Continue
        </button>
      </form>
    </div>
  );
}

// 17. Inline Form
export function FormInline() {
  return (
    <div className="max-w-3xl mx-auto">
      <form className="flex items-center gap-3">
        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <button type="submit" className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition whitespace-nowrap">
          Subscribe
        </button>
      </form>
    </div>
  );
}

// 18. Floating Label Form
export function FormFloatingLabel() {
  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
      <form className="space-y-6">
        <div className="relative">
          <input type="email" id="email" placeholder=" " className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400" />
          <label htmlFor="email" className="absolute left-4 top-3 text-white/60 transition-all peer-focus:top-[-0.75rem] peer-focus:left-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:top-[-0.75rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs">
            Email Address
          </label>
        </div>
        <div className="relative">
          <input type="password" id="password" placeholder=" " className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-400" />
          <label htmlFor="password" className="absolute left-4 top-3 text-white/60 transition-all peer-focus:top-[-0.75rem] peer-focus:left-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:top-[-0.75rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs">
            Password
          </label>
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}

// 19. Success State Form
export function FormSuccess() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-8 max-w-md mx-auto text-center"
      >
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
        <p className="text-white/70">Your form has been submitted successfully.</p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Submit Form</h2>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

// 20. Validation Form
export function FormValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    // Add validation logic here
    setErrors(newErrors);
  };

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Registration</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Username" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
          {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-400" />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Register
        </button>
      </form>
    </div>
  );
}
