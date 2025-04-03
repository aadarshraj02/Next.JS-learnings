const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;

  return <h1 className="text-3xl text-blue-700 m-5">User is : {user}</h1>;
};
export default User;
