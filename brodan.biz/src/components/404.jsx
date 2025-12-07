import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';

function NotFoundPage() {
    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <h1>404 Page Not Found</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('not-found-root')).render(<NotFoundPage />);
ReactDOM.createRoot(document.getElementById('footer-root')).render(<Footer />);
