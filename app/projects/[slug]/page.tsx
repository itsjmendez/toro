export default function Page({ params }: { params: { slug: string } }) {
  return <div className="bg-purple-500 container">My Post: {params.slug}</div>;
}
