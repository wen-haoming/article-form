import React, { useRef, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Card, MenuProps, Row, Col, Button, message ,ConfigProvider} from 'antd';
import { Layout, Menu, Form } from 'antd';
import zh from 'antd/locale/zh_CN'
import { AddIcon, Render } from './components';
import WeightLoss from './TemplateForm/WeightLoss';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

function copyText(text: string) {
  var textareaC = document.createElement('textarea');
  textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
  textareaC.value = text;
  document.body.appendChild(textareaC); //将textarea添加为body子元素
  textareaC.select();
  var res = document.execCommand('copy');
  document.body.removeChild(textareaC);//移除DOM元素
  console.log("复制成功");
  return res;
}


const { Item } = Form
const App: React.FC = () => {
  const contentRef = useRef<any>()
  const [formData, setFormData] = useState<Record<string, any>>({})

  return (
    <ConfigProvider  locale={zh}>
         <Layout className='layout'>
      <Content>
        <Layout className="site-layout-background" >
          <Sider className="site-layout-background" width={200} style={{ height: '100vh' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['打卡模板', '小红书模板']}
              defaultOpenKeys={['打卡模板', '小红书模板']}
              style={{ height: '100%' }}
              items={[
                {
                  key: '小红书模板',
                  label: `小红书模板`,
                  children: [
                    {
                      key: '打卡模板',
                      label: `打卡模板`,
                    }
                  ]
                }
              ]}
            />
          </Sider>
          <Content style={{ padding: '15px', minHeight: 280, backgroundColor: '#ececec' }}>
            <Row gutter={20}>
              <Col span={17} >
                {/* <Card bordered={false} className="m-b-1 p-0" bodyStyle={{ padding: 7 }} >
                  <div style={{ width: '100%', height: '100%', alignItems: 'center', display: 'flex' }}>
                    <AddIcon />
                  </div>
                </Card> */}
                <Card bordered={false} >
                  <WeightLoss />
                </Card>
              </Col>
              <Col span={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Card bordered={false} bodyStyle={{ padding: 10 }} className="relative">
                  <div style={{ backgroundImage: `url('/article-form/xiaohongshu.png')`, height: 650, width: 300, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', paddingTop: 70, overflow: 'auto', paddingBottom: 65 }}>
                    <img src='/meishi.jpeg' height={300}  />
                    <div ref={contentRef}>
                      <Render />
                    </div>
                  </div>
                  <Button type="primary" block className='mt-5' onClick={() => {
                    copyText(contentRef.current.innerText)
                    message.success('复制成功~')
                  }}>一键复制</Button>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
    </Layout>
    </ConfigProvider>
 
  )
};

export default App;
