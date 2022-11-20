import { Col, Input, Row, Button, Popover } from "antd"
import { FC, useMemo, useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { PlusCircleOutlined } from "@ant-design/icons";

export const AddIcon = ()=>{
  const [open, setOpen] = useState(false);

  return  <Popover trigger="click" open={open} onOpenChange={(val) => setOpen(val)} content={<div>
    <EmojiPicker onEmojiClick={(val) => {
      // onChange && onChange(value += val.emoji);
      setOpen(false);
    }}
    />
  </div>}>
    <PlusCircleOutlined />
  </Popover>
  
}
