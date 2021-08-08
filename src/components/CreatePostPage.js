import React from "react";
import './styles/CreatePostPage.css';
import 'antd/dist/antd.css';
import {Form, Input, Button} from 'antd';
//import 'bootstrap/dist/css/bootstrap.min.css';
//const {  Form, Input, InputNumber, Button  } = antd;
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
    render() {
        return (
            <div className="create-post-form">
                <h3 className="create-post-form-header">Create post</h3>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['post', 'title']}
                        label="Title"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={['post', 'description']}
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea/>
                    </Form.Item>

                    <Form.Item name={['post', 'snippet']} label="Code Snippet">
                        <Input.TextArea/>
                    </Form.Item>

                    <Form.Item
                        name={['post', 'language']}
                        label="Language"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input/>
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

