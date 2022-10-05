import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import useClipboard from "react-use-clipboard";
import styles from "./Code.module.scss";

interface ICode {
  children: string;
  className: string;
}

function CopyButton({ value }: { value: string }) {
  const [isCopied, setCopied] = useClipboard(value, {
    successDuration: 2000,
  });

  return (
    <button
      aria-label="Copy text"
      role="button"
      className={styles.copyButton}
      onClick={setCopied}
    >
      {isCopied ? "Copied ☑️" : "Copy"}
    </button>
  );
}

const Code = ({ children, className }: ICode) => {
  const language = className.replace(/language-/, "") as Language;

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
            <CopyButton value={children.trim()} />
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
