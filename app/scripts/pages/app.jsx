import React from 'react';

const App = (props) => {
  return (
    <div>
      <h1>Geoff Pleiss</h1>
			<div className="content">
				{props.children}
			</div>
    </div>
  );
};

export default App;
