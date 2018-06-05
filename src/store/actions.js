import {LOADING} from './mutation-types'
const getData = async ({commit} , id)=>{
  commit(LOADING , true)
  const res = await new Promise((res , ref)=>{
    setTimeout(()=>{res('data')} , 5000)
  })
  commit(LOADING , false)
  return res
}

export default {
  getData
}
