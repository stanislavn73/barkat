import { stringify, parse } from 'query-string';
import { createBrowserHistory } from 'history';
import qhistory from 'qhistory';


export const history = qhistory(
    createBrowserHistory({ /* history configuration options */ }),
    stringify,
    parse
);

history.listen((location, method) => {
    if (method === 'PUSH') {
        document.getElementById('root').scrollTo(0, 0);
    }
});

