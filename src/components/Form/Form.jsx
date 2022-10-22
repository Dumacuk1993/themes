import React, { useState } from 'react'
import useTheme from '../../hooks/useTheme';
import './Form.css'

const Form = () => {
  const [themeInputValue, setThemeInputValue] = useState(localStorage.getItem('theme') || 'light');
  const [titleInputValue, setTitleInputValue] = useState(localStorage.getItem('title') || '');
  const [sizeInputValue, setSizeInputValue] = useState(localStorage.getItem('size') || '');
  const [code1InputValue, setCode1InputValue] = useState(localStorage.getItem('code1') || '');
  const [code2InputValue, setCode2InputValue] = useState(localStorage.getItem('code2') || '');
  const [code3InputValue, setCode3InputValue] = useState(localStorage.getItem('code3') || '');
  const {theme, setTheme} = useTheme()
  const [openClassDay, setOpenClassDay] = useState('hidden')
  const [currentDay, setCurrentDay] = useState(localStorage.getItem('day') || '')
  const [openClassWidth, setOpenClassWidth] = useState('hidden')
  const [currentWidth, setCurrentWidth] = useState(localStorage.getItem('width') || '')
  const [openClassHomepage, setOpenClassHomepage] = useState('hidden')
  const [currentHomepage, setCurrentHomepage] = useState(localStorage.getItem('homepage') || '')

  const changeTheme = (e) => (setThemeInputValue(e.target.value))

  const saveDataInLocalStorage = () => {
    localStorage.setItem('day', currentDay);
    localStorage.setItem('width', currentWidth);
    localStorage.setItem('homepage', currentHomepage);
    localStorage.setItem('title', titleInputValue);
    localStorage.setItem('size', sizeInputValue);
    localStorage.setItem('code1', code1InputValue);
    localStorage.setItem('code2', code2InputValue);
    localStorage.setItem('code3', code3InputValue);
  }

  const resetState = () => {
    setThemeInputValue('light')
    setTitleInputValue('')
    setSizeInputValue('')
    setCode1InputValue('')
    setCode2InputValue('')
    setCode3InputValue('')
    setCurrentDay('')
    setCurrentWidth('')
    setCurrentHomepage('')
  }
  
  const toggleTheme = (e) => {
    e.preventDefault()
    setTheme(themeInputValue)
    localStorage.setItem('theme', themeInputValue);
    saveDataInLocalStorage()
  }

  const toggleSelect = (state, setState) => (state === 'hidden' ? setState('show') : setState('hidden'))

  const toggleCurentValue = (e, state, setState, setClass) => {
      setClass(e.target.textContent)
      toggleSelect(state, setState)
  }

  const resetForm = () => {
    resetState()

    setTheme(themeInputValue)
    localStorage.setItem('theme', themeInputValue);
    saveDataInLocalStorage()
  }

  const closeSelect = () => {
    if (openClassDay === 'show') {
      setOpenClassDay('hidden')
    }
    if (openClassWidth === 'show') {
      setOpenClassWidth('hidden')
    }
    if (openClassHomepage === 'show') {
      setOpenClassHomepage('hidden')
    }
  }
  

  return (
    <section className={`main ${theme}`} onClick={closeSelect}>
      <div className="container">
        <div className="main__wrapper">
          <h1 className="main__form-title">Preferences</h1>
          <h2 className="main__form-description">On this page you can configure the main system parameters available for customization</h2>
          <form className="main__form" onSubmit={toggleTheme}>
            <div className="text-field">
              <label htmlFor='companyTitle' className="text-field__lable">Company Title</label>
              <input type="text" value={titleInputValue} onChange={(e) => {setTitleInputValue(e.target.value)}} name='companyTitle' placeholder='Default' className="text-field__input" />
            </div>
            <div className="text-field">
              <label className="text-field__lable">First Day</label>
                <div className="select">
                <div className={`select__header ${openClassDay === 'show' ? 'select__header--focus' : ''}`} onClick={() => toggleSelect(openClassDay, setOpenClassDay)}>
                        <span className="select__current">{currentDay}</span>
                        <div className="select__icon">{
                          openClassDay === 'hidden' ?
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.41 0.579956L6 5.16996L10.59 0.579956L12 1.99996L6 7.99996L0 1.99996L1.41 0.579956Z" fill='var(--color-text-300)' />
                            </svg>
                          :  
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.59 8L6 3.41L1.41 8L-1.2414e-07 6.58L6 0.58L12 6.58L10.59 8Z" fill="var(--border-color)"/>
                            </svg>
                          }  
                        </div>
                  </div>
                  <div className={`select__body ${openClassDay}`}>
                      <div onClick={(e) => toggleCurentValue(e, openClassDay, setOpenClassDay, setCurrentDay)} className="select__item">Monday</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassDay, setOpenClassDay, setCurrentDay)} className="select__item">Sunday</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassDay, setOpenClassDay, setCurrentDay)} className="select__item">System</div>
                  </div>
                </div>
            </div>
            <div className="text-field">
              <label className="text-field__lable">Container Width</label>
                <div className="select">
                <div className={`select__header ${openClassWidth === 'show' ? 'select__header--focus' : ''}`} onClick={() => toggleSelect(openClassWidth, setOpenClassWidth)}>
                        <span className="select__current">{currentWidth}</span>
                        <div className="select__icon">{
                          openClassWidth === 'hidden' ?
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.41 0.579956L6 5.16996L10.59 0.579956L12 1.99996L6 7.99996L0 1.99996L1.41 0.579956Z" fill='var(--color-text-300)' />
                            </svg>
                          :  
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.59 8L6 3.41L1.41 8L-1.2414e-07 6.58L6 0.58L12 6.58L10.59 8Z" fill="var(--border-color)"/>
                            </svg>
                          }  
                        </div>
                  </div>
                  <div className={`select__body ${openClassWidth}`}>
                      <div onClick={(e) => toggleCurentValue(e, openClassWidth, setOpenClassWidth, setCurrentWidth)} className="select__item">Fixed</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassWidth, setOpenClassWidth, setCurrentWidth)} className="select__item">Sunday</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassWidth, setOpenClassWidth, setCurrentWidth)} className="select__item">System</div>
                  </div>
                </div>
            </div>
            <div className="text-field">
              <label className="text-field__lable">Homepage</label>
                <div className="select">
                <div className={`select__header ${openClassHomepage === 'show' ? 'select__header--focus' : ''}`} onClick={() => toggleSelect(openClassHomepage, setOpenClassHomepage)}>
                        <span className="select__current">{currentHomepage}</span>
                        <div className="select__icon">{
                          openClassHomepage === 'hidden' ?
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.41 0.579956L6 5.16996L10.59 0.579956L12 1.99996L6 7.99996L0 1.99996L1.41 0.579956Z" fill='var(--color-text-300)' />
                            </svg>
                          :  
                            <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.59 8L6 3.41L1.41 8L-1.2414e-07 6.58L6 0.58L12 6.58L10.59 8Z" fill="var(--border-color)"/>
                            </svg>
                          }  
                        </div>
                  </div>
                  <div className={`select__body ${openClassHomepage}`}>
                      <div onClick={(e) => toggleCurentValue(e, openClassHomepage, setOpenClassHomepage, setCurrentHomepage)} className="select__item">Starred Projects</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassHomepage, setOpenClassHomepage, setCurrentHomepage)} className="select__item">Sunday</div>
                      <div onClick={(e) => toggleCurentValue(e, openClassHomepage, setOpenClassHomepage, setCurrentHomepage)} className="select__item">System</div>
                  </div>
              </div>
            </div>
            <div className="text-field">
              <label htmlFor='indentSize' className="text-field__lable">Indent Size</label>
              <input type="text" value={sizeInputValue} onChange={(e) => {setSizeInputValue(e.target.value)}} name='indentSize' placeholder='Default' className="text-field__input" />
            </div>
            <div className="text-field">
              <label htmlFor='personalCode1' className="text-field__lable">Personal Code</label>
              <div className="text-field__wrapper">
                <div className='text-field__inner'>
                  <input type="text" value={code1InputValue} onChange={(e) => {setCode1InputValue(e.target.value)}} name='personalCode1' placeholder='1645' className="text-field__input-code" />
                  <span>-</span>
                  <input type="text" value={code2InputValue} onChange={(e) => {setCode2InputValue(e.target.value)}} name='personalCode2' placeholder='1566' className="text-field__input-code" />
                  <span>-</span>
                  <input type="text" value={code3InputValue} onChange={(e) => {setCode3InputValue(e.target.value)}} name='personalCode3' placeholder='1249' className="text-field__input-code" />
                </div>
                <span className="text-field__digits">12 digits</span>
              </div>
            </div> 
            <div className="theme-field">
              <label htmlFor='theme' className="theme-field__title">Theme</label>
              <div className='theme-field__wrapper'>
                <label className="theme-field__lable">
                  <input
                    className='theme-field__radio'
                    type="radio" 
                    value="light"
                    checked={themeInputValue === 'light' ? true : false}
                    onChange={changeTheme}
                  />
                  <span className='theme-field__radio--style'></span>
                  <p>Light</p> 
                </label>
                <label  className="theme-field__lable">
                  <input
                      className='theme-field__radio'
                      type="radio"
                      value="dark"
                      checked={themeInputValue === 'dark' ? true : false}
                      onChange={changeTheme}
                  />
                  <span className='theme-field__radio--style'></span>
                  <p>Dark</p>
                </label>  
              </div>
            </div>
            <div className="form-buttons">
              <button className='form-buttons-submit' type='submit' >Apply and Save</button> 
              <button className='form-buttons-reset' onClick={resetForm}>Cancel</button>
            </div> 
          </form>
        </div>
        <footer className="main__footer">
          <p>2020-2022 <a href="#">Terms of Service</a> and <a href="#">Conditions</a></p>
        </footer>
      </div>  
    </section>
  )
}

export default Form;