import Template from './Template'
export default function Variant() {
  return (
    <div className="px-[10rem] py-[5rem] w-[80rem]">
      <caption className='table-reusable'>
        Day ticket
      </caption>
      <table className='table-reusable'>
        <Template value1="field0" value2="1" />
        <Template value1="field1" value2="2" />
        <Template value1="productionId" value2="BZ02" />
        <Template value1="operationId" value2="12345" />
      </table>
      <table className='table-reusable'>
        <Template value1="price" value2="4" />
        <Template value1="currency" value2="GBP" />
      </table>
      <table className='table-reusable'>
        <Template value1="name" value2="Day" />
        <Template value1="description" value2="a daily ticket" />
        <Template value1="order" value2="0" />
      </table>
    </div>
  )
}