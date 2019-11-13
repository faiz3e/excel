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
    let ws_data = [['data1','data2'],['a','b']]

    let ws = XLSX.utils.aoa_to_sheet(ws_data, {skipHeader: 1});
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
