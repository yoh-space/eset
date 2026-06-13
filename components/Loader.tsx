export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white gap-6">
      <div className="loader-svg">
        <svg width="64" height="48" viewBox="0 0 64 48">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
        </svg>
      </div>
      <div className="loader-typewriter">
        <span>ESSET LETIWLID</span>
      </div>
    </div>
  );
}
