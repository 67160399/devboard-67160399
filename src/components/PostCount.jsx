function PostCount({ count }) {
  return (
    <p style={{ color: "#718096", fontSize: "0.9rem", margin: "0 0 1rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;
