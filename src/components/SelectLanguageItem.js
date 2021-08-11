import React from "react";
import {Form, Select} from "antd";

const {Option} = Select;

class SelectLanguageItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            languages: [],
            languageId: 0
        }
    }

    componentDidMount() {

    }

    selectChangeHandler = (value) => {
        //debugger;
        this.setState({languageId: value});
        //console.log(value);
        this.props.sendLanguage(value);

        /*switch (value) {
            case 'C++':
                this.setState({language: 1})
                return;

            case 'Java':
                this.setState({languageId: 2})
                return;

            case 'Python':
                this.setState({languageId: 3})
                return;

            case 'JavaScript':
                this.setState({languageId: 4})
                return;

            case 'other':
                return;
        }*/
    }

    render() {
        return (
            <Form.Item
                name={"language"}
                label="Language"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select placeholder="Select language" type="text" onChange={this.selectChangeHandler}
                        name="language" /*value={language}*/ /*value={languageId}*/>
                    <Option name="C++" value="1">
                        C++
                    </Option>
                    <Option name="Java" value="2">
                        Java
                    </Option>
                    <Option name="Python" value="3">
                        Python
                    </Option>
                    <Option name="JavaScript" value="4">
                        JavaScript
                    </Option>
                </Select>
            </Form.Item>
        );
    }
}

export default SelectLanguageItem;
