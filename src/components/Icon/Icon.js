export default function Icon({ name, placement, sosmed, action }) {
  if (action) {
    if (placement === "authen-true image") {
      return (
        <>
          <label for="upload-photo">
            <i
              className={`icon fa-${
                sosmed ? "brands" : "solid"
              } fa-${name} icon-${placement}`}
            />
          </label>
          <input
            type="file"
            id="upload-photo"
            value={(e) => (test = e)}
            onChange={(e) => action(e)}
          />
        </>
      );
    } else if (placement === "send-message clickable") {
      return (
        <i
          className={`icon fa-${
            sosmed ? "brands" : "solid"
          } fa-${name} icon-${placement}`}
          onClick={() => action()}
        />
      );
    } else if (placement === "authen-true location") {
      return (
        <i
          className={`icon fa-${
            sosmed ? "brands" : "solid"
          } fa-${name} icon-${placement}`}
          onClick={() => action()}
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <i
          className={`icon fa-${
            sosmed ? "brands" : "solid"
          } fa-${name} icon-${placement}`}
          onClick={() => action(true)}
        />
      );
    }
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
