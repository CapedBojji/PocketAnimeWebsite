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
                <div className='max-h-[1050px] h-[90vh] relative min-h-[800px] w-[1636.77px]'>
                        <Story />
                    </div>
            );
        },
    ],
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof BackgroundVideo>;


export default meta;


type Story = StoryObj<typeof meta>;


export const OverwatchHomePage: Story = {
    args : {
        src: "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blta5464cb78c39385a/63369a3de3c2a2741688cb6b/F2P_Trailer.mp4"
    } 
};