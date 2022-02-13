import styles from "../styles/components/OnTheDay.module.css";

export default function OnTheDay() {
  return (
    <div className={styles.detailsContainer}>
      <h6>03.09.2022</h6>
      <h2>On the day</h2>
      <dl className={styles.detailsList}>
        <dt>Arriving at the Bastide de Marie</dt>
        <dd>
          As you arrive at Bastide de Marie, off the D3, you will drive down a
          short track to an automated gate which will open for you. There is
          parking as you enter on the righthand side.
        </dd>

        <dt>Order of the Day</dt>
        <dd>
          Please arrive by four o’clock at the latest as Our blessing will take
          place in the ground of the Bastide on Saturday 3rd September 2022 at
          hal past four in the afternoon.
          <br />
          <br />
          This will be followed by a drinks reception in the garden, speeches
          and then followed by dinner. The party will finish at around 1am.
        </dd>

        <dt>Dress Code</dt>
        <dd>
          Black Tie or Smart Summer Suits.
          <br />
          <br />
          Chris will be wearing his back tie but we appreciate that some of you
          might be more comfortable in a Summer suit. Please be warned that
          although the weather is often very warm in the day at as the sun goes
          down the temperature most definitely drops. We are planning (weather
          obviously permitting) for all of our wedding to take place outside so
          please bring a warm layer.
        </dd>

        <dt>Dietary Requirements</dt>
        <dd>
          Please let us know of any allergies or food intolerances and we will
          of course cater for these.
        </dd>

        <dt>Taxi’s</dt>
        <dd>
          We would highly recommend booking a taxi’s in advance. A few
          recommendations Taxi KAB MAUBEC Conventionné CPA- +33 6 15 78 18 39
        </dd>

        <dt>Contact Details</dt>
        <dd>
          Should you have any issues on the day, please feel free to contact one
          of the best men, James Nott or Phil Anscombe.
        </dd>
      </dl>
    </div>
  );
}
