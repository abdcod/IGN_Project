import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера
                width: 147,
                height: 4,
                boxShadow: 0,
                '& .MuiSlider-rail': {
                    color: "#8B8B8B"
                },
                '& .MuiSlider-track': {
                    color: "#00CC22",
                    '&:after': {
                        backgroundColor: "#00CC22"
                    }
                },
                '& .MuiSlider-thumb': {
                    color: "white",
                    width: 18,
                    height: 18,
                    border: "1px solid #00CC22",
                    '&:before': {
                        boxShadow: 'none',
                        backgroundColor: "#00CC22",
                        width: 6,
                        height: 6
                    },
                    '&:hover':{
                        boxShadow: 'none',
                    }
                },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange