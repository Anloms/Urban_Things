export default function JSONfile({ details }) {
  return (
    <div className="w-full h-full p-4 border border-black">
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </div>
  );
}
