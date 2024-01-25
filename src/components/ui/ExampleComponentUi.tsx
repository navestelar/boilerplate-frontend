import { ExampleComponentProperties } from '../../interfaces/ExampleComponentProperties'

export default function ExampleComponentUi({
  text,
}: ExampleComponentProperties) {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="mb-2 text-xl font-bold">Example Component</h2>
      <p>{text}</p>
    </div>
  )
}
