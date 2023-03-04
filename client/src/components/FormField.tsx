import React, { ChangeEventHandler, MouseEventHandler } from 'react';

type FormFieldProps ={
    labelName: string,
    type: string,
    name: string,
    placeholder: string,
    value: string | number | readonly string[] | undefined,
    handleChange?: ChangeEventHandler<HTMLInputElement>,
    isSurpriseMe?: boolean,
    handleSurpriseMe?: MouseEventHandler<HTMLButtonElement>
}

const FormField = (props: FormFieldProps) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor={props.name} className='block text-sm font-medium text-gray-900'>{props.labelName}</label>
                {props.isSurpriseMe && (
                    <button
                        type='button'
                        onClick={props.handleSurpriseMe}
                        className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
                    >
                    Surprise me
                    </button>
                )}
            </div>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
            />
        </div>
    )
}

export default FormField