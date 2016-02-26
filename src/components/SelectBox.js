import React from 'react';

function SelectBox({
  handleSelect,
  options,
  what,
}) {
  function handleClick(option) {
    return () => handleSelect(option);
  }
  return (
    <div>
      <p>{`Select a ${what} to add`}</p>
      <ul>
        {options.map((o, index) =>
          <li
            key={index}
            onClick={handleClick(o)}
            style={{ display: 'inline-block' }}
          >
            {`<${o}>`}
          </li>
        )}
      </ul>
    </div>
  );
}
const { func, array, string } = React.PropTypes;
SelectBox.propTypes = {
  handleSelect: func,
  options: array,
  what: string,
};

export default SelectBox;
