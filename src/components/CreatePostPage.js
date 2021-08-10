import React from "react";
import './styles/CreatePostPage.css';
import 'antd/dist/antd.css';
import {Form, Input, Button, Select} from 'antd';
import axios from "axios";

const {Option} = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    }
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = (values) => {
    console.log(values);
};

export default class CreatePostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tittle: '',
            description: '',
            languageId: 0,
            snippetCode: '',
            tags: []
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    selectChangeHandler =(value) => {
        switch (value) {
            case 'C++':
                this.setState({languageId: 1})
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
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        console.log(this.state);
        const data = {
            tittle: this.state.tittle,
            description: this.state.description,
            languageId: this.state.languageId,
            snippetCode: this.state.snippetCode,
            tags: this.state.tags
        };

        console.log("show data");
        console.log(data);

        const options = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        axios.post("https://localhost:44384/Post", data, options)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { tittle, description, snippetCode, language } = this.state

        return (
            <div className="create-post-form">
                <h3 className="create-post-form-header">Create post</h3>
                <Form {...layout} name="nest-messages" onFinish={onFinish}
                      validateMessages={validateMessages}
                      onSubmitCapture={this.submitHandler}>
                    <Form.Item
                        name={"tittle"}
                        label="Title"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input type="text" name="tittle" value={tittle}
                               onChange={this.changeHandler}/>
                    </Form.Item>

                    <Form.Item
                        name={"description"}
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea name="description" value={description}
                                        onChange={this.changeHandler}/>
                    </Form.Item>

                    <Form.Item name={"snippetCode"} label="Code Snippet">
                        <Input.TextArea name="snippetCode" value={snippetCode}
                                        onChange={this.changeHandler}/>
                    </Form.Item>

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
                            name="language" value={language}>
                            <Option name="C++" value="C++">
                                C++
                            </Option>
                            <Option name="Java" value="Java">
                                Java
                            </Option>
                            <Option name="Python" value="Python">
                                Python
                            </Option>
                            <Option name="JavaScript" value="JavaScript">
                                JavaScript
                            </Option>
                        </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 4}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

