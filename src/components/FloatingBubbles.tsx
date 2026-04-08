const bubbles = Array.from({ length: 45 }).map(() => ({
  size: Math.random() * 6 + 4, // 4px–10px
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 8 + 14,
  delay: Math.random() * 10,
}));

const FloatingBubbles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[5]">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble absolute bottom-[-120px] rounded-full border border-sky-300/30"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(147,197,253,0.75), rgba(59,130,246,0.22))",
            boxShadow: "0 0 10px rgba(59,130,246,0.35)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;