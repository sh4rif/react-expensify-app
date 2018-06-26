// Higher Order Component (HOC) - A Component (HOC) that renders another Component
// Reuse code
// Render hijacking
// props manipulation
// Abstract state

console.log('Higher Order Component (HOC) - A Component (HOC) that renders another Component');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Higher Order Component (HOC) </h1>
    <p>Higher Order Component (HOC) - A Component (HOC) that renders another Component. </p>
    <p>The inof is : { props.info } </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&  <p>This is a private info. Please don't share! </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Please login to view the Info</p>
        )
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo  = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the details." />, document.getElementById('app'));