'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface FormData {
  description: string;
  domain: string;
  role: string;
  experience: string;
}

export default function OnboardingPage() {
  const [formData, setFormData] = useState<FormData>({
    description: '',
    domain: '',
    role: '',
    experience: '',
  });

  const handleDescriptionChange = (value: string) => {
    setFormData(prev => ({ ...prev, description: value }));
  };

  const handleDomainChange = (value: string) => {
    setFormData(prev => ({ ...prev, domain: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, experience: e.target.value }));
  };

  const handleNext = () => {
    console.log('Form Data:', formData);
    // Add your next step logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2 w-fit">
          <Image src="/logo.png" alt="crow logo" width={40} height={40} className="rounded-full" />
          <span className="text-2xl font-bold">crow</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button className="mb-12 p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <ChevronLeft size={28} className="text-slate-400" />
          </button>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 flex items-center gap-2">
              Tell others about your work{' '}
              <span className="text-3xl">🔐</span>
            </h1>
            <p className="text-slate-400 text-lg">
              So your matches make more sense
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
            {/* Description Dropdown */}
            <select
              value={formData.description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="">What best describes you</option>
              <option value="founder">Founder</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="investor">Investor</option>
              <option value="other">Other</option>
            </select>

            {/* Domain Dropdown */}
            <select
              value={formData.domain}
              onChange={(e) => handleDomainChange(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="">Type or Select Domain/Field...</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="ai">AI/ML</option>
              <option value="blockchain">Blockchain</option>
              <option value="iot">IoT</option>
              <option value="cloud">Cloud Computing</option>
            </select>

            {/* Role Dropdown */}
            <select
              value={formData.role}
              onChange={(e) => handleRoleChange(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="">Type or Select Role...</option>
              <option value="fullstack">Full Stack Engineer</option>
              <option value="frontend">Frontend Engineer</option>
              <option value="backend">Backend Engineer</option>
              <option value="devops">DevOps Engineer</option>
              <option value="product">Product Manager</option>
            </select>

            {/* Experience Input */}
            <input
              type="text"
              value={formData.experience}
              onChange={handleExperienceChange}
              placeholder="Enter Experience Level"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />

            {/* Next Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Next <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
