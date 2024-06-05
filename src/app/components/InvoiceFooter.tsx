import React from "react";

const InvoiceFooter = () => {
  return (
    <div className="border-t border-black pt-2">
      <div className="">
        <div className="border-2">
          <div className="font-bold">Amount in Words:</div>
          <div>One Thousand One Hundred And Ninety-five only</div>
        </div>
        <div className=" text-right">
          <div className="font-bold">For Varasiddhi Silk Exports:</div>
          <div className="h-16 border border-black mt-2 relative"></div>
          <div className="mt-2">Authorized Signatory</div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceFooter;
