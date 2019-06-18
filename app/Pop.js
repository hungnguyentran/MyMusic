import React, { Component } from 'react';

import Player from './Player';

export const TRACKS = [
  {
    title: 'Never Really Over',
    artist: 'Katy Perry',
    albumArtUrl: 'https://i.ibb.co/Ctjjqht/Katy-Perry-Never-Really-Over.jpg',
    audioUrl: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0A00zR28zn3.mp3',
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0Nv6x5Qcaum.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0eckT8KCizu.mp3',
  },
  {
    title: 'I Dont Care',
    artist: 'Justin Bieber',
    albumArtUrl: 'https://i.ibb.co/QcQqSjp/idontcare.jpg',
    audioUrl: 'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1stmiCnRYgQ.mp3',
  },
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1csJFF4KNJf.mp3",
  },

  
];

export default class Pop extends Component {
  render() {
    console.log("Navigation", this.props);
    return <Player tracks={TRACKS} navigation={this.props.navigation}/>   
  }
}
