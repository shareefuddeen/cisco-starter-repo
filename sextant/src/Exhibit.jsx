const Exhibit = ({ title, content }) => {
  return (
    <section className="exhibit">
      <h2>{title}</h2>
      <div className="exhibit-content">{content}</div>
    </section>
  );
};

export default Exhibit;
