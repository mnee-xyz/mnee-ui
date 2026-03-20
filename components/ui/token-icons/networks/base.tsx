import type { SVGProps } from "react";

export function BaseNetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_16105_13)">
      <rect x="1.33008" y="1.33002" width="16" height="16" rx="8" fill="white"/>
      <path d="M9.316 17.33C13.7422 17.33 17.3301 13.7486 17.3301 9.33002C17.3301 4.91146 13.7422 1.33002 9.316 1.33002C5.11696 1.33002 1.67248 4.55434 1.33008 8.65738H11.9227V10.0027H1.33008C1.67248 14.1057 5.11696 17.33 9.316 17.33Z" fill="#1C1C1C"/>
      </g>
      <rect x="0.665078" y="0.665017" width="17.33" height="17.33" rx="8.665" stroke="white" strokeWidth="1.33"/>
      <defs>
      <clipPath>
      <rect x="1.33008" y="1.33002" width="16" height="16" rx="8" fill="white"/>
      </clipPath>
      </defs>
      </svg>
  );
}
