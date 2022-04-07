import './date.css';
import moment from 'moment';
const DateDisplay = (props) => {
    const { date } = props;
    console.log();
    return (
        <section className="date-display">
            My date: {moment(date).format('LL')}
        </section>
    );
};

export default DateDisplay;
