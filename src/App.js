import React from 'react';
import logo from './logo.svg';
import './App.css';
import XLSX from 'xlsx' 
import { saveAs } from 'file-saver';
function App() {




    let wb = XLSX.utils.book_new();
    wb.Props={
      Title:'Demo',
      Subject:'s',
      Author:'a'
    }
    wb.SheetNames.push("Test Sheet");
    let ws_data = ['Id','Date','Company','Company ID','',["3962","30.08.2016",],['a','b']]
    // Id,Date,Company,Company ID,User,User ID,User UUID,Email,Invoice Due Date,Balance Due,Currency,Is Refund,Total,Status 
    let ws_data1 =[
      {"id":"46470","costType":"RECURRING_PER_UNIT","credit":false,"description":"Per User Fee ( Monthly Fee )","edition":{"id":"6711","uuid":"2e634277-6b59-4ab9-b805-8d77d18daab0","name":"Recurring Edition"},"period":"May 3, 2019 - Jun 3, 2019","price":"EUR10.24 / User","quantity":"1","total":"EUR10.24"}
    ]
    // let ws = XLSX.utils.aoa_to_sheet(ws_data, {skipHeader: 1});
    let ws = XLSX.utils.json_to_sheet(ws_data1, {skipHeader: false});
    let wbout = XLSX.write(wb, {bookType:'xlsx', type:'array'});
    wb.Sheets["Test Sheet"] = ws;
     wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});




function convertToXlsx(s) {
 
    let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    let view = new Uint8Array(buf);  //create uint8array as viewer
    for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

  return (
    <div className="App">
     XLSX Download
          <button onClick={()=>saveAs(new Blob([convertToXlsx(wbout)],{type:"application/octet-stream"}), 'test.xlsx')}>download</button>
    </div>
  );
}

export default App;
