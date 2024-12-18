import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const navigateTo = (page) => {
    router.push(`/${page.toLowerCase()}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home Page</h1>
      <div style={styles.tabContainer}>
        <button
          style={styles.tab}
          onClick={() => navigateTo("User")}
        >
          User
        </button>
        <button
          style={styles.tab}
          onClick={() => navigateTo("Navigate")}
        >
          Navigate
        </button>
        <button
          style={styles.tab}
          onClick={() => navigateTo("Class")}
        >
          Class
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "red",
    cursor: "pointer",
    fontSize: "16px",
  },
};
