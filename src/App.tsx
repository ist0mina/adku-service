import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Layout } from './core/layout';
import { HomePage } from './core/home-page';
import { ReportPage } from './core/report-page';
import { Route } from 'react-router';
import { RoutePaths } from './const/routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Route path="/" exact component={HomePage}/>
          <Route path={RoutePaths.ROUTE_HOME} component={HomePage}/>
          <Route path={RoutePaths.ROUTE_REPORT} component={ReportPage}/>
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
