import { FC, useContext } from 'react'
import { FilterContext } from '@/pages'

interface filterOptionInterface {
  name: string
  label: string
}

const Item: FC<filterOptionInterface> = ({name, label}) => {
  const countContext = useContext(FilterContext);

  const handleChange = (event: any) => {
    
    if(event.target.checked) {
      countContext.filterDispatch({filter: event.target.value, type: 'add'});
    } else {
      countContext.filterDispatch({filter: event.target.value, type: 'remove'});
    }
  }

  return <>
      <div className="filter-option__item">
        <input type="checkbox" className="form-checkbox" id={name} name={name} value={name} onChange={handleChange} />
        <label htmlFor={name} className="filter-option__item__label"> {label}</label>
      </div>
  </>
}

export default Item;