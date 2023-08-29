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
    let {children, className, noMb, ...props} = this.props;
    className = className || "";
    let fontName = className.indexOf("text-") === -1 ? "text-dark" : "";
    className = fontName + " text-uppercase " + className;
    if (!noMb) {
      className += " mb-5";
    }
    return <h2 className={className} {...props}>{children}</h2>
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

class H3 extends React.Component {
  render() {
    let {children, className, noMb, ...props} = this.props;
    className = className || "";
    if (!noMb) {
      className += " h4 mt-5 mb-4";
    }
    return <h3 className={className} {...props}><u>{children}</u></h3>
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

class SmallH3 extends React.Component {
  render() {
    let {center, children, ...props} = this.props;

		let className = "h6 text-uppercase mb-3 mt-4 text-center"
		if (!center) {
			className += " text-md-left";
		}

    return <h3 className={className} {...props}>{children}</h3>
  }
}

class Img extends React.Component {
  render() {
    let {captionClassName, maxWidth, maxHeight, children, fluid, src, ...props} = this.props;
    let className = '';
    captionClassName = captionClassName ? captionClassName : '';
    captionClassName += ' figure-caption pt-2';

    let imgClassName = 'figure-img rounded';
    if (fluid) {
      imgClassName += ' img-fluid';
    }

    return (
      <figure className={className} {...props}>
        <div className="bg-white p-3">
          <img src={this.props.src} className={imgClassName} alt={children} style={{maxWidth: maxWidth, maxHeight: maxHeight}} />
        </div>
        <figcaption className={captionClassName}>
          {children}
        </figcaption>
      </figure>
    );
  }
}

class InfoBlock extends React.Component {
  render() {
    let {children, ...props} = this.props;
		let className = "p-5 font-italic border-bottom";

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    let {first, firstMd, children, ...props} = this.props;
    let className = '';
    if (!first) {
      className += ' border-top pt-5';
    }
    if (firstMd) {
      className += ' d-md-none d-block';
    }

    return (
      <div>
        <div className={className} {...props}>
        </div>
        <div className="mb-5">
          {children}
        </div>
      </div>
    );
  }
}

class AnonFeedback extends React.Component {
  render() {
    let {children, ...props} = this.props;
    if (!children) {
      children = "anonymous feedback form";
    }

    return (
      <Link href="https://forms.gle/nnh5kzGzNTfBc3e8A" {...props}>
        { children }
      </Link>
    )
  }
}

export {
	Link,
	H1,
	H2,
  H3,
  SmallH2,
  NavH3,
  SmallH3,
  Img,
  InfoBlock,
  Section,
  AnonFeedback,
};
