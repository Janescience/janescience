import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect() { 
  return ( 
    <div> 
      <Typewriter
  options={{
    strings: ['Janesce', 'Janescience'],
    autoStart: true,
    loop: true,
  }}
/>
    </div> 
  ); 
}