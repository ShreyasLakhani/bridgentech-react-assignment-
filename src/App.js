import React, { useState, useEffect } from 'react';
import { Input, Button, List, message } from 'antd';

function App() {
  const [text, setText] = useState('');
  const [queue, setQueue] = useState([]);
  const [finalView, setFinalView] = useState([]);

  const handleAdd = () => {
    setQueue([text, ...queue]);
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
        setFinalView([queue[queue.length - 1], ...finalView]);
        setQueue(queue.slice(0, -1));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [queue, finalView]);


  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='bg-[#F5F5F5] text-[#333333] md:w-[70%] md:h-[70%] xs:w-[80%] xs:h-[90%] rounded-3xl border-2 border-[#696969]'>
        <h1 className='lg:text-4xl md:text-2xl xs:text-xl font-semibold flex justify-center py-3'>React Assignment Header</h1><hr className='border-[#A9A9A9]' />
        <div className='w-full flex flex-col md:flex-row lg:h-[87%] md:h-[89%] '>
          <div className='lg:w-[55%] md:w-[55%] lg:border-r-2 lg:border-r-[#A9A9A9] md:border-r-2 md:border-r-[#A9A9A9]'>
            <div className='flex justify-evenly lg:h-[40%] md:h-[30%]  pt-5'>
              <Input style={{ border: '1px solid #A9A9A9', boxShadow: 'none' }} className='lg:w-[40%] lg:h-[20%] md:w-[40%] md:h-[30%] w-[40%]' placeholder="Input Text" value={text} onChange={e => setText(e.target.value)} />
              <Button className='bg-[#4169E1]' type="primary" onClick={handleAdd}>Add</Button>
            </div>
            <div className='lg:border-t-2 lg:border-t-[#A9A9A9] md:border-0 md:border-t-2 md:border-t-[#A9A9A9] border-b-2 border-b-[#A9A9A9] lg:h-[60%] md:h-[60%] h-[30vh]'>
              <List
                className='pl-3 xs:pl-5'
                dataSource={queue}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </div>
          <div className='lg:w-[45%] lg:h-full md:w-[45%] md:h-full h-[45vh] xs:flex xs:flex-col xs:justify-between'>
            <div className='lg:h-[80%] md:h-[80%] xs:h-[30vh]'>
              <List
                className='pl-3 xs:pl-5'
                dataSource={finalView}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
            <div className='lg:h-[20%] md:h-[20%] flex gap-5 justify-center items-center xs:mb-5'>
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
