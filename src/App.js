import React from 'react'
import './App.css'

const App = () => (
  <div className='wholeBox'>
    <table>

      {/* tr row we have 6 row  */}   
      <tr>
        {/* th for heading table heading */}
      {/* we want th full width  so we put colSpan={4} below to cover full width */}
<th colSpan={4}>15</th>
      </tr>

<tr>
  {/* td is column we have 4 colum */}
<td>AC</td>
<td>+/-</td>
<td>%</td>
<td>&#xf7;</td>
</tr>


<tr>
<td>7</td>
<td>8</td>
<td>9</td>
<td>x</td>
</tr>

<tr>
<td>4</td>
<td>5</td>
<td>6</td>
<td>-</td>
</tr>

<tr>
<td>1</td>
<td>2</td>
<td>3</td>
<td>+</td>
</tr>

<tr>
  {/* below span 2 mean this soulum take space 2 colum */}
<td colSpan={2}>0</td>
<td>.</td>
<td>=</td>
</tr>




    </table>

  </div>
)

export default App
