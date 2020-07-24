import React from 'react'

import { Row, Col } from 'antd';
import { Component } from 'react';
import SelectComponent from './selectComponent';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        { name: "Albania", id: "Albania" },
        { name: "Algeria", id: "Algeria" },
        { name: "American Samoa", id: "American Samoa" },
        { name: "Angola", id: "Angola" },
        { name: "Bahamas", id: "Bahamas" },
        { name: "Bahrain", id: "Bahrain" },
        { name: "Bangladesh", id: "Bangladesh" },
        { name: "Barbados", id: "Barbados" },
        { name: "Belarus", id: "Belarus" },
      ],
      selectedValue: null,
      searchedValue: "",
      showMore: false
    };
  }
 
  onChange = (value) => {
    if (value === "showMore") {
      this.setState({ showMore: true })
    }
    else {
      this.setState({ showMore: false })
    }
    if (value !== "showMore" && value !== "showLess") this.setState({ selectedValue: value })
  }
  addItem = () => {
    this.setState({ countries: [...this.state.countries, { id: this.state.searchedValue, name: this.state.searchedValue }], selectedValue: this.state.searchedValue, searchedValue: "" })
  }

  onSearch = (val) => {
    let addElement = true;
     this.state.countries.map(country => {
      if (country.name.match(val)) addElement = false
    })
    if (addElement) {
      this.setState({ searchedValue: val })
    }
  }
  render() {
    return (
      <Row>
        <Col offset={4} span={12}>
          <div>
            <SelectComponent 
            countries={this.state.countries} 
            showMore={this.state.showMore} 
            addItem={this.addItem} 
            searchedValue={this.state.searchedValue} 
            selectedValue={this.state.selectedValue} 
            onChange={this.onChange} 
            onSearch={this.onSearch}  />
          </div></Col>
      </Row>
    );
  }
}

export default Dropdown;
