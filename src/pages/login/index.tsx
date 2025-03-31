import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form, Input, message } from 'antd';

import styles from './index.module.css';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    // TODO: 替换为实际登录API
    console.log('Received values:', values);
    setTimeout(() => {
      setLoading(false);
      message.success('登录成功');
      navigate('/');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>系统登录</h2>
        <Form name='login' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder='用户名' />
          </Form.Item>

          <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder='密码' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' loading={loading} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
