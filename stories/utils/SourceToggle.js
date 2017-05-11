import React from 'react';
import jsxToString from './jsxToString.js';

import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.js';

const sources = {
    React: 'React',
    HTML: 'HTML'
};

export default class SourceToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: sources.React
        }
    }

    renderFromSource() {
        let {jsx, html} = this.props;
        let {source} = this.state;
        let classname = 'source-toggle-example';
        switch (source) {
            case sources.HTML:
                return <div className={classname} dangerouslySetInnerHTML={{__html: html}} />
            case sources.React:
            default:
                return <div className={classname}>{jsx}</div>
        }
    }

    renderMarkdown() {
        let {jsx, html} = this.props;
        let {source} = this.state;
        switch (source) {
            case sources.HTML:
                return {__html: Prism.highlight(html, Prism.languages.html)};
            case sources.React:
            default:
                return {__html: Prism.highlight(jsxToString(jsx), Prism.languages.jsx)};
        }
    }

    render() {
        let {title} = this.props;
        return (
            <div className='source-toggle-wrapper'>
                <div className='source-toggle-title'>{title}</div>
                <div className='source-toggle'>
                    {this.renderFromSource()}
                    <div className='source-toggle-code'>
                        <div className='source-toggle-code-tabs'>
                            {Object.keys(sources).map(source => (
                                <div className={`source-toggle-tab${this.state.source === source ? ' selected' : ''}`} onClick={() => this.setState({source: source})}>{source}</div>
                            ))}
                        </div>
                        <pre>
                            <code dangerouslySetInnerHTML={this.renderMarkdown()} />
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}