declare module 'lucide-react' {
  import { SVGProps } from 'react';
  
  interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
  }
  
  export const Mail: (props: LucideProps) => JSX.Element;
  export const User: (props: LucideProps) => JSX.Element;
  export const MessageSquare: (props: LucideProps) => JSX.Element;
}