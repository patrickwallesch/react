import Request from 'superagent';

class RestClient
{
    constructor()
    {
        this.hostname = 'dev.api.feelae.v-labs.fr';
        this.scheme = 'http';
    }

    /**
     * @param method
     * @param path
     * @param body
     * @return Promise
     */
    send(method = 'GET', path, body = null)
    {
        let url = this.scheme + '://' + this.hostname + path;

        return new Promise((resolve, reject) =>
        {
            Request(method, url)
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send(body)
                .end((err, res) =>
                {
                    if(err || !res.ok) {
                        reject(res);
                    }

                    resolve(res);
                });
        });
    }
}

export const
    api = (new RestClient()),
    methods = {
        HTTP_POST: 'POST',
        HTTP_GET: 'GET',
    };