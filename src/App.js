import React, { useState, useEffect } from 'react';
import { Input, Button, List, message } from 'antd';

function App() {
  const [text, setText] = useState('');
  const [queue, setQueue] = useState([]);
  const [finalView, setFinalView] = useState([]);

  const handleAdd = () => {
    setQueue([text,...queue]);
    setText('');
  };

  const handleEnd = () => {
    if (queue.length === 0) {
      message.success('Success!');
    } else {
      const interval = setInterval(() => {
        if (queue.length === 0) {
          clearInterval(interval);
          message.success('Success!');
        }
      }, 10000);
    }
  };

  const handleReset = () => {
    setQueue([]);
    setFinalView([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (queue.length > 0) {
        setFinalView([...finalView, queue[0]]);
        setQueue(queue.slice(1));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [queue, finalView]);

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='bg-[#F5F5F5] text-[#333333] w-[70%] h-[70%] rounded-3xl border-2 border-[#696969] shadow-lb'>
        <h1 className='text-4xl font-semibold flex justify-center py-3'>React Assignment Header</h1><hr className='border-[#A9A9A9]' />
        <div className='w-full flex h-[87%] '>
          <div className='w-[55%] border-r-2 border-r-[#A9A9A9]'>
            <div className='flex justify-evenly h-[40%] pt-5'>
              <Input style={{ border: '1px solid #A9A9A9', boxShadow: 'none' }} className='w-[40%] h-[20%] ' placeholder="Input Text" value={text} onChange={e => setText(e.target.value)} />
              <Button className='bg-[#4169E1]' type="primary" onClick={handleAdd}>Add</Button>
            </div>
            <div className='border-t-2 border-t-[#A9A9A9] h-[60%]'>
              <List
                dataSource={queue}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </div>
          <div className='w-[45%]'>
            <div className='h-[80%]'>
              <List
                dataSource={finalView}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
            <div className='h-[20%] flex gap-5 justify-center items-center'>
              <Button className='bg-[#4169E1]' type="primary" onClick={handleEnd}>End</Button>
              <Button className='bg-[#4169E1]' type="primary" onClick={handleReset}>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
