import NextImage from "next/image";

export default function Image(props) {
  return (
    <div className={props.shadow && "shadow-box"}>
      <div className="my-5 rounded-lg">
        <NextImage layout="intrinsic" {...props} />
      </div>
    </div>
  );
};