import React from 'react';

export default class FormRow extends React.Component
{
    render() {
        const { input, label, type, placeholder, meta: { touched, error } } = this.props;
        return (
            <div className="form-group">
                {label && <label>{label}</label>}
                <div>
                    <input className="form-control" {...input} placeholder={placeholder} type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }
}