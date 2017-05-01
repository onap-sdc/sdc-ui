import React from 'react';
import {highlightBlock} from 'highlight.js';

class CodeBlock extends React.Component {
    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        highlightBlock(this.refs.code);
    }

    render() {
        return (
            React.createElement('pre', null,
                React.createElement('code', {
                    ref: 'code',
                    className: this.props.language
                }, this.props.literal)
            )
        );
    }
}

module.exports = CodeBlock;