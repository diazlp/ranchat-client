export default function Icon({ name, placement, sosmed }) {
  return (
    <i
      class={`icon fa-${
        sosmed ? "brands" : "solid"
      } fa-${name} icon-${placement}`}
    />
  );
}
