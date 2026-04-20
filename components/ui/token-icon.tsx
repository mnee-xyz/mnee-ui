import { cn } from "@/lib/utils";
import { tokenIcons, networkIcons } from "./token-icons/registry";

export type TokenIconSize = "sm" | "md" | "lg";

export interface TokenIconProps extends React.HTMLAttributes<HTMLDivElement> {
  token: string;
  network?: string;
  size?: TokenIconSize;
}

const sizeStyles: Record<TokenIconSize, { container: string; icon: string; badge: string; badgeIcon: string }> = {
  sm: { container: "w-5 h-5", icon: "w-5 h-5", badge: "w-2.5 h-2.5", badgeIcon: "w-2.5 h-2.5" },
  md: { container: "w-7 h-7", icon: "w-7 h-7", badge: "w-3 h-3", badgeIcon: "w-3 h-3" },
  lg: { container: "w-8 h-8", icon: "w-8 h-8", badge: "w-3.5 h-3.5", badgeIcon: "w-3.5 h-3.5" },
};

const fallbackColors = [
  "bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-orange-500",
  "bg-pink-500", "bg-cyan-500", "bg-indigo-500", "bg-amber-500",
];

function getFallbackColor(symbol: string): string {
  let hash = 0;
  for (let i = 0; i < symbol.length; i++) {
    hash = symbol.charCodeAt(i) + ((hash << 5) - hash);
  }
  return fallbackColors[Math.abs(hash) % fallbackColors.length];
}

export function TokenIcon({
  token,
  network,
  size = "md",
  className,
  ...props
}: TokenIconProps) {
  const styles = sizeStyles[size];
  const TokenSvg = tokenIcons[token.toLowerCase()];
  const NetworkSvg = network ? networkIcons[network.toLowerCase()] : null;

  return (
    <div className={cn("relative inline-flex shrink-0", styles.container, className)} {...props}>
      {TokenSvg ? (
        <div className={cn("rounded-full overflow-hidden", styles.icon)}>
          <TokenSvg className="w-full h-full" />
        </div>
      ) : (
        <span
          className={cn(
            "flex items-center justify-center rounded-full text-white font-semibold",
            size === "sm" ? "text-[8px]" : size === "md" ? "text-[10px]" : "text-xs",
            styles.icon,
            getFallbackColor(token)
          )}
        >
          {token.slice(0, 2).toUpperCase()}
        </span>
      )}
      {NetworkSvg && (
        <div
          className={cn("absolute rounded-full overflow-hidden", styles.badge)}
          style={{ bottom: -1, right: -1 }}
        >
          <NetworkSvg className="w-full h-full" />
        </div>
      )}
    </div>
  );
}
