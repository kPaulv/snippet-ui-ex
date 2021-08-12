import "./styles/PostSorter.css"
import React from "react";
import 'antd/dist/antd.css';
import { Select, Button } from 'antd';

const { Option } = Select;

class PostSorter extends React.Component {

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val) => {
        console.log('search:', val);
    }

    render() {
        return (
            <div className="select-section">
                <h3 style={{marginTop: '7%'}}>Sort</h3>
                {/*<select name="sort" className="sort">
                    <option value="date">Date</option>
                    <option value="username">Popularity</option>
                </select>*/}
                <Select
                    className="sort"
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select sort option"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="creationDateTime">Date</Option>
                    <Option value="likes">Popularity</Option>
                </Select>
                <div className="order-buttons">
                    <Button>New first</Button>
                    <Button>Old first</Button>
                </div>

            </div>
        );
    }
}

export default PostSorter;
