import "./ActionsBar.scss";

const ActionsBar = ({ actions }) => {
  return (
    <>
      <div className="actions">
        {actions.map((action, index) => {
          return (
            <button
              className="actions__button"
              onClick={action.callback}
              key={index}
            >
              {action.text}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ActionsBar;
