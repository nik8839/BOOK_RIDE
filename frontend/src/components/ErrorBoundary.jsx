import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        this.setState({ error, info });
        console.error('ErrorBoundary caught an error:', error);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div>Something went wrong. Please try again later.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
