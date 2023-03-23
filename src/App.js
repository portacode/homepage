import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Privacy from './views/Privacy';
import Contact from './views/Contact';
import Terms from './views/Terms';
import Four04 from './views/404';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

if(process.env.REACT_APP_GA_CODE){
  console.log("Connecting Google Analytics")
}
else{
  console.log("Google Analitics Tracking ID not found")
}


const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/privacy" component={Privacy} layout={LayoutDefault} />
          <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />
          <AppRoute exact path="/contact" component={Contact} layout={LayoutDefault} />
          <AppRoute component={Four04} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;