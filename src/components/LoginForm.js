import React from 'react';
import { Button } from 'react-bootstrap';
//import { userActions } from '../_actions';
//import { FormGroup } from 'react-bootstrap';
//import { FormGroup } from 'react-bootstrap';

class LoginForm extends React.Component
{
    handleSubmit(e)
    {
        e.preventDefault();

        fetch('http://api.feelae.dev/oauth/v2/token', {
            method: "post",
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                grant_type: "password",
                client_id: "1_29kg64ag3skkccsgc0cs4g4k8s8koskkkg0g8o8woksc8o8gs0",
                client_secret: "20s83tlb5jgkoc8w044occowcc4s4occcc844kkggccw0kc848",
                username: "patrick@v-labs.fr",
                password: "testTest1@",
                scope: "patient"
            }),
        })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Identifiant:</label>
                    <input type="text" className="form-control" name="username" />
                </div>
                <div className="form-group">
                    <label>Mot de passe:</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <Button bsStyle='primary' type="submit" bsSize='large'>Se connecter</Button>
            </form>
        );
    }
}

export default LoginForm;

/*<FormGroup>
                    <ControlLabel>Username:</ControlLabel>
                    <FormControl></FormControl>
                </FormGroup>*/