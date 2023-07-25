export default function Question({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>Question: {params.slug}</div>
    </>
  )
}
