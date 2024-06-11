import Template from './Template'
export default function Variant({
  metadata,
  price,
  currency,
  name,
  description,
  order
}) {
  return (
    <div className="px-[10rem] py-[5rem] w-[80rem]">
      <caption className='table-reusable'>
        {name} ticket
      </caption>
      <table className='table-reusable'>
        <Template value1="field0" value2={metadata.field0} />
        <Template value1="field1" value2={metadata.field1} />
        <Template value1="productionId" value2={metadata.productId} />
        <Template value1="operationId" value2={metadata.operatorId} />
      </table>
      <table className='table-reusable'>
        <Template value1="price" value2={price} />
        <Template value1="currency" value2={currency} />
      </table>
      <table className='table-reusable'>
        <Template value1="name" value2={name.toString()} />
        <Template value1="description" value2={description} />
        <Template value1="order" value2={order} />
      </table>
    </div>
  )
}