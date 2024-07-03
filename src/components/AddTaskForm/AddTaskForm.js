import { Form, Stack, TextInput, Button, InlineNotification } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import React, { useState } from 'react';

export const AddTaskForm = () => {
    const [taskInput, setTaskInput] = useState('');
    const [showNotification, setShowNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskInput) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            const newTask = {
                id: new Date().getTime(),
                text: taskInput,
                done: false,
            };

            tasks.push(newTask);

            localStorage.setItem('tasks', JSON.stringify(tasks));

            setShowNotification(taskInput);

            setTaskInput('');
        }
    };

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    return (
        <>
            <Form aria-label="add task form" className='formPadding' onSubmit={handleSubmit}>
                <Stack gap={7}>
                    <TextInput
                        labelText="Task"
                        value={taskInput}
                        onChange={handleInputChange}
                    />

                    <Button renderIcon={Add} iconDescription="Add" type="submit">
                        Add task
                    </Button>
                </Stack>
            </Form>
            {showNotification && (
                <InlineNotification
                    aria-label="task added success"
                    kind="success"
                    onClose={() => setShowNotification('')}
                    onCloseButtonClick={() => setShowNotification('')}
                    statusIconDescription="notification"
                    title={`Task "${showNotification}" successfully added!`}
                />
            )}
        </>
    );
};