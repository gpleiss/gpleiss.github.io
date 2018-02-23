import hljs from 'highlight.js';
import React from 'react';
import ReactDOM from 'react-dom';


class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');

    let i;
    for (i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const {className, children, ...props} = this.props;

		return (
			<pre {...props}>
				<code className={className}>{children}</code>
			</pre>
		);
  }
}


export {
	Code,
};
