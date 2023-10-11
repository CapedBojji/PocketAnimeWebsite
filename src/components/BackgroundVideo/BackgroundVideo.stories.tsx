import { Meta, StoryObj } from'@storybook/react'
import BackgroundVideo from './BackgroundVideo.tsx'


const meta = {
     title: 'Components/BackgroundVideo',
    component: BackgroundVideo,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (
                <></>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof BackgroundVideo>;


export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
    } 
};