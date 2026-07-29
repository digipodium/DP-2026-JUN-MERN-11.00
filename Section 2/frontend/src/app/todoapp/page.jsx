'use client';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const TodoApp = () => {

    // let count = 0;

    // const [count, setCount] = useState(0);
    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {

        if (!e.target.value.trim()) return;

        if (e.code === 'Enter') {
            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false };

            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }
    };

    const deleteTask = (index) => {
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    return (
        <div className='bg-gray-100 py-10 min-h-screen'>
            <h2 className='text-center font-semibold text-3xl'>
                Todo App
            </h2>
            <div className='container mx-auto'>

                {/* <h1 className='text-3xl'>
                    Count : {count}
                </h1>
                <button
                    onClick={() => {
                        setCount(count + 1); console.log(count);
                    }}
                    className='border p-3'>
                    add count
                </button> */}

                <div className='bg-white rounded-xl shadow-lg'>
                    <div className='p-3'>
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className='px-4 py-2 rounded-lg border block w-full'
                        />
                    </div>
                    <div className='border-t p-3'>
                        {
                            taskList.length === 0 ? (
                                <p className='text-center text-gray-400 font-semibold'>
                                    No Task Found😢
                                </p>
                            ) : (
                                taskList.map((task, index) => {
                                    return <div key={index}
                                        className='p-3 border mb-4 rounded flex justify-between items-center'>
                                        <div className='flex gap-2'>
                                            <input type="checkbox"
                                                value={task.completed}
                                                onChange={(e) => {
                                                    const temp = taskList;
                                                    temp[index].completed = e.target.checked;
                                                    setTaskList([...temp]);
                                                }}
                                            />
                                            <p>{task.text}</p>
                                        </div>
                                        {
                                            task.completed ? (
                                                <p className='text-white bg-green-600 px-2 text-sm rounded-full'>
                                                    Completed
                                                </p>
                                            ) : (
                                                <p className='text-white bg-yellow-600 px-2 text-sm rounded-full'>
                                                    Pending
                                                </p>
                                            )
                                        }

                                        <button className='border p-1 bg-red-500 text-white rounded'>
                                            <Trash2 size={16} onClick={() => { deleteTask(index) }} />
                                        </button>
                                    </div>
                                })
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoApp;