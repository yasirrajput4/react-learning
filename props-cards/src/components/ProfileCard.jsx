function ProfileCard({ name, role, avatar, isOnline }) {
  return (
    <div className="w-64 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center transition-transform transform hover:scale-105">
      {/* Profile Image */}
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
      />

      {/* Name & Role */}
      <h3 className="font-bold text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{role}</p>

      {/* Online Status */}
      <span
        className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${
          isOnline ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
}

export default ProfileCard;
