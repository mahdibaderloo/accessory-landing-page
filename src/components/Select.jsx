import Option from "./Option";

function Select({ options }) {
  return (
    <select>
      {options.map((option) => (
        <Option option={option} key={option} />
      ))}
    </select>
  );
}

export default Select;
