import moment from 'moment'
import FieldAndValue from '../Common/FieldAndValue/FieldAndValue'
import './RoomDetailSection.scss'

const RoomDetailSection = (props) => {
    const mapProps = {
        ...props,
        date: moment(props.date).calendar(),
        closeTime: moment(props.closeTime).format('LT'),
        startTime: moment(props.startTime).format('LT'),
        endTime: moment(props.endTime).format('LT'),
    }
    return (
        <div className="roomDetialSectioin">
            <FieldAndValue className="date" field={"วันที่ตี"} value={mapProps.date} />
            <FieldAndValue field={"ชื่อคอร์ด"}>
                <a target="blank" href={mapProps.mapLocation}>{mapProps.courtName}</a>
            </FieldAndValue>
            <FieldAndValue className="time" field={"เวลา"} value={`${mapProps.startTime} - ${mapProps.endTime}`} />
            <FieldAndValue className="close-time" field={"เวลาปิดห้อง"} value={mapProps.closeTime} />
            <FieldAndValue field={"ประเภท"} value={mapProps.type} />
            <FieldAndValue field={"ลูกแบด"} value={mapProps.cost} />
            <FieldAndValue field={"ระดับ"} value={mapProps.level} />
            <FieldAndValue className="minimum" field={"จำนวนผู้เล่นต่ำสุด"} value={`${mapProps.minPlayer} คน`} />
            <FieldAndValue className="maximum" field={"จำนวนผู้เล่นสูงสุด"} value={`${mapProps.maxPlayer} คน`} />
            {/* <FieldAndValue className="contact-number" field={"เบอร์โทรผู้สร้างห้อง"} value={mapProps.roomContact} /> */}
        </div>
    )
}

export default RoomDetailSection
