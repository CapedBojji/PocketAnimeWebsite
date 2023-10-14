import { Meta, StoryObj } from'@storybook/react'
import H2 from './H2.tsx'


const meta = {
     title: 'Components/Heading/H2',
    component: H2,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (
                <>
                <Story/>
                </>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof H2>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
        children: "Power range roars"
    } 
};