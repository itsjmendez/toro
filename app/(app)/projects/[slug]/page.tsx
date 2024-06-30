// TODO: create detailed project list page

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="bg-purple-500 container">Projects {params.slug}</div>;
}
