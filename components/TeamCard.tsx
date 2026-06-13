interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="h-56 bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary/40">
            {name.charAt(0)}
          </span>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gold font-medium mt-1">{role}</p>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
