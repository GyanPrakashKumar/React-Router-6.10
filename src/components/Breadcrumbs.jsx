import { Link, useLocation } from "react-router-dom"


const Breadcrumbs = () => {
  const location = useLocation();
  let currLink = '';
  const path = location.pathname.split('/')
    .filter(link => link !== '')
    .map(link => {
      currLink += `/${link}`;

      return (
        <div className="crumbs" key={link}>
            <Link to={currLink}>{link}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {path}
    </div>
  )
}

export default Breadcrumbs
