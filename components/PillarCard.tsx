import {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
};

interface PillarCardProps {
  icon: string;
  title: string;
  summary: string;
}

export default function PillarCard({ icon, title, summary }: PillarCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {Icon && <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
    </div>
  );
}
