import React, { useState } from "react";
import * as XLSX from "xlsx";
export default function Readexcel() {
    const [items, setItems] = useState([]);
    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[1];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        promise.then((d) => {
            setItems(d);
        });
    };
    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
            ></input>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Ci</th>
                        <th scope="col">Rank</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((d) => (
                        <tr key={d.Id}>
                            <th>{d.Id}</th>
                            <th>{d.Ci}</th>
                            <th>{d.Rank}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

