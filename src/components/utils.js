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
    let {children, className, mb, ...props} = this.props;
    className = className || "";
    className = "text-uppercase h2 " + className;
    className += ` mb-${mb || 5}`;
    return <h1 className={className} {...props}>{children}</h1>
  }
}

class H2 extends React.Component {
  render() {
    let {children, className, mb, small, center, ...props} = this.props;
    className = className || "";
    className += ` mb-${mb || 5}`;
    if (small) {
      className += " h5 text-uppercase mb-5 text-center";
      if (!center) {
        className += " text-md-left";
      }
      return <h2 className={className} {...props}>{children}</h2>
    } else {
      className = "text-uppercase " + className;
      return <h2 className={className} {...props}>{children}</h2>
    }
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
    let {children, className, center, small, ...props} = this.props;
    className = className || "";
    if (small) {
      className += " h6 text-uppercase mb-3 mt-4 text-center";
    } else {
      className += " h4 mt-5 mb-4";
    }
    if (!center) {
			className += " text-md-left";
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

class Header extends React.Component {
  render() {
    let {children, ...props} = this.props;
    return (
      <div className="bg-gradient-primary pt-10 pb-5 shadow-bottom" {...props}>
        <div className="container text-center text-light">
          {children}
        </div>
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
  Header,
  SmallH2,
  NavH3,
  SmallH3,
  Img,
  InfoBlock,
  Section,
  AnonFeedback,
};
