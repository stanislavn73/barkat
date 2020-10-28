import queryString from 'query-string';

const config = window.APIconfig; // eslint-disable-line

export default class ApiClient {
    async get(url, params) {
        return this.request({
            url,
            params,
            method : 'GET'
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method : 'POST',
            body   : payload
        });
    }

    async put(url, payload = {}) {
        return this.request({
            url,
            method : 'PUT',
            body   : payload
        });
    }

    async patch(url, payload = {}) {
        return this.request({
            url,
            method : 'PATCH',
            body   : payload
        });
    }

    async delete(url, payload = {}) {
        return this.request({
            url,
            method : 'DELETE',
            body   : payload
        });
    }

    async request({ url, method, params = {}, body }) {
        const query = `?${queryString.stringify({ ...params, '_format': 'json', 'access-token': '1lEFAq1L9tFW5T6gyG1RcNFT2-8bS0X44yMA' })}`;

        const response = await fetch(
            `${config.apiUrl}${config.apiPrefix}${url}${query}`,
            {
                method,
                headers : {
                    'Content-Type'  : 'application/json',
                    'Cache-Control' : 'no-cache',
                    'pragma'        : 'no-cache'
                },
                body : method !== 'GET' ? JSON.stringify({ data: body }) : undefined
            }
        );

        const json = await response.json();

        if (json.status === 0) throw json.error;

        return json.result;
    }
}
