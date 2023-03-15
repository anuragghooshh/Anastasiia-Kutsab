import { useInView } from "react-intersection-observer";

const AnimatedProject = (props: any) => {
  const [ref, inView] = useInView(props.threshold);

  return <div className={inView ? `projectImg animate` : `projectImg`} ref={ref}>
    <img src={props.image} alt="Opens in a new tab!" />
  </div>;
};

export default AnimatedProject;
