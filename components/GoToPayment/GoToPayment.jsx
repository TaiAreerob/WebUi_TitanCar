import Link from 'next/link'
import './GoToPayment.scss'

const GoToPayment = (props) => {
    return (
        <div className="GoToPayment">
            <div>
                คุณมีเงินไม่เพียงพอ
            </div>
            <div>
                You have not enough money.
            </div>
            <div>
                Click
                <Link href="/payment" prefetch>
                    <a href="" className="GoToPayment__link">here</a> 
                </Link>
                go to payment
            </div>
        </div>
    )
}

GoToPayment.displayName = 'GoToPayment'
export default GoToPayment