<script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Bell Meditation',
    description: 'Musical Bells to Calm',
    albumArtUrl: "https://lh3.googleusercontent.com/HH5RPwVyCwJT9hmZxJOoDiIr2GbC6Cp-x_As7dXA6GXtYerdCcs1xSINC9HG3f_zAM9U2IMfuGbnspEA2lgckks47oHMXVxryh1zxA8AHVjsdPw4Kw=w1280",
    audioUrl: "https://www.filehosting.org/file/details/877104/FreeMindfulness5MinuteJustBells.mp3",
  },
  {
    title: 'Mountain Meditation',
    description: 'Guided Visualisation',
    albumArtUrl: "https://lh4.googleusercontent.com/DHD6EoER8HwHMIm-_2f4tJgIfUpKmaWpR_2xbZ6Lk98EWx-7yNloD6TV_KHur6S43Ari7ssPYjjhzwiYfGanQTn62rVlxSr95HLIft3eC1I3pqJq_wlW=w1280",
    audioUrl: "https://www.filehosting.org/file/details/877106/FreeMindfulnessMountainMeditation.mp3",
  },
  {
    title: 'Breathing Meditation',
    description: 'Focusing on Your Breath',
    albumArtUrl: "https://lh4.googleusercontent.com/8zZl8y0Inm2PMsuFGEZ45I-MB_4UECjsA6SmFEsvxMzU8egU2FZi7OhdHgVgCYbe2jFQ17v0nnKbPxJmLmapZguKn3t70ebo8W44OLD951vvt4wOInU=w1280",
    audioUrl: "https://www.filehosting.org/file/details/877107/MARC5MinuteBreathing.mp3",
  },
  {
    title: 'Mindfulness Meditation',
    description: 'How to be Mindful of the Present Moment',
    albumArtUrl: "https://lh4.googleusercontent.com/jjFz9SjI2MrY4WkgvmP2Jj6RoWg5iigruyQNiYB4JfPLsGyh8aripW6d0jvocJaNZI-MhmW0NX-pQxCcZGLsfr9vT-DZmhIHE9XBk-apmU-_WNQI4g=w1280",
    audioUrl: "https://www.filehosting.org/file/details/877108/PadraigBriefMindfulnessPractice.mp3"
  }
];

export default class MeditationApp extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


