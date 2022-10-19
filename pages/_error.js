import Layaut from "../components/Layaut"

const _error =({statusCode}) => {
  return (
    <Layaut>
      {
        statusCode ? (
          <h3 className="text-center">Error {statusCode}</h3>
        ) : (
          null
        )
      }
      <p className="text-center"> Could not load your page</p>
    </Layaut>
  )
}

export default _error
