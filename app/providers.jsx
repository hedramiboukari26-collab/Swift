"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  bsc,
  polygon,
  arbitrum,
  base,
  optimism,
  avalanche,
  zksync,
  linea,
  scroll,
  gnosis,
  fantom,
  celo,
  mantle,
  moonbeam,
  aurora,
} from "@reown/appkit/networks";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const projectId = "629874b8d420f45463569518e50912fe";

const networks = [
  mainnet, bsc, polygon, arbitrum, base, optimism, avalanche, zksync,
  linea, scroll, gnosis, fantom, celo, mantle, moonbeam, aurora,
];

const wagmiAdapter = new WagmiAdapter({ networks, projectId, ssr: true });

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: "Swift",
    description: "منصة غير وصائية لتبديل العملات الرقمية",
    url: "https://swiftexchange.online",
    icons: ["https://swiftexchange.online/icon.svg"],
  },
  features: { analytics: false },
});

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    
