import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField } from "@mui/material";


const DatePickers = () => {

    const handleDateChange = (date, prop) => {

    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center py-4"
            style={{ width: "100%" }}>
            <Box mr={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs} className='d-flex'>
                    <Box mr={1}>
                        <DatePicker
                            label="Start Date"
                            value=''
                            // value={new Date()}
                            onChange={(date) => handleDateChange(date, 'startDate')}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </Box>
                    <Box>
                        <DatePicker
                            label="End Date"
                            // value={new Date()}
                            value=''
                            onChange={(date) => handleDateChange(date, 'endDate')}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        // minDate={new Date()}
                        />
                    </Box>
                </LocalizationProvider>
            </Box>
        </div>
    )
}

export default DatePickers