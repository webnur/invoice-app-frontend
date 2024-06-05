import React from "react";

export const CustomerDetails = () => {
  return (
    <div>
      {/* billing address */}
      <div>
        <p className="font-bold">Billing address:</p>
        <p>3601 royez road, chanpur, chittogong, Bangladesh</p>
        <p>chandpur, Chittong Bangladesh</p>
      </div>
      {/* Shipping address */}
      <div className="mt-[20px]">
        <p className="font-bold">Shipping address:</p>
        <p>3601 royez road, chanpur, chittogong, Bangladesh</p>
        <p>chandpur, Chittong Bangladesh</p>
      </div>
      {/* other information */}
      <p>
        <span className="font-bold">STATE/UT Code:</span> 29
      </p>
      <p>
        <span className="font-bold">place of supply:</span>Dhaka
      </p>
      <p>
        <span className="font-bold">place of delevery</span>Dhaka
      </p>
      <p>
        <span className="font-bold">invoice Number:</span> 43 4
      </p>
      <p>
        <span className="font-bold">Invoice Details:</span> 4343
      </p>
      <p>
        <span className="font-bold">Invoice Data:</span> 10.3.2024
      </p>
    </div>
  );
};
