import React from "react";
import { CopyrightStyles } from "..";

export type CopyrightProps = {
  copyrightStyles?: CopyrightStyles;
  href?: string;
  affId?: string;
  spanText?: string;
  text?: string;
  children?: never;
};

const Copyright: React.FC<CopyrightProps> = ({
  href,
  affId,
  spanText,
  text = "By TradingView",
  copyrightStyles,
}) => {
  const defaultStyles: CopyrightStyles = {
    parent: {
      fontSize: "13px",
      lineHeight: "32px",
      textAlign: "center",
      verticalAlign: "center",
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      color: "#9db2bd",
    },
    link: {
      textDecoration: "none",
      color: "#9db2bd",
    },
    span: {
      color: "#2962FF",
    },
  };
  //build affiliate link if included
  const affiliateSuffix = affId !== "" ? `?aff_id=${affId}` : "";
  const url = `${href}${affiliateSuffix}&utm_source=creative&utm_lang=EN`;
  return (
    <>
      <div
        style={Object.assign({}, defaultStyles.parent, copyrightStyles?.parent)}
      >
        <a
          style={Object.assign({}, defaultStyles.link, copyrightStyles?.link)}
          href={href}
          target="_blank"
        >
          <span
            style={Object.assign({}, defaultStyles.span, copyrightStyles?.span)}
          >
            {spanText}{" "}
          </span>
        </a>
        {text}
      </div>
      <div>
        {affId && (
          <a href={url} target="_blank">
            <img
              src="https://s3.tradingview.com/pub/referrals/creatives/DT/EN/728x90Leaderboard.jpg"
              width="728"
              height="90"
            />
          </a>
        )}
      </div>
    </>
  );
};

export default Copyright;
