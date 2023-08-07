import '../style/animatedLink.scss';

interface Props{
  link? : string,
  text : string,
  title? : string
}

function AnimatedLink(props: Props): JSX.Element {
  return (
    <a href={props.link} className='animatedLink' target='_blank' rel='noreferrer' title={props.title}>
        {props.text}<span>&#x2197;</span>
    </a>
  );
}

export default AnimatedLink
