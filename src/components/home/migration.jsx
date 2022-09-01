import React from 'react';

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}
