import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "./svg-n8gvvf3z5j";
import img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681 from "figma:asset/6898a170d5bd2559f56928aab2c3123ef02554d3.png";
import imgDd65E24F232E4A14Ba293Ca8Cab412Dc2 from "figma:asset/48d93dd01a31a2550129b258a181f5c067f2f5eb.png";


export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup attempt:', { fullName, email, password, confirmPassword });
    // Add your signup logic here
  };

  return (
    <div className="bg-[rgba(0,0,0,0.97)] relative size-full" data-name="signup">
      <div className="absolute blur-[5px] filter h-[740px] left-[456px] mix-blend-hard-light pointer-events-none top-[284px] w-[702px]" data-name="4CE97FA3-1F2D-4C4C-A34D-D8DC0353B968 1">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.08%] left-[-0.01%] max-w-none top-[-1.08%] w-[100.74%]" src={img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
      </div>
      <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Courier_Prime:Bold',sans-serif] leading-[normal] left-[72px] not-italic text-[64px] text-yellow-400 top-[112px] w-[391px]">DeTECHtive</p>
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
      <div className="absolute h-[52px] left-[695px] top-[449px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_56_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_56_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p13b30b80} />
            </clipPath>
          </defs>
        </svg>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="absolute inset-0 bg-transparent border-none outline-none px-4 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] placeholder:text-gray-400"
          placeholder=""
        />
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[29px] leading-[normal] left-[694px] not-italic text-[32px] text-white top-[190px] w-[709px]">Join the investiagtion</p>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[695px] not-italic text-[24px] text-nowrap text-white top-[273px] whitespace-pre">Full Name</p>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[695px] not-italic text-[24px] text-nowrap text-white top-[407px] whitespace-pre">Email</p>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[695px] not-italic text-[24px] text-nowrap text-white top-[536px] whitespace-pre">Password</p>
      <div className="absolute h-[52px] left-[694px] top-[315px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_56_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_56_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p13b30b80} />
            </clipPath>
          </defs>
        </svg>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="absolute inset-0 bg-transparent border-none outline-none px-4 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] placeholder:text-gray-400"
          placeholder=""
        />
      </div>
      <div className="absolute h-[52px] left-[695px] top-[578px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_56_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_56_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p13b30b80} />
            </clipPath>
          </defs>
        </svg>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="absolute inset-0 bg-transparent border-none outline-none px-4 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] placeholder:text-gray-400"
          placeholder=""
        />
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[694px] not-italic text-[24px] text-nowrap text-white top-[673px] whitespace-pre">Confirm Password</p>
      <div className="absolute h-[52px] left-[694px] top-[715px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_56_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_56_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p13b30b80} />
            </clipPath>
          </defs>
        </svg>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="absolute inset-0 bg-transparent border-none outline-none px-4 font-['Courier_Prime:Regular',sans-serif] text-white text-[18px] placeholder:text-gray-400"
          placeholder=""
        />
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[32px] leading-[normal] left-[763px] not-italic text-[0px] text-white top-[935px] w-[617px]">
        <span className="text-[20px]">{`Already have an account? `}</span>
        <span 
          className="text-[24px] text-yellow-400 cursor-pointer hover:underline"
          onClick={() => navigate('/login')}
        >
          Login
        </span>
        <span className="text-[20px]"> </span>
      </p>
      <div className="absolute h-[66px] left-[695px] top-[829px] w-[505px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 66">
          <foreignObject height="70" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_58_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p1f862df0} data-figma-bg-blur-radius="2" fill="var(--fill-0, #FACC15)" id="Rectangle 4" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_58_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p1f862df0} />
            </clipPath>
          </defs>
        </svg>
        <button
          onClick={handleSignup}
          className="absolute inset-0 flex items-center justify-center font-['Courier_Prime:Regular',sans-serif] text-[20px] text-black cursor-pointer hover:opacity-90 transition-opacity"
        >
          Create Account
        </button>
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] leading-[normal] left-[695px] not-italic text-[40px] text-nowrap text-white top-[130px] whitespace-pre">Sign Up</p>
    </div>
  );
}
