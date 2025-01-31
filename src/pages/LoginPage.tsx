'use client';

import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';

interface FieldType {
    username?: string;
    password?: string;
    remember?: boolean;
}

const LoginPage: React.FC = () => { // Explicitly type the component
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        // Handle form submission here (e.g., API call)
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form<FieldType> // Type the Form component itself
            name="basic"
            style={{ maxWidth: 600 }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                initialValue={false}
                label={<span>&nbsp;</span>}
                style={{ marginBottom: 0 }}
            >
                <Checkbox />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;