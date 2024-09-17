
export function Logo() {
  return (
    <div className="logo">
      <div className="logo__image-container">
        <img
          src="logo.svg"
          alt="logo-image"
          className="logo__image"
          loading="lazy"
        />
      </div>
      <div className="logo__title">SAREENA</div>
    </div>
  );
}