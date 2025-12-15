import { FaFilm } from "react-icons/fa";

export default function EmptyState({ message, actionText, onAction }) {
  return (
    <div className="empty-state">
      <FaFilm className="empty-icon" />
      <p>{message}</p>

      {actionText && onAction && (
        <button className="btn-modern" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
}
