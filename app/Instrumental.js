import React, { Component } from 'react';

import Player from './Player';

export const TRACKS = [
    {
        title: 'Hotline Bling',
        artist: 'Drake',
        albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
        audioUrl: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0eckT8KCizu.mp3',
    },
    {
        title: 'Love Yourself',
        artist: 'Justin Bieber',
        albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0Nv6x5Qcaum.mp3',
    },
    {
        title: 'I Dont Care',
        artist: 'Justin Bieber',
        albumArtUrl: 'https://i.ibb.co/QcQqSjp/idontcare.jpg',
        audioUrl: 'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1stmiCnRYgQ.mp3',
    },


];

export default class Intrumental extends Component {
    render() {
        console.log("Navigation", this.props);
        return <Player tracks={TRACKS} navigation={this.props.navigation} />
    }
}
