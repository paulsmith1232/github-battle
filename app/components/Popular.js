import React from 'react'

function LanuagesNav ({ selected, onUpdateLanguage}){
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'Remove this']

  return (
    <ul className='flex-center'>
      {languages.map((language)=> (
      <li key={language}>
        <button 
          className='btn-clear nav-link'
          style = {language === selected ? {color: 'rgb(187, 46, 31)'} : null}
          onClick={() => onUpdateLanguage(language)}>
          {language}
        </button>        
      </li>
      ))}
    </ul>
  )
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this) 
  }
  updateLanguage (selectedLanguage) {
    this.setState({ //setstate called in order to trigger the re-render
      selectedLanguage
    })
  }
  render(){
    const { selectedLanguage} = this.state

    return (
      <React.Fragment>
        <LanuagesNav
        selected = {selectedLanguage}
        onUpdateLanguage = {this.updateLanguage}
        />

      </React.Fragment>
    )
  }
}