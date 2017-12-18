import { PatientConstants } from '../constants/PatientConstants';
import RestClient from "../client/RestClient";
import Request from "superagent";

export function authentication(state = {}, action)
{
    switch (action.type)
    {
        case PatientConstants.PATIENT_LOGIN_REQUEST:

            return {
                loggingIn: true,
            };

            Request
                .post('http://api.feelae.dev/oauth/v2/token')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send({
                    grant_type: "password",
                    client_id: "1_29kg64ag3skkccsgc0cs4g4k8s8koskkkg0g8o8woksc8o8gs0",
                    client_secret: "20s83tlb5jgkoc8w044occowcc4s4occcc844kkggccw0kc848",
                    username: "patrick@v-labs.fr",
                    password: "testTest1@",
                    scope: "patient"
                })
                .end((err, res) => {
                    if(!res.ok) {
                        return {
                            ...state,
                            loggedIn: false
                        };
                    }

                    console.log(state);

                    return {
                        ...state,
                        loggedIn: JSON.parse(res.text).accessToken
                    };
                });

        default:
            return state
    }
}