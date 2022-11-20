import { proxy } from "valtio";

export type FormListData =  ({
  label: string;
  Component: any,
  name: string,
  defaultValue?:any,
  type: 'string' | 'datePicker' | 'textArea' |'title',
  props?: any
})[]

export const FormState = proxy<{
  formValuesString:string, formListData:FormListData
}>({
  formValuesString:'',
  formListData: []
});
