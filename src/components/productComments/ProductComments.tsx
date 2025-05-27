import { List } from 'antd';
import React from 'react';

interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}

export const ProductComments: React.FC<PropsType> = ({ data }) => {
  return (
    <List
      dataSource={data}
      itemLayout="horizontal"
      renderItem={(item) => {
        return (
          <li>
            {/* <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.createDate}
            /> */}
            {/* {item.author} = {item.avatar} = {item.content} = {item.createDate} */}
            {item.createDate}
          </li>
        );
      }}
    ></List>
  );
};
