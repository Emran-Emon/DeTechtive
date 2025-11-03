// Minimal JSX runtime shim so TS can resolve 'react/jsx-runtime'

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}


