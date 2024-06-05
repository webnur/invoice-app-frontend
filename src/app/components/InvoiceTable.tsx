import React from "react";

const InvoiceTable = () => {
  return (
    <div className="table w-full rounded-lg overflow-hidden mt-[20px]">
      <thead className="text-xs font-medium text-center bg-gray-500 text-white">
        <tr>
          <th className="px-4 py-2">SI. No</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Unit</th>
          <th className="px-4 py-2">Qty</th>
          <th className="px-4 py-2">Net Price</th>
          <th className="px-4 py-2">Tax Rate</th>
          <th className="px-4 py-2">Tax Type</th>
          <th className="px-4 py-2">Tax Amount</th>
          <th className="px-4 py-2">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.items.map((item, index) => (
    
  ))} */}
        <tr className="text-xs border-t border-gray-200 text-center">
          <td className="px-4 py-2"> 1</td>
          <td className="px-4 py-2">description of product</td>
          <td className="px-4 py-2">unit</td>
          <td className="px-4 py-2">3</td>
          <td className="px-4 py-2">10</td>
          <td className="px-4 py-2">2</td>
          <td className="px-4 py-2">CDS</td>
          <td className="px-4 py-2">6</td>
          <td className="px-4 py-2">36</td>
        </tr>
        <tr className="text-xs border-t border-gray-200 text-center">
          <td className="px-4 py-2"> 2</td>
          <td className="px-4 py-2">description</td>
          <td className="px-4 py-2">unit</td>
          <td className="px-4 py-2">4</td>
          <td className="px-4 py-2">15</td>
          <td className="px-4 py-2">2</td>
          <td className="px-4 py-2">cds</td>
          <td className="px-4 py-2">8</td>
          <td className="px-4 py-2">68</td>
        </tr>
        <tr className="text-xs border-t border-gray-200 text-center">
          <td className="px-4 py-2 font-bold"> total Amount</td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2"></td>
          <td className="px-4 py-2 font-bold">104</td>
        </tr>
      </tbody>
    </div>
  );
};

export default InvoiceTable;
