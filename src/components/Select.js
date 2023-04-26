export function Select(props) {
  return (
    <div className="autocomplete-container">
      <select
        name={props.formName}
        onChange={props.onChange}
        value={props.formValues[props.formName]}
      >
        <option value="">Select...</option>
        {props.options.length &&
          props.options.map((item) => (
            <option key={item} value={item.title}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
