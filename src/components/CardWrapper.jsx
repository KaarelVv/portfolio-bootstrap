export default function CardWrapper({ children }) {
  return (
    <div
      className="card page-card p-4 p-md-5 m-5"
      style={{
        maxWidth: "1600px",
        minHeight: "75vh", // or 100vh minus header if needed
        transition: "all 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

