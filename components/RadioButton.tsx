import React from 'react';

type RadioButtonProps = {
  selectedValue: string | null | undefined;
  disabled?: boolean;
  text: string;
  name: string;
  value: string;
};

export default function RadioButton({ selectedValue, text, name, value, disabled }: RadioButtonProps) {
  return (
    <fieldset className="fr-fieldset" style={{ margin: 0, padding: 0 }}>
      <div className="fr-fieldset__content">
        <div className="fr-radio-group" style={{ marginTop: 0 }}>
          <input
            id={value}
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <label className="fr-label" htmlFor={value} style={disabled ? { cursor: 'default' } : {}}>
            {text}
          </label>
        </div>
      </div>
    </fieldset>
  );
}
