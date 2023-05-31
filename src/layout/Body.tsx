interface BodyProps {
  children: JSX.Element;
}

export default function Body(props: BodyProps) {
  return <div className="body-top-gap">{props.children}</div>;
}
