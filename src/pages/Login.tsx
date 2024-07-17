import type { FormProps } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Checkbox, Form, Input } from 'antd';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { decodeToken } from '../utils/decodeToken';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/auth/authSlice';

type FieldType = {
    id?: string;
    password?: string;
    remember?: string;
};


const Login = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [login, { error }] = useLoginMutation();
    const dispatch = useDispatch();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const response = await login(values).unwrap();
        const userData = decodeToken(response.data.accessToken);
        console.log(userData);
        dispatch(setUser({ user: userData, token: response.data.accessToken }))
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="id"
                name="id"
                rules={[{ required: true, message: 'Please input your id!' }]}
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

            {/* <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;