import React from "react";

const InvoiceHeader = () => {
  return (
    <div className="flex justify-between py-6">
      <div>
        <h1 className="font-bold text-[25px]">Nur Shop</h1>
      </div>
      <div className="mr-[93px]">
        <p>text Invoice/Bill of supply/ Cash Memo</p>
        <p>(Origilal for Recipie)</p>
      </div>
    </div>
  );
};

export default InvoiceHeader;
