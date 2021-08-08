import React from "react";
//import './styles/CreatePostPage.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

export default class CreatePostPage extends React.Component {
    render() {
        return(
                <Form>
                    <Form.Item
                        name={['post', 'title']}
                        label="Title"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Code snippet">
                        <Input.TextArea />
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
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol>
                        <Button type="light" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
        );
    }
}

