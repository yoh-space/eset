interface ImpactStatProps {
  number: string;
  label: string;
}

export default function ImpactStat({ number, label }: ImpactStatProps) {
  return (
    <div className="text-center group">
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 group-hover:text-primary-dark transition-colors">
        {number}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
