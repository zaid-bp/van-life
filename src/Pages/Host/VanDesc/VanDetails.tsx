import { useOutletContext } from "react-router-dom";


const VanDetails=() => {
    const vanDetail = useOutletContext();
    const {name, type, description} = vanDetail
    // console.log(vanDetail.id);
    
  return (
    <section className="flex flex-col space-y-3">
    <div className="flex">
    <h6 className="font-bold">Name: </h6>
    <span>{name}</span>
    </div>
    <div className="flex">
    <h6 className="font-bold">Category: </h6>
    <span>{type}</span>
    </div>
    <div className="flex">
    <h6 className="contents font-bold">Description: </h6>
    <>{description}</>
    </div>
    <div className="flex">
    <h6 className="font-bold">Visiblity: </h6>
    <span>Public</span>
    </div>

</section>
  )
}

export default VanDetails