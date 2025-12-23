function ContentGrid({ left, right }) {
  return (
    <div className="content-grid">
      <div className="left-side">{left}</div>
      <div className="right-side">{right}</div>
    </div>
  );
}

export default ContentGrid;
