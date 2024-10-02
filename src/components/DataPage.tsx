import { useParams } from 'react-router-dom';

const DataPage = () => {
    const { ticker } = useParams();
  return (
    <div>{ticker}</div>
  )
}

export default DataPage