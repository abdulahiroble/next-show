import ReactGA from "react-ga";

export const initializeGoogleAnalytics = () => {
  ReactGA.initialize("UA-164270700-1");
};

export const registerPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
