import { Col, Input, Row, Button, Popover } from "antd"
import { FC, useMemo, useState } from "react";
import EmojiPicker from 'emoji-picker-react';

const IconInput: FC<{
  value?: string;
  onChange?: (val: string) => void;
}> = ({ value = '', onChange }) => {
  const [open, setOpen] = useState(false);

  return <Input.Group>
    <Row >
      <Col span={21}>
        <Input.TextArea value={value} onChange={(val) => onChange && onChange(val.target.value)} style={{ width: '100%' }} />
      </Col>
      <Col span={3}>
        
      </Col>
    </Row>
  </Input.Group>
}

export default IconInput
