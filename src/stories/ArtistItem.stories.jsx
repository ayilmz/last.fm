import React from 'react';
import { ArtistItem } from './ArtistItem';

export default {
    title: 'last.fm/ArtistItem',
    component: ArtistItem,
};

const Template = (args) => <ArtistItem {...args} />;

export const Primary = Template.bind({})

Primary.args = {
    name: "Kanye West",
    playCount: "613014703",
    listeners: "2677684"
};