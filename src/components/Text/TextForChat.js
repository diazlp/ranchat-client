export default function TextForChat({ placement, text, from }) {
  return (
    <div className={`text-${placement} text-${placement}-${from}`}>{text}</div>
  );
}
