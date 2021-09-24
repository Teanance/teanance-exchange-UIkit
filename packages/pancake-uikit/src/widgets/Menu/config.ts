import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms (Coming Soon)",
    icon: "FarmIcon",
    href: "/",
    status: status.SOON,
  },
  {
    label: "Pools (Coming Soon)",
    icon: "PoolIcon",
    href: "/",
    status: status.SOON,
  },
  {
    label: "Lottery (Coming Soon)",
    icon: "TicketIcon",
    href: "/",
    status: status.SOON,
  },
  {
    label: "NFT (Coming Soon)",
    icon: "NftIcon",
    href: "/",
    status: status.SOON,
  },
  {
    label: "Team Battle (Coming Soon)",
    icon: "TeamBattleIcon",
    href: "/",
    status: status.SOON,
  },
  {
    label: "Profile & Teams (Coming Soon)",
    icon: "GroupsIcon",
    status: status.SOON,
    items: [
      {
        label: "Leaderboard",
        href: "/",
        status: status.SOON,
      },
      {
        label: "YourProfile",
        href: "/",
        status: status.SOON,
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info (Coming Soon)",
    icon: "DingyIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO (Coming Soon)",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/",
      },
      {
        label: "History",
        href: "/",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.pancakeswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/TeananceExchange",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/teanance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
