import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'
export function Form () {
  const dataModel = {
    name: '',
    age: '',
    country: '',
    email: '',
    stealData: false
  }
  const [data, setData] = useState(dataModel)
  return (
    <Card>
      <CardHeader title='Form title' />
      <CardContent>Content</CardContent>
    </Card>
  )
}
