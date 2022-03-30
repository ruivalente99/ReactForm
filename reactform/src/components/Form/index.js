import React, { useState } from 'react'
import CountrySelector from './CountrySelector'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid
} from '@mui/material'
import { Button, TextField } from '@mui/material'
export function Form () {
  const dataModel = {
    name: '',
    age: '',
    country: '',
    stealData: false
  }
  const [data, setData] = useState(dataModel)
  const handleSubmit = () => {
    alert(JSON.stringify(data, null, 2))
  }
  const handleReset = () => {
    setData(dataModel)
  }
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Card sx={{ allignContent: 'center' }}>
        <CardHeader title='Form title' />
        <CardContent>
          <Grid direction='column' alignItems='center'>
            <TextField
              onChange={e =>
                setData(Object.assign({}, data, { name: e.target.value }))
              }
              value={data.name}
              label={'Name'} //optional
            />
            <br />
            <br />

            <TextField
              error={data.age <= 0 && data.age !== ''}
              onChange={e =>
                setData(Object.assign({}, data, { age: e.target.value }))
              }
              helperText='The age must be over 0'
              value={data.age}
              type={'number'}
              label={'Age'}
            />

            <br />
            <br />

            <CountrySelector
              value={data.country}
              onChange={e => setData(Object.assign({}, data, { country: e }))}
            />

            <br />
            <br />

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.stealData}
                    onChange={e =>
                      setData(
                        Object.assign({}, data, {
                          stealData: e.target.checked
                        })
                      )
                    }
                  />
                }
                label='I have read the terms and conditions and agree'
              />
            </FormGroup>
          </Grid>
          <Box>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
