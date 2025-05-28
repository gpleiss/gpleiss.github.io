import React from 'react';


class CvList extends React.Component {
	render() {
    let {className, indent, mb, ...others} = this.props;
    var fullClassName = `list-unstyled mb-${mb || 5}`;
    if (!!className) {
      fullClassName += ' ' + className;
    }
    if (indent) {
      fullClassName += ' ml-3';
    }
		return <ul {...others} className={fullClassName}>{this.props.children}</ul>
	}
}


export default CvList;
