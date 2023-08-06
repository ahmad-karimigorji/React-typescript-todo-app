export type PriorityType = 0 | 1 | 2 | 3;

export type PriorityComponentProps = {
  value: PriorityType;
  active: boolean;
} & React.ComponentProps<"input">;
