import React from "react";
import { ColorTheme, CopyrightStyles, DisplayMode, Locales } from "../index";
import Copyright from "./Copyright";
import Widget from "./Widget";

export interface TickerTapeSymbol {
  proName: string;
  title: string;
}

export interface TickerTapeProps {
  symbols?: TickerTapeSymbol[];
  showSymbolLogo?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;
  displayMode?: DisplayMode;
  locale?: Locales;

  children?: never;
  affId?: string;
  copyrightStyles?: CopyrightStyles;
}

const defaultSymbols: TickerTapeSymbol[] = [
  {
    proName: "FOREXCOM:SPXUSD",
    title: "S&P 500",
  },
  {
    proName: "FOREXCOM:NSXUSD",
    title: "Nasdaq 100",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR/USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "BTC/USD",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "ETH/USD",
  },
];

const TickerTape: React.FC<TickerTapeProps> = ({
  symbols = defaultSymbols,
  showSymbolLogo = true,
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  displayMode = "adaptive",
  locale = "en",
  affId = "",
  copyrightStyles,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          symbols,
          showSymbolLogo,
          colorTheme,
          isTransparent,
          largeChartUrl,
          displayMode,
          locale,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/markets/`}
        affId={affId}
        spanText={`Markets`}
      />
    </div>
  );
};

export default TickerTape;
