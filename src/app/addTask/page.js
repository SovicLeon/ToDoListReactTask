'use client';

import { Section, Heading, Grid, Column } from '@carbon/react';
import { AddTaskForm } from '@/components/AddTaskForm/AddTaskForm';

export default function AddItemPage() {
  return (
    <>
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Section level={1}>
            <Heading className='centerText'>
              Add a task
            </Heading>
          </Section>
        </Column>
      </Grid>
      <Grid>
        <Column sm={0} md={0} lg={4} />
        <Column sm={4} md={8} lg={8}>
          <AddTaskForm />
        </Column>
        <Column sm={0} md={0} lg={4} />
      </Grid>
    </>
  );
}