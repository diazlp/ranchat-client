export default function Icon({ name, placement }) {
  return <i class={`icon fa-solid fa-${name} icon-${placement}`} />;
}
