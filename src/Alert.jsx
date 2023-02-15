const styles = {
    color: {
      primary: "bg-sky-300 hover:bg-blue-600",
      delete: "bg-red-500 hover:bg-red-600",
      gray: "bg-gray-500 hover:bg-gray-600",
    },
    size: {
      small: "text-sm px-4 py-2",
      large: "text-lg px-6 py-3",
    },
  };
  
  export default function Alert(props) {
    const { title, color, size, icon, onDismiss } = props;
  
    const colorClass = styles.color[color];
    const sizeClass = styles.size[size];
  
    return (
      <div
        onClick={onDismiss}
        className={`rounded-lg ${colorClass} ${sizeClass}`}
      >
        {title} {icon}
      </div>
    );
  }