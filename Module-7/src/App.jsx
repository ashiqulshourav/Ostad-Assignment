import Form from "./components/Form"

export default function App(){
  return (
    <>
      <div className="to-do-list py-7">
        <div className="to-do-list-inner w-[800px] m-auto">
          <Form />
        </div>
      </div>
    </>
  )
}