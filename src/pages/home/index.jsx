import React from 'react'
import {Button} from 'antd'

console.log('这是获取后的环境变量---------', import.meta.env)
export default function Home() {
  return (
    <div>
      主页面111
      <Button type="primary">按钮11</Button>
    </div>
  )
}