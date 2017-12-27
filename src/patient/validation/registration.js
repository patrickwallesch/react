import isEmpty from 'lodash/isEmpty';

export const validate = (values, {translate}) =>
{
    let errors = {};

    username(values, errors, translate);
    password(values, errors, translate);

    return errors;
};

const username = (values, errors, translate) =>
{
    if (isEmpty(values.username)) {
        errors.username = translate('validation.patient.email.required');
    }
};

const password = (values, errors, translate) =>
{
    if (isEmpty(values.password)) {
        errors.password = translate('validation.patient.password.required');
    }
};

