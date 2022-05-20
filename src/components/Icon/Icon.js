export default function Icon({ name, from }) {
  let classNames = "";
  switch (from) {
    case "SidebarMenus":
      classNames = "menus";
      break;
    case "online":
      classNames = "online";
      break;
    case "offline":
      classNames = "offline";
      break;
    default:
      classNames = "default";
      break;
  }
  return <i class={`icon fa-solid fa-${name} icon-${classNames}`} />;
}
