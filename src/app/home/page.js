'use client';

import { Section, Heading, Grid, Column, SkeletonText } from '@carbon/react';
import { TaskItem } from '@/components/TaskItem/TaskItem';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    setRefresh(false);
    setLoading(false);
  }, [refresh]);

  const sortedTasks = tasks.sort((a, b) => b.id - a.id);

  return (
    <>
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Section level={1} className='centerText'>
            <Heading>
              Your tasks
            </Heading>
          </Section>
        </Column>
      </Grid>
      <Grid className='tasksContainer'>
        <Column sm={4} md={8} lg={16}>
          {loading || !tasks.length || (
            <Grid className='headerRow'>
              <Column sm={2} md={6} lg={12} className='contentStyle'>
                Task
              </Column>
              <Column sm={1} md={1} lg={2} className='contentStyle'>
                Status
              </Column>
              <Column sm={1} md={1} lg={2} />
            </Grid>
          )}
          {loading ? (<SkeletonText />) : (tasks.length ? (
            sortedTasks.map(task => (
              <TaskItem key={task.id} id={task.id} text={task.text} done={task.done} setRefresh={setRefresh} />
            ))) : (
            <Section level={4} className='centerText'>
              <Heading>
                You don&apos;t have any tasks, <Link href={"/addTask"}>add them</Link>!
              </Heading>
            </Section>
          ))
          }
        </Column>
      </Grid>
    </>
  );
}
