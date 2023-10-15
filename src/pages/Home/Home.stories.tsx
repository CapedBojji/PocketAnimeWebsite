import { Meta, StoryObj } from'@storybook/react'
import Home from './Home.tsx'


const meta = {
     title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        (Story) => {
            return (
                <div className='overflow-hidden'>
                    <Story/>
                </div>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Home>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
    } 
};