import Option from "./Option";

function Select({ options, value, onChange }) {
  return (
    <select
      className="w-full p-1 border border-zinc-200 bg-zinc-200 outline-none"
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
