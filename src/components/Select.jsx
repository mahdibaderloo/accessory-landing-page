import Option from "./Option";

function Select({ options, value, onChange }) {
  return (
    <select
      className="w-full p-1.5 border border-zinc-200 bg-zinc-200 outline-none laptop:text-xl laptop:py-2 laptop:cursor-pointer"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <Option option={option} key={option} />
      ))}
    </select>
  );
}

export default Select;
