import React from 'react';
import {
  Collapse,
  Steps,
  Divider,
  Input,
  Upload,
  Modal,
  message,
  Table,
  Tag,
  Space,
  Button,
} from 'antd';

import './index.scss';

const UserManual = () => {
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="user-manual">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Автор" key="1">
          <p>Руководство для автора</p>
        </Panel>
        <Panel header="Сотрудник" key="2">
          <p>Руководство для сотрудника</p>
        </Panel>
        <Panel header="Админ" key="3">
          <p>Руководство для админа</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default UserManual;
