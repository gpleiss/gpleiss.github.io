import React from 'react';


class CvList extends React.Component {
	render() {
    let {className, ...others} = this.props;
    var fullClassName = 'list-unstyled';
    if (!!className) {
      fullClassName += ' ' + className;
    }
		return <ul {...others} className={fullClassName}>{this.props.children}</ul>
	}
}


export default CvList;
