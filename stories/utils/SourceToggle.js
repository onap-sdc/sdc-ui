import React from 'react';
import jsxToString from './jsxToString.js';
import Markdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';
import {highlightBlock} from 'highlight.js';

const sources = {
    React: 'React',
    HTML: 'HTML',
    Angular2: 'Angular2'
};

export default class SourceToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: sources.React
        }
    }

    renderFromSource() {
        let {jsx, html, angular2Component} = this.props;
        let {source} = this.state;
        switch (source) {
            case sources.HTML:
                return <div dangerouslySetInnerHTML={{__html: html}} />
            case sources.React:
            default:
                return <div>{jsx}</div>
        }
    }

    renderMarkdown() {
        let {jsx, html, angular2Component} = this.props;
        let {source} = this.state;
        switch (source) {
            case sources.HTML:
                return <div dangerouslySetInnerHTML={{__html: html}} />
            case sources.React:
            default:
                return '```js' + '\n' + jsxToString(jsx) + '\n' + '```';
        }
    }

    render() {
        return (
            <div className='source-toggle'>
                {this.renderFromSource()}
                <Markdown 
                    source={this.renderMarkdown()} 
                    /*renderers={
                        Object.assign({}, Markdown.renderers, {
                            CodeBlock: CodeBlock
                        })
                    } */
                    />
            </div>
        )
    }
}