import { Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error in component:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;