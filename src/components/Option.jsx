function Option({ option }) {
  return (
    <option className="w-full bg-zinc-300" value={option}>
      {option}
    </option>
  );
}

export default Option;
