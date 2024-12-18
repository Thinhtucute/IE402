export default function NavigatePage() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>UIT Map</h1>
        <iframe
          src="/navigate.html"
          style={{ width: "100%", height: "600px", border: "none" }}
          title="Navigate Map"
        />
      </div>
    );
  }