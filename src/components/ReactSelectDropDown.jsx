import React, { useState } from 'react';
import Select from 'react-select';
import * as changeCase from 'change-case-all';
import styled from 'styled-components';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'minto-chocolate', label: 'minto-Chocolate' },
    { value: 'five star strawberry', label: 'five star strawberry' },
    { value: 'vanilla ice cream', label: 'vanilla ice cream' },
    { value: 'dark-chocolate', label: 'dark-Chocolate' },
    { value: 'strawberry-chocolate', label: 'Strawberry-chocolate' },
    { value: 'dark-fantasy', label: 'dark-fantasy' },
];

export default function ReactSelectDropDown() {
    const [selectedOption, setSelectedOption] = useState(null);

    const SelectContainer = styled.div`
    padding: 4em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `;

    const DrapDown = styled.div`
    width:300px;
    `
    const TextParagraph = styled.p`
    font-size:15px;
    font-weight:400;
    margin:10px;
    `
    const SelectedValue = styled.span`
    font-size:16px;
    font-weight:600;
    margin:10px;
    `
    console.log(selectedOption, "select")
    return (
        <SelectContainer >
            <DrapDown>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </DrapDown>
            {selectedOption ? <TextParagraph>Selected Value Is<SelectedValue>{changeCase.capitalCase(selectedOption.value)}</SelectedValue></TextParagraph> : null}
        </SelectContainer>
    );
}