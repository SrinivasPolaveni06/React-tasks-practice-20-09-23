import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useContext, useState } from "react";


import { AppContext } from './context/TripDataContext';

function DestinationMode() {
    const stateValues = useContext(AppContext)
    console.log(stateValues, 'useAppContext')
    const transportData = [
        {
            id: '1',
            item: 'Hyderabad',
            item_icon: 'flight-icon ',
        },
        {
            id: '2',
            item: 'Goa',
            item_icon: 'car-icon ',
        },
        {
            id: '3',
            item: 'Delhi',
            item_icon: 'bus-icon ',
        },
        {
            id: '4',
            item: 'Vizag',
            item_icon: 'train-icon ',

        },
    ];

    const handleChange = (event) => {
        stateValues.setAppState((prevState) => ({ ...prevState, destination: event.target.value }));
    };

    return (
        <div className='radio_sheets'>
            <RadioGroup
                aria-label="platform"
                defaultValue="Website"
                value={stateValues.appState.destination} // Set the value of the RadioGroup to the selectedValue
                onChange={handleChange}
                overlay
                name="platform"
                sx={{
                    flexDirection: 'row',
                    gap: 2,
                    [`& .${radioClasses.checked}`]: {
                        [`& .${radioClasses.action}`]: {
                            inset: -1,
                            border: '1px solid',
                            borderColor: '#018AD3',
                            borderRadius: '4px',


                        },
                    },
                    [`& .${radioClasses.radio}`]: {
                        display: 'contents',
                        '& > svg': {
                            zIndex: 2,
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            bgcolor: 'background.surface',
                            borderRadius: '4px',
                        },
                    },
                }}
            >


                {transportData.map((info) => (
                    <Sheet
                        key={info.id}
                        variant="outlined"
                        className="radio_btn"
                    >
                        <Radio id={info.id} value={info.item} checkedIcon={<CheckCircleRoundedIcon />} />
                        <span className={`radio-icon ${info.item_icon}`}></span>
                        <FormLabel htmlFor={info.item}>{info.item}</FormLabel>
                    </Sheet>
                ))}
            </RadioGroup>
        </div>
    )
}

export default DestinationMode
