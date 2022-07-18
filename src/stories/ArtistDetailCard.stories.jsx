import React from 'react';
import { ArtistDetailCard } from '../components/ArtistDetailCard';

export default {
    title: 'last.fm/ArtistDetailCard',
    component: ArtistDetailCard,
};

const Template = (args) => <ArtistDetailCard {...args} />;

export const Primary = Template.bind({})

Primary.args = {
    name: "Kanye West",
    playCount: "613014703",
    listeners: "2677684"
};