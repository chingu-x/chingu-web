import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import VoyageSignUpProvider from '../../contexts/voyageSignUp';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Route from '../../components/Route';
import Info from './Info';
import Path from './Path';
import CodingLocation from './CodingLocation';

function VoyageSignUp({ match }) {
  return (
    <VoyageSignUpProvider>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path={`${match.url}/`} component={Info} />
            <Route exact path={`${match.url}/path`} component={Path} />
            <Route
              exact
              path={`${match.url}/codingLocation`}
              component={CodingLocation}
            />
            <Route render={() => <Redirect to={`${match.url}/`} />} />
          </Switch>
        </Content>
      </Layout>
    </VoyageSignUpProvider>
  );
}

export default VoyageSignUp;
