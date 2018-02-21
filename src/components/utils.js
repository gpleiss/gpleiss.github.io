import _ from 'lodash';
import React from 'react';

class Link extends React.Component {
	render() {
		let {inside, children, ...props} = this.props;
		if (!inside) {
			props.target = "_blank";
		}

		return <a {...props}>{children}</a>
	}
}

class H1 extends React.Component {
  render() {
    let {children, ...props} = this.props;
    return <h1 className="mb-0 text-light font-weight-bold" {...props}>{children}</h1>
  }
}

class H2 extends React.Component {
  render() {
    let {children, ...props} = this.props;
    return <h2 className="mb-5 text-dark text-uppercase" {...props}>{children}</h2>
  }
}

class SmallH2 extends React.Component {
  render() {
    let {center, children, ...props} = this.props;

		let className = "h5 text-uppercase mb-5 text-center"
		if (!center) {
			className += " text-md-left";
		}

    return <h2 className={className} {...props}>{children}</h2>
  }
}

class NavH3 extends React.Component {
  render() {
    let {first, children, ...props} = this.props;

		let className = "h6 mb-1 ml-5 mr-5 mr-md-0";
		if (!first) {
			className = className + " mt-4 pt-3 border-top";
		}

    return <h3 className={className} {...props}>{children}</h3>
  }
}

class Img extends React.Component {
  render() {
    let {maxWidth, maxHeight, children, ...props} = this.props;

    return (
      <figure className="bg-light border border-medium border-rounded p-3 shadow-subtle" {...props}>
        <img src={this.props.src} className="figure-img rounded" alt={children} style={{maxWidth: maxWidth, maxHeight: maxHeight}} />
        <figcaption className="figure-caption mt-2">
          {children}
        </figcaption>
      </figure>
    );
  }
}

class InfoBlock extends React.Component {
  render() {
    let {shadow, children, ...props} = this.props;

		let className = "bg-light p-4 border border-medium border-rounded";
		if (shadow) {
			className += " shadow-subtle";
		}

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    let {first, children, ...props} = this.props;
    let className = first ? "mb-5" : "border-top pt-5 mb-5";

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
}

export {
	Link,
	H1,
	H2,
  SmallH2,
  NavH3,
  Img,
  InfoBlock,
  Section,
};
