interface BadgeProps {
  name: string;
}

export default function Badge({ name }: BadgeProps) {
  return (
    <p className="badge" title={name}>
      {name}
    </p>
  );
}
