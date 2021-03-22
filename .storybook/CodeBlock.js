import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

export default ({children, language}) => {
    return (
        <Highlight {...defaultProps} code={children} language={language} theme={dracula}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={{...style, padding: '20px'}}>
                {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                    {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                    ))}
                </div>
                ))}
            </pre>
            )}
        </Highlight>
    );
};