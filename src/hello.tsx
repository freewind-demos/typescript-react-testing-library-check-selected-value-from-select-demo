import React, {useState} from 'react'

export default function Hello() {
  const [selectedValue, setSelectedValue] = useState('222');

  return <div>
    <div>Hello, {name}</div>
    <select value={selectedValue} onChange={(v) => setSelectedValue(v.target.value)}>
      <option value='111'>111</option>
      <option value='222'>222</option>
      <option value='333'>333</option>
    </select>
  </div>
};

