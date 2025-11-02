import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import svgPaths from "../imports/svg-ybyfdsgvvx";

// Placeholder background images - replace with your actual images
const img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='702' height='740'%3E%3Crect fill='%23111' width='702' height='740'/%3E%3C/svg%3E";
const imgDd65E24F232E4A14Ba293Ca8Cab412Dc2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='798' height='938'%3E%3Crect fill='%23111' width='798' height='938'/%3E%3C/svg%3E";
const imgDd65E24F232E4A14Ba293Ca8Cab412Dc1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='329' height='938'%3E%3Crect fill='%23111' width='329' height='938'/%3E%3C/svg%3E";

interface SignupProps {
  onNavigateToLogin: () => void;
  onSignupSuccess: (name: string, email: string) => void;
}

export default function Signup({ onNavigateToLogin, onSignupSuccess }: SignupProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    let isValid = true;

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsLoading(true);

    // Simulate API call to Python backend
    try {
      // In production, replace with actual API call:
      // const response = await fetch('YOUR_PYTHON_API_URL/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ fullName, email, password })
      // });
      // const data = await response.json();
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful signup
      console.log('Signup attempt:', { fullName, email, password });
      toast.success('Account created successfully! Welcome to the investigation.');
      onSignupSuccess(fullName, email);
      
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0.97)] relative size-full min-h-screen overflow-hidden" data-name="signup">
      {/* Background blur effects */}
      <div className="absolute blur-[5px] filter h-[740px] left-[456px] mix-blend-hard-light pointer-events-none top-[284px] w-[702px]" data-name="4CE97FA3-1F2D-4C4C-A34D-D8DC0353B968 1">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.08%] left-[-0.01%] max-w-none top-[-1.08%] w-[100.74%]" src={img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
      </div>
      
      {/* Logo */}
      <h1 className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Courier_Prime:Bold',sans-serif] leading-[normal] left-[72px] not-italic text-[64px] text-yellow-400 top-[112px] w-[391px] pointer-events-none">
        DeTECHtive
      </h1>
      
      {/* Background images */}
      <div className="absolute h-[938px] left-[-399px] mix-blend-hard-light top-[86px] w-[798px]" data-name="DD65E24F-232E-4A14-BA29-3CA8CAB412DC 2">
        <div className="absolute inset-[-1.07%_-1.25%]">
          <img alt="" className="block max-w-none size-full" height="958" src={imgDd65E24F232E4A14Ba293Ca8Cab412Dc2} width="818" />
        </div>
      </div>
      
      <div className="absolute h-[938px] left-[1111px] mix-blend-hard-light top-[86px] w-[329px]" data-name="DD65E24F-232E-4A14-BA29-3CA8CAB412DC 1">
        <div className="absolute inset-[-1.07%_-3.04%]">
          <img alt="" className="block max-w-none size-full" height="958" src={imgDd65E24F232E4A14Ba293Ca8Cab412Dc1} width="349" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        {/* Title */}
        <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[695px] not-italic text-[40px] text-nowrap text-white top-[130px] whitespace-pre pointer-events-none">
          Sign Up
        </p>
        
        <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[694px] not-italic text-[32px] text-white top-[190px] pointer-events-none">
          Join the investigation
        </p>
        
        {/* Full Name field */}
        <div className="absolute left-[694px] top-[250px] w-[505px]">
          <label className="block font-['Courier_Prime:Regular',sans-serif] text-[24px] text-nowrap text-white mb-3">
            Full Name
          </label>
          
          <div className="relative h-[52px]">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
                <foreignObject height="56" width="509" x="-2" y="-2">
                  <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_fullname_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
                <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" opacity="0.5" stroke={errors.fullName ? "var(--stroke-0, #ef4444)" : "var(--stroke-0, black)"} strokeWidth={errors.fullName ? "2" : "1"} />
                <defs>
                  <clipPath id="bgblur_fullname_clip_path" transform="translate(2 2)">
                    <path d={svgPaths.p13b30b80} />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              placeholder="Enter your full name"
              disabled={isLoading}
              className="relative h-full w-full bg-transparent border-0 px-5 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] outline-none placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {errors.fullName && (
            <p className="mt-1 text-red-500 font-['Courier_Prime:Regular',sans-serif] text-[14px]">
              {errors.fullName}
            </p>
          )}
        </div>
        
        {/* Email field */}
        <div className="absolute left-[695px] top-[384px] w-[505px]">
          <label className="block font-['Courier_Prime:Regular',sans-serif] text-[24px] text-nowrap text-white mb-3">
            Email
          </label>
          
          <div className="relative h-[52px]">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
                <foreignObject height="56" width="509" x="-2" y="-2">
                  <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_email_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
                <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" opacity="0.5" stroke={errors.email ? "var(--stroke-0, #ef4444)" : "var(--stroke-0, black)"} strokeWidth={errors.email ? "2" : "1"} />
                <defs>
                  <clipPath id="bgblur_email_clip_path" transform="translate(2 2)">
                    <path d={svgPaths.p13b30b80} />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="Enter your email"
              disabled={isLoading}
              className="relative h-full w-full bg-transparent border-0 px-5 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] outline-none placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {errors.email && (
            <p className="mt-1 text-red-500 font-['Courier_Prime:Regular',sans-serif] text-[14px]">
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Password field */}
        <div className="absolute left-[695px] top-[513px] w-[505px]">
          <label className="block font-['Courier_Prime:Regular',sans-serif] text-[24px] text-nowrap text-white mb-3">
            Password
          </label>
          
          <div className="relative h-[52px]">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
                <foreignObject height="56" width="509" x="-2" y="-2">
                  <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_password_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
                <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" opacity="0.5" stroke={errors.password ? "var(--stroke-0, #ef4444)" : "var(--stroke-0, black)"} strokeWidth={errors.password ? "2" : "1"} />
                <defs>
                  <clipPath id="bgblur_password_clip_path" transform="translate(2 2)">
                    <path d={svgPaths.p13b30b80} />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
              placeholder="Enter your password"
              disabled={isLoading}
              className="relative h-full w-full bg-transparent border-0 px-5 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] outline-none placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {errors.password && (
            <p className="mt-1 text-red-500 font-['Courier_Prime:Regular',sans-serif] text-[14px]">
              {errors.password}
            </p>
          )}
        </div>
        
        {/* Confirm Password field */}
        <div className="absolute left-[694px] top-[650px] w-[505px]">
          <label className="block font-['Courier_Prime:Regular',sans-serif] text-[24px] text-nowrap text-white mb-3">
            Confirm Password
          </label>
          
          <div className="relative h-[52px]">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
                <foreignObject height="56" width="509" x="-2" y="-2">
                  <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_confirm_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
                <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" opacity="0.5" stroke={errors.confirmPassword ? "var(--stroke-0, #ef4444)" : "var(--stroke-0, black)"} strokeWidth={errors.confirmPassword ? "2" : "1"} />
                <defs>
                  <clipPath id="bgblur_confirm_clip_path" transform="translate(2 2)">
                    <path d={svgPaths.p13b30b80} />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
              }}
              placeholder="Confirm your password"
              disabled={isLoading}
              className="relative h-full w-full bg-transparent border-0 px-5 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] outline-none placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {errors.confirmPassword && (
            <p className="mt-1 text-red-500 font-['Courier_Prime:Regular',sans-serif] text-[14px]">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="absolute h-[66px] left-[695px] top-[779px] w-[505px] cursor-pointer border-0 p-0 bg-transparent hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
          data-name="Vector"
        >
          <svg className="block size-full pointer-events-none group-hover:scale-[1.02] transition-transform" fill="none" preserveAspectRatio="none" viewBox="0 0 505 66">
            <foreignObject height="70" width="509" x="-2" y="-2">
              <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_submit_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p1f862df0} data-figma-bg-blur-radius="2" fill="var(--fill-0, #FACC15)" stroke="var(--stroke-0, black)" />
            <defs>
              <clipPath id="bgblur_submit_clip_path" transform="translate(2 2)">
                <path d={svgPaths.p1f862df0} />
              </clipPath>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-['Courier_Prime:Regular',sans-serif] text-[20px] text-black pointer-events-none">
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </span>
        </button>
      </form>
      
      {/* Login link */}
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[32px] leading-[normal] left-[763px] not-italic text-[0px] text-white top-[885px] w-[617px]">
        <span className="text-[20px]">{`Already have an account? `}</span>
        <button
          onClick={onNavigateToLogin}
          type="button"
          className="text-[24px] text-yellow-400 hover:text-yellow-300 hover:underline cursor-pointer bg-transparent border-0 p-0 transition-colors"
        >
          Login
        </button>
      </p>
    </div>
  );
}
