import React from 'react'
import Page from './usecontext/Page'
/*
|---------------------------------------------|
| ==> App                                     |
|      |                                      |
|      |=> Page                               |
|      |     |                                |
|      |     |=> Layout                       |
|      |     |      |                         |
|      |     |      |=> Header                |
|      |     |      |      |                  |
|      |     |      |      |=> User           |
|---------------------------------------------|
*/
const App = () => {
  return (
    <div>
      <Page/>
    </div>
  )
}

export default App
