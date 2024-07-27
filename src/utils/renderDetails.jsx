export const renderDetails = (details) => {
  return (
    <div className="item-details-container">
      <div>
        <p id="item-job">{details.job}</p>
        <p id="item-company">{details.company}</p>
        <p id="item-collaborators">{details.collaborators} colaboradores</p>
      </div>
      <img src={details.logo} alt="logo" id="item-logo" />
      <p id="item-date">{details.date}</p>
    </div>
  );
};
