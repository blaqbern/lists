import React, { PropTypes } from 'react';

const SelectBox = ({
  handleSelect,
  options,
  what,
}) => {
  return (
    <div>
      {`Select a ${what} to add`}
      {options.map(
        (o) =>
          <p
            onClick={
              () => handleSelect(o)
            }
            style={{
              'display': 'inline-block'
            }}
          >
            {`<${o}>`}
          </p>
      )}
    </div>
  );
};
SelectBox.propTypes = {
  handleSelect: PropTypes.func,
  options: PropTypes.array,
  what: PropTypes.string,
};

export default SelectBox;
