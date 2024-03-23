import { GroupedDomains } from '../../redux/domains/types';
import React, { FunctionComponent } from 'react';

interface SelectListProps {
  name: string;
  options: string[];
};

export const SelectList: FunctionComponent<SelectListProps> = ({name, options}) => {
  const listOptions = options.map(option =>
    <option value={option} key={option}>{option}</option>
  );
  return (
    <select name={name} id={`${name}-select`} multiple>
      {listOptions}
    </select>
  );
};

class DomainFilter extends React.Component<GroupedDomains> {
  render() {
    const {countries, classifications, subClassifications} = this.props || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

    return (
    <>
      <SelectList name="countries" options={countries} />
      <SelectList name="classifications" options={classifications} />
      <SelectList name="subClassifications" options={subClassifications} />
    </>
    )
  }
};

export default DomainFilter;
