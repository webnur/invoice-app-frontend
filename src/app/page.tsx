import Image from "next/image";
import InvoiceTable from "./components/InvoiceTable";
import SellerDetails from "./components/SellerDetails";
import { CustomerDetails } from "./components/CustomerDetails";
import InvoiceHeader from "./components/InvoiceHeader";
import InvoiceFooter from "./components/InvoiceFooter";

export default function Home() {
  return (
    <main className="bg-[#FFFFFF]">
      <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
        {/* invoice header */}
        <InvoiceHeader />
        {/* invoice body */}
        <div className="flex justify-between ">
          <SellerDetails />
          <CustomerDetails />
        </div>

        {/* table data  */}
        <InvoiceTable />
        {/* footer */}
        <InvoiceFooter />
      </div>
    </main>
  );
}
