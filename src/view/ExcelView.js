import React from 'react';
import Readexcel from '../components/Readexcel';
import { Button } from '@mui/material';


export default function ExcelView() {
    return (
        <div className='container'>
            <a href='/topsis-demo.xlsx' download>
                <Button variant="contained" >Download</Button>
            </a>
            <Readexcel />

        </div>
    )
}

