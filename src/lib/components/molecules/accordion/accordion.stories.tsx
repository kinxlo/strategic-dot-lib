import React from 'react'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../../components/ui/accordion'

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
}
export default meta

// Define types explicitly for the Template's props
type AccordionProps = React.ComponentPropsWithoutRef<typeof Accordion>

// Adjust the Template function to use the specific AccordionProps
const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Item 1</AccordionTrigger>
      <AccordionContent>Content for the first item.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Accordion Item 2</AccordionTrigger>
      <AccordionContent>Content for the second item.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Accordion Item 3</AccordionTrigger>
      <AccordionContent>Content for the third item.</AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Default = Template.bind({})
Default.args = {
  type: 'single', // 'single' or 'multiple' depending on the accordion behavior you want to showcase
}
