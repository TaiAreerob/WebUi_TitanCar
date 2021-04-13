import { Row, Col } from 'reactstrap'
import Link from "next/link"
import Button from '../../components/Common/Button/Button'
import { CrossOutText } from '../CrossOutText/CrossOutText'
import './ProductCard.scss'

const size = { size: 6, offset: 6 }
const ProductCard = (props) => {
    const {
        url,
        brand,
        imageUrl,
        productName,
        price,
        priceCrossOut,
        shipping,
        address,
    } = props
    return (
        <Link href={url} prefetch={false}>
            <div
                className="ProductCard"
                style={{
                    backgroundImage: `url("${imageUrl}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '180px',
                }}
            >
                <Row className="ProductCard__Row">
                    {brand && <div className="ProductCard__Brand">{brand}</div>}
                    <Col xs={size} sm={size} md={size}>
                        <div className="ProductCard__Info" >
                            <div className="ProductCard__TopSection">
                                <h5 className="ProductCard__Title">{productName}</h5>
                                <h6 className="ProductCard__SubTitle">price : {price} Baht</h6>
                                {priceCrossOut && <CrossOutText className="ProductCard__CrossOut" text={priceCrossOut} />}
                            </div>
                            <div className="ProductCard__BottomSection">
                                <div className="ProductCard__Detail">
                                    <span className="ProductCard__Detail--left">{shipping}</span>
                                    <span className="ProductCard__Detail--right">{address}</span>
                                </div>
                                <Button className="ProductCard__Button" buttonType="destructive">
                                    Detail
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Link>
    )
}

export { ProductCard }