import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';

function MaintenancePage() {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <h1>Under Construction</h1>
      <p>
        This page is currently undergoing maintenance and will hopefully be back online soon. Sorry for the inconvenience.
        Feel free to <a href="mailto:christopher.hranj@gmail.com">contact me</a> if needed.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('maintenance-root')).render(<MaintenancePage />);
ReactDOM.createRoot(document.getElementById('footer-root')).render(<Footer />);
