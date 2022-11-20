import { useEffect, useMemo, useState } from 'react';
import { Input, DatePicker } from 'antd';
import { Form } from 'antd';
import { FormListData, FormState } from '../store'
import { getId } from '../utils';
import dayjs from 'dayjs';

function debounce(func: any, wait: number) {
  let timeout: number | undefined
  return function (...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = undefined
      func(...args)
    }, wait)
  }
}

const { Item } = Form


export const FormList: FormListData = [
  {
    label: '标题',
    Component: Input,
    name: getId(),
    type: 'title',
    defaultValue:'打卡翠华冰室'
  },
  {
    label: '日期',
    Component: DatePicker,
    name: getId(),
    type: 'datePicker',
    defaultValue:dayjs()
  },
  {
    label: '输入框',
    Component: Input.TextArea,
    name: getId(),
    type: 'textArea',
    props: {
      autoSize: true
    }
  },
  {
    label: '输入框2',
    Component: Input.TextArea,
    name: getId(),
    type: 'textArea',
    props: {
      autoSize: true
    }
  },
  {
    label: '输入框3',
    Component: Input.TextArea,
    name: getId(),
    type: 'textArea',
    props: {
      autoSize: true
    }
  },
]

const WeightLoss = () => {
  const [form] = Form.useForm()

  const formatValue = () => {
    const formValuesString = FormList.map((item) => {
      const val = form.getFieldValue(item.name) || ''
      if (item.type === 'textArea') {
        return String(val || '').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;') || ''
      } else if (item.type === 'datePicker') {
        return `${val ? `📅 ${dayjs(val).format('YYYY-MM-DD')}` : ''}`
      } else if (item.type === 'title') {
        return `<span style="font-weight:600">${val}</span>`
      } else
        return val
    }).map(item=>`<span>${item}</span>`).join('<br/>')
    FormState.formValuesString = formValuesString;
  }

  const initialValues = useMemo(() => {
    return FormList.reduce<Record<string, any>>((pre, item) => {
      pre[item.name] = item?.defaultValue
      return pre
    }, {})
  }, [])

  useEffect(() => {
    FormState.formListData = FormList;
    formatValue()
  }, [])

  const updateDebounce = useMemo(() => {
    return debounce(formatValue, 200)
  }, [])

  return <Form
    form={form}
    labelCol={{ span: 2 }}
    labelAlign="left"
    onValuesChange={(changedValues: any, values: any) => {
      updateDebounce(values)
    }}
    initialValues={initialValues}
  >
    {
      FormList.map(item => {
        const { name, label, Component, props } = item
        return <Item name={name} label={label} key={item.name}>
          <Component style={{ width: '100%' }} {...props} />
        </Item>
      })
    }
  </Form>

}

export default WeightLoss
