import { FormEventHandler, useState } from 'react';
import Variant from './Variant';
import { Day, Week, Month, UtilsType } from '../utils/utils.ts';
import JSONfile from './JSONfile.tsx';

export default function Form() {
  const [variant, setVariant] = useState<string>("");
  const [ticketDetails, setTicketDetails] = useState<UtilsType | null>(null);
  const [clickBtn, setClickBtn] = useState<string>('');

  function handleVariantChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value: string = e.target.value;
    setVariant(value);
    let details: UtilsType | null = null;
    switch (value) {
      case "Day":
        details = Day;
        break;
      case "Week":
        details = Week;
        break;
      case "Month":
        details = Month;
        break;
      default:
        setClickBtn("")
        break;
    }
    setTicketDetails(details)
  }
  console.log(Day)
  function handleSubmit(e: React.ChangeEvent<FormEventHandler>) {
    e.preventDefault();
    setClickBtn("generate");
  }

  const ticketData = {
    activationType: "OnPurchase",
    name: "Adult Tickets",
    status: "Published",
    description: "Allows an adult to travel in zones 1+2 of city ABC.",
    priceRange: "£4.00 - £75.00",
    variants: ticketDetails ? [ticketDetails] : []
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clickBtn === "generate" ? "centeredCalc flex flex-row justify-between w-5/6 h-5/6 p-[1rem]" : "centeredCalc flex flex-col justify-between w-5/6 h-5/6 p-[5rem]"}>
        <div className="flex flex-col justify-center w-full">
          <div className="centeredCalc flex flex-col justify-center w-5/6">
            <div className="centeredCalc flex flex-row justify-center w-5/6 mb-10">
              <div className="flex justify-start w-3/6">
                <label>
                  Select ticket type:
                </label>
                <select className="mr-[2rem]">
                  <option>select..</option>
                  <option>Adult</option>
                  <option>Student</option>
                </select>
              </div>

            </div>
            <div
              className="centeredCalc flex flex-row justify-center w-5/6">
              <div className="flex justify-start w-3/6">
                <label className="mr-[2rem]">select ticket variant</label>
                <select onChange={handleVariantChange}>
                  <option value="">Select...</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
            </div>

          </div>
          <div className="flex justify-center ">
            {variant && ticketDetails && <Variant {...ticketDetails} />}
          </div>
          <div className="w-[35rem] mt-[5rem]"
            style={{ marginLeft: "calc((100% - 35rem) / 2)" }}>
            <div className="border-solid border-black border-2 w-full text-center px-[2rem] py-[1rem]">
              <button type="submit">generate JSON ticket</button>
            </div>
          </div>
        </div>
        {clickBtn === "generate" && (
          <div className="w-[40rem] ">
            <JSONfile details={ticketData} />
          </div>
        )}
      </form>
    </>
  )
}