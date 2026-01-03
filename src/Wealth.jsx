const WealthPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="https://wealth-pathfinder-project.lovable.app"
        title="Wealth Pathfinder"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default WealthPage;
