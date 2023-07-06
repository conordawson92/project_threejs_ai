import { proxy } from 'valtio';

const state = proxy ({  
   intro: true,
   color: '#D3C2CE',
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './astronaut.png',
   fullDecal: './space.jpg',
});

export default state;
