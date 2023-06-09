import { type ReactNode } from "react";

import "./GroupBox.css";

type Props = {
  label: string;
  children?: ReactNode;
};

export function GroupBox(props: Props) {
  return (
    <div className="group-box">
      <div className="group-box-label">{props.label}</div>
      <div className="group-box-contents">{props.children}</div>
    </div>
  );
}
