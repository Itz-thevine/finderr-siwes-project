import React from 'react'
import { Table } from 'antd'
import { dataSource, columns } from './data'

function TableComp() {
  return (
    <div style={{ width: '85%', margin: 'auto' }}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default TableComp;
