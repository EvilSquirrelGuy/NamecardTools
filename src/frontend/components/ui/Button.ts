import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(
  'rounded-xl border border-2 p-4 transition-all disabled:opacity-50 font-weight-500 text-white',
  {
    variants: {
      intent: {
        primary: 'bg-violet-600 border-violet-500 hover:shadow-violet-400/75 hover:shadow-xl',
        secondary: 'bg-indigo-600 border-indigo-500',
      },
      size: {
        sm: 'text-sm',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'sm'
      }
  }
);

export type ButtonProps = VariantProps<typeof button>
