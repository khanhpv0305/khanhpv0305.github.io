import * as Yup from 'yup'

export default Yup.object()
  .shape({
    title: Yup.string().required('Required'),
    descr: Yup.string().required('Required'),
    photographer: Yup.string()
  })