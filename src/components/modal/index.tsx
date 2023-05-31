interface ModalProps {
  children: JSX.Element;
  isActive: boolean;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <div
      className="modal"
      tabIndex={-1}
      role="dialog"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        display: props.isActive ? "block" : "none",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div
            className="text-end position-absolute end-0"
            style={{ zIndex: 1 }}
          >
            <button
              type="button"
              className="btn pointer"
              onClick={props.onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
