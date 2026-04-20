import type { FC, SVGProps } from "react";

import { UsdcIcon } from "./tokens/usdc";
import { UsdtIcon } from "./tokens/usdt";
import { EthIcon } from "./tokens/eth";
import { BtcIcon } from "./tokens/btc";
import { SolIcon } from "./tokens/sol";
import { MaticIcon } from "./tokens/matic";
import { XrpIcon } from "./tokens/xrp";
import { DogeIcon } from "./tokens/doge";
import { AdaIcon } from "./tokens/ada";
import { LtcIcon } from "./tokens/ltc";

import { BaseNetworkIcon } from "./networks/base";
import { EthereumNetworkIcon } from "./networks/ethereum";
import { SolanaNetworkIcon } from "./networks/solana";
import { PolygonNetworkIcon } from "./networks/polygon";
import { ArbitrumNetworkIcon } from "./networks/arbitrum";
import { TronNetworkIcon } from "./networks/tron";
import { OptimismNetworkIcon } from "./networks/optimism";
import { BinanceNetworkIcon } from "./networks/binance";
import { AvalancheNetworkIcon } from "./networks/avalanche";

export type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const tokenIcons: Record<string, IconComponent> = {
  usdc: UsdcIcon,
  usdt: UsdtIcon,
  eth: EthIcon,
  btc: BtcIcon,
  sol: SolIcon,
  matic: MaticIcon,
  xrp: XrpIcon,
  doge: DogeIcon,
  ada: AdaIcon,
  ltc: LtcIcon,
};

export const networkIcons: Record<string, IconComponent> = {
  base: BaseNetworkIcon,
  ethereum: EthereumNetworkIcon,
  solana: SolanaNetworkIcon,
  polygon: PolygonNetworkIcon,
  arbitrum: ArbitrumNetworkIcon,
  tron: TronNetworkIcon,
  optimism: OptimismNetworkIcon,
  binance: BinanceNetworkIcon,
  avalanche: AvalancheNetworkIcon,
};
