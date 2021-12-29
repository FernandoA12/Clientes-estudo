export default function Home () {
  return(
    <div className="border border-red-500 h-screen flex flex-col justify-center items-center">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF/CNPJ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Felipe</td>
            <td>1001100101-0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fernando</td>
            <td>2002200202-0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}