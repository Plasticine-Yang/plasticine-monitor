import { emitJSError } from '@utils/emit-error'

import s from './style.module.scss'

export const Panel: React.FC = () => {
  return (
    <section className={s.panel}>
      <button onClick={() => emitJSError()}>emit js error</button>
    </section>
  )
}
