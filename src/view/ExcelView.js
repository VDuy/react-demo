import React from 'react';
import Readexcel from '../components/Readexcel';
import Button from '@material-ui/core/Button';

export default function ExcelView() {
    return (
        <div>
            <a href='/topsis-demo.xlsx' download>
                <Button variant="contained" >Download</Button>
            </a>
            <Readexcel />

        </div>
    )
}

