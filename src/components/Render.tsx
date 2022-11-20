import { useSnapshot } from 'valtio'
import { FormState } from '../store'


export const Render = () => {
  const formState = useSnapshot(FormState)

  return <div className='color-#333' style={{ overflow: 'scroll', width: '100%', height: '100%', padding:5, marginTop: 5, fontSize: 12}}
    dangerouslySetInnerHTML={{ __html: formState.formValuesString }}
  />
}
