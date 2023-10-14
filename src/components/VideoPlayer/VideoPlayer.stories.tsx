import { Meta, StoryObj } from'@storybook/react'
import VideoPlayer from './VideoPlayer.tsx'
import Icon from '../Icon/Icon.tsx';


const meta = {
     title: 'Components/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => {
            return (
                <>
                    <div className='w-[912px] h-[513px]'>
                        <Story />
                    </div>
                </>
            );
        },
    ],
    tags: ['autodocs']
} satisfies Meta<typeof VideoPlayer>;


export default meta;


type Story = StoryObj<typeof meta>;


export const FullWidth: Story = {
    args : {
        src : "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blta5464cb78c39385a/63369a3de3c2a2741688cb6b/F2P_Trailer.mp4",
    }
};

export const FullHeight: Story = {
    args : {
        src : "https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blta5464cb78c39385a/63369a3de3c2a2741688cb6b/F2P_Trailer.mp4",
        fullHeight: true
    }
};

export const LightVideo: Story = {
    args : {
        src : "https://youtu.be/GE74zkzunZw",
        children: <div className='w-16 h-16'><Icon src="overwatch/home/play-icon.svg" objectFit="cover" /></div>,
        light: true,
        playing: true
    },
    render : (args, children) => {
        return <VideoPlayer {...args}></VideoPlayer>
    }
}