import React from 'react';
// import './ImputText.css';


export const InputText = ({
    className,
    type,
    placeholder,
    name,
    required,
    changueFunction,
    blurFunction,
}) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                name={name}
                required={required}
                changueFunction={changueFunction}
                blurFunction={blurFunction}
            />
        </>
    )
}