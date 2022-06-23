import { useParams } from "react-router-dom"


function Detail(props) {
    let { id } = useParams();

    let param = props.shoes.find(function (x) {
        return x.id == id;
    });

    let num = parseInt(param.id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (num + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{param.title}</h4>
                    <p>{param.content}</p>
                    <p>{param.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div >
    )
}

export default Detail;