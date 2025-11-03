import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "./svg-rpxy5nwiw3";
import img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681 from "figma:asset/6898a170d5bd2559f56928aab2c3123ef02554d3.png";
import imgDd65E24F232E4A14Ba293Ca8Cab412Dc1 from "figma:asset/48d93dd01a31a2550129b258a181f5c067f2f5eb.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    console.log('Login attempt:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="bg-[rgba(0,0,0,0.97)] relative size-full" data-name="login">
      <div className="absolute blur-[5px] filter h-[740px] left-[-2px] mix-blend-hard-light opacity-80 pointer-events-none top-[295px] w-[702px]" data-name="4CE97FA3-1F2D-4C4C-A34D-D8DC0353B968 1">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.08%] left-[-0.01%] max-w-none top-[-1.08%] w-[100.74%]" src={img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
      </div>
      <div className="absolute h-[938px] left-[642px] mix-blend-hard-light top-[86px] w-[798px]" data-name="DD65E24F-232E-4A14-BA29-3CA8CAB412DC 1">
        <div className="absolute inset-[-1.07%_-1.25%]">
          <img alt="" className="block max-w-none size-full" height="958" src={imgDd65E24F232E4A14Ba293Ca8Cab412Dc1} width="818" />
        </div>
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[32px] leading-[normal] left-[126px] not-italic text-[0px] text-white top-[811px] w-[617px]">
        <span className="text-[20px]">{`Don't have an account? `}</span>
        <span 
          className="text-[24px] text-yellow-400 cursor-pointer hover:underline"
          onClick={() => navigate('/signup')}
        >
          Register now
        </span>
        <span className="text-[20px]"> </span>
      </p>
      <div className="absolute h-[66px] left-[98px] top-[690px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 66">
          <foreignObject height="70" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_54_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p1f862df0} data-figma-bg-blur-radius="2" fill="var(--fill-0, #FACC15)" id="Rectangle 4" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_54_clip_path" transform="translate(2 2)">
              <path d={svgPaths.p1f862df0} />
            </clipPath>
          </defs>
        </svg>
        <button
          onClick={handleLogin}
          className="absolute inset-0 flex items-center justify-center font-['Courier_Prime:Regular',sans-serif] text-[20px] text-black cursor-pointer hover:opacity-90 transition-opacity"
        >
          Login to System
        </button>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0.2)] h-[624px] left-[72px] rounded-[15px] top-[243px] w-[557px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <div className="absolute font-['Courier_Prime:Regular',sans-serif] h-[19px] leading-[normal] left-[105px] not-italic text-[32px] text-white top-[270px] w-[148px]">
        <p className="mb-0">Login</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[56px] leading-[normal] left-[105px] not-italic text-[28px] text-white top-[316px] w-[424px]">Welcome back, Detective</p>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[62px] leading-[normal] left-[105px] not-italic text-[24px] text-white top-[391px] w-[252px]">Email</p>
      <p className="absolute font-['Courier_Prime:Regular',sans-serif] h-[55px] leading-[normal] left-[105px] not-italic text-[24px] text-white top-[497px] w-[203px]">Password</p>
      <div className="absolute h-[52px] left-[105px] top-[533px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_52_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_52_clip_path" transform="translate(2 2)">
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
      <div className="absolute h-[52px] left-[105px] top-[426px] w-[505px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 505 52">
          <foreignObject height="56" width="509" x="-2" y="-2">
            <div style={{ backdropFilter: "blur(1px)", clipPath: "url(#bgblur_0_1_52_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p13b30b80} data-figma-bg-blur-radius="2" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.5" id="Rectangle 2" opacity="0.5" stroke="var(--stroke-0, black)" />
          <defs>
            <clipPath id="bgblur_0_1_52_clip_path" transform="translate(2 2)">
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
      <p className="absolute font-['Courier_Prime:Italic',sans-serif] h-[40px] italic leading-[normal] left-[418px] text-[20px] text-yellow-400 top-[595px] w-[564px] cursor-pointer hover:underline">Forgot password?</p>
      <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Courier_Prime:Bold',sans-serif] leading-[normal] left-[72px] not-italic text-[64px] text-nowrap text-yellow-400 top-[107px] whitespace-pre">DeTECHtive</p>
    </div>
  );
}
