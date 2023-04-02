const ActionsBar = ({ actions }) => {
  return (
    <>
      <div className="actions">
        {actions.map((action, index) => {
          return (
            <button onClick={action.callback} key={index}>
              {action.text}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ActionsBar;
