import { useInView } from "react-intersection-observer";

const AnimatedText = (props: any) => {
  const [ref, inView] = useInView(props.threshold);
  return (
    <h1 ref={ref} className={inView ? `text ${props.type} animate` : `text ${props.type}`}>
      {props.text}
    </h1>
  );
};

export default AnimatedText;
