const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  console.log(all);

  return (
    <div>
      Project{all}
      All Routes{" "}
      {all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};
export default Project;
