import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
// import { Button, useClipboard } from "@chakra-ui/react";
import styles from "./Code.module.scss";

function CopyButton() {
  return (
    <button aria-label="Copy text" role="button" className={styles.copyButton}>
      {/* {hasCopied ? "Copied" : "Copy"} */}
      Hola
    </button>
  );
}

export default function Code({ children, className }) {
  const language = className.replace(/language-/, "");
  return (
    <div className={styles.code}>
      <span className={styles.extensionTag}>{language}</span>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              overflow: "scroll",
              marginTop: 20,
              marginBottom: 20,
              padding: 16,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            <CopyButton />
          </pre>
        )}
      </Highlight>
    </div>
  );
}
