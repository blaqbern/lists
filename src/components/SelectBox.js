import React, { PropTypes } from 'react';

function SelectBox({
  handleSelect,
  options,
  what,
}) {
  return (
    <div>
      <p>{`Select a ${what} to add`}</p>
      <ul>
        {options.map(
          (o, index) =>
            <li
              key={index}
              onClick={
                () => handleSelect(o)
              }
              style={{ display: 'inline-block' }}
            >
              {`<${o}>`}
            </li>
        )}
      </ul>
    </div>
  );
}
SelectBox.propTypes = {
  handleSelect: PropTypes.func,
  options: PropTypes.array,
  what: PropTypes.string,
};

export default SelectBox;
