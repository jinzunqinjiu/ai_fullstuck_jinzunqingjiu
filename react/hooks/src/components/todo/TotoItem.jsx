import React, { useState, useEffect } from 'react';
import { List, Tag } from 'antd';

// 子组件
const TotoItem = (props) => {
  console.log(props.data);
  const [tag, setTag] = useState(props.data)
  useEffect(() => {
    setTag(props.data)
  })
  const valueDelete = (e) => {

    const newData = tag.splice(e, 1)
    setTag(newData)
    e.preventDefault()
  }
  return (
    <div>
      <List
        bordered
        dataSource={tag}
        renderItem={(item, index) => (
          <List.Item>
            {item}
            <Tag closeIcon onClose={() => { valueDelete(index) }}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;