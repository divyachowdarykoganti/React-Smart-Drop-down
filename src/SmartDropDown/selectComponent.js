import React from 'react'
import { Select } from 'antd';
import { Component } from 'react';
import './dropdown.css';
const { Option } = Select;


class SelectComponent extends Component {
 
    render() {
        let { countries, searchedValue, onSearch, showMore, selectedValue, onChange, addItem } = this.props;
       countries=countries.sort((a,b)=>a.name.localeCompare(b.name))
        let countriesList = countries.length && countries.map((item, i) => {
            if (i < 5 && !showMore) return <Option key={i} value={item.id}>{item.name}</Option>
            else if (showMore) return <Option key={i} value={item.id}>{item.name}</Option>
        });
        let showMorebtn = <Option className="showOptions" value="showMore" >Show More</Option>
        let showlessbtn = <Option className="showOptions" value="showLess">Show Less</Option>
        let addItemToList = <span className="addButton" onClick={() => addItem()} >Add & Select</span>
        
        return (
            <div>
                <Select showSearch
                    style={{ width: 200, margin:10 }}
                    placeholder="Select a country"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={(e) => onSearch(e)}
                    value={searchedValue !== "" ? searchedValue : selectedValue}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {countriesList}
                    {!showMore ? showMorebtn : showMore ? showlessbtn : null}
                </Select>
                {searchedValue !== "" ? addItemToList : null}
            </div>
        );
    }
}

export default SelectComponent;
