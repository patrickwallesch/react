import Request from 'superagent';

export const PatientActions = {
    patientLogin
};

function patientLogin(username, password)
{
    return dispatch =>
    {
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
                    dispatch(patientLoginFailed())
                }

                dispatch(patientLoginSuccess())
            });
    };
}

function patientLoginSuccess()
{
    return {
        type: 'PATIENT_LOGIN_SUCCESS',
    }
}

function patientLoginFailed()
{
    return {
        type: 'PATIENT_LOGIN_FAILED',
    }
}