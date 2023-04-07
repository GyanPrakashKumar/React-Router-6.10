import { useLocation } from "react-router-dom"


const Breadcrumbs = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <p>{location.pathname}</p>
    </div>
  )
}

export default Breadcrumbs
