import React from "react";
import {Form, Select} from "antd";
import axios from "axios";

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
        axios.get('https://localhost:44384/Language?count=2147483647')
            .then(response => {
                console.log(response);
                this.setState({languages: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    selectChangeHandler = (value) => {
        this.setState({languageId: value});
        this.props.sendLanguage(value);
    }

    render() {
        const {languages} = this.state

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
                    {
                        languages.length ?
                            languages.map(language => <Option key={language.id} value={language.id}>
                                {language.name}
                            </Option>) :
                            null
                    }
                </Select>
            </Form.Item>
        );
    }
}

export default SelectLanguageItem;
