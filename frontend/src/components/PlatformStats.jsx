function PlatformStats() {
  const platforms = [
    {
      name: "Internshala",
      jobs: 42,
    },
    {
      name: "LinkedIn",
      jobs: 18,
    },
    {
      name: "Naukri",
      jobs: 35,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "30px",
      }}
    >
      {platforms.map((item) => (
        <div
          key={item.name}
          style={{
            background: "#1e293b",
            color: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "200px",
            textAlign:"center"
          }}
        >
          <h3>{item.name}</h3>

          <h2>{item.jobs} Jobs</h2>
        </div>
      ))}
    </div>
  );
}

export default PlatformStats;