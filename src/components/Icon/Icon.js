export default function Icon({ name, placement, sosmed }) {
  return (
    <i
      className={`icon fa-${
        sosmed ? "brands" : "solid"
      } fa-${name} icon-${placement}`}
    />
  );
}
