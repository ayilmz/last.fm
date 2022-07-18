import React from 'react';
import { ArtistPreview } from '../components/ArtistPreview';

export default {
    title: 'last.fm/ArtistPreview',
    component: ArtistPreview,
};

const Template = (args) => <ArtistPreview {...args} />;

export const Primary = Template.bind({})

Primary.args = {
    name: "Kanye West",
    playCount: "613014703",
    listeners: "2677684"
};