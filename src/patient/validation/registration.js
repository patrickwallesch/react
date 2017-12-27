import isEmpty from 'lodash/isEmpty';

export const validate = (values, {translate}) =>
{
    let errors = {};

    email(values, errors, translate);
    password(values, errors, translate);

    return errors;
};

const email = (values, errors, translate) =>
{
    if (isEmpty(values.email)) {
        errors.email = translate('validation.patient.email.required');
    }
};

const password = (values, errors, translate) =>
{
    if (isEmpty(values.password)) {
        errors.password = translate('validation.patient.password.required');
    }
};

