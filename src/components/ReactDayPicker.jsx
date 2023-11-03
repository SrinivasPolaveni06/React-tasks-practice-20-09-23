import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';
import 'react-day-picker/dist/style.css';

export default function Example() {
    const [selected, setSelected] = React.useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    const SelectContainer = styled.div`
    padding: 4em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `;
    return (
        <SelectContainer >
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </SelectContainer>

    );
}