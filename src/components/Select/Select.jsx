import { useState } from 'react'
import './Select.css'

const Select = () => {
    const [openClass, setOpenClass] = useState('hidden')
    const [currentValue, setCurrentValue] = useState('Default')

    const toggleSelect = () => (openClass === 'hidden' ? setOpenClass('show') : setOpenClass('hidden'))

    const toggleCurentValue = (e, setState) => {
        setState(e.target.textContent)
        toggleSelect()
    }

  return (
    <div class="select">
        <div class="select__header" onClick={toggleSelect}>
              <span class="select__current">{currentValue}</span>
            <div class="select__icon">&times;</div>
        </div>

        <div class={`select__body ${openClass}`}>
            <div onClick={(e) => toggleCurentValue(e, setCurrentValue)} class="select__item">Понедельник</div>
            <div onClick={(e) => toggleCurentValue(e, setCurrentValue)} class="select__item">Вторник</div>
            <div onClick={(e) => toggleCurentValue(e, setCurrentValue)} class="select__item">Среда</div>
            <div onClick={(e) => toggleCurentValue(e, setCurrentValue)} class="select__item">Четверг</div>
            <div onClick={(e) => toggleCurentValue(e, setCurrentValue)} class="select__item">Пятница</div>
        </div>
    </div>
  )
}

export default Select