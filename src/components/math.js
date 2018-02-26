import React from 'react';
import KaTeX from 'katex';

import 'katex/dist/katex.css';

class Math extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      katexHtml: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    this.updateHtml();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.updateHtml()
    }
  }

  updateHtml() {
    try {
      const katexHtml = KaTeX.renderToString(
        this.props.children,
        {displayMode: !this.props.inline},
      );
      this.setState({
        katexHtml,
        error: undefined,
      });
    } catch(error) {
      this.setState({
        katexHtml: undefined,
        error,
      });
    }
  }

  render() {
    let {children, inline, ...props} = this.props;

    if (this.state.katexHtml) {
      if (inline) {
        return <span {...props} dangerouslySetInnerHTML={{__html: this.state.katexHtml}} />;
      } else {
        return <div {...props} dangerouslySetInnerHTML={{__html: this.state.katexHtml}} />;
      }
    } else if (this.state.error) {
      throw this.state.error;
    }

    return inline ? <span>...</span> : <div>...</div>;
  }
}


export {
  Math,
};
