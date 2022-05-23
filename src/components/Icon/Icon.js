export default function Icon({ name, placement, sosmed, action }) {
  if (action) {
    return (
      <i
        className={`icon fa-${
          sosmed ? "brands" : "solid"
        } fa-${name} icon-${placement}`}
        onClick={() => action(true)}
      />
    );
  } else {
    return (
      <i
        className={`icon fa-${
          sosmed ? "brands" : "solid"
        } fa-${name} icon-${placement}`}
      />
    );
  }
}
