export default function Home() {
  return (
    <div style={{ padding: "40px", color: "white" }}>

      {/* عنوان رئيسي */}
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        الإنارة الحديثة
      </h1>

      <p style={{ marginBottom: "40px", color: "#ccc" }}>
        كل ما تحتاجه من الإضاءة والتأسيس الكهربائي
      </p>

      {/* صور المنتجات */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px"
      }}>

        <img src="/cat-chandelier.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/cat-ledprofile.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/cat-cables.jpg" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="/cat-spotlight.jpg" style={{ width: "100%", borderRadius: "10px" }} />

      </div>

    </div>
  );
}
