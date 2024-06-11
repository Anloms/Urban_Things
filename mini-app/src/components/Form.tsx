export default function Form() {
  return (
    <>
      <form

        className="centeredCalc flex flex-col justify-between w-5/6 h-5/6 p-[5rem] bg-pink-400">
        <div className="bg-green-400 flex flex-col justify-center w-full">
          <div className="centeredCalc bg-blue-300 flex flex-col justify-center w-5/6">
            <div className="centeredCalc bg-violet-500 flex flex-row justify-center w-5/6 mb-10">
              <div className="bg-yellow-300 flex justify-start w-3/6">
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
                <select>
                  <option value="">Select...</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
            </div>

          </div>
          <div className="w-[35rem] mt-[5rem]"
            style={{ marginLeft: "calc((100% - 35rem) / 2)" }}>
            <div className="p-2 border-solid border-black border-2 w-full text-center flex flex-row justify-between px-[2rem]">
              <button type="submit">generate JSON ticket</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}