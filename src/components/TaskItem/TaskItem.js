import { TrashCan } from '@carbon/icons-react';
import { Grid, Column, Button, Modal, Section, Heading, Checkbox } from '@carbon/react';
import React, { useState, useEffect } from 'react';

export const TaskItem = ({ id, text, done, setRefresh }) => {
    const [open, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(done);

    useEffect(() => {
        setDone();
    }, [isChecked]);

    const deleteTask = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const updatedTasks = tasks.filter(task => task.id !== id);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        setOpen(false);
        setRefresh(true);
    };

    const setDone = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const updatedTasks = tasks.filter(task => task.id !== id);

        const newTask = {
            id: id,
            text: text,
            done: isChecked,
        };

        updatedTasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <>
            <Grid className='taskContainer'>
                <Column sm={2} md={6} lg={12} className='contentStyle'>
                    {text}
                </Column>
                <Column sm={1} md={1} lg={2} className='contentStyle'>
                    <Checkbox id={id} checked={isChecked} onChange={(_, { checked }) => setIsChecked(checked)} />
                </Column>
                <Column sm={1} md={1} lg={2} className='removeTaskStyle'>
                    <Button hasIconOnly renderIcon={TrashCan} onClick={() => setOpen(true)} kind='danger' iconDescription="Remove task" />
                </Column>
            </Grid>
            <Modal open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => deleteTask()} danger primaryButtonText="Delete" secondaryButtonText="Cancel">
                <Section level={3}>
                    <Heading className='centerText'>
                        Delete task &quot;{text}&quot;?
                    </Heading>
                </Section>
            </Modal>
        </>
    );
};