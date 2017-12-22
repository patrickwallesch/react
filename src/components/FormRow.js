import React from 'react';

export default class FormRow extends React.Component
{
    render() {
        const { input, label, type, meta: { touched, error } } = this.props;
        return (
            <div className="form-group">
                <label>{label}</label>
                <div>
                    <input className="form-control" {...input} placeholder={label} type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }
}