interface BadgeProps {
  name: string;
}

export default function Badge({ name }: BadgeProps) {
  return <p className="py-1 px-3 text-sm border border-border">{name}</p>;
}
