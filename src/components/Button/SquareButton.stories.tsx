import { Meta, StoryObj } from'@storybook/react'
import SquareButton from './SquareButton.tsx'


const meta = {
     title: 'Components/Buttons/SquareButton',
    component: SquareButton,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (
                <div className='w-[196px] h-[74px] bg-orange-500'>
                    <Story />
                </div>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SquareButton>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
        children: <>
            <p>Play Now</p>
        </>
    } 
};