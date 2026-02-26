import { memo } from "react";

interface Props {
  title: string;
}

export const Mytitle = memo(({ title }: Props) => {
  console.log("My title re-render");
  return <h1>{title}</h1>;
});
