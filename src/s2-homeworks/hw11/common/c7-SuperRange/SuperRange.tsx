import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #01CB22',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#B7B7B7',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
