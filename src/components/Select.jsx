import Option from "./Option";

function Select({ options }) {
  return (
    <select className="w-full p-1 border border-zinc-200 bg-zinc-200 outline-none">
      {options.map((option) => (
        <Option option={option} key={option} />
      ))}
    </select>
  );
}

export default Select;
