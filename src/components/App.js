import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import { PAGES } from '../utils/pages';

import { history } from '../history';
import { theme } from '../assets/theme.js';

import Layout from './layouts/Layout';

function AppRoute({ component: Page, data, ...rest }) {
    //eslint-disable-line
    return (
        <Route
            {...rest}
            render={(
                props //eslint-disable-line
            ) => (
                <Layout {...props}>
                    <Page {...props} data={data} />
                </Layout>
            )}
        />
    );
}

class App extends PureComponent {
    //eslint-disable-line
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <Switch>
                        {PAGES.map((page) => (
                            <AppRoute // eslint-disable-line react/jsx-key
                                exact
                                path={page.route}
                                component={page.page}
                                data={page}
                            />
                        ))}
                        <Redirect to='/projects' />
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}

export default hot(App);
