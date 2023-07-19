/** @format */

import React from 'react';
import { Col } from 'antd';
import { ColProps, Form, FormItemProps, Input, InputProps, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { TextAreaProps } from 'antd/es/input';
import createStyle from './styles';

const { Text } = Typography;

type IFormInput = ColProps &
  FormItemProps &
  InputProps &
  TextAreaProps & {
    type?: 'input' | 'password' | 'textArea';
  };

const InputCus: React.FC<IFormInput> = props => {
  const { styles } = createStyle();

  const { label, name, rules, required = false, type = 'input', ...rest } = props;

  let child: React.ReactNode;
  switch (type) {
    case 'input':
      child = <Input {...rest} className={styles.testNe} />;
      break;
    case 'password':
      child = (
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          {...rest}
        />
      );
      break;
    case 'textArea':
      child = <Input.TextArea {...rest} />;
  }

  return (
    <Col {...rest}>
      <Form.Item
        label={
          <Text>
            {label}
            {required && <Text type='danger'>*</Text>}
          </Text>
        }
        name={name}
        rules={rules}
      >
        {child}
      </Form.Item>
    </Col>
  );
};

export default InputCus;
