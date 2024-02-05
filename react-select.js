const reactSelectStyle = {
  singleValue: (provided) => ({
    ...provided,
    color: '#005eef',
    fontWeight: '600',
    width: '9rem',
    fontSize: 'calc(0.3rem + 0.65vw)'
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? '#dadada' : '#dadada;',
    boxShadow: "none",
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "none",
    },
    overflow: 'hidden'
  }),
  option: (provided , state) => ({
    ...provided,
    height: '1.6vw',
    color: state.isSelected ? 'blue' : "black",
    backgroundColor : "white",
    padding: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: 'white',
      color: "#005eef",
    },
    fontSize:"calc(0.2rem + 0.75vw)"
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '5px',
    height:"fit-content",
    paddingBottom:"0.5rem"
  }),
}

const  optionArray = []
for (let index = 0; index < 3; index++) {
    optionArray.push({
        label:index,
        value:index,
        additionadata1:"data1-"+index,
        additionadata2:"data2-"+index,
    })
    
}

  import React from 'react'
  
  const Select = () => {
      //Additionsally dropdownindicator => add dropdown icons with props to check whether it is open or close
    return (
      <div>
            <Select
                        options={optionArray}
                        value={optionArray[0]}
                        styles={reactSelectStyle}
                        isLoading={true}
            />
        
      </div>
    )
  }
  
  export default Select
  