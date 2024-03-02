import { classJoin } from "@repo/utils/classJoin";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <h2 className={classJoin(["font-medium", className])}>{children}</h2>;
}
