import React from 'react';

function WithCategory(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>This is Higher Order Component</h1>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default WithCategory;
