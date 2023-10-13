import { Meta, StoryObj } from'@storybook/react'
import Icon from './Icon.tsx'


const meta = {
     title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (
                <>
                    <div className='w-10 h-10'>
                        <Story/>
                    </div>
                </>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Icon>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
        src: "overwatch/home/play-icon.svg",
        objectFit: "cover"
    } 
};