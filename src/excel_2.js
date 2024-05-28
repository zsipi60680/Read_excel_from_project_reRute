import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
  const [addressArray, setAddressArray] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      
      // Assuming the first row is the header row
      const headerRow = data[0];
      const addressColumnIndex = headerRow.findIndex((cell) => cell === 'כתובת');
      
      if (addressColumnIndex !== -1) {
        const addresses = data.slice(1).map((row) => row[addressColumnIndex]);
        setAddressArray(addresses); 
      } 
      else {
        setAddressArray([]);
        console.error('Column "address" not found in the Excel file.');
      }
    };

    reader.readAsBinaryString(file);
  };
  
  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div>
        {addressArray.map((address, index) => (
          <div key={index}>{address},</div>
        ))}
      </div>
    </div>
  );
};

export default ExcelReader;
