import React from 'react';

type FormFieldProps ={
    labelName: string,
    type: string,
    name: string,
    placeholder: string,
    value: {},
    handleChange: {},
    isSurpriseMe?: boolean,
    handleSurpriseMe?: {}
}

const FormField = (props: FormFieldProps) => {
    return (
        <div>FormField</div>
    )
}

export default FormField