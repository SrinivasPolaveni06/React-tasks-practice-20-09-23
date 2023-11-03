import React from 'react'
import * as changeCase from 'change-case-all';

const TextCaseChanges = () => {
    const text = "Hello, Welcome to My world";
    const casetypes = [
        'camelCase',
        'capitalCase',
        'constantCase',
        'dotCase',
        'headerCase',
        'noCase',
        'paramCase',
        'pascalCase',
        'pathCase',
        "sentenceCase",
        "snakeCase",
        'titleCase',
        'swapCase',
        'isLowerCase',
        'isUpperCase',
        'lowerCase',
        'lowerCaseFirst',
        'upperCase',
        'upperCaseFirst',
        'spongeCase'
    ]
    return (
        <div className='d-flex flex-column align-items-center'>
            {casetypes.map(eachCase => <h4 key={eachCase}>{changeCase[eachCase](text)}</h4>)}

        </div>
    )
}

export default TextCaseChanges