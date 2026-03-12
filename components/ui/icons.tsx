import { type LucideIcon, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

// ─── Icon wrapper ──────────────────────────────────────────────────────────────

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export interface IconProps extends Omit<LucideProps, "size"> {
  /** Any Lucide icon component, e.g. import { Wallet } from "lucide-react" */
  icon: LucideIcon;
  /** Design-system size token. Defaults to "md" (16px). */
  size?: IconSize;
}

export function Icon({ icon: LucideComponent, size = "md", className, ...props }: IconProps) {
  return (
    <LucideComponent
      size={sizeMap[size]}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}

// ─── Brand icon ───────────────────────────────────────────────────────────────

export function MneeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 797 797"
      {...props}
    >
      <g filter="url(#MneeIcon_a)">
        <path
          fill="url(#MneeIcon_b)"
          d="M148.438 398.438c0-138.072 111.928-250 250-250 138.071 0 250 111.928 250 250 0 138.071-111.929 250-250 250-138.072 0-250-111.929-250-250"
          shapeRendering="crispEdges"
        />
        <path
          fill="#05121F"
          d="M148.438 398.438c0-138.072 111.928-250 250-250 138.071 0 250 111.928 250 250 0 138.071-111.929 250-250 250-138.072 0-250-111.929-250-250"
          shapeRendering="crispEdges"
        />
        <path
          fill="url(#MneeIcon_c)"
          d="M164.062 398.438c0-129.442 104.934-234.376 234.376-234.376 129.441 0 234.374 104.934 234.374 234.376 0 129.441-104.933 234.374-234.374 234.374-129.442 0-234.376-104.933-234.376-234.374"
        />
        <path
          fill="url(#MneeIcon_d)"
          fillRule="evenodd"
          d="m482.765 413.641-.381-88.048a17.06 17.06 0 0 0-5.028-12.031c-3.206-3.205-7.505-5.027-12.043-5.027-4.539 0-8.838 1.822-12.043 5.027s-5.029 7.5-5.029 12.038v145.674c0 13.255-5.267 25.861-14.637 35.227-9.371 9.369-21.982 14.634-35.237 14.634-13.257 0-25.87-5.265-35.238-14.634-9.371-9.366-14.638-21.972-14.638-35.227V325.6c0-4.538-1.823-8.834-5.028-12.038-3.206-3.205-7.505-5.027-12.043-5.027-4.539 0-8.838 1.822-12.043 5.027a17.06 17.06 0 0 0-5.026 12.031l-.383 88.048c-1.37 11.023-6.398 21.223-14.255 29.082-9.37 9.367-21.982 14.634-35.24 14.634-13.256 0-25.869-5.267-35.237-14.634-7.86-7.859-12.888-18.064-14.258-29.09l-.405-24.216-45.026-.008h-21.109l.168-3.435c3.049-62.067 28.993-120.38 72.935-164.313 47.048-47.036 110.287-73.223 176.823-73.223 66.538 0 129.774 26.187 176.822 73.223 30.786 30.78 53.107 69.091 64.523 111.106l1.121 4.13h-34.039l-.709-2.312c-10.404-33.867-29.041-64.69-54.092-89.735-40.88-40.868-95.814-63.618-153.627-63.618s-112.749 22.75-153.63 63.618c-30.057 30.051-50.697 68.188-59.218 109.832l-.397 1.94h62.284v50.872c0 4.536 1.823 8.836 5.028 12.04s7.505 5.028 12.043 5.028 8.838-1.824 12.043-5.028 5.029-7.501 5.029-12.04v-81.893c0-13.252 5.267-25.861 14.637-35.227 9.368-9.369 21.981-14.635 35.238-14.635 13.258 0 25.866 5.266 35.237 14.635 9.371 9.365 14.638 21.975 14.638 35.227v145.674c0 4.538 1.823 8.836 5.028 12.041s7.505 5.024 12.044 5.024c4.537 0 8.837-1.82 12.042-5.024 3.205-3.205 5.027-7.503 5.027-12.041V325.601c0-13.252 5.267-25.861 14.638-35.227 9.369-9.369 21.981-14.635 35.239-14.635s25.868 5.266 35.237 14.635c9.371 9.365 14.638 21.975 14.638 35.227v81.893c0 4.536 1.823 8.836 5.027 12.04s7.504 5.028 12.042 5.028 8.838-1.824 12.044-5.028c3.205-3.204 5.028-7.501 5.028-12.04v-50.872h62.279l-.004-.025h33.355l.435 2.765a252 252 0 0 1 3.044 39.074c0 66.52-26.198 129.742-73.245 176.778-47.049 47.036-110.286 73.224-176.822 73.224-66.538 0-129.776-26.188-176.824-73.224-43.53-43.519-69.423-101.186-72.845-162.651l-.193-3.457h32.838l.192 3.071c3.302 52.872 25.745 102.398 63.205 139.849 40.878 40.87 95.815 63.616 153.628 63.616s112.747-22.746 153.627-63.616c40.881-40.869 63.635-95.789 63.635-153.587q.001-3.73-.125-7.458l-.053-1.561h-33.291l-.408 24.213c-1.37 11.026-6.398 21.231-14.258 29.09-9.37 9.367-21.981 14.634-35.239 14.634-13.256 0-25.87-5.267-35.238-14.634-7.857-7.856-12.887-18.056-14.257-29.082"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient id="MneeIcon_b" x1={148.438} x2={648.438} y1={148.438} y2={648.438} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6900" />
          <stop offset={0.5} stopColor="#FE9A00" />
          <stop offset={1} stopColor="#FDC700" />
        </linearGradient>
        <linearGradient id="MneeIcon_c" x1={450.422} x2={558.798} y1={592.492} y2={90.982} gradientUnits="userSpaceOnUse">
          <stop stopColor="#05121F" />
          <stop offset={1} stopColor="#05121F" />
        </linearGradient>
        <linearGradient id="MneeIcon_d" x1={253.85} x2={537.261} y1={576.276} y2={231.407} gradientUnits="userSpaceOnUse">
          <stop stopColor="#E88C1F" />
          <stop offset={1} stopColor="#FFDC46" />
        </linearGradient>
        <filter id="MneeIcon_a" width={796.875} height={796.875} x={0} y={0} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feMorphology in="SourceAlpha" radius={46.875} result="effect1_dropShadow_3676_2343" />
          <feOffset />
          <feGaussianBlur stdDeviation={97.656} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.410735 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3676_2343" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_3676_2343" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
