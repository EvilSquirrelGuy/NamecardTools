import { cva, type VariantProps } from "class-variance-authority";

export const card = cva(
  'rounded-xl border p-4 transition-colors ',
  {
    variants: {
      intent: {
        primary: '',
        secondary: '',
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

export type CardProps = VariantProps<typeof card>
