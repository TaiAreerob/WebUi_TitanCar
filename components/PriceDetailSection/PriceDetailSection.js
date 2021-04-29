import { Button } from 'reactstrap'
import FieldAndValue from '../Common/FieldAndValue/FieldAndValue'
import './PriceDetailSection.scss'

class PriceDeatilSection extends React.Component {

    constructor(props) {
        super(props)
    }

    renderBtnPlus = () => <Button className="btn btn--plus" onClick={this.props.increasePlayerAmount}><i className="fas fa-plus" /></Button>
    renderBtnMinus = () => <Button className="btn btn--minus" onClick={this.props.decreasePlayerAmount}><i className="fas fa-minus" /></Button>

    renderPlayerAmount = () => {
        return (
            <div className="player-amount">
                <span className="player-amount__field">เพิ่มเพื่อน</span>
                {this.renderBtnMinus()}
                <span className="player-amount__value">{this.props.playerAmount}</span>
                {this.renderBtnPlus()}
            </div>
        )
    }

    priceFormat = (price) => {
        if (price < 0) return
        return `${Math.ceil(price)} บาท`
    }

    render() {
        return (
            <div className="priceDetailSection">
                {this.renderPlayerAmount()}
                <FieldAndValue field="ค่าคอร์ดต่อชั่วโมง" value={this.priceFormat(this.props.courtPricePerHour)} />
                <FieldAndValue field="ค่าคอร์ดต่อคน" value={this.priceFormat(this.props.courtPricePerPerson)} />
                <FieldAndValue className="fee" field="ค่าบริการ" value={this.priceFormat(this.props.fee)} />
                <FieldAndValue className="total-price" field="เงินที่ต้องจ่าย" value={this.priceFormat(this.props.totalPrice)} />
            </div>
        )
    }
}

export default PriceDeatilSection
