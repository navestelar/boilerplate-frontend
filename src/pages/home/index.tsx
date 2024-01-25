import ExampleComponent from '../../components/ExampleComponent'

export default function Home() {
  return (
    <div className="flex h-screen flex-col place-content-center place-items-center gap-5">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <ExampleComponent />
    </div>
  )
}
